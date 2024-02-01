import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";
import images from "../components/DataComponent";

export default class AppClass extends Component{
  
  // imageData = ()=>{
  //   let data = [
  //     {
  //       id:1,
  //       img:elephant
  //     },
  //     {
  //       id:2,
  //       img:elephant
  //     },
  //     {
  //       id:3,
  //       img:elephant
  //     },
  //     {
  //       id:4,
  //       img:elephant
  //     }
  //   ]
  //   return data;
  // }

  render(){
    return(
      <div>
      <h1>Kalvium Gallery</h1>
      <div className="row">
        {images.map((image) => (
          <div className="column" key={image.id}>
            <img src={image.img} alt="photo" />
          </div>
        ))}
      </div>
    </div>
    )
  }
}
