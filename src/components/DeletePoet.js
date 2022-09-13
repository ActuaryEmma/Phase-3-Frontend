import React from "react";


function DeletePoet({ poet, setPoet, id}) {
  function handleDelete() {
    fetch(`http://localhost:9292/poemauthor/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        console.log(poet);

        let editPoet = poet.filter((item) => item.id !== id);
        setPoet(editPoet);
        console.log(id);
        console.log(editPoet);
      });
  }

  return (
    <div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
export default DeletePoet;
