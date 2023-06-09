import { useEffect, useState } from "react"
import { ListNotes, NoteBody, NoteListContainer } from "./Styles"
import ListItem from "../../components/ListItem/ListItem"

const NotesListPage = () => {

   let [notes, setNotes] = useState([])

   useEffect(() => {
      getNotes()
    
   }, [])

   let getNotes = async () => {
      let response = await fetch('http://127.0.0.1:8000/api/notes/');
      let data = await response.json();      
      setNotes(data)
   }

  return (
    <NoteListContainer>
        <ListNotes>
         {notes.map((note, index) => (
            <ListItem key={index} note={note} />
         ))}
        </ListNotes>
    </NoteListContainer>
  )
}

export default NotesListPage