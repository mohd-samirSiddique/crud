import './App.css'
import Form from './Components/Form'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FormTable from './Components/FormTable'
import FormUpdate from './Components/FormUpdate'
import Navbar from './Components/Navbar'

function App() {
  return (
    <>
      {/* <Form/> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Form />} />
          <Route path='/table' element={<FormTable />} />
          <Route path='/formUpdate/:id' element={<FormUpdate />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
