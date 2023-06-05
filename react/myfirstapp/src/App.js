import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Expense } from './components/Expense/Expense';
import './App.css';
import { OTP } from './components/OTPGen/OTP';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <OTP/>
      <Expense />
      <Footer />
    </div>
  );
}

export default App;
