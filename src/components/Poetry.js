import React, { useState, useEffect } from "react";
import Poem from "./Poem";
import DeleteComment from "./DeleteComment";

function Poetry({ poem, setPoem, commentData, setCommentData }) {
  const [searchItem, setSearchItem] = useState("");

  // fetch users
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9292/user")
      .then((response) => response.json())
      .then((data) => setUserData(data));
  }, []);
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
  }, []);

  return (
    <div>
      <div className="mb-3 col-4 mx-auto text-center">
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
                id={itemPoem.id}
                poemtitle={itemPoem.title}
                poembody={itemPoem.description}
                comments={itemPoem.comments.map((item) => {
                  return (
                    <div>
                      <p>By: {item.user.name}</p>
                      <p>Comment: {item.comment}</p>

                      {/* <EditComment 
                      key={item.id}
                      id={item.id}
                      user={item.user.name}
                      comment={item.comment}
                      commentData={commentData}
                      setCommentData={setCommentData}
                      /> */}
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
              />
            );
          })}
      </div>
    </div>
  );
}
export default Poetry;
