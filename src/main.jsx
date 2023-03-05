import React from 'react' //IMPORTA LA LIBRERIA DE REACT
import ReactDOM from 'react-dom/client' //IMPORTA TODO LO RELACIONADO AL DOM, COMO EVENTOS CLICK SUBMIT INPUT ETC
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
