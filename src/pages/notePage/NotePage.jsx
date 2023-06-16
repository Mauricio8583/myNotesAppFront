import { useNavigate, useParams } from "react-router-dom"
import { NoteDeleteButton, NoteHeader, NoteHeaderTitle, NotePageContainer, TextAreaContainer, TextField, Title } from "./Styles"
import { useEffect, useState } from "react";
import { ReactComponent as ArrowLeft } from "../../assets/left-arrow.svg";

const NotePage = () => {

   let { noteId } = useParams();
   let [note, setNote] = useState(null);
   let navigate = useNavigate();

   useEffect(() => {
     getNote()

   }, [noteId])

   let getNote = async () => {
      let response = await fetch(`http://127.0.0.1:8000/api/notes/${noteId}`);
      let data = await response.json();
      setNote(data)
   }

   let updateNote = async () => {
      await fetch(`http://127.0.0.1:8000/api/notes/${noteId}/update`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
      })
   }

   let deleteNote = async () => {
     await fetch(`http://127.0.0.1:8000/api/notes/${noteId}/delete`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
     })
     navigate('/')
   }

   let handleSubmit = () => {
    updateNote()
    navigate('/')
   }

  return (
    <NotePageContainer>
        <NoteHeader>
          <NoteHeaderTitle>
            <ArrowLeft onClick={handleSubmit} style={{cursor: 'pointer'}} />
            
          </NoteHeaderTitle>
          <NoteDeleteButton onClick={deleteNote}>Delete</NoteDeleteButton>          
        </NoteHeader>
        <TextAreaContainer defaultValue={note?.body} onChange={(e) => {setNote({...note, 'body': e.target.value})}} ></TextAreaContainer>
    </NotePageContainer>
  )
}

export default NotePage