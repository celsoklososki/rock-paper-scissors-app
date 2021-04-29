function Choice(props){
    return (
        <img 
            src={props.image} 
            style={{ width: 200 }, {height: 200}}
            onClick={() => props.onClick(props.choice)}
        />
    )
}
export default Choice;