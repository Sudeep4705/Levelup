import axios from "axios"
import { useEffect, useState } from "react"

function Error (){

    const [error,seterror] = useState({})

   useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.get("http://localhost:8080/listings"); // This should fail if route doesn't exist
      } catch (err) {
     
        const msg =
          err.response?.data?.error?.message || "Something went wrong";
        seterror(msg);
      }
    };

    fetchData();
  }, []);
    return (
        <h1>Error:{error}</h1>
    )
}