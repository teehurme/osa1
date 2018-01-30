import React from 'react';
import ReactDOM from 'react-dom';



const Button =(props) =>{
    return (
        <button type="button" onClick={props.add}>{props.label}</button>
    )
}


const Statistic = (props) =>{
   
    return (<tr>
    <td>{props.name}</td>
    <td>{props.value}{props.end}</td>
    </tr>) 
}
const Statistics = (props)=>{
    
    if (props.state.good | props.state.neutral | props.state.bad ){
    
        const median= Math.round(
            (props.state.good-props.state.bad)
            /(props.state.good+props.state.neutral+props.state.bad)*10)/10
        const positive = Math.round(props.state.good/
            (props.state.good+props.state.neutral+props.state.bad)*1000)/10
    
    return (
        <div>
        <h2> Statistiikka</h2>

        
        
        <table><tbody>
        <Statistic name="hyvä" value={props.state.good} />
        <Statistic name="neutraali" value={props.state.neutral} />
        <Statistic name="huono" value={props.state.bad} />
        <Statistic name="keskiarvo" value={median} />
        <Statistic name="positiivisia" value={positive} end="%"/>
            
        </tbody></table>

        </div>
    )}
    else{
        return(
            <div>
            <h2> Statistiikka</h2>
        <p> Yhtään arvostelua ei ole annettu</p>
        </div>)
    }
}

class Unicafe extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            good: 0,
            neutral: 0,
            bad: 0,
        }
    }
    add(arvostelu){
        let state = {}
        state[arvostelu]=this.state[arvostelu]+1
        this.setState(state)
    }

    render() {
        return (
            <div>
        <h1>anna palautetta</h1>
        <Button label="Hyvä" add={this.add.bind(this,"good")}/>
        <Button label="Neutraali" add={this.add.bind(this,'neutral')}/>
        <Button label="Huono" add={this.add.bind(this,'bad')}/>
        <Statistics state={this.state}/> 
        </div>
        )
    }
}





ReactDOM.render(<Unicafe />, document.getElementById('root'));

