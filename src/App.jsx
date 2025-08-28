
import './App.css'
import {Route, Routes} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Register from './components/Register'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Welcome from './components/Welcome'
import Home from './components/Home'
import { DataProvider } from './usecontext/DataContext'

function App() {


  return (
    <main id='app'>

      <DataProvider>
        <Navbar/>
        <section id='content'>
          <Routes>
            <Route path='/' element={<Welcome/>}/>
            <Route path='/home' element={<Home />}/>
            <Route path='/login' element={<LoginForm />}/>
            <Route path='/register' element={<Register/>}/>
          </Routes>
        </section>
        <Footer/>
      </DataProvider>
      
    </main>
  )
}

export default App
