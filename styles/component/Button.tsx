import React from "react";
import { ButtonContainer } from "../home";

export default function Button({ label }: { label: string }) {
  return (
    <ButtonContainer
      onClick={() => window.open("https://discord.gg/PcX2w8GqaW", "_blank")}
    >
      <div className="button">{label}</div> <div className="effect"></div>
    </ButtonContainer>
  );
}
