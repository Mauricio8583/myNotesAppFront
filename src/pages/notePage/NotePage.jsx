import { useParams } from "react-router-dom"
import { NotePageContainer, Title } from "./Styles"

const NotePage = () => {

   let { noteId } = useParams();

  return (
    <NotePageContainer>
        <Title>Note {noteId}</Title>
    </NotePageContainer>
  )
}

export default NotePage