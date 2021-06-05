import React from "react";
import "./Definition.css";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Definition(props) {
    if (props.definitions) { return ( 
    <div>
      <h2 className="word" style={{textTransform: 'capitalize'}}>{props.definitions.word}</h2>
      {props.definitions.phonetics.map(function(phonetics, index) {
        return <div key={index}> 
        <Phonetics phonetics={phonetics}/>
        </div>;
      })}
      {props.definitions.meanings.map(function(meaning, index) {
        return <div key={index}> 
        <Meaning meaning={meaning}/>
        </div>;
      })}
    </div> ) } else {
      return null;
    }
    }


