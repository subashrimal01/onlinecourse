
import { BrowserRouter} from 'react-router-dom';
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Mid from './Mid/Mid';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header></Header>
      <Mid></Mid>
      <Footer></Footer>
      </BrowserRouter>
      
      
    </div>
    
  );
}

export default App;
