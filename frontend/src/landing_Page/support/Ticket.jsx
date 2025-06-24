function Ticket(){
    return(
       <div className="container">
      <div className="row p-5  mt-5">
        <h4 className="  text-muted">
         To create a ticket, select a relevant topic
        </h4>
    
      </div> 

      <div className="row p-5 mb-5  ">
        <div className="col-4  ">
            <h5 className='mb-4'>
                <i class="fa-solid fa-circle-plus"></i>&nbsp;Account Opening
            </h5>
            <div style={{marginLeft:"20px"}}>
             <a href=""  style={{textDecoration:"none" ,lineHeight:"2.2"}}>Resident individual</a> <br />
             <a href="" style={{textDecoration:"none" ,lineHeight:"2.2"}}>Minor</a> <br />
             <a href="" style={{textDecoration:"none" ,lineHeight:"2.2"}}>Non Resident Indian (NRI)</a> <br />
            
            </div>
             
        </div>

        <div className="col-4 ">
<h5 className='mb-4'>
                <i class="fa-solid fa-address-card"></i>&nbsp;Your LevelUp Account
            </h5>
            <div style={{marginLeft:"20px"}}>
             <a href=""  style={{textDecoration:"none" ,lineHeight:"2.2"}}>Your Profile</a> <br />
             <a href="" style={{textDecoration:"none" ,lineHeight:"2.2"}}>Account modification</a> <br />
            
          
             <a href="" style={{textDecoration:"none" ,lineHeight:"2.2"}}>Transfer and conversion of securities</a> <br />
            </div>
        </div>

        <div className="col-4  ">
<h5 className='mb-4'>
               <i class="fa-solid fa-chart-simple"></i> &nbsp;Account
            </h5>
            <div style={{marginLeft:"20px"}}>
             <a href=""  style={{textDecoration:"none" ,lineHeight:"2.2"}}>IPO</a> <br />
             <a href="" style={{textDecoration:"none" ,lineHeight:"2.2"}}>Gaming FAQs</a> <br />
          
             <a href="" style={{textDecoration:"none" ,lineHeight:"2.2"}}>Charts and History</a> <br />
          
             <a href="" style={{textDecoration:"none" ,lineHeight:"2.2"}}>General</a> <br />
            </div>
        </div>
      
        <div className="col-4 mt-5  ">
            <h5 className='mb-4'><i class="fa-solid fa-at"></i> &nbsp;Console</h5>
            <div style={{marginLeft:"20px"}}>
             <a href=""  style={{textDecoration:"none" ,lineHeight:"2.2"}}>Portfolio</a> <br />
             <a href="" style={{textDecoration:"none" ,lineHeight:"2.2"}}>Corporate actions</a> <br />
          
             <a href="" style={{textDecoration:"none" ,lineHeight:"2.2"}}>Reports</a> <br />
             <a href="" style={{textDecoration:"none" ,lineHeight:"2.2"}}>Profile</a> <br />
             <a href="" style={{textDecoration:"none" ,lineHeight:"2.2"}}>Segments</a> <br />
             
            </div>
        </div>
        <div className="col-4 mt-5  ">
            <h5 className='mb-4'><i class="fa-solid fa-coins"></i> &nbsp;Installation</h5>
            <div style={{marginLeft:"20px"}}>
            <a href="" style={{ textDecoration: "none", lineHeight: "2.2" }}>Game Installation Issues</a> <br />
<a href="" style={{ textDecoration: "none", lineHeight: "2.2" }}>Multiplayer Connection Problems</a> <br />
<a href="" style={{ textDecoration: "none", lineHeight: "2.2" }}>In-Game Purchases & Refunds</a> <br />
<a href="" style={{ textDecoration: "none", lineHeight: "2.2" }}>Account & Login Help</a> <br />
<a href="" style={{ textDecoration: "none", lineHeight: "2.2" }}>Game Performance & Crashes</a> <br />

         
             
            </div>
        </div>

       
      </div> 
      </div>
    )
}


export default Ticket;