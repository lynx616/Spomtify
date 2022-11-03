import React from "react";
import PlayerSection from "./PlayerSection";
import  ParentArray  from "./MusicCardData";
import MusicCard from "./MusicCard";
function PlayersecDiv(){
    return(
        <>
            <div className="whole-playersec-box">
            {ParentArray.map(ParentMapping)}   
            {/* <PlayerSection
             listheading={ParentArray[0].listheading}
             CardData={ParentArray[0].CardData.map(CardMapping)}  ///{adding specific values using array[number]***** }
             />
            <PlayerSection 
            listheading={ParentArray[1].listheading}
            CardData={ParentArray[1].CardData.map(CardMapping)}
             />
            <PlayerSection 
            listheading={ParentArray[2].listheading}
            CardData={ParentArray[2].CardData.map(CardMapping)}   
            /> */}
            </div>
        </>
    );
}
//2D- Array Mapping//
function ParentMapping(ParentMapValue){
    return(
        <>
        <PlayerSection
              listheading={ParentMapValue.listheading}  //adding all the values from CardData at a time
             CardData={ParentMapValue.CardData.map(CardMapping)}
             />

        </>
    );
}

function CardMapping(calling){
    return(
        <>
        <MusicCard
                    image={calling.image}
                    hyperlink={calling.hyperlink}
                    heading={calling.heading}
                    paragraph={calling.paragraph}
                />

        </>
    );
}
export default PlayersecDiv; 