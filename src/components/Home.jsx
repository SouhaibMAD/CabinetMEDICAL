import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 text-[#F8F9FA] bg-[url('assets/img/home1.jpeg')] bg-no-repeat bg-cover opacity-90">
      <div className=" w-full lg:w-4/5 space-y-5 mt-10">
        <h1 className="text-5xl font-bold leading-tight">
          Votre Santé, Notre Priorité – Soins Médicaux de Qualité
        </h1>
        <p>
          Notre cabinet médical vous offre des soins personnalisés et une prise en charge complète pour toute la famille. 
          Nos médecins expérimentés sont à votre écoute pour vous accompagner vers une meilleure santé, avec des services adaptés à vos besoins.
        </p>
        <br />
        <a href="#services">
          <Button title="Nos Services" />
        </a>
      </div>
    </div>
  );
};

export default Home;
