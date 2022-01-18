import './App.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import MyRoutes from './components/layout/MyRoutes';

function App() {
  return (
    <div className="App">
      <Header />
      <MyRoutes />
      <Footer />
    </div>
  );
}


export default App;
