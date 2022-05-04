import React from "react";
import "./Phonetic.css";

export default function Phonetic(props){
    console.log(props.phonetic.audio);
return (
    <div className="Phonetic">
        <a href="{props.phonetic[0].audio}" 
        target="_blank" 
        rel="noreferrer">
            Listen
            </a>
            {props.phonetic.text}
    </div>
  
);
}