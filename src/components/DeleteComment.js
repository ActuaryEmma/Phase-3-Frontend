import React from 'react';

function DeleteComment({id, poem, commentData, setCommentData, onDelete, setPoem, poem_id}){

    // function handleDelete(deleteComment) {
    //     console.log(poem_id)
    //     const updatePoem = poem.find(poem_id).comments.filter(
    //       (item) => item.id !== deleteComment.id
    //     );
    //     setPoem(updatePoem);
    //   }
    
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
            // window.location.reload()
            
            
        })

        // .then(() => {
        //     console.log(poem)
        //     console.log(commentData)
        //     console.log(id)
        //     const newData = poem.filter((data) => data.id !== id)
        //     setPoem(newData)
        //     console.log(newData)
        //     console.log(poem)
            
        
        // })
    }
    return(
        <div>
            <button onClick={handleDeleteClick}>Delete</button>
        </div>
    )
}
export default DeleteComment;