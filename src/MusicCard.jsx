import React from "react";

function MusicCard(props){
    return(
        <>
            <div className="music-card-div">
                <img className="musiccardimg" src={props.image}/>
              <a href={props.hyperlink}><img className="cardplaybutton" src="blueplaybutton.png"/></a>
                <h3>{props.heading}</h3>
                <p>{props.paragraph}</p>
            </div> 
        </>
    );

}


export default MusicCard;