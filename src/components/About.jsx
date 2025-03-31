import React from "react";
import img from "../assets/img/about.jpg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className="w-full lg:w-3/4 space-y-4">
        <h1 className="text-4xl font-semibold text-center lg:text-start text-primary">
          À Propos de Nous
        </h1>
        <p className="text-justify lg:text-start">
          Notre cabinet médical est dédié à votre santé et à votre bien-être. 
          Nous offrons des soins médicaux de qualité, assurés par une équipe 
          de professionnels expérimentés et à l’écoute de vos besoins.
        </p>
        <p className="text-justify lg:text-start">
          Grâce à notre approche personnalisée, nous proposons un suivi médical complet, 
          alliant prévention, diagnostic et traitement dans un environnement moderne et sécurisé. 
          Notre engagement est de vous offrir des soins adaptés à chaque étape de votre vie.
        </p>
        <p className="text-justify lg:text-start">
          Nous mettons à votre disposition des consultations générales et spécialisées, 
          avec des équipements de pointe pour garantir un service optimal. 
          Votre santé est notre priorité.
        </p>
      </div>
      <div className="w-full lg:w-3/4">
        <img className="rounded-lg" src={img} alt="Cabinet médical" />
      </div>
    </div>
  );
};

export default About;
