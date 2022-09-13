import React, { useState } from "react";

function PoetEdit({ id, poet, setPoet, poempublication }) {
  const [publicationBody, setPublicationBody] = useState(poempublication);
  const [isHide, setIsHide] = useState(true);

 

 

  function handleUpdateComment(updatedPublication) {
    const updateComments = poet.map((item) =>
      item.id === updatedPublication.id ? updatedPublication : item
      
    );

    console.log(updateComments)
    setPoet(updateComments);
  }

  function handlehide() {
    setIsHide((isHide) => !isHide);
  }

 

  function handleChange(event) {
    let updatedPoet = event.target.value;
    console.log(updatedPoet);
    setPublicationBody(updatedPoet);
  }

  function handleSubmit(e) {
    e.preventDefault();

  

    fetch(`http://localhost:9292/poemauthor/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        publication: publicationBody,
      }),
    })
      .then((response) => response.json())
      .then((data) => handleUpdateComment(data));


      setIsHide((isHide) => !isHide);
    
      
      
      
      
  }

  return (
    <div>
      <div>
        {isHide ? null : 
        <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="publication"
            value={publicationBody}
            onChange={handleChange}
            contentEditable={true}
          />
        </div>
        <div>
          <input type="submit" value="Save" />
        </div>
      </form>}
        
      </div>
      <button onClick={handlehide}>Edit</button>
    </div>
  );
}
export default PoetEdit;
