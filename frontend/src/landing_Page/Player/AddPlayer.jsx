import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Delete from "./Delete"


function  AddPlayer(){
    const navigate = useNavigate()
    const navigation =()=>{ 
        navigate("/addplayer")
    }
    const [playersdata,setplayersdata] = useState([])

   
    
    const handledata = async()=>{
         const response =  await axios.get("http://localhost:8080/listings/all")
    //    console.log(response.data);
    //    console.log("Is array?", Array.isArray(response.data));
       
        setplayersdata(response.data)
        }
    
    

    useEffect(()=>{
        handledata()

    },[]) // [] this means it render in initial

return(
    
<div className="container  mb-5 mt-5">
        <div className="row text-center">
            <h1 className="fs-2">Explore the gaming world</h1>
            <p className="mt-2">Online platform to explore gamers</p>
            <button className="btn btn-primary fs-4 mt-3 mb-4 " style={{width:"20%",margin:"0 auto" }} onClick={navigation}>Add players</button>
        </div>
        <div className="row mt-5">
             <h2 className="text-muted">All Players</h2>
            {playersdata.map((players,index)=>(
<div className="col-4" key={index} > 
   <Link to={`/listings/show/${players._id}`}   style={{textDecoration:"none"}}>
   <p className="fs-4">{players.name}</p>
    <div className="card" style={{width:"18rem"}}>
        
    <img src={players.image} className="card-img-top" style={{height:"200px",width:"300px"}} alt="..."/>
    
</div>
</Link>
        
            
            </div>
            ))}
            
        </div>
    </div>
    
    

)
}


export default AddPlayer;