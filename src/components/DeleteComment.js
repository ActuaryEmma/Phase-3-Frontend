import React from 'react';

function DeleteComment({id, poem, commentData, setCommentData, onDelete}){
    
    function handleDelete(){
        
        fetch(`http://localhost:9292/poem/comments/${id}`, {
            method: 'DELETE'
        
        })
        .then((res) => res.json())
        .then(() => onDelete(poem)

            // const newData = commentData.filter((data) => data.id !== id)
            // setCommentData(newData)
            // console.log(newData)
        )
    }
    return(
        <div>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}
export default DeleteComment;