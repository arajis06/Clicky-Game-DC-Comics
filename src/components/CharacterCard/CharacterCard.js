import React from "react";
import "./CharacterCard.css";

const CharacterCard = props => (
    <div className="col-xs-4 col-sm-6 col-md-6 col-lg-3 columns">
        <div className="card" 
            key={props.id} 
            onClick={() => props.handleClick(props.id, props.clicked)} 
        >
            <div className="img-container">
                <img 
                    id={props.name}
                    alt={props.name} 
                    src={props.image} 
                />
            </div>
        </div>
    </div>
);

export default CharacterCard;
