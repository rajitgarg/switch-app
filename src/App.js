import react, { Component } from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ServicesPage from "./ServicesPage";
import ContactPage from "./ContactPage";

import "./App.css";

const componentsMap = {
  "Home":HomePage,
  "About":AboutPage,
  "Services":ServicesPage,
  "Contact":ContactPage,
} 

export class App extends Component {
  state = {componentToRender:"Home"}

  handleClick = (componentToRender) => {
    this.setState({ componentToRender })
  }

  render() {
    const Component = componentsMap[this.state.componentToRender];
    return (
      <div>
        <div className="header">
          <h3><button onClick={()=>{this.handleClick('Home')}}>Home</button></h3>
          <h3><button onClick={()=>{this.handleClick('About')}}>About</button></h3>
          <h3><button onClick={()=>{this.handleClick('Services')}}>Services</button></h3>
          <h3><button onClick={()=>{this.handleClick('Contact')}}>Contact</button></h3>
        </div>
        <Component />
      </div>
    )
  }
}
export default App;
