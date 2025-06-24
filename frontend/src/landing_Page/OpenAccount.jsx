import { useNavigate } from "react-router-dom";


function OpenAccount(){
const navigate = useNavigate()
const navigation = ()=>{
    navigate("/signup")
}
    

return(
    <div className="container text-center mb-5 mt-5">
        <div className="row">
            <h1 className="fs-2">Explore the gaming world</h1>
            <p className="mt-2">Online platform to explore gamers</p>
            <button className="btn btn-primary fs-4 mt-3 mb-4 " style={{width:"20%",margin:"0 auto" }} onClick={navigation}>join Now</button>
        </div>
    </div>

)
}

export default OpenAccount;