import React from "react";

function About (props){
    return(
        <aside>
            <img src={props.image ? props.image : "https://via.placeholder.com/215"} alt="blog logo" />
            <div style={{marginTop:"opx"}}>
                <p>About this blog</p>
                <p>{props.text}</p>
            </div>
        </aside>
    )
}

export default About