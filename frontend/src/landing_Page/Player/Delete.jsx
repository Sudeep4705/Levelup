import axios from "axios";
import { useNavigate } from "react-router-dom";

function Delete({ id }) {
  const navigate = useNavigate();

  const deletebtn = async () => {
    try {
      await axios.delete(`http://localhost:8080/listings/${id}`);
      alert("Player deleted successfully");
      navigate("/");
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  return (
    <button className="btn btn-danger" onClick={deletebtn}>
      Delete
    </button>
  );
}

export default Delete;
