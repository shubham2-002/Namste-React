import React from "react";
import UserClass from "./UserClass";

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
       
      </div>
    );
  }
}
  

export default About;
