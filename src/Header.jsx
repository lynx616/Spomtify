import React from "react";

function Header(){
    return(
        <>
            <div className="header" >
                <span className="left-arrow-box"><img src="leftarrowkey.png"/></span>
                <span className="right-arrow-box"><img src="rightarrowkey.png"/></span>
                    <div className="hyperlinks">
                        <a href="">Premium</a>
                        <a href="">Support</a>
                        <a href="">Download</a>
                    </div>
               <button id="sign-up">Sign up</button>
               <button id="log-in">Log in</button>
            </div>
        </>
    );
}
export default Header;