
import './App.css';
import {useSelector, useDispatch} from "react-redux";
import { changeUserName } from './redux/actions/changeUserName';
import { changeUserAge } from './redux/actions/changeUserAge';
import { useState } from 'react';
function App() {
  const user = useSelector((state) => state.addUserReducer )
  const dispatch = useDispatch();

  const [name,setName] = useState(user.name);
  const [age,setAge] = useState(user.age);
  return (

    <div className="App">
      <h1>Name:{user.name} </h1>
      <h1>Age:{user.age}</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        dispatch(changeUserName(name));
        dispatch(changeUserAge(age));
      }}>
        <input
         onChange={(e)=>{
          setName(e.target.value);
        }} placeholder ="Change name"></input>
        <input 
         onChange={(e)=>{
          setAge(e.target.value);}}
        placeholder ="Change age"></input>
        <input type="submit" value="Change user"></input>
      </form>
    </div>
  )
}

export default App
