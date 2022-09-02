import logo from './logo.svg';
import './App.css';
import react,{useEffect,useState} from 'react'
import User from './User'
function App() {

   const [data,setData] = useState(10);
   const [count,setCount] = useState(100);
   
//   useEffect(()=>{
//    console.warn("useEffect called")
// },[data])
// useEffect(()=>{
//   alert("count is "+count)
// },[count])



  return (
    <div className="App">
      {/* <h1>useEffect {data}</h1>
      <h2>count: {count}</h2> */}
      <User count = {count} data={data}/>
      <button onClick={()=>setData(data+1)}>Update data</button>
      <button onClick={()=>setCount(count+1)}>Update Count</button>
    </div>
  );
}

export default App;
