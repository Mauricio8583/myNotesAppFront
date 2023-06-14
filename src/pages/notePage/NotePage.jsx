import { useParams } from "react-router-dom"
import { NotePageContainer, TextField, Title } from "./Styles"
import { useEffect, useState } from "react";

const NotePage = () => {

   let { noteId } = useParams();
   let [note, setNote] = useState(null);

   useEffect(() => {
     getNote()

   }, [noteId])

   let getNote = async () => {
      let response = await fetch(`http://127.0.0.1:8000/api/notes/${noteId}`);
      let data = await response.json();
      setNote(data)
   }

  return (
    <NotePageContainer>
        <TextField>{note?.body}</TextField>
    </NotePageContainer>
  )
}

export default NotePage