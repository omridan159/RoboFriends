import React, {useState} from 'react';
import CardList from "./CardList";
import SerachBox from "./SerachBox";
import { robots } from "./robots";

const App = () => {
    const [inputData, setInputData] = useState('');
    const [Robots, setRobots] = useState(robots);

    const onSearchChange = (e) => {
        console.log(e)
    }

    return ( 
        <div className="tc">
            <h1>RoboFriends</h1>
            <SerachBox onChange={searchChange()} />
            <CardList robots={Robots} />
        </div>
    )
}

export default App;
