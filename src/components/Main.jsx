import React from "react";
import styled from "styled-components";
const Div = styled.div`
  display: flex;
  margin: 40px;
  align-items: center;
  .box {
    min-width: 400px;
    min-height: 600px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    /* border: 10px solid black; */
    border-radius: 10px;
    margin: 40px;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
      rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
      rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  }
  .circle {
    min-width: 300px;
    min-height: 600px;
    margin-left: 5em;
    border-radius: 10px;
    /* border: 1px solid red; */
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
      rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
      rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    display: flex;
    flex-direction: column;
  }
  .circle > div,
  .box > div {
    width: 100px;
    min-height: 100px;

    border-radius: 50%;
    margin: auto;
    cursor: pointer;
  }
  .inpt-btn {
    display: flex;
    margin-left: auto;
    flex-direction: column;
  }
  .inpt-btn > input {
    width: 200px;
    height: 40px;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
      rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
      rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    outline: none;
  }
  input:focus,
  textarea:focus,
  select:focus {
    outline: none;
  }
  .btn {
    width: 100px;
    height: 40px;
    margin: 40px;
    background-color: black;
    color: white;
    font-size: bold;
    border-radius: 10px;
  }
  .btn:hover {
    background-color: purple;
    cursor: pointer;
  }
`;

const Main = () => {
  var istrue = true;
  const [inputvalue, setInputvalue] = React.useState(""); // it is input controlling
  const [circle, SetCircle] = React.useState([]);
  const [boxdata, setBoxdata] = React.useState([]);
  const handleinput = (e) => {
    setInputvalue(e.target.value); // input value controlling function
  };
  const handleshoot = () => {
    if (+inputvalue <= circle.length && +inputvalue > 0) {
      let curr = circle.filter((each, idx) => idx === inputvalue - 1);
      let data = circle.filter((each, idx) => idx !== inputvalue - 1);
      // console.log(data);
      SetCircle(data);
      setBoxdata([...boxdata, ...curr]); //here circle will removed and set into box;
    } else {
      alert("Enter Valid Input");
    }
  };
  React.useEffect(() => {
    if (istrue) {
      var arr = [];
      // var i = 1;
      for (var i = 1; i <= 5; i++) {
        // while (circle.length + boxdata.length <= 5) {
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
        // i++;
      }
      SetCircle(arr);
    } else return;
  }, []);
  // istrue = false;
  const revertCircle = (idp) => {
    var newarr = [];
    let curr = boxdata.filter((each) => each.id === idp);
    let data = boxdata.filter((each) => each.id !== idp);

    for (let i = 1; i <= 5; i++) {
      if (i === idp) {
        newarr.push(...curr);
      } else {
        let curdata = circle.filter((each) => each.id === i);
        console.log(curdata);
        newarr.push(...curdata);
      }
    }
    console.log(newarr);
    SetCircle(newarr);
    setBoxdata(data);
  };

  return (
    <Div>
      <div className="box">
        {boxdata.map((eachl, idx) => (
          <div
            key={idx}
            style={{ backgroundColor: `${eachl.color}` }}
            onClick={() => revertCircle(eachl.id)}
          ></div>
        ))}
      </div>
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
