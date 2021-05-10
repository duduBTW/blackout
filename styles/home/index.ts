import styled from "styled-components";

export const HomeContainer = styled.div`
  display: grid;
  /* grid-column-gap: 50px; */
  /* grid-row-gap: 20px; */
  height: calc(100vh - 300px);
  padding: 150px;

  @media only screen and (max-width: 1400px) {
    padding: 150px 100px;
  }

  @media only screen and (max-width: 1000px) {
    padding: 150px 70px;
  }

  @media only screen and (max-width: 600px) {
    height: calc(100vh - 200px);
    padding: 100px 50px;
    grid-template:
      "ip ip" 3fr
      "line line" 1px
      "title title" 2fr
      "subtitle subtitle" 1fr
      "buttons buttons" 1fr
      "message message" 2fr
      "empty1 empty2" 0.5fr
      / 3fr 1fr;
  }

  position: relative;
  grid-template:
    "empty1 empty2" 2fr
    "ip title" 1fr
    "line line" 1px
    "buttons subtitle" 1fr
    "message message" 1fr
    / 3fr 1fr;
  gap: 30px;
  align-items: center;

  .line {
    grid-area: line;
    width: 100%;
    height: 100%;
    background: #ae0200;
  }
  h1 {
    padding: 0px;
    margin: 0px;
  }

  h2 {
    margin: 0px;
    padding: 0px;
  }

  .empty1 {
    grid-area: empty1;
    height: 100%;
  }

  .empty2 {
    grid-area: empty2;
    align-self: flex-start;
    justify-self: flex-end;
    /* 
    @media only screen and (max-width: 600px) {
      align-self: flex-end;

      justify-self: flex-start;
    } */
  }

  .ip {
    grid-area: ip;

    display: flex;
    flex-direction: column;
    gap: 30px;
    font-size: clamp(26px, 2vw, 44px);
    /* font-size: clamp(1.5rem, 2.5vw, 4rem);  */
    letter-spacing: 0.2em;
    align-self: flex-end;
    cursor: pointer;

    label {
      font-size: 24px;
      font-weight: 200;
    }
  }

  .title {
    grid-area: title;
    align-self: flex-end;
    justify-self: flex-end;
    font-size: clamp(44px, 3vw, 60px);
    letter-spacing: 0.2em;
    font-weight: 600;
    .black {
      -webkit-text-stroke: 1px white;
      color: black;
    }
  }

  .buttons {
    grid-area: buttons;
  }

  .subtitle {
    justify-self: flex-end;
    grid-area: subtitle;
    font-size: clamp(18px, 1.5vw, 32px);
    font-family: "Minecraft";
    letter-spacing: 0.2em;
  }

  .emptyBottom {
    grid-area: emptyBottom;
  }

  .message {
    justify-self: flex-end;
    grid-area: message;
    font-weight: 300;

    font-size: clamp(0.75rem, 1vw, 1rem);
    letter-spacing: 0.2em;
  }

  .line-y {
    width: 1px;
    position: absolute;
  }

  .first {
    background: #00e8f0;
    left: 65px;

    @media only screen and (max-width: 1400px) {
      left: 35px;
    }

    @media only screen and (max-width: 600px) {
      left: 25px;
    }

    &.top {
      bottom: 0px;
      top: calc(55% + 35px);
    }

    &.bottom {
      top: 0px;
      bottom: calc(45% + 65px);
    }
  }

  .second {
    background: #ae0200;
    left: 75px;

    @media only screen and (max-width: 1400px) {
      left: 45px;
    }

    @media only screen and (max-width: 600px) {
      left: 15px;
    }

    &.top {
      bottom: 0px;
      top: calc(55% + 50px);
    }

    &.bottom {
      top: 0px;
      bottom: calc(45% + 50px);
    }
  }
`;
