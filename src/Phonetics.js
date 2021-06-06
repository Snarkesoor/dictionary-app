import React from "react";

export default function Phonetics(props) {
return (
    <div className="Phonetics">
     {props.phonetics.text} <a href={props.phonetics.audio} rel="noreferrer" target="_blank"><button>Listen</button></a>
    </div>
    );
}