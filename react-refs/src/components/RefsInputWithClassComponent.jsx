import React, { Component } from "react";

export class RefInpWithCC extends Component {
  constructor(props) {
    super(props);
    //   First Method:-  Refs Example by using React.createRefs method.
    this.inputRefs = React.createRef();

    //   Second Method:-  Refs Example by using the call back method.
    this.cbRef = null;
    this.setCbRef = (element) => {
      return (this.cbRef = element);
    };
  }

  componentDidMount() {
    //First Method
    // this.inputRefs.current.focus();

    //Second Method
    if (this.cbRef) {
      this.cbRef.focus();
    }
  }

  render() {
    return (
      <div>
        <input ref={this.inputRefs} />
        <input type="text" ref={this.setCbRef} />
      </div>
    );
  }
}

export default RefInpWithCC;
