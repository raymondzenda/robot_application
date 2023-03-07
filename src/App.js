import React, {Component}from 'react';
import Cardlist from './Cardlist';
import { robots } from './robots';
import SearchBox from './SearchBox';





class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''

        }
    }

    onSearchChange=(event) => {
        this.setState({searchfield: event.target.value})
        console.log(event.target.value);
        const filterRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        
    }


    render() {
    return(
        <div className="tc">
            <h1>The Robots</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Cardlist robots={this.state.robots}/>
        </div>
        
    );
    }
}

export default App;