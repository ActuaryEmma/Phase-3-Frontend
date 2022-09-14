import React, {useState} from 'react';

function AddComment({poemid, userid, poem, setPoem, commentData, setCommentData}){


    
    const[newObj, setNewObj] = useState({
       comment: "",
       user_id: userid,
       poem_id: poemid
      
    })

    function handleChange(event) {
        setNewObj({ ...newObj, [event.target.name]: event.target.value });
      }
    function handleSubmit(e){
        e.preventDefault();
        fetch("http://localhost:9292/comments", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newObj)
    })
    .then((response) => response.json())
    .then((newData) => setCommentData([...commentData, newData]) 
    )
    setNewObj({
        comment: ""
    })
   
    }
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" name="comment" value={newObj.name}/>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}
export default AddComment;