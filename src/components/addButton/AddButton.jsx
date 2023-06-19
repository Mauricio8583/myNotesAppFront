import React from 'react'
import { AddButtonContainer } from './Styles'
import { Link } from 'react-router-dom'
import { ReactComponent as AddIcon } from '../../assets/add-icon.svg'

const AddButton = () => {
  return (
    <AddButtonContainer>
        <Link to='/note/new'>
           <AddIcon />      
        </Link>
    </AddButtonContainer>
  )
}

export default AddButton