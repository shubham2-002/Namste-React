import React from "react";
import ReactDOM from "react-dom/client";

//JSX (transpiled before ir reaches the Js engine) PARCEL - BABEL

//REACT Element
const jsxHeading = (
  <h1 id="heading" className="chnaging">
    Heloo I am from jsx
  </h1>
);

const display = () => {
  console.log("Helooo ")
};
const Title = () => {
  return <h2>THis is Namste React 😎</h2>;
};

//React Functional Component
function HeadingComponent() {
  return <h1>Hi this is Heading Component</h1>;
}
const name = "shubham";
const Textbox = () => <input placeholder="Type here"></input>;

const LoginBtn = () => {
  return <button onClick={()=>display()}>CLICK ME</button>;
};
const HeadinComponent = () => (
  <div>
    <h1>Hi this is Heading Component</h1>
    <h1>I am {name}</h1>
    <Title />
    <LoginBtn />
    <Textbox />
    {jsxHeading}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);
root.render(<HeadinComponent />);
