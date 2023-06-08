import { useEffect, useState } from "react"
import { NoteListContainer } from "./Styles"

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
        Notes
    </NoteListContainer>
  )
}

export default NotesListPage