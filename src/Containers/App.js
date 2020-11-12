import React, { useState, useEffect } from 'react';
import CardList from '../Components/CardList';
import SerachBox from '../Components/SerachBox';
import Scroll from '../Components/Scroll';
import './App.css';

const App = () => {
   const [inputData, setInputData] = useState('');
   const [Robots, setRobots] = useState([]);

   const onSearchChange = (e) => {
      setInputData(e.target.value);
   };

   useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
         .then((response) => {
           return response.json();
         })
         .then((users) => setRobots(users));

      return () => {};
   }, []);

   const FilteredRobots = Robots.filter((robot) => {
      return robot.name.toLowerCase().includes(inputData.toLowerCase());
   });



   return Robots.length === 0 ? <h1 className="tc">Loading...</h1> : (
      <div className='tc'>
         <h1 className='f1'>RoboFriends</h1>
         <SerachBox SearchChange={onSearchChange} />
         <Scroll>
         <CardList robots={FilteredRobots} />
         </Scroll>
      </div>
   );
};

export default App;
