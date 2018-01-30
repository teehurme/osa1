import React from 'react'


export const Yhteensa = (props) =>{
    return(
        
        <p>yhteensä 
        {props.osat.reduce((a,b) => {
            return {
                tehtavia: a.tehtavia+b.tehtavia}}).tehtavia} 
        tehtävää</p>
    )
}