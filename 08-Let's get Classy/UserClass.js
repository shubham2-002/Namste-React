import React from "react";
// import {Component}from "react";  Other method by destructure

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);

    this.state = {
      count: 0,
      count2: 2,
    };
    console.log(this.props.number+" Child Construcotr is called")
  }

  componentDidMount(){
    console.log(this.props.number+" Child Did Mount")
  }
  // Create State in Class Based Compoonents
  render() {
    const { name } = this.props;
    const { count2 } = this.state;
    console.log( this.props.number+" Child render")
    return (
      <div>
        <h1>Name : {name}</h1>
        <h2>Count : {this.state.count} </h2>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Increment
        </button>
        <h2>Count : {count2} </h2>
        <h2>Location: Maharashtra</h2>
        <h3>Contact : @Shubham@gail.com</h3>
        
      </div>
    );
  }
}
export default UserClass;
