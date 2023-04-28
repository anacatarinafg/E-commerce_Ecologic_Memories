import React from "react";

import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__headline">
        <h1>Envia-nos o teu inquérito</h1>
      </div>
      <div className="contact__request">
        <p>
          Completa o formulário abaixo e a nossa equipa irá contatar-lhe assim
          que possível.
        </p>
      </div>
      <div className="contact__information">
        <div className="contact__number">
          <p className="contact__title">Contacto:</p>
          <p className="contact__info">
            +351 963 232 232 <span>info@ecologicmemories.com</span>
          </p>
        </div>
        <div className="contact__adress">
          <p className="contact__title">Morada:</p>
          <p className="contact__info">
            Avenida da Liberdade <span>Braga, Portugal</span>
          </p>
        </div>
      </div>
      <form method="get" action="/" className="contact__details">
        <div className="contact__select">
          <h2>Quero</h2>
          <div className="contact__radio">
            <input type="radio" name="option" id="buy" value="contact"></input>
            <label for="buy">
              <span>Comprar</span>
            </label>

            <input type="radio" name="option" id="sell" value="contact"></input>
            <label for="sell">
              <span>Vender</span>
            </label>

            <input type="radio" name="option" id="info" value="contact"></input>
            <label for="info">
              <span>Informações</span>
            </label>
          </div>
        </div>
        <div className="contact__user">
          <label for="name">Nome</label>
          <input type="text" id="name" required></input>
          <label for="surname">Apelido</label>
          <input type="text" id="surname" required></input>
          <label for="email">Email</label>
          <input type="email" id="email" required></input>
          <label for="number">Código postal</label>
          <input type="text" id="number" maxlength="7" required></input>
          <label for="tel">Número de telemóvel</label>
          <input type="tel" id="tel" required></input>
          <label for="comment">Comentário...</label>
          <textarea placeholder="Type here..."></textarea>
        </div>
        <div className="contact__terms">
          <input type="radio" value="yes"></input>
          <span className="contact__terms--text">
            Eu aceito os <a href="">Política de privacidade</a> e{" "}
            <a href="">Termos e uso</a>
          </span>
          <button className="contact__send">
            <HiOutlineMail />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
