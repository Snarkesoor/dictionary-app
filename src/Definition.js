import React from "react";
import "./Definition.css";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Definition(props) {
    if (props.definitions) { return ( 
    <div>
      <section>
        <h2 className="word" style={{textTransform: 'capitalize'}}><em>{props.definitions.word}</em></h2>
      </section>
      {props.definitions.phonetics.map(function(phonetics, index) {
        return <section key={index}> 
        <Phonetics phonetics={phonetics}/>
        </section>;
      })}
      {props.definitions.meanings.map(function(meaning, index) {
        return <section key={index}> 
        <Meaning meaning={meaning}/>
        </section>;
      })}
    </div> ) } else {
      return null;
    }
    }


