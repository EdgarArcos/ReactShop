import './App.css';
import { Banner } from './components/banner';
import { ProductList } from './components/Items/ProductList';
import {Navbar} from './components/Navbar';
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <div>
      <ProductList/>
      </div>
    </div>
  );
}

export default App;
