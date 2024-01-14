import './User.css'
function User(props)
{
    return(
        <div style={{width:"30%"}}>
            <div  className='card' style={{height:"30%",aspectRatio:3/2}}>
                <img src={props.image} className='d-block mx-auto' alt="" width="80%" height={300} />
                <div className="card-body ">
                    <p className="lead">{props.id}</p>
                    <p className="lead">{props.title}</p>
                    <p className="lead">{props.price}</p>
                    
                </div>
            </div>
        </div>
    );
}
export default User;