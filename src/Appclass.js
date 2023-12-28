import React from "react";

class Appclass extends React.Component {
  render() {
    return (
      <>
        <h1>Props example</h1>
        <br></br>
        firstName :{this.props.firstName}
        <br></br>
        lastName :{this.props.lastName}
        <br></br>
        Name :{this.props.name}
        <br></br>
      </>
    );
  }
}
Appclass.defaultProps = {
  name: "amit",
};

export default Appclass;
