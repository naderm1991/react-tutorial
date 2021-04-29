import React from "react";

function Joke(props) {
    console.log(props.question);
    return (
        <div>
            {/*<h3 style={{display: props.question ? "blocK": "none"}}>Question: {props.question}</h3>*/}
            <h3 style={{display: !props.question && "none"}}>
                Question: {props.question}</h3>
            <h3 style={{color: !props.question && "#888888"}}>
                <span style={{display: !props.question && "none"}}>Answer:
                </span> {props.punchLine}</h3>
            <br/>
        </div>
    );
}

export default Joke