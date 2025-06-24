import "./Footer.css";

function Footer(){
    return(
        <>
        <div className="container footer mt-5">
            <div className="row">
                 
                <div className="col mt-5">
                    <h5 className="">© 2010 - 2025, LeveUp Ltd. <br />All rights reserved.</h5>
                    <img className="img1" src="/Images/logo.svg" alt="" />
               
                
                
                </div>
                <div className="col mt-5">
                    <p>Company</p>
                    <a href="" style={{textDecoration:"none"}} className="text-muted">About</a> <br /> <br />
                    <a href="" style={{textDecoration:"none"}} className="text-muted">Carrers</a> <br /> <br />
                    <a href="" style={{textDecoration:"none"}} className="text-muted">Games</a> <br /> <br />
                    <a href="" style={{textDecoration:"none"}} className="text-muted">Socials</a> <br /> <br />
                    <a href="" style={{textDecoration:"none"}} className="text-muted">Youtube</a> <br /> <br />
                </div>
                <div className="col mt-5">
                    <p>Support</p>
                     <a href="/about" style={{textDecoration:"none"}} className="text-muted">About</a> <br /> <br />
                    <a href="" style={{textDecoration:"none"}} className="text-muted">Contact</a> <br /> <br />
                    <a href="/support" style={{textDecoration:"none"}} className="text-muted">Support Portal</a> <br /> <br />
                    <a href="" style={{textDecoration:"none"}} className="text-muted">Blog</a> <br /> <br />
                    <a href="" style={{textDecoration:"none"}} className="text-muted">Downloads</a> <br /> <br />

                </div>
            </div>
        </div>
        </>
    )
}

export default Footer