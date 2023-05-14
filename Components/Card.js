import React from "react"

export default function Card(props) {
    let cardPrice
    if (props.location === "JAPAN") {
        cardPrice = "$$$"
    } else if (props.location === "AUSTRALIA") {
        cardPrice = "$$"
    } else if (props.location === "NORWAY") {
        cardPrice = "$"
    }
    
    return (
        <div className="card">
            {cardPrice && <div className="card--price bold">{cardPrice}</div>}
            <img src={props.imageUrl} className="card--image"/>
            <div className="card--details">
                <i className="fas fa-map-pin location--icon"></i>
                <span className="location">{props.location}</span>
                <span>
                    <a href={props.googleMapsUrl} target="_blank">View on Google Maps</a>
                </span>
                <h3>{props.title}</h3>
                <p className="bold">{props.startDate} - {props.endDate}</p>
                <p>{props.description}</p>
            </div>
        </div>
    )
}