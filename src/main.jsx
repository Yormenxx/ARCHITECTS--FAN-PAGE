import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import App from './App.jsx'
import Forthose from './components/pages/Forthose.jsx'
import Holy from './components/pages/Holy.jsx'
import Augh from './components/pages/Augh.jsx'
import Lastfor from './components/pages/Lastfor.jsx'
import Crown from './components/pages/Crown.jsx'
import Ruin from './components/pages/Ruin.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(



  <BrowserRouter>
  
    <Routes>
        <Route path='/' element={ <App />}/>
        <Route path='/forthose' element={<Forthose/>}/>
        <Route path='/holy' element={<Holy/>}/>
        <Route path='/augh' element={<Augh/>}/>
        <Route path='/lastfor' element={<Lastfor/>}/>
        <Route path='/crown' element={<Crown/>}/>
        <Route path='/ruin' element={<Ruin/>}/>

      
    </Routes>
  
  </BrowserRouter>

   
)
