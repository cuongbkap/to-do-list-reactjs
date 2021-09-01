import "./App.css";
// import React, { Component } from "react";
import TopMenu from "./component/Header/TopMenu";
import Banner from "./component/Header/Banner";
import Section1 from "./component/Section/Section1";
import  Section2 from "./component/Section/Section2";
import Section3 from "./component/Section/Section3";
import Footer from "./component/Footer/Footer";
// class Four extends Component {
// render() {
// return (
// <div>
//   <button>React component</button>
// </div>
// );
// }
// }

// function DemoProps(props){
// return <div>

//   <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
//     <div className="thumbnail">
//       <img src={props.img} alt={props.title} />
//       <div className="caption">
//         <h3>{props.title}</h3>
//         <p>
//           {props.content}
//         </p>
//         <p>
//           <a href="!#" className="btn btn-primary">Action</a>
//           <a href="!#" className="btn btn-default">Action</a>
//         </p>
//       </div>
//     </div>
//   </div>

// </div>
// }

// class DemoCl extends Component {
//   render() {
//     return (
//       <div>
          
//           <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
//             <div className="thumbnail">
//               <img src={this.props.img} alt=""/>
//               <div className="caption">
//                 <h3>{this.props.title}</h3>
//                 <p>
//                   {this.props.content}
//                 </p>
//                 <p>
//                   <a href="!#" className="btn btn-primary">Action</a>
//                   <a href="!#" className="btn btn-default">Action</a>
//                 </p>
//               </div>
//             </div>
//           </div>
          
//       </div>
//     );
//   }
// }


function App() {
return (
<div>
  <TopMenu />
  <Banner />
  <Section1 />
  <Section2 />
  <Section3 />
  <Footer />
  {/* <Four /> */}
  {/* <DemoProps img="https://d25tv1xepz39hi.cloudfront.net/2017-08-21/files/landscape-photography_1645.jpg"
    title="Landscape" content="Landscape Demo" />
    <DemoCl img="https://d25tv1xepz39hi.cloudfront.net/2017-08-21/files/landscape-photography_1645.jpg"
    title="Landscape" content="Landscape Demo" />
    <DemoCl img="https://d25tv1xepz39hi.cloudfront.net/2017-08-21/files/landscape-photography_1645.jpg"
    title="Landscape" content="Landscape Demo" /> */}
</div>
);
}
export default App;