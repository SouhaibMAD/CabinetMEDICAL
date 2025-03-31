import React from "react";
import Button from "../layouts/Button";
import { RiMicroscopeLine } from "react-icons/ri";
import ServicesCard from "../layouts/ServicesCard";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";

const Services = () => {
  const icon1 = (
    <RiMicroscopeLine size={35} className=" text-[#1E3A5F]" />
  );
  const icon2 = (
    <MdHealthAndSafety size={35} className=" text-[#1E3A5F]" />
  );
  const icon3 = <FaHeartbeat size={35} className=" text-[#1E3A5F]" />;

  return (
    <div id="services" className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16">
      <div className="flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-start">
            Nos Services Médicaux
          </h1>
          <p className="mt-2 text-center lg:text-start">
            Des soins de qualité pour vous et votre famille, assurés par des professionnels de santé expérimentés.
          </p>
        </div>
        <div className="mt-4 lg:mt-0">
          <Button title="Voir tous les services" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 pt-14">
        <ServicesCard 
          icon={icon1} 
          title="Examens et Analyses" 
          description="Des analyses précises et des examens médicaux complets pour un diagnostic fiable." 
        />
        <ServicesCard 
          icon={icon2} 
          title="Consultations Médicales" 
          description="Des consultations avec nos médecins spécialisés pour répondre à tous vos besoins de santé." 
        />
        <ServicesCard 
          icon={icon3} 
          title="Suivi et Prévention" 
          description="Un accompagnement médical personnalisé pour prévenir les maladies et assurer votre bien-être." 
        />
      </div>
    </div>
  );
};

export default Services;
