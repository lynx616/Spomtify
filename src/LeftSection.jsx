import React from "react";

function LeftSection(){
    return(
        <>
            <div className="left-section" >
            <img className="slogo" src="sp1.png"/>

            <div className="left-iconsection">
                <span className="top-icons">
                    <a href="">
                            <div>
                            <img src="iconpack-spotify/icon-home-icon.png" />
                            <h3>Home</h3>
                            </div>
                    </a>
                     <a href="">
                    <div>
                    <img src="iconpack-spotify/icon-search-icon.png" /><h3>Search</h3>
                    </div>
                    </a>
                    <a href="">
                    <div className="icon-middleman">
                    <img src="iconpack-spotify/icon-libraby.png" /><h3>Your Library</h3>
                    </div>
                    </a>
                </span>
                <span className="bottom-icons">
                <a href="">
                <div>
                <img className="create-playlist-icon" src="iconpack-spotify/icon-add-playlist.png" />
                <h3 className="create-playlist-text">Create Playlist</h3>
                </div>
                </a>
                <a href="">
                <div>
                <img className="liked-songs-icon" src="iconpack-spotify/icon-love.png" />
                <h3 className="liked-songs-text">Liked Songs</h3>
                </div>
                </a> 
                </span>
            </div>
            <span className="cookies-privacy">
                <a href="">Cookies</a>
                <a href="">Privacy</a>    
                <a href="https://github.com/lynx616" target="_blank">© lynx616/Rudra</a>

            </span>
            
            </div>
        </>
    );
}
export default LeftSection;