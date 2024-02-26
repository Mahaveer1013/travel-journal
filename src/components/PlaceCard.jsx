import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function PlaceCard(props) {
    return(
        <div className="card">
        <div className="card--image">
          <img src={props.imageUrl} alt="ImageOfPlace" />
        </div>
        <div className="card--contents">
          <div className="card--location-div">
            <div className="card--location">
              <FontAwesomeIcon icon={faLocationDot} className="location-icon" />
              <p>{props.location}</p>
            </div>
            <div className="card-google-map">
              <a href={props.googleMapUrl} className="card--a">
                View on Google Maps
              </a>
            </div>
          </div>
          <div className="card--title">{props.title}</div>
          <div className="card--dates">
            <p>{props.startDate} - {props.endDate}</p>
          </div>
          <div className="card--description">
            {props.description}
          </div>
        </div>
      </div>
    )
}

export default PlaceCard;
