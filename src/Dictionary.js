import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css"
import Results from "./Results";


export default function Dictionary(){
let [keyword, setKeyword] = useState("");
let [results, setResults] = useState(null);

function handleResponse(response){
    console.log(response.data
)
    setResults(response.data)
}
// Api documentation: https://api.dictionaryapi.dev/
function search(event){
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);
    let apiKey = "ce39c90db330162oat1e9c16aa4594f9"
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
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