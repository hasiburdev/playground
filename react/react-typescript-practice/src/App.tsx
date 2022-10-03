import { useState } from 'react'
import EventComponent from './events/EventComponent'
import Parent from './props/Parent'
import GuestList from './state/GuestList'
import UserSearch from './state/UserSearch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <Parent /> */}
      {/* <GuestList /> */}
      {/* <UserSearch /> */}
      <EventComponent />
    </div>
  )
}

export default App
