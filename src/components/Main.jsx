import React from "react";
import styled from "styled-components";
const Div = styled.div`
  display: flex;
  margin: 40px;
  align-items: center;
  .box {
    min-width: 400px;
    min-height: 600px;
    border: 2px solid black;
    margin: 40px;
  }
  .inpt-btn {
    display: flex;
    flex-direction: column;
  }
  .inpt-btn > input {
    width: 200px;
    height: 40px;
  }
  .btn {
    width: 100px;
    height: 40px;
    margin: 40px;
  }
`;

const Main = () => {
  return (
    <Div>
      <div className="box"></div>

      <div className="inpt-btn">
        <input type="number" placeholder="Enter circle number" />
        <button className="btn">Shoot</button>
      </div>
    </Div>
  );
};

export default Main;
