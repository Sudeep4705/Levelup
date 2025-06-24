


function AboutTeam(){

    return(
         <div className="container p-5">
      <div className="row p-2   border-top">
        <h1 className=" text-center ">
          People
        </h1>
      </div> 

      <div className="row p-5   text-muted " style={{lineHeight:"1.8",fontSize:"1.2em "}}>
        <div className="col-6  p-5 text-center">
        <img src="/Images/Photo1.jpg" style={{borderRadius:"100%",width:"50%"}} alt="" />
        <h4 className='mt-5'>Sudeep</h4>
        <h6>Founder, CEO</h6>
        </div>


        <div className="col-6 p-5">
            <p>Sudeep is a passionate developer who started his coding journey with a love for building websites and apps. With a strong foundation in full-stack development, he aims to shape innovative digital experiences.</p>
<p>He has worked on several real-world projects involving modern web technologies and actively collaborates in tech communities and meetups.</p>
<p>Coding late at night with music on is his zen.</p>
<p>Connect on <a href="#" style={{textDecoration:"none"}}>Portfolio</a> / <a href="#" style={{textDecoration:"none"}}>GitHub</a></p>

        </div>
      </div>
    </div>
    )
}


export default AboutTeam