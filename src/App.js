import './App.css';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';
import store from './redux/store.js';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoList from './pages/TodoList';
import DoneList from "./pages/DoneList";
import About from "./pages/About"
import NotFound from './pages/NotFound';


function App() {
  return (
    <div className="App ">
      <Provider store={store}>

      <BrowserRouter>
      <Navbar/>
      
        <Routes>
          <Route path='/' element={<TodoList/>} />
          <Route path='/done' element={<DoneList/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/*' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
