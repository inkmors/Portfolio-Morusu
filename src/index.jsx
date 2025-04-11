import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import RoutesPages from './Routes/Routes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer autoClose={3000}/>
    <RoutesPages />
  </StrictMode>,
)