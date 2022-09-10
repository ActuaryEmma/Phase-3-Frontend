import React  from 'react';
import AddComment from './AddComment';
import "./App.css";

function Poem({poemtitle, poembody, poemid, commentData, setCommentData, comments, userid}){


    return(
        <div className="d-flex justify-content-evenly" style={{backgroundColor: "#cd853f"}}>
            <div className="" style={{width: 60 + "rem", backgroundColor: "#cd853f", color: "black"}}>
           <div className="card-body">
           <h3 className="card-title">{poemtitle}</h3>
           
           <div >
           <p className="poem">{poembody}</p> <hr/>
           <p >{comments}</p>
           <AddComment poemid={poemid} commentData={commentData} setCommentData={setCommentData} userid={userid}/> 
           
           </div>
            
            </div><hr/>
        
        </div>
        </div>
        

    )
}
export default Poem;