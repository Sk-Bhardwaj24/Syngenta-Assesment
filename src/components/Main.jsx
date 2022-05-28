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
  .circle {
    min-width: 300px;
    min-height: 600px;
    margin-left: 5em;
    border: 1px solid red;
    display: flex;
    flex-direction: column;
  }
  .circle > div {
    width: 100px;
    min-height: 100px;
    /* border: 1px solid red; */
    border-radius: 50%;
    margin: auto;
  }
  .inpt-btn {
    display: flex;
    margin-left: auto;
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
  const [inputvalue, setInputvalue] = React.useState(""); // it is input controlling
  const [shootvalue, setShootvalue] = React.useState("");
  const [circle, SetCircle] = React.useState([]);
  const handleinput = (e) => {
    setInputvalue(e.target.value); // input value controlling function
  };
  const handleshoot = () => {
    if (+inputvalue <= 5 && +inputvalue > 0) {
      setShootvalue(+inputvalue);
      circle.filter(() => {}); //here circle will removed and set into box;
    } else {
      alert("Enter Valid Input");
    }
  };
  React.useEffect(() => {
    var arr = [];
    for (var i = 1; i <= 5; i++) {
      let payload = {
        id: i,
        color:
          "rgb(" + //generating random color and setting to color properties of payload
          Math.floor(Math.random() * 256) +
          "," +
          Math.floor(Math.random() * 256) +
          "," +
          Math.floor(Math.random() * 256) +
          ")",
      };
      arr.push(payload);
    }
    SetCircle(arr);
    console.log(circle);
  }, []);

  return (
    <Div>
      <div className="box"></div>
      <div className="circle">
        {circle.map((each) => (
          <div key={each.id} style={{ backgroundColor: `${each.color}` }}></div> //here all current circle is mapped
        ))}
      </div>

      <div className="inpt-btn">
        <input
          type="text"
          placeholder="Enter circle number" // user input
          value={inputvalue}
          onChange={handleinput}
        />
        <button className="btn" onClick={handleshoot}>
          Shoot
        </button>
      </div>
    </Div>
  );
};

export default Main;
