import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Error from './Components/Pages/Error/Error';
import Footer from './Components/Footer/Footer';
import useTheme from './Components/Hooks/Theme';

function App() {

  const [theme] = useTheme()

  return (
    <div className={`body${theme === "dark" ? "body--dark": ""}`}>

    <Header/>

    <Routes>
      <Route path='' element={<Home/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='/*' element={<Error/>}/>
    </Routes>

    <Footer/>

    </div>
  );
}

export default App;
