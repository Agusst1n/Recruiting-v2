import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { QuestionsProvider } from './context/QuestionsContext'
import { VideoProvider } from './context/VideoContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <VideoProvider>
        <QuestionsProvider>
          <App />
        </QuestionsProvider>
      </VideoProvider>
  </React.StrictMode>
)
