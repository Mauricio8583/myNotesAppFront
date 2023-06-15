import { Link, useParams } from "react-router-dom"
import { NoteHeader, NoteHeaderTitle, NotePageContainer, TextAreaContainer, TextField, Title } from "./Styles"
import { useEffect, useState } from "react";
import { ReactComponent as ArrowLeft } from "../../assets/left-arrow.svg";

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
        <NoteHeader>
          <NoteHeaderTitle><Link to='/'><ArrowLeft /></Link></NoteHeaderTitle>          
        </NoteHeader>
        <TextAreaContainer defaultValue={note?.body} ></TextAreaContainer>
    </NotePageContainer>
  )
}

export default NotePage