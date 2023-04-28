import React from "react";
import Confetti from "react-confetti";

const confetti = () => {
  return (
    <div>
    <Confetti className="confetti"
      drawShape={(ctx) => {
        ctx.beginPath();
        for (let i = 0; i < 22; i++) {
          const angle = 0.35 * i;
          const x = (0.2 + 1.5 * angle) * Math.cos(angle);
          const y = (0.2 + 1.5 * angle) * Math.sin(angle);
          ctx.lineTo(x, y);
        }
        ctx.stroke();
        ctx.closePath();
      }}
    />
    <div className="sucess">
      <div className="sucess__box">
        <h2>Pagamento concluído com sucesso!</h2>
        <p>Transição número: 1231231231</p>
        <p>Muito obrigada!</p>
      </div>
    </div> 
    </div>

  );
};

export default confetti;
