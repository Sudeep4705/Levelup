function Hero(){
    return(
    <div className="container-flud  bg-dark text-white p-5 ">
        <div className="row">
            <div className="col-8 mb-5">
            <h1>Support Portal</h1>
          </div>

            <div className="col-4">
                <a className="fs-3" href="" style={{marginLeft:"15rem",color:"white"}}>Ticket</a>
            </div>


            <div className="col-6 mt-5">
                  <h2 className="fs-4 ">Search for answer or browse help topics  to create  a <br />ticket</h2>
            <input  className="form-control me-2 mt-5   " type="search" placeholder="Search about Levelup" aria-label="Search" style={{height:"66px",width:"90%"}}/>
            </div>


            <div className="col p-5" style={{lineHeight:"2.8"}}>
                <h1 className="fs-2">Featured</h1>
                <ul>
                    <li>Next generation gaming world</li>
                    <li>Explore more about gaming industry</li>
                </ul>
            </div>
            
        </div>
    </div>
    )
}


export default Hero;