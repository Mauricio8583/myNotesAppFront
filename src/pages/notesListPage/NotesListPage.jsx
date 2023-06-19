import { useEffect, useState } from "react"
import { ListNotes, NoteBody, NoteListContainer, NoteParagraph, NotesHeader, SubTitle } from "./Styles"
import ListItem from "../../components/ListItem/ListItem"
import AddButton from "../../components/addButton/AddButton"

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
      <NotesHeader>
         <SubTitle>&#9782; Tarefas</SubTitle>
         <NoteParagraph>{notes.length}</NoteParagraph>
      </NotesHeader>
        <ListNotes>
         {notes.map((note, index) => (
            <ListItem key={index} note={note} />
         ))}
        </ListNotes>
        <AddButton />
    </NoteListContainer>
  )
}

export default NotesListPage