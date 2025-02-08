import "./App.css";
import Price from "./components/price/Price";
import ProductName from "./components/productname/ProductName";
import Image from "./components/image/Image";
import Description from "./components/description/Description";

function App() {
  const FistName = "Roua";

  return (
    <div id="App">
      <div id="containor">
        <ProductName />
        <Price />
        <Image />
        <Description />
        {FistName ? (
          <h1>These flowers are for you {FistName} 🌷</h1>
        ) : (
          <h1>Hello There</h1>
        )}
        {FistName && (
          <img
            id="flower"
            src="https://m.media-amazon.com/images/I/51M1pKcDpQL._AC_UF1000,1000_QL80_.jpg"
          />
        )}
      </div>
    </div>
  );
}

export default App;
