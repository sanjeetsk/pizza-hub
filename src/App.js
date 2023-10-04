import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import { Provider } from 'react-redux';
import { store } from './store';
import SignUpLogin from './pages/signUpLogin/Index';
import Cart from './pages/Cart/Cart';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <ToastContainer />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<SignUpLogin />} />
          <Route path='cart' element={<Cart />} />
          {/* <Route path='cart' element ={<Cart />} />
        <Route path='profile' element ={<Cart />} /> */}
        </Routes>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
