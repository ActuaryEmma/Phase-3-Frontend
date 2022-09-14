import React, { useState, useEffect } from "react";
import Poem from "./Poem";
import DeleteComment from "./DeleteComment";
import EditComment from "./EditComment";
import useQuery from "./UseQuery";


function Poetry({ poem, setPoem, commentData, setCommentData }) {
  const [searchItem, setSearchItem] = useState("");

  // fetch users
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9292/user")
      .then((response) => response.json())
      .then((data) => setUserData(data));
  }, []);

  // const{data: userData, setData: setUserData} = useQuery("http://localhost:9292/user")
  const userids = userData.map((item) => item.id);
  let arrlength = userids.length;
  let random = Math.floor(Math.random() * arrlength);
  let userid = userids[random];
  console.log(userid);

  function searchText(event) {
    console.log(event.target.value);
    setSearchItem(event.target.value);
  }

  
  useEffect(() => {
    fetch("http://localhost:9292/poem")
      .then((response) => response.json())
      .then((data) => setPoem(data));
  }, [commentData]);

  

  useEffect(() => {
    fetch("http://localhost:9292/comments")
    .then((response) => response.json())
    .then((userComments) => setCommentData(userComments))
  }, []);


  return (
    <div style={{ backgroundColor: "black" }}>
      <div
        className="mb-3 col-4 mx-auto text-center"
        style={{ color: "white" }}
      >
        <label className="form-lable h4">Search</label>
        <input
          type="text"
          className="form-control"
          value={searchItem}
          onChange={searchText}
        />
      </div>
      <div>
        {poem
          .filter((item) => {
            if (searchItem === "") {
              return item;
            } else if (
              item.title.toLowerCase().includes(searchItem.toLowerCase())
            ) {
              return item;
            }
          })

          .map((itemPoem) => {
            return (
              <Poem
                key={itemPoem.id}
                poemtitle={itemPoem.title}
                poembody={itemPoem.description.split(",").map((line, i) => (
                  <div key={i}> {line}</div>
                ))}
                comments={itemPoem.comments.map((item) => {
                  return (
                    <div>
                      <p>By: {item.user.name}</p>
                      <p>Comment: {item.comment}</p>
                      
                        <EditComment 
                        key={item.id}
                        id={item.id}
                        user={item.user.name}
                        comment={item.comment}
                        commentData={commentData}
                        setCommentData={setCommentData}
            
                        />
                    
                      
                      <DeleteComment
                        key={item.id}
                        id={item.id}
                        user={item.user.name}
                        comment={item.comment}
                        commentData={commentData}
                        setCommentData={setCommentData}
        
                        poem_id={itemPoem.id}
                        poem={poem}
                        setPoem={setPoem}
                      />

                      <hr />
                    </div>
                  );
                })}
                poemid={itemPoem.id}
                commentData={commentData}
                setCommentData={setCommentData}
                userid={userid}
                poem={poem}
                setPoem={setPoem}
                userData={userData}
                setUserData={setUserData}
              />
            );
          })}
      </div>
    </div>
  );
}
export default Poetry;
