import React from 'react'
import ReactDOM from 'react-dom'

const Mostvotes=(props)=>{
    
    const maxVotes=Math.max(...props.state.points)
    
    const index=props.state.points.indexOf(maxVotes)
    
    return(
    <div>
        <h3>Anecdote with most votes</h3>
        {props.anecdotes[index]}
        <br/>
        with {maxVotes} votes
    </div>)
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      points: [0,0,0,0,0,0]
    }
  }
  next = () => {
    let N = anecdotes.length
    let R = Math.floor(Math.random()*N)
    console.log("nextA",N,R)
    this.setState({ selected: R}) 
  }

  vote = () => {
      console.log("vote",this.state.selected)
      const points_copy=[...this.state.points]
      points_copy[this.state.selected]+=1
      console.log(points_copy)
      this.setState({ points: points_copy})
  }

  render() {
    return (
      <div>
        
        {this.props.anecdotes[this.state.selected]}
        <br/> has {this.state.points[this.state.selected]} votes
        <br/>
        <button type="button" onClick={this.next}>next anecdote</button>
        <button type="button" onClick={this.vote}>vote</button>
        <Mostvotes state={this.state} anecdotes={this.props.anecdotes}/>
      </div>
    )
  }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
