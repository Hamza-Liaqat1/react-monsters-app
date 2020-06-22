import React, { Component } from 'react'
import SearchBox from './components/Search-box/search-box.component'
import CardList from './components/card-list/card-list.components'
import './App.css';

export class App extends Component {
  state= {
    monsters: [],
    searchField: ""
  
  }

  changehandler = (event) => {
    this.setState({
      searchField: event.target.value
    })
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users =>
       this.setState({ 
         monsters: users 
        })
        ) 

  }

  /*componentDidMount() {
   fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users}))    
  }
*/
  render() {
    const { monsters, searchField } = this.state;
    const filterMonsters = monsters.filter(monster => 
          monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      
            <div className="App">
              <h1>Monsters App</h1>
              <SearchBox  changehandler={this.changehandler} placeholder="search monster"/> 
           
             <CardList monsters={filterMonsters}/>  
            </div>
    )
  }
}

export default App
