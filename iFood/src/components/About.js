import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component{
  constructor(props){
    super(props)

  }
  componentDidMount(){
   
  }
  render(){
   
    return (
      <div>
        <h1>About</h1>

        <UserClass name={"Shubham"} number={"1st"}/>
        <div>
          Logged In User
          <UserContext.Consumer>
            {(data)=>console.log(data)}
          </UserContext.Consumer>
        </div>
      </div>
    );
  }
}
  

export default About;
