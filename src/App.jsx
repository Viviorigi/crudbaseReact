
import './App.css'
import EmployeeComponent from './components/EmployeeComponent'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListComponent from './components/ListComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
 

  return (
    <>
    <BrowserRouter>
      <HeaderComponent/>
      <Routes>
        <Route path='/' element={ <ListComponent/> }>  </Route>
        <Route path='/employees' element={ <ListComponent/> }>  </Route>
        <Route path='/add-employee' element={ <EmployeeComponent/> }>  </Route>
        <Route path='/edit-employee/:id' element={ <EmployeeComponent/> }>  </Route>
      </Routes>
      <FooterComponent/> 
    </BrowserRouter>
      
    </>
  )
}

export default App
