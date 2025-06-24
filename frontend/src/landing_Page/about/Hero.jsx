import './Hero.css'
function Hero(){
    return(
        <div className="container-flud mt-2 p-3 ">

            <div className="row mb-5 mt-5">
                <div className="col-6">
                    <h3 className="text-muted"><i className="fa-solid fa-gamepad"></i> Step Into the LevelUp Arena – </h3>
  <ul>
    <li><p>Explore the hottest games, test your limits, and showcase your skills to the world.</p></li>
    <li><p>Join community battles, rise through competitive eSports circuits, and earn your glory.</p></li>
    <li><p>Driven by passion and powered by players – we are the next generation of gamers.</p></li>
  </ul>
  <img className='home-logo' src="Images/dino.png" alt="" />
                </div>

                <div className="col-6">
<h2 className='fs-4 text-muted'>Game Types by Genre</h2>
<p className='text-muted'><strong>Action Games</strong> – Fast-paced gameplay (e.g., Call of Duty, Devil May Cry)</p>
<p className='text-muted'><strong>Adventure Games</strong> – Story-driven exploration (e.g., Uncharted, The Legend of Zelda)</p>
<p className='text-muted'><strong>Role-Playing Games (RPG)</strong> – Character progression & immersive worlds (e.g., Elden Ring, Final Fantasy)</p>
<p className='text-muted'><strong>First-Person Shooter (FPS)</strong> – Gun-based, first-person combat (e.g., Valorant, Counter-Strike)</p>
<p className='text-muted'><strong>Battle Royale</strong> – Survival-based multiplayer (e.g., Fortnite, PUBG)</p>
<p className='text-muted'><strong>Fighting Games</strong> – Head-to-head combat (e.g., Tekken, Street Fighter)</p>
<p className='text-muted'><strong>Racing Games</strong> – Competitive driving (e.g., Forza Horizon, Need for Speed)</p>
<p className='text-muted'><strong>Sports Games</strong> – Real or fantasy sports (e.g., FIFA, NBA 2K, Rocket League)</p>
<p className='text-muted'><strong>Simulation Games</strong> – Real-life scenarios (e.g., The Sims, Microsoft Flight Simulator)</p>
<p className='text-muted'><strong>Strategy Games</strong> – Tactical and planning-focused (e.g., Age of Empires, Clash of Clans)</p>
<p className='text-muted'><strong>MOBA (Multiplayer Online Battle Arena)</strong> – Team-based strategy (e.g., League of Legends, Dota 2)</p>
<p className='text-muted'><strong>MMORPG (Massively Multiplayer Online RPG)</strong> – Online open-world RPGs (e.g., World of Warcraft, Black Desert Online)</p>
<p className='text-muted'><strong>Puzzle Games</strong> – Brain-teasers and logic (e.g., Portal, Tetris, Candy Crush)</p>
<p className='text-muted'><strong>Horror Games</strong> – Suspense and fear-driven (e.g., Resident Evil, Outlast)</p>
<p className='text-muted'><strong>Sandbox Games</strong> – Creative freedom and exploration (e.g., Minecraft, Terraria)</p>

                </div>
                
            </div>
            <div className="row">
                {/* <img src="/Images/home.jpg" alt="" /> */}
          {/* <img className='about-hero mb-5' src="/Images/home.jpg" alt="" /> */}
                
            </div>
        </div>
    )
}


export default Hero