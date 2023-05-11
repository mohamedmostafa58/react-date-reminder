import {Container} from 'react-bootstrap'
import {data} from './data'
import Dates from './component/Dates';
import Reactangle from './component/Reactangle';
import Buttons from './component/Buttons';
import {useState} from 'react'
function App() {
  const [arr, setarr]=useState(data)
  let deletedata= function(){
    setarr([])
  }
  let setdata=()=>{
    setarr(data)
  }
  return (
    <div className='holder'>
      <Container >
            <Dates length={arr.length}/>
            <Reactangle data={arr}/>
            <Buttons delete={deletedata} setdata={setdata}/>
        </Container>
    </div>
    
  );
}

export default App;
