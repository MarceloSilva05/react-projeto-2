import React from "react";
import "./Carrossel.css";
import img1 from "./01.jpg";
import img2 from "./02.jpg";
import img3 from "./03.jpg";
import Carousel from "react-elastic-carousel";
import Card from "../pages/Card/Card"
export default function Carrossel() {

    return (
     <div className="container">
            <Carousel enableAutoPlay> 
                <Card img={img1}/>
                <Card img={img2}/>
                <Card img={img3}/>
            </Carousel>
     </div>
    )
}