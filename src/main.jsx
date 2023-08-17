import React from 'react'
import ReactDOM from 'react-dom/client'
import { JournalApp } from './JournalApp'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './context/userProvider'
import { AuthProvider } from './context/AuthProvider'

//import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <UserProvider>
      <AuthProvider>
        <BrowserRouter>
          <JournalApp />
        </BrowserRouter>
      </AuthProvider>
    </UserProvider>

)
