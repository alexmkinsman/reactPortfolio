import React from "react";
import "./style.css";
import Headshot from "../assets/rosa-le-crop.png"

function AboutPage (){
    return (
        <section className="left">
            <h1 className="H1">Hi there. It's nice to meet you! I'm Alex!</h1>
            <img className="headshot" src={Headshot} alt="Headshot of Rosa"></img>
            <p>Filler</p>
            <p>lorem filler</p>
        </section>
    )
};

export default AboutPage;