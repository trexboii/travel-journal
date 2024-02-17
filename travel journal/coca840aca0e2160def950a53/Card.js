import React from "react"
import data from "./data"
export default function Card(props) {
    let isLast = false
    if (props.index === data.length-1) {isLast=true}
    return (
        <main>
            <div className="card">
                <img src={props.img} className="card--cover-image"/>
                <br/>
                <div className="card--elements">
                    <nobr>
                        <img src="./images/location-marker.png" className="card--location-marker"/>
                        <span className="card--location-text">{props.country}</span>
                        <a href={props.mapsUrl}>View on Google Maps</a>
                    </nobr>
                    <h1>{props.location}</h1>
                    <h2 className="card--dates">{props.startDate} - {props.endDate}</h2>
                    <p className="card--desc">{props.description}</p>
                </div>
            </div>
            {!isLast && <hr/>}
        </main>
    )
}
//i want to only display the hr if the card is not last in the list