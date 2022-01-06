import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note"
import notes from "../notes"
import CreateArea from "./CreateArea"

function App(){
    return (<div>
                <Header/>
                <CreateArea/>
                {notes.map(note =>(                  
                <Note   
                    key={note.key}                 
                    title={note.title}
                    content={note.content}
                />
                ))}
                <Footer/>
                

            </div>)
}

export default App;