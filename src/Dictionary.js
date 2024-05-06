import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css"
import Results from "./Results";


export default function Dictionary(){
let [keyword, setKeyword] = useState("");
let [results, setResult] = useState(null);

function handleResponse(response){
    console.log(response.data[0].meanings
)
    setResult(response.data[0])
}
// Api documentation: https://api.dictionaryapi.dev/
function search(event){
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
}
function handleKeywordChange(event){
    setKeyword(event.target.value);
    
}

    return(<div className="Dictionary">
        <form onSubmit={search}>
            <input type="search" onChange={handleKeywordChange}/>
        </form>
        <Results results = {results}/>
    </div>
)}