import Navbar from './components/Navbar'
import CollectionPage from './pages/CollectionPage'
import HomePage from './pages/HomePage'
import {Route, Routes} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

const App = () => {

  return (
    <div className='h-450 w-full bg-slate-950 text-white overflow-auto'>

      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/collection' element={<CollectionPage />} />
      </Routes>

      <ToastContainer />
    </div>
  )
}

export default App