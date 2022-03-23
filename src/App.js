import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import bannerImg from '../src/images/images/banner-img.jpg';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <section className='banner-img d-flex justify-content-center align-items-center'>
        <div>
          <p className='banner-text-1'>Art Of</p>
          <h2 className='banner-text-2'>Faija Akter Faiju</h2>
        </div>
      </section>
      <Shop></Shop>
    </div>
  );
}

export default App;
