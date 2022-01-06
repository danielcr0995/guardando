import React , {useState} from "react";

function CreateArea(props) {
  const [note, setContent]= useState({
    
    title:"",
    content:""
  })
  

  
  function change(event){
    const {name,value}=event.target;
    // console.log(name);
    setContent(prevValue => {
      // console.log(prevValue);
      return { 
        ...prevValue,
        [name]: value
      };
    });
  }
  // console.log(note);

  function submitNote(event){
    props.onAdd(note)
    

    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input onChange={change} value={note.title} name="title" placeholder="Title" />
        <textarea onChange={change} value={note.content} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
