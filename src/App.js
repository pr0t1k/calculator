import React,{useState} from 'react'
import Theme1 from './stories/components/Theme1'
//import Theme2 from './stories/components/Theme2'

const App = () => {
  const [first, setfirst] = useState("Theme1")
  const solve=(theme)=>{
    if(theme===1) setfirst("Theme1");
    else setfirst("Theme2")
  }
  return (
    <div>
      <form style={{textAlign:'center',marginTop:'50px'}}>
        <input type="radio" value="Theme1" onClick={()=>solve(1)} checked={first==="Theme1"}/> Theme1 
        <input type="radio" value="Theme2" onClick={()=>solve(2)} checked={first==="Theme2"}/> Theme2
      </form>
      <div style={{textAlign:'center',marginTop:'10px'}}> 
      <Theme1 theme={first}/>
      </div>
      
    </div>  
  )
}

export default App
