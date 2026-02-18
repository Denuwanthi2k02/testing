import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login' // Import Login component

function App() {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState(null) // State to track logged-in user

  // Function to handle login
  const handleLogin = (userData) => {
    setUser(userData);
  }

  // If user is not logged in, show the login page
  if (!user) {
    return <Login onLogin={handleLogin} />
  }

  // If user is logged in, show your original code
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Welcome, {user.username}!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <button onClick={() => setUser(null)} style={{marginTop: '10px', backgroundColor: '#ff4444'}}>
        Logout
      </button>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App