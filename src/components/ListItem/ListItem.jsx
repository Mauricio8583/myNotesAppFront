import { ListItemContainer, Title } from "./Styles"

const ListItem = ({note}) => {
  return (
    <ListItemContainer>
        <Title>{note.body}</Title>
    </ListItemContainer>
  )
}

export default ListItem