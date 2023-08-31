
import './App.css';
import { useEffect, useState } from 'react';
import video from './video.mp4';


function App() {
  const [advice,setAdvice] = useState(false);
  const getAdvice = async () => {
    const response = await fetch('http://www.boredapi.com/api/activity/');
    const data = await response.json();
    setAdvice(data.activity)
  }
  useEffect(() =>{
    getAdvice()
  }, [])
 

  return (
    <div className="App">
      <h1>Bored? We have some ideas for you!</h1>

      <div>
        <button onClick={getAdvice}>💡</button>
        {advice && <MyComponent/>}
      </div>


      <div className='container'>
        <video autoPlay muted loop>
          <source src={video} type="video/mp4"/>
        </video>
      </div>
      
    </div>
  );
}

function MyComponent(){
  return <div className='container'>
  <p>{advice}</p>
</div>
}

export default App;
