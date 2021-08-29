import '../css/App.scss';
import Products from './pages/products/Products';
import Cart from './pages/cart/Cart';
import { Switch, Route } from 'react-router';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/"><Products /></Route>
        <Route path="/cart"><Cart /></Route>
      </Switch>
    </div>
  );
}

export default App;
