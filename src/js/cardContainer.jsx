import React from "react";
import PropTypes from 'prop-types';
import { informacionDeCandidatos } from "./informacionDeCandidatos";
import { Card } from "./candidatesCards";


const Contenedor = ({}) => {


<div  className="cardFather">	
<div className=" row-md-lg-sm flexCards">
{informacionDeCandidatos.map((card ,index) => {
    return (
        
    <Card 
    className="col-lg-md-3 col-sm-12"         
    key={index}
    title={card.candidateName}
    description={card.candidateDescription}
    buttonLabel={card.candidatesButtonLabel}
    image={card.candidatesImage}
    url={card. candidatesVotingFormUrl}
    >{card}
    </Card>)
    
})}

</div>
</div>

}


Contenedor.proptypes = {

    candidateName: PropTypes.string,
    candidateDescription: PropTypes.string,
    candidatesButtonLabel:PropTypes.string,
    candidatesImage: PropTypes.string,
    candidatesVotingFormUrl:  PropTypes.string,
}




export {Contenedor}