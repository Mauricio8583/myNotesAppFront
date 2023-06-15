import { Link } from "react-router-dom"
import { ListItemContainer, Title, TitleContainer } from "./Styles"

const ListItem = ({note}) => {
  return (
    <ListItemContainer>
        <Link to={`/note/${note.id}`}>
          <TitleContainer>
            <Title>{note.body}</Title>
          </TitleContainer>
        </Link>
    </ListItemContainer>
  )
}

export default ListItem