// import React, { Component } from "react";
import Fruit from "./Fruit";
import Date from "./Date";
// class App extends Component {
//   render() {
//     return (
//       <>
//         <h1>Class Props Example</h1>
//         {this.props.firstName}
//         {this.props.lastName}
//       </>
//     );
//   }
// }

function App(props) {
  // const no1 = parseInt(props.no1);
  // const no2 = parseInt(props.no2);

  const fruits1 = {
    name: "Mango",
    color: "Yellow",
  };

  const fruits2 = {
    name: "Apple",
    color: "red",
  };

  const { lastName, mobile, firstName } = props;
  return (
    <>
      <Date data={{ day: 11, month: "December", year: 2018 }} />
      {/*
      {props.firstName}
      {props.lastName} */}
      {/*<h2>Sum Example</h2>
      No1:{no1}
      <br></br>
      No2:{no2}
      <br></br>
      Sum is :{no1 + no2}
      <br></br>
      courseName :{props.courseName}
     */}
      {/* <h1>Children Example</h1>
      {props.children} */}
      FirstName : {firstName}
      <br></br>
      LastName : {lastName}
      <br></br>
      Mobile : {mobile}
      <br></br>
      CourseName : {props.courseName}
      <>
        <Fruit fruits={fruits1} />
        <Fruit fruits={fruits2} />
      </>
    </>
  );
}

App.defaultProps = {
  courseName: "React",
};

export default App;
