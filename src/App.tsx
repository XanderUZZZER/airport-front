import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import FlightsList from './features/flights/FlightsList'

function App() {
  return (
    <Router>
      <div className='App'>
        <Route path='/' component={FlightsList} />
      </div>
    </Router>
  )
}

export default App
