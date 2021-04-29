import React from "react";

function ContactCard(props) {

    console.log(props.contact.email);

    const style = {display:'block'};

    if (props.contact.email === undefined){
        style.display = 'none';
    }
    return (
        <div className="contact-card">
            <img  src={props.contact.imgUrl}/>
            <h3>{props.contact.name}</h3>
            <p>{props.contact.phone && "Phone:"} {props.contact.phone}</p>
            <p style={style}>Email: {props.contact.email}</p>
        </div>
    );
}


export default ContactCard

// // probs like a,b
// function addNumbers(a,b) {
//     return a +b;
// }
