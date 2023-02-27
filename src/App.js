import "./App.css";
import Navs from "./Navs";
import { UserProvider } from "./context/userContext";
import {CartProvider} from './context/cartContext'
function App() {
  return (
    <div className="App">
      <CartProvider>
      <UserProvider>
        <Navs />
      </UserProvider>
      </CartProvider>
    </div>
  );
}

export default App;