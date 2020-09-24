// create your App component here
import React from 'react';

class App extends React.Component{

    constructor(){
        super()
        this.state={
            people: []
        }
    }

    componentDidMount(){
        fetch("http://api.open-notify.org/astros.json")
        .then(resp => resp.json())
        .then(spaceInfo => {
            let spaceData = spaceInfo.people.map(data => [data.name, data.craft])
            console.log(spaceData)
            this.setState({
                people: spaceData
            })
        })
    }

    render(){
        return <div>
            {this.state.people}
        </div>
    }
}

export default App