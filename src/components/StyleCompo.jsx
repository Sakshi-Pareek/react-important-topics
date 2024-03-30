import React from "react";
import styled from "styled-components";

const StyleCompo = () => {
  const H1 = styled.h1`
    color: white;
    font-size: 60px;
    text-align: center;
    font-weight: bold;
  `;
  const P1 = styled.p`
    color: blue;
    font-size: 24px;
    text-align: center;
  `;
  const Button = styled.button`
    color: black;
    background: aqua;
    padding: 8px 16px;
    border-radius: 8px;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    margin-left:auto;
    margin-right:auto;
  `;
  return (
    <>
      <div className="bg-black py-10 mt-10">
        <H1>Styled Components</H1>
        <P1>
          Cillum culpa deserunt enim et eiusmod quis proident consequat tempor
          ipsum sunt esse.
        </P1>
        <Button className="mt-5">Click ME!</Button>
      </div>
    </>
  );
};

export default StyleCompo;
