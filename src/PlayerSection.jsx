import React from "react";
// import MusicCard from "./MusicCard";
// import {CardData1,CardData2,CardData3} from "./MusicCardData";
// import  ParentArray  from "./MusicCardData";

function PlayerSection(props){
    return(
        <>
            <div className="player-section" >
            <a href=""><h1 className="playlist-heading">{props.listheading}</h1></a>
             
            <div className="musiccard-div" >
                {props.CardData}
                {/* {ParentArray[1].CardData.map(CardMapping)} */}
               
               
                {/* This Functionality is Passed to the PlayerDiv Section By the props */}
                   
            </div>
            </div>
        </>
    );
}



export default PlayerSection;