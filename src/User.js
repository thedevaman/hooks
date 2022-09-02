import logo from './logo.svg';
import './App.css';
import react,{useEffect,useState} from 'react'

function User(props) {

  useEffect(()=>{
//   
alert('count is '+ props.count)
},[props.count])




  return (
    <div className="App">
      <h1>data props:{props.data}</h1>
      <h2>count props: {props.count}</h2>
    </div>
  );
}

export default User;
