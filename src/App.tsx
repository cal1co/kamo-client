
import './style/App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import Nav from './components/Nav';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Routes/>
      </BrowserRouter>
    </div>
  )
}

export default App
