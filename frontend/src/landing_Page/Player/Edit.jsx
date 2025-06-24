import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";





function Edit (){

    const {id} = useParams()
    const [updatedata,setupdatedata] = useState({
    name: "",
    age: "",
    image: "",
    game: "",
    location: "",
  })
    
useEffect(()=>{
    axios.get(`http://localhost:8080/listings/edit/${id}`) // first im passing id to my backend then retrive the data 
    .then((res)=>setupdatedata(res.data)
       
        
    )
    .catch((err)=>{
        console.log(err);
            })
},[id])

const updatechange = (e)=>{
setupdatedata({...updatedata,[e.target.name]:e.target.value})

}
const navigate = useNavigate();

const updatesubmit = async(e)=>{ //im updating first i pass the id then i pass the updateddata
    e.preventDefault()
    const form = e.target;

  if (!form.checkValidity()) {
    e.stopPropagation();
    form.classList.add("was-validated");
    return; // Stop submission
  }

  form.classList.add("was-validated");
      console.log("Submitting...", updatedata);
    try {
    await axios.put(`http://localhost:8080/listings/update/${id}`, updatedata);
     
        alert(" Player updated successfully!");
        setupdatedata({ name: "", age: "", image: "", game: "", location: "" });
        navigate(`/listings/show/${id}`);

     
      
      }
     catch (error) {
      console.log(error);
      alert("Something went wrong.");
    }

}

return(
 <div className="container mt-5">
  <div className="row justify-content-center">
    <div className="col-md-8">
   
      <div className="card shadow-lg p-4 rounded">
        <h2 className="mb-4 text-center text-primary">Update Player</h2>
        <form onSubmit={updatesubmit} noValidate className="needs-validation">
          <div className="mb-3">
            <label htmlFor="name" className="form-label fw-bold">Name:</label>
            <input
              type="text"
              value={updatedata.name}
              name="name"
              id="name"
              onChange={updatechange}
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
              value={updatedata.age}
              name="age"
              id="age"
              onChange={updatechange}
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
              value={updatedata.image}
              name="image"
              id="image"
              onChange={updatechange}
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
              value={updatedata.game}
              name="game"
              id="game"
              onChange={updatechange}
              className="form-control"
              placeholder="Enter game name"
              required
            />
                  <div className="valid-feedback">
      Looks good!
    </div>
      <div className="invalid-feedback">
        GameName
      </div>
          </div>

          <div className="mb-3">
            <label htmlFor="location" className="form-label fw-bold">Location:</label>
            <input
              type="text"
              value={updatedata.location}
              name="location"
              id="location"
              onChange={updatechange}
              className="form-control"
              placeholder="Enter location"
              required
            />
                 <div className="valid-feedback">
      Looks good!
    </div>
      <div className="invalid-feedback">
        Location
      </div>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-success btn-lg">Update</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
 
    )


}



export default Edit