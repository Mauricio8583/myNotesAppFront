import './App.css'
import Header from './components/header/Header'
import NotePage from './pages/notePage/NotePage'
import NotesListPage from './pages/notesListPage/NotesListPage'
import {
  RouterProvider,
  createBrowserRouter
} from 'react-router-dom'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <NotesListPage />
  },
  {
    path: '/note/:noteId',
    element: <NotePage />
  }
])

function App() {
  return (
    <div className='container dark'>
      <div className='app'>
      <Header />
      <RouterProvider router={routes} />
      </div>
    </div>
  )
}

export default App
