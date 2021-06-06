import React from "react";
import "./Phonetics.css"

export default function Phonetics(props) {
return (
    <div className="Phonetics">
     <span className="IPA">{props.phonetics.text}</span> 
     <br/>
     <a href={props.phonetics.audio} rel="noreferrer" target="_blank" className="listen"><button>Listen</button></a>
    </div>
    );
}