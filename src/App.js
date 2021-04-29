import { Component } from 'react';
import Choice from './Choice'
import paperImage from './assets/paper.png';
import rockImage from './assets/rock.png';
import scissorsImage from './assets/scissors.png';
import './App.css';

const CHOICES = ['rock', 'paper', 'scissors']

function getRandomNumber(){
  const random = Math.random();
  return Math.floor(random * 3);
}

function getRandomChoice(){
  const randomNumer = getRandomNumber();
  return CHOICES[randomNumer];
}

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      playerScore: 0,
      computerScore: 0
    };
  }

  componentDidUpdate(){
    if(this.state.playerScore === 5){
      alert('Player Won the Game !');
      this.handleClickReset();
    } else if (this.state.computerScore === 5){
      alert('Computer Won the Game !');
      this.handleClickReset();
    }
  }

  handleClickReset = () => {
    this.setState({
      playerScore: 0,
      computerScore: 0
    });
  }

  handleClickChoice = (playerChoice) => {
    const computerChoice = getRandomChoice();
    console.log('CLICKED CHOICE', playerChoice, computerChoice)

    if(playerChoice === computerChoice){
      return alert('The round was a draw!');
    }

    if(
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') 
      ) {
        this.setState({playerScore: this.state.playerScore + 1});
        alert('Player won the round! :D');
        //Player Won
      } else {
        this.setState({computerScore: this.state.computerScore + 1});
        alert('Computer won the round! :( ');
        //Computer Won
      }
  }

  render() {
    return (
      <div className="App">
        <h1>Rock Paper Scissors Game</h1>
    
          <div className="scoreboard">
              <h2>Scoreboard</h2>
              <span>Player: {this.state.playerScore}</span>
              <br/>
              <span>Computer: {this.state.computerScore}</span>
          </div>

          <div className="button">
              <button onClick={this.handleClickReset}>Reset</button>  
          </div>

        <Choice
          choice="rock" 
          image={rockImage} 
          onClick={this.handleClickChoice}
        />
        <Choice 
          choice="paper"
          image={paperImage} 
          onClick={this.handleClickChoice}
        />
        <Choice 
          choice="scissors" 
          image={scissorsImage} 
          onClick={this.handleClickChoice}
        />
      </div>
    );
  }
}

export default App;
