import './App.css';
import Home from './Components/Home';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Newpage from './Components/Newpage';

function App() {

  return (
    <>
    <BrowserRouter>
    
    <Routes>
    <Route exact path ="/" element={<Home/>}/>
    <Route path='/Newpage' element = {<Newpage/>}/>
    </Routes>

    </BrowserRouter>
    </>
    
  );
}

export default App;