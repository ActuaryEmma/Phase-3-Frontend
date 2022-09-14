import React  from 'react';
import AddComment from './AddComment';
import "./App.css";


function Poem({poemtitle, poembody, poemid, commentData, setCommentData, comments, userids, userid, poem, setPoem ,userData, setUserData}){

    return(
        <div className="d-flex justify-content-evenly" style={{backgroundColor: "#cd853f"}}>
            <div className="cardcontainer" >
           <div className="card-body">
           <h3 className="card-title">{poemtitle}</h3>
           
           <div >

           <p className="poem">{poembody}</p> <hr/>
           <p>{comments}</p>
          
          


           <AddComment poemid={poemid} poem={poem} setPoem={setPoem} commentData={commentData} setCommentData={setCommentData} userid={userid}/> <br/>
           
           </div><hr/>
            
            </div>
        
        </div>
        </div>
        

    )
}
export default Poem;