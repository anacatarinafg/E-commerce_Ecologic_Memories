import React from "react";
import Confetti from "react-confetti";

import { Success } from "../components";

const confetti = () => {
  return (
    <div>
      <Confetti
        className="confetti__falling"
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
      <Success />
    </div>
  );
};

export default confetti;
