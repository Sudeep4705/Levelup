import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Delete from "./Delete"
import { useNavigate } from "react-router-dom";

    function ShowPlayer(){
   const { id } = useParams(); 
  const [player, setPlayer] = useState(null);

  const navigate = useNavigate()
const navigation = (id)=>{
navigate(`/listings/edit/${id}`)
}

  useEffect(() => {
    axios.get(`http://localhost:8080/listings/${id}`)
      .then((res) => setPlayer(res.data))
      .catch((err) => console.error("Error:", err));
  }, [id]);
  if (!player) {
  return <p>Loading player data...</p>;
}


        return(
          
             <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
              
    <div className="card shadow" style={{ width: "28rem", borderRadius: "15px", overflow: "hidden" }}>
      <img
        src={player.image}
        className="card-img-top"
        alt="Player"
        style={{ height: "300px", objectFit: "cover" }}
      />
      <div className="card-body text-center">
        <h3 className="card-title mb-3">{player.name}</h3>
        <p className="card-text"><strong>Age:</strong> {player.age}</p>
        <p className="card-text"><strong>Game:</strong> {player.game}</p>
        <p className="card-text"><strong>Location:</strong> {player.location}</p>
        <Delete id={player._id}/> &nbsp;&nbsp;
<button className="btn btn-primary" onClick={() => navigation(player._id)}>Edit</button> 

      </div>
    </div>
  </div>
        
        )
    }


    export default ShowPlayer