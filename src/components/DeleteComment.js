import React from 'react';

function DeleteComment({id, poem, setCommentData, poem_id}){

    function handleDeleteClick(){
        
        fetch(`http://localhost:9292/poem/comments/${id}`, {
            method: 'DELETE'
        
        })
        .then((res) => res.json())
        .then(() => {
            console.log(poem)
        
            let findPoem = poem.find((poemitem) => poemitem.id === poem_id)
            console.log(findPoem)
            console.log(findPoem.comments)

            let updateComments = findPoem.comments.filter(
                (item) => item.id !== id
              );
                console.log(updateComments)

             findPoem.comments = updateComments 
             console.log(findPoem.comments)
             console.log(poem)

            setCommentData(updateComments);
          
            
            
        })

     
    }
    return(
        <div>
            <button onClick={handleDeleteClick}>Delete</button>
        </div>
    )
}
export default DeleteComment;