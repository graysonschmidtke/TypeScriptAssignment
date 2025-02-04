import React, { useEffect, useState } from 'react'
import { UsersList } from './components/users-list';
import { EventsList } from './components/events-list';


// Create App component
function App() {
  // Prepare state hook for welcome message
  const [welcomeMessage, setWelcomeMessage] = useState('')

  // Prepare state hook for users list
  // Note: <UserUI[]> is for TypeScript
  // It specifies the shape of usersList state
  const [usersList, setUsersList] = useState([])
  const [eventsList, setEventsList] = useState([])


  // Create async function for fetching welcome message
  const fetchMessage = async () => {
    // Use Fetch API to fetch '/api' endpoint
    const message = await fetch('/api')
      .then(res => res.text()) // process incoming data

    // Update welcomeMessage state
    setWelcomeMessage(message)
  }

  // Create async function for fetching users list
  const fetchUsers = async () => {
        const users = await fetch('/users/all')
          .then(res => res.json()) // Process the incoming data
    
        // Update usersList state
        setUsersList(users)
  }

  const fetchEvents = async () => {
    const events = await fetch('/events/all')
    .then(res => res.json())

    
    setEventsList(events)
  }

  // Use useEffect to call fetchMessage() on initial render
  useEffect(() => {
    fetchMessage()
  }, [])


  return (
    <div className="app">
      <header className="app-header">
          {/* Display welcome message */}
          <p>{welcomeMessage}</p>
      </header>
      <div className="main-content">
        <button className="display-button" onClick={fetchUsers}>Display attendees</button>
        <button className="display-button" onClick={fetchEvents}>Display events</button>


        {/* Render UserList component */}
        <UsersList users={usersList}/>
        <EventsList events={eventsList}/>

      </div>
    </div>
  )
}

export default App