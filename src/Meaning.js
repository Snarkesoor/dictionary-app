import React from "react";

export default function Meaning(props) {
    return (
    <div className="definition">
        <h4><em> {props.meaning.partOfSpeech}: </em></h4>
        {props.meaning.definitions.map(function(definition, index) {
            return ( <div key={index}>
                {definition.definition}
                <br/>
                <em>"{definition.example}"</em>
                </div>
            )
        })}
</div>
        );
}