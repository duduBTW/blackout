import React, { useState } from "react";
import { HomeContainer } from "../styles/home";
import ReactTooltip from "react-tooltip";
import Button from "../styles/component/Button";

export default function Inicio() {
  const defMessage = "Clique Para Copiar o IP";
  const [message, setMessage] = useState(defMessage);

  const buttons = ["Loja", "Discord"];

  return (
    <>
      <ReactTooltip
        effect="solid"
        place="bottom"
        type="light"
        getContent={() => message}
      />
      <HomeContainer>
        <div className="empty1" />
        <div className="empty2">
          <img width="50px" src="/ball.svg" alt="" />
        </div>
        <div
          data-tip={message}
          onClick={() => {
            var range = document.createRange();
            range.selectNode(document.getElementById("ip"));
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);
            document.execCommand("copy");
            window.getSelection().removeAllRanges();

            setMessage("Ip copiado!");

            setTimeout(() => {
              setMessage(defMessage);
            }, 3000);
          }}
          className="ip"
        >
          <label>IP</label>
          <span id="ip">TESTE.IP.SERVIDOR.COM</span>
        </div>
        <div className="buttons">
          {buttons.map((label) => (
            <Button label={label} />
          ))}
        </div>

        <h1 className="title">
          <span className="black">BLACK</span>
          <span className="out">OUT</span>
        </h1>
        <div className="line"></div>
        <h3 className="subtitle">PIXELMON</h3>

        <p className="message">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
          odio!
        </p>

        <div className="line-y first top" />
        <div className="line-y first bottom" />

        <div className="line-y second top" />
        <div className="line-y second bottom" />
      </HomeContainer>
    </>
  );
}
