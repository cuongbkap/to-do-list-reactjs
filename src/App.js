// import logo from "./logo.svg";
import "./App.css";
import Header from "./component/header";
import Product from "./component/product";

function App() {
let products = [
{id:1,name:"xiaomi mi 10 lite",price:"9.000.000d",status:true},
{id:2,name:"xiaomi mi mix 4",price:"16.000.000d",status:true},
{id:3,name:"xiaomi mi mix 3",price:"10.000.000d",status:false},
{id:4,name:"xiaomi redmi note 10 pro",price:"7.000.000d",status:true},
];
let elements = products.map((product,index) => {
return <Product key="index" id={product.id} price={product.price} status={product.status}>
  {product.name}
</Product>
});
return (
<div>
  <Header />
  <div className="row">
    <div className="col-12">
      {elements}
    </div>
  </div>
</div>
);
}
export default App;