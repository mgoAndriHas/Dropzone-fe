import React from "react";
import styles from "./ClassComponent.module.css";

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false, umur: 17 };
  }
  componentDidMount() {
    console.log("1. The Component has mounted succesfully -> clasComponent");
    this.setState({
      loaded: true,
    });
  }

  componentDidUpdate(prevProps) {
    console.log("2. prevProps", prevProps.umur);
    console.log("this.state.umur", this.state.umur);
    console.log(this.props.umur);
    if (this.props.umur !== prevProps.umur) {
      console.log(
        `ubah umur dari ${[prevProps.umur]} menjadi ${this.props.umur}`
      );
    }
  }

  componentWillUnmount() {
    console.log(
      "3. componentWillUnmount : Component unmounted -> ClasCompnent"
    );
  }

  render() {
    console.log("4. this.state.loaded", this.state.loaded);
    return (
      <div className={styles.classComponent}>
        <h1>ini ClassComponent</h1>
      </div>
    );
  }
}

export default ClassComponent;
