import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
    return (
    <div className="definition">
        <h4><em> {props.meaning.partOfSpeech}: </em> </h4><br/>
        {props.meaning.definitions.map(function(definition, index) {
            return ( <div key={index}> 
                <strong>Definition:</strong> {definition.definition} 
                <br/>
                <em>"{definition.example}"</em>
                <br/>
                <Synonyms synonyms={definition.synonyms} />
                <br/>
                </div>
            )
        })}
</div>
        );
}