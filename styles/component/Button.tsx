import React from "react";
import { ButtonContainer } from "../home";

export default function Button({ label }: { label: string }) {
  return (
    <ButtonContainer
      onClick={() => window.open("https://discord.gg/5gT6EAGCm3", "_blank")}
    >
      <div className="button">{label}</div> <div className="effect"></div>
    </ButtonContainer>
  );
}
