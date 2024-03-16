import logo from './logo.svg';
import './App.css';
import CounterComponent from './counter.component';
import Users from './users.component';
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/users' element= {<Users/>}></Route>
      <Route path='/' element ={<CounterComponent/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
