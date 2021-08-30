// import logo from "./logo.svg";
import "./App.css";
import Header from "./component/header";
import Product from "./component/product";

function App() {
return (
<div>
  <Header />
  <div className="row">
    <div className="col-lg-6">
      <Product />
    </div>
    <div className="col-lg-6">
      <Product />
    </div>
  </div>
</div>
);
}
export default App;