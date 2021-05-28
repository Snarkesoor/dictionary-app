import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
//import Definition from "./Definition";

export default function Search() {
let [keyword, setKeyword] = useState("");

    function handleResponse(response) {
        //<Definition />;
        console.log(response.data[0]);
    }

    function search(event) {
        event.preventDefault();
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeyword(event) {
        setKeyword(event.target.value);
    }

    return (
    <div className="dictionary">
    <form onSubmit={search}>
        <input 
        type="search" 
        onChange = {handleKeyword}
        autoFocus={true} 
        placeholder="Type any word" />    
    </form>
    </div>
    );
}