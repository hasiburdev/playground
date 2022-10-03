import { useState } from "react";

const GuestList: React.FC = () => {
    const [name, setName] = useState<string>('')
    const [guests, setGuests] = useState<string[]>([])

    const onClick = () => {
        setGuests(prev => ([...prev, name]))
        setName('')
    }

    const renderGuestList = guests.map(guest => (<li>{guest}</li>))

    return <div>
        <h2>GuestList</h2>
        <ul>
        {renderGuestList}
        </ul>
        
        <input value={name} onChange={e => setName(e.target.value)} />
        <button onClick={onClick}>Add Guest</button>
    </div>
}

export default GuestList;