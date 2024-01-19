import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const firebaseConfig = {
  apiKey: 'AIzaSyAlrO0BFgdZmV85McqEww7itX_lIyVvHio',
  projectId: 'sport-food-1308',
  
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
