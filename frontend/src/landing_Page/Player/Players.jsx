import { useState } from "react";
import axios from "axios";
function Newplayer(){
 const  [playerdata,setplayerdata] = useState({
    name:"",
    age:"",
    image:"",
    game:"",
    location:""
 })

 const handlechange=(e)=>{
setplayerdata({...playerdata,[e.target.name]:e.target.value}) //[]  means notation it tells e.target.name consider as key
 }

 const handlesubmit=async(e)=>{
    e.preventDefault()
      console.log("Submitting...", playerdata);
      const form = e.target;

  if (!form.checkValidity()) {
    e.stopPropagation();
    form.classList.add("was-validated");
    return; // Stop submission
  }

  form.classList.add("was-validated");
    try {
   let res =  await axios.post("http://localhost:8080/listings", playerdata);
     
        alert(res.data.success);
        setplayerdata({ name: "", age: "", image: "", game: "", location: "" });

     
      
      }
     catch (error) {
      console.log(error);
      
    }
 }
    return(
//       <div className="container mt-5">
//         <div className="row">
//             <div className="col">
//                  <h2 className="mb-4">Add New Player</h2>
//             </div>
//         </div>
//         <div className="row">
// <form  onSubmit={handlesubmit}>
//     <label htmlFor="name">Name:</label>
//     <input type="text"  value={playerdata.name} name="name"  id="name" onChange={handlechange} className="form-control"/>
//     <label htmlFor="age">Age:</label>
//     <input type="text"  value={playerdata.age}  name="age" id="age" onChange={handlechange} className="form-control"/>
//     <label htmlFor="image">Image:</label>
//     <input type="text"  value={playerdata.image}  name="image" id="image" onChange={handlechange} className="form-control"/>
//     <label htmlFor="game">Game:</label>
//     <input type="text"  value={playerdata.name} name="game" id="game" onChange={handlechange} className="form-control"/>
//     <label htmlFor="location">Location:</label>
//     <input type="text"  value={playerdata.name} name="location" id="loccation" onChange={handlechange} className="form-control"/>
//     <br />
//     <button className="btn btn-success">Add</button>
// </form>
//         </div>
//       </div>
<div className="container mt-5">
  <div className="row justify-content-center">
    <div className="col-md-8">
   
      <div className="card shadow-lg p-4 rounded">
        <h2 className="mb-4 text-center text-primary">Add New Player</h2>
        <form onSubmit={handlesubmit} noValidate className="needs-validation">
          <div className="mb-3">
            <label htmlFor="name" className="form-label fw-bold">Name:</label>
            <input
              type="text"
              value={playerdata.name}
              name="name"
              id="name"
              onChange={handlechange}
              className="form-control"
              placeholder="Enter player's name"
              required
            />
                  <div className="valid-feedback">
      Looks good!
    </div>
      <div className="invalid-feedback">
        Name
      </div>
          </div>

          <div className="mb-3">
            <label htmlFor="age" className="form-label fw-bold">Age:</label>
            <input
              type="text"
              value={playerdata.age}
              name="age"
              id="age"
              onChange={handlechange}
              className="form-control"
              placeholder="Enter age"
              required
            />
                  <div className="valid-feedback">
      Looks good!
    </div>
      <div className="invalid-feedback">
        Age
      </div>
          </div>

          <div className="mb-3">
            <label htmlFor="image" className="form-label fw-bold">Image URL:</label>
            <input
              type="text"
              value={playerdata.image}
              name="image"
              id="image"
              onChange={handlechange}
              className="form-control"
              placeholder="Enter image URL"
              required
            />
                  <div className="valid-feedback">
      Looks good!
    </div>
     <div className="invalid-feedback">
       Image
      </div>
          </div>

          <div className="mb-3">
            <label htmlFor="game" className="form-label fw-bold">Game:</label>
            <input
              type="text"
              value={playerdata.game}
              name="game"
              id="game"
              onChange={handlechange}
              className="form-control"
              placeholder="Enter game name"
              required
            />
                  <div className="valid-feedback">
      Looks good!
    </div>
    <div className="invalid-feedback">
      game name
      </div>
          </div>

          <div className="mb-3">
            <label htmlFor="location" className="form-label fw-bold">Location:</label>
            <input
              type="text"
              value={playerdata.location}
              name="location"
              id="location"
              onChange={handlechange}
              className="form-control"
              placeholder="Enter location"
              required
            />
                  <div className="valid-feedback">
      Looks good!
    </div>
    <div className="invalid-feedback">
        Location.
      </div>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-success btn-lg">Add Player</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

    )
}


export default Newplayer;