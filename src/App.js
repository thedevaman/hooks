import logo from './logo.svg';
import './App.css';
import react,{useEffect,useState} from 'react'

function App() {

   const [data,setData] = useState(0)
   
  useEffect(()=>{
   console.warn("useEffect")
  })



  return (
    <div className="App">
      <h1>useEffect {data}</h1>
      <button onClick={()=>setData(data+1)}>Update Counter</button>
    </div>
  );
}

export default App;
