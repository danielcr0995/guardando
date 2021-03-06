import React, {useState} from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note"
import notes from "../notes"
import CreateArea from "./CreateArea"

function App(){
    // console.log(notesList)
    const [notesList,setNotes]=useState(notes);
    // console.log(notesList);\

    function addNote(noteNew){        
        // console.log(note);
        setNotes(prevNotes=> {
            return (
                [...prevNotes, noteNew]
            )
            
        })
        // console.log(notesList);

    }

    function deleteNote(id){
        setNotes(prevNotes =>{
            return (prevNotes.filter((note,index)=>{
                return index!==id
            }))
        })
    }
    
    return (<div>
                <Header/>
                <CreateArea 
                    onAdd = {addNote}
                />

                {/* {notes.map(note =>(                 
                <Note   
                    key={note.key}                 
                    title={note.title}
                    content={note.content}
                /> */}
                {/* ))} */}
                {notesList.map((note,index)=>(
                    <Note   
                        key={index}   
                        id={index}              
                        title={note.title}
                        content={note.content}
                        onDelete={deleteNote}
                     />
                
                ))}
                <Footer/>
                

            </div>)
}

export default App;