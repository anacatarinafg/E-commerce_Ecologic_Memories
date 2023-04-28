import React from "react";
import { SiMinutemailer } from "react-icons/si";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="newsletter__box">
        <form className="newsletter__form" method="get" action="/">
          <label className="newsletter__label">
            Subscreve para receber as melhores novidades e promoções!
            <input
              type="text"
              placeholder="example@gmail.com"
              className="newsletter__input"
              required
            ></input>
          </label>
          <input
            type="submit"
            className="newsletter__submit"
            value="Subscrever agora!"
          ></input>

          {/* nao esquecer otimizar as imagens */}
        </form>
      </div>
    </div>
  );
};
export default Newsletter;


