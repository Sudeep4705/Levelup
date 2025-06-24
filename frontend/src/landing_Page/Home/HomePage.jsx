
import Hero from './Hero'
import Stats from "./Stats"
import OpenAccount from "../OpenAccount";

import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

function HomePage(){
    return(
        <>
        <Hero/>
        <OpenAccount/>
        <LeftSection imageURl={"/Images/valorant.jpg"} GameName={"Valorant"} GameDescription="Valorant is a 5v5 tactical shooter by Riot Games that combines sharp gunplay with unique agent abilities. Teamwork, strategy, and precision decide the outcome in this fast-paced, competitive game." tryDemo="" learnMore=""/>
        <RightSection imageURl={"/Images/csgo.jpg"} GameName="Counter-Strike" GameDescription="Counter-Strike is a legendary first-person shooter franchise that pits two teams — Terrorists and Counter-Terrorists — against each other in objective-based gameplay. Players engage in intense 5v5 rounds, where strategy, map control, and precise shooting are key to victory. Popular for its competitive mode, skill-based mechanics, and iconic maps like Dust II, Counter-Strike has become a cornerstone of eSports and tactical shooters worldwide." learnMore=""/>
        <LeftSection imageURl={"/Images/pubg.jpg"} GameName={"PUBG"} GameDescription="PUBG (PlayerUnknown’s Battlegrounds) is a battle royale shooter where up to 100 players parachute onto an island and fight to be the last one standing. Players scavenge for weapons, gear, and vehicles while a shrinking play zone forces intense encounters. Known for its realistic gunplay and survival mechanics, PUBG helped popularize the battle royale genre globally." tryDemo="" learnMore=""/>
        <RightSection imageURl={"/Images/cod.jpg"} GameName="Call of duty" GameDescription="Call of Duty is a fast-paced first-person shooter franchise known for its cinematic campaigns, intense multiplayer battles, and iconic war-themed settings. From World War II to modern warfare and futuristic combat, it offers a variety of game modes, including team deathmatch, battle royale, and zombies. With its smooth gunplay and high-action gameplay, Call of Duty remains a global favorite in the FPS genre." learnMore=""/>
        
        <Stats/>
        

        </>
    )
}

export default HomePage