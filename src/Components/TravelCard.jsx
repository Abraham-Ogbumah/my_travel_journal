import React from "react"
import {FaMapMarkerAlt} from "react-icons/fa"

export default function TravelCard(props) {
    console.log(props)
    return (
        <div className="card-container">

            <img src={props.imageUrl} alt="mount" className="card-img"/>
            
            <div className="card-details">
                <div className="card-content">
                    <div className="location-info">
                        <FaMapMarkerAlt size={10} color={"#F55A5A"}/>
                        <span>{props.location}</span>
                        <a href={props.googleMapsUrl}>View on Google Maps</a>
                    </div>
                    <h1>{props.title}</h1>
                    <p className="dates">{props.startDate} - {props.endDate}</p>
                    <p className="description">{props.description}</p>
                </div>
            </div>
        </div>
    )
}