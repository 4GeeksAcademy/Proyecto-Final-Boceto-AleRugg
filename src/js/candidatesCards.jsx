import ReactDOM from 'react-dom/client';
import React from "react";
import PropTypes, { object } from 'prop-types';
import { informacionDeCandidatos } from './informacionDeCandidatos';



const Card = (prop) => {

return (  
    
    <div className="card mx-5 mt-5 cardContainer " >
  <img src={prop.candidatesImage} className="card-img-top cardImg" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title text-center h5Title">{prop.candidateName}</h5>
    <p className="card-text">{prop.candidateDescription}.</p>
    <a href={prop.candidatesVotingFormUrl} target="_blank" className="btn btn-primary">{prop.candidatesButtonLabel}</a>
  </div>
</div>

)}

Card.proptypes =  {

    candidateName: PropTypes.string,
    candidateDescription: PropTypes.string,
    candidatesButtonLabel: PropTypes.string,
    candidatesImage: PropTypes.string,
    candidatesVotingFormUrl: PropTypes.string,
    

}

export {Card}