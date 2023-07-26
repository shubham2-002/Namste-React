import React from "react";
import ReactDOM from "react-dom/client";

const Header = React.createElement("div", { class: "title" }, [
  React.createElement("h1", {}, "This is Heading h1"),
  React.createElement("h2", {}, "This is Heading h2"),
  React.createElement("h3", {}, "This is Heading h3"),
]);

const Componentjsx = () => {
  return (
    <div className="title">
      <h1>This is HEading h1 from Component</h1>
      <h2>This is HEading h2 from Component</h2>
      <h3>This is HEading h3 from Component</h3>
    </div>
  );
};
const jsxHeader = (
  <div className="title">
    <h1>This is HEading h1 from jsx</h1>
    <h2>This is HEading h2 from jsx</h2>
    <h3>This is HEading h3 from jsx</h3>
    <br></br>
    <Componentjsx/>
  </div>
);

const Navbar=()=>{
    return(<div className="navbar">
      <img className="logo" src="http://s3.gomedia.us/wp-content/uploads/2015/05/Nike_Swoosh_Logo_Black_original.jpg"></img>
        <input  placeholder="Search"></input>
        <img className= "user"src="https://www.logolynx.com/images/logolynx/4b/4beebce89d681837ba2f4105ce43afac.png"></img>
    </div>)
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Navbar/>)
// root.render(jsxHeader);
// root.render(Header);
