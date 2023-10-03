import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='cart' element ={<Cart />} />
        <Route path='profile' element ={<Cart />} /> */}
        </Routes>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
