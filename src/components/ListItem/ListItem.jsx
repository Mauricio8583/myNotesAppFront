import { Link } from "react-router-dom"
import { ListItemContainer, Title } from "./Styles"

const ListItem = ({note}) => {
  return (
    <ListItemContainer>
        <Link to={`/note/${note.id}`}>
        <Title>{note.body}</Title>
        </Link>
    </ListItemContainer>
  )
}

export default ListItem