function StudentCard(props)

{
    return(
        <div style={{border:"1px black solid",padding:"10px",margin:"10px"}}>
            <h2>Name:{props.name}</h2>
            <p>Rollno:{props.roll}</p>
            <p>collge:{props.college}</p>
        </div>
    );
}
export default StudentCard;
