import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import Definition from "./Definition";
import Photos from "./Photos";

export default function Search() {
let [keyword, setKeyword] = useState("");
let [definitions, setDefinitions] = useState(null);
let [photos, setPhotos] = useState(null);

    function handleResponse(response) {
        setDefinitions(response.data[0]);
    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }

    function search(event) {
        event.preventDefault();
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`
        axios.get(apiUrl).then(handleResponse);

        let pexelsApiKey ="563492ad6f91700001000001a93e0353dd6947048f999d6aa9fd3851";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        axios.get(pexelsApiUrl, { headers: {"Authorization" : `Bearer ${pexelsApiKey}` }}).then(handlePexelsResponse);
    }

    function handleKeyword(event) {
        setKeyword(event.target.value);
    }

    return (
        <div>
    <div className="dictionary">
            <form className="d-flex" onSubmit={search}>
                <input 
                className="form-control me-2"
                type="search" 
                onChange = {handleKeyword}
                placeholder="Type any word..." />    
            </form>
    </div> 
    <div>
    <hr/>
    <Definition definitions={definitions}/>
    <Photos photos={photos}/>
    </div>
    </div>
    );
}