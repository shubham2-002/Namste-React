import React from "react";
import UserClass from "./UserClass";

class About extends React.Component{
  constructor(props){
    super(props)
    console.log("Parent Construcotr is called")
  }
  componentDidMount(){
    console.log("Parent Did Mount")
  }
  render(){
    console.log("Parent render")
    return (
      <div>
        <h1>About</h1>
        <UserClass name={"Shubham"} number={"1st"}/>
        <UserClass name={"Shubham"} number={"2nd"}/>
        <UserClass name={"Shubham"} number={"3rd"}/>
      </div>
    );
  }
}
  

export default About;
