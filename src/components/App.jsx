import React, {useState} from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note"
import notes from "../notes"
import CreateArea from "./CreateArea"

function App(){
    const [notesList,setNotes]=useState([]);
    console.log(notesList);
    function addNote(noteNew){
        
        // console.log(note);
        setNotes(prevNotes=> {
            return (
                [...notesList, noteNew]
            )
            
        })
        // console.log(notesList);

    }
    return (<div>
                <Header/>
                <CreateArea onAdd={addNote} />

                {notes.map(note =>(                 
                <Note   
                    key={note.key}                 
                    title={note.title}
                    content={note.content}
                />
                ))}
                {notesList.map(note=>(
                    <Note   
                        key={note.key}                 
                        title={note.title}
                        content={note.content}
                        onDelete={deleteNote}
                     />
                
                ))}
                <Footer/>
                

            </div>)
}

export default App;