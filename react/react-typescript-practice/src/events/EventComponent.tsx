const EventComponent: React.FC = () => {

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e)
    }

    return <div>
        <h2>Event</h2>
        <input onChange={onChange} />
    </div>
}

export default EventComponent;