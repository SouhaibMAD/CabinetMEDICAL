import React from "react";
import Button from "../layouts/Button";
import BlogCard from "../layouts/BlogCard";
import img1 from "../assets/img/blog1.jpg";
import img2 from "../assets/img/blog2.jpg";
import img3 from "../assets/img/blog3.jpg";
import img4 from "../assets/img/blog4.jpg";
import img5 from "../assets/img/blog5.jpg";
import img6 from "../assets/img/blog6.jpg";

const Blogs = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24">
      <div className="flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-start">
            Nos Derniers Articles
          </h1>
          <p className="mt-2 text-center lg:text-start">
            Découvrez nos conseils et analyses médicales pour prendre soin de votre santé au quotidien.
          </p>
        </div>
        <div className="mt-4 lg:mt-0">
          <Button title="Voir tous les articles" />
        </div>
      </div>
      <div className="my-8">
        <div className="flex flex-wrap justify-center gap-5">
          <BlogCard img={img1} headlines="Comment améliorer la qualité de votre sommeil ?" />
          <BlogCard img={img2} headlines="Les meilleurs aliments pour un cœur en bonne santé" />
          <BlogCard img={img3} headlines="Vaccinations pédiatriques : ce que les parents doivent savoir" />
          <BlogCard img={img4} headlines="Prendre soin de sa santé mentale au quotidien" />
          <BlogCard img={img5} headlines="Pourquoi l'exercice physique est essentiel pour votre bien-être ?" />
          <BlogCard img={img6} headlines="Les clés pour une peau en bonne santé" />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
