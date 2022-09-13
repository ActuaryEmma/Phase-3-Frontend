import React  from 'react';
import AddComment from './AddComment';
import "./App.css";
// import Comment from './Comment';
// import User from './User';

function Poem({poemtitle, poembody, poemid, commentData, setCommentData, comments, userids, userid, poem, setPoem ,userData, setUserData}){

    // const filteredComments = commentData.filter((itemComment) => itemComment.poem_id === poemid)
    // const filteredUser = userData.filter((itemUser) => itemUser.user_id === userids)
    // console.log(userids)
    // console.log(filteredUser)


    
   
    // const userIds = filteredComments.map((item) => item.user_id)
    // const filteredUser = userData.filter((itemUser) => {
    //     userIds.filter((userId) => userId === itemUser.id)
    // })
    // console.log(filteredUser)



    // console.log(userIds)
    // console.log(filteredComments)
    // const secondFilteredUsers = userIds.map((userId) => userData.id === userId)
    // console.log(secondFilteredUsers)
    // console.log(filteredUser)
    // console.log(userData)

    // const userDisplay = filteredUser.map((item) => {
    //     return(
    //         <User
    //         key={item.id}
    //         userName={item.name}
    //         />
    //     )
    // })
   
    // const commentsDisplay = filteredComments.map((item) => {
    //     return (
    //         <Comment
    //         key={item.id}
    //         comment={item.comment}
    //         // name={item.user.name}
    //         />
    //     )
    // })


    return(
        <div className="d-flex justify-content-evenly" style={{backgroundColor: "#cd853f"}}>
            <div className="cardcontainer" >
           <div className="card-body">
           <h3 className="card-title">{poemtitle}</h3>
           
           <div >

           <p className="poem">{poembody}</p> <hr/>
           <p>{comments}</p>
           {/* {commentsDisplay} */}
           {/* {userDisplay} */}
          


           <AddComment poemid={poemid} poem={poem} setPoem={setPoem} commentData={commentData} setCommentData={setCommentData} userid={userid}/> <br/>
           
           </div><hr/>
            
            </div>
        
        </div>
        </div>
        

    )
}
export default Poem;