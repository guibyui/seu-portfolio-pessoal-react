import React from "react";
import { Link } from "react-scroll";
import { FiInstagram, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

import "../styles/index-styles.css";

import Navbar from "../components/Navbar";

const IndexPage = () => {
  return (
    <>
      <header>
        <div className="logo">
          <Navbar />
        </div>
      </header>

      {/* <!-- Intro --> */}
      <section className="intro" id="home">
        <h1 className="section__title section__title--intro">
          Olá, Eu Sou <strong>#</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">#</p>
        {/* <!-- Sua foto e seu nome no # --> */}
        <img src="#" alt="Uma foto do(a) #" className="intro__img" />
      </section>

      {/* <!-- My Services --> */}
      <section className="my-services" id="services">
        <h2 className="section__title section__title--services">
          O que eu Faço?
        </h2>
        <div className="services">
          <div className="">
            <h3>*O que você oferece?*</h3>
            <p className="">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
              rem dolor animi, exercitationem officia reiciendis accusantium
              vero? Repellat, ipsam inventore asperiores dolorem consequuntur
              dolore, animi maxime dolorum accusantium recusandae vitae? Enim
              debitis cupiditate hic eveniet nulla quo repudiandae sit
              dignissimos porro non est, aspernatur adipisci magnam impedit
              itaque, soluta fugiat veniam laboriosam commodi ipsa. Nulla
              voluptas quis in ea quibusdam!
            </p>
          </div>
          <div className="">
            <h3>*O que você oferece?*</h3>
            <p className="">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
              rem dolor animi, exercitationem officia reiciendis accusantium
              vero? Repellat, ipsam inventore asperiores dolorem consequuntur
              dolore, animi maxime dolorum accusantium recusandae vitae? Enim
              debitis cupiditate hic eveniet nulla quo repudiandae sit
              dignissimos porro non est, aspernatur adipisci magnam impedit
              itaque, soluta fugiat veniam laboriosam commodi ipsa. Nulla
              voluptas quis in ea quibusdam!
            </p>
          </div>
        </div>

        <a href="#work" className="btn">
          Meus Projetos
        </a>
      </section>

      {/* <!-- About Me --> */}
      <section className="about-me" id="about">
        <h2 className="section__title section__title--about">Quem Sou Eu</h2>
        <p className="section__subtitle section__subtitle--about">
          *Sua Localização*
        </p>

        <div className="about-me__body">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            corrupti minima quibusdam, perferendis blanditiis impedit quaerat
            necessitatibus. Quo inventore mollitia aliquid quae totam nesciunt
            doloremque voluptatibus, qui voluptate praesentium? Minus?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum modi,
            veniam ab vero alias reprehenderit voluptates cumque voluptatum
            autem laborum sed, quia ratione mollitia, dolor incidunt? Quisquam
            illo facere itaque.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste ea
            non ipsam hic. Nisi possimus, sunt, quia voluptatem a obcaecati
            labore at blanditiis reiciendis nobis temporibus aliquid odio iste
            incidunt.
          </p>
        </div>
        {/* <!-- Sua foto e seu nome no # --> */}
        <img src="#" alt="Uma foto da(o) #" className="about-me__img" />
      </section>

      <section className="my-work" id="work">
        <h2 className="section__title section__title--work">Meus Projetos</h2>
        <p className="section__subtitle section__subtitle--work">
          Uma Seleção rápida dos meus Projetos Pessoais
        </p>
        <p>
          Habilidades/Interesses: *QUAIS SÃO AS SUAS HABILIDADES OU SEUS
          INTERESSES.*
        </p>

        <div className="portfolio">
          <div className="portfolio__container">
            {/* <!-- Faça o link para o seu GitHub Repo --> */}
            <Link
              to="/create-event"
              target="_blank"
              rel="noreferrer"
              className="portfolio__item"
            >
              {/* <!-- Faça o link para uma thumbnail do seu projeto  --> */}
              <img src="" alt="" className="portfolio__img" />
            </Link>
          </div>
          <div className="portfolio__container">
            {/* <!-- Faça o link para o seu GitHub Repo --> */}
            <Link
              to="/create-event"
              target="_blank"
              rel="noreferrer"
              className="portfolio__item"
            >
              {/* <!-- Faça o link para uma thumbnail do seu projeto  --> */}
              <img src="" alt="" className="portfolio__img" />
            </Link>
          </div>

          <div className="portfolio__container">
            {/* <!-- Faça o link para o seu GitHub Repo --> */}
            <Link
              to="/create-event"
              target="_blank"
              rel="noreferrer"
              className="portfolio__item"
            >
              {/* <!-- Faça o link para uma thumbnail do seu projeto  --> */}
              <img src="" alt="" className="portfolio__img" />
            </Link>
          </div>

          <div className="portfolio__container">
            {/* <!-- Faça o link para o seu GitHub Repo --> */}
            <Link
              to="/create-event"
              target="_blank"
              rel="noreferrer"
              className="portfolio__item"
            >
              {/* <!-- Faça o link para uma thumbnail do seu projeto  --> */}
              <img src="" alt="" className="portfolio__img" />
            </Link>
          </div>
        </div>
      </section>

      <footer className="footer" id="footer">
        <ul className="social-list">
          <li className="social-list__item">
            {/* <!-- Link o seu email no # --> */}
            <a
              href="mailto:#?Subject=Oi #, eu tenho uma pergunta!"
              className="social-list__link items-center"
              target="_blank"
            >
              <FiMail />
              Email Me
            </a>
          </li>

          <li className="social-list__item">
            {/* <!-- Link seu WhatsApp no # --> */}
            <a
              href="https://wa.me/#/?text=Oi !"
              className="social-list__link items-center"
              target="_blank"
            >
              <FaWhatsapp />
              WhatsApp
            </a>
          </li>

          <li className="social-list__item">
            {/* <!-- Link seu Instagram no # --> */}
            <a
              href="https://www.instagram.com/#/"
              className="social-list__link items-center"
              target="_blank"
            >
              <FiInstagram />
              Instagram
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default IndexPage;
