import React, { useState } from "react";
import "./Search.css";

export default function Search() {
let [keyword, setKeyword] = useState("");

    function search(event) {
        event.preventDefault();
        alert(`${keyword}`);
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