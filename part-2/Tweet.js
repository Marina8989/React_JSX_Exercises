const Tweet = (props) => {
    return (
        <div>
            <h3>Username: {props.username}</h3>
            <h3>Name: {props.name}</h3>
            <h4>Date: {props.date}</h4>
            <p>Tweet: {props.message}</p>
        </div>
    )
}