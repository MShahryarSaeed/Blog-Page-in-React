import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Create from './Components/Create';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import BlogDetails from './Components/BlogDetails';
import NotFound from './Components/NotFound';

function App() {

  return (
    <BrowserRouter>
    
    <div className="App">
      <Navbar/>
      
      <div className="content">
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/create' element={<Create/>}/>
      <Route path='/blogs/:id' element={<BlogDetails/>}/>
      <Route path='*' element={<NotFound/>}/>
      
      </Routes>
      </div>
      


    </div>
   
    </BrowserRouter>
   
  );
}

export default App;
