import React from 'react'
import './App.css';
import Membre from "./components/Membre.jsx"
import Button from './components/Button';
const famille = {
  membre1: {
    nom: 'antho',
    age: 27
  },
  membre2: {
    nom: 'ségolene',
    age: 27
  },
  membre3: {
    nom: 'eleanor',
    age: 0
  },
  membre4: {
    nom: 'mocha',
    age: 2
  }
}

class App extends React.Component {
  state = {
    famille
  }
  handleClick = (num) => {
    const famille = { ...this.state.famille }// copie le state 
    famille.membre1.age += num// on a selectionner ce qu'on va modifier 
    this.setState({ famille })//je met ajour le state  avec la fonction setState
  }
  handleChange = (event) => {
    const famille = { ...this.state.famille }// copie le state 
    const nom =  event.target.value// event=>changement,target=> c'est input,value=> c'est la valeur
    famille.membre1.nom = nom
    this.setState({ famille })//je met ajour le state  avec la fonction setState
  }
  handleChange1 = (event) => {
    const famille = { ...this.state.famille }// copie le state 
    const age=  event.target.value// event=>changement,target=> c'est input,value=> c'est la valeur
    famille.membre1.age = age
    this.setState({ famille })//je met ajour le state  avec la fonction setState
  }
  render() {
    const { famille } = this.state

    return (
      <div className="App" >
        <h1>React App</h1>
        <input value={famille.membre1.nom} onChange={this.handleChange} type='text'/>
        <input value={famille.membre1.age} onChange={this.handleChange1} type='text'/>
        <Membre
          nom={famille.membre1.nom}
          age={famille.membre1.age} />
        <Membre
          age={famille.membre2.age}
          nom={famille.membre2.nom} />
        <Membre
          age={famille.membre3.age}
          nom={famille.membre3.nom} />
        <Membre
          age={famille.membre4.age}
          nom={famille.membre4.nom}>
          <strong>je suis un chien</strong>
        </Membre>
        <Button vieillir={() =>this.handleClick(5)}/>

      </div>
    )
  }
}

export default App;
