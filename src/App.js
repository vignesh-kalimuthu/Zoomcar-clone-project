
import './App.css';
import  Navbar  from './component/Navbar';
import  Herocard from './component/Herocard';
import Cardcarousel from './component/Cardcarousel';
import Middle from './component/middle';
import Imagecard from './component/Imagecard' ;
import Customercard from './component/CustomerCards' ;
import Bottomsection from './component/bottomsection' ;
import Footer from './component/Footer' ;

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Herocard/>
     <Cardcarousel/>
     <Middle/>
     <Imagecard/>
     <Bottomsection/>
     <Customercard/>
     <Footer/>
    </div>
  );
}

export default App;
