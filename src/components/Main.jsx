import React from "react";
import styled from "styled-components";
const Div = styled.div`
  display: flex;
  padding: 40px;
  align-items: center;

  background-color: #537895;
  background-image: linear-gradient(315deg, #537895 0%, #09203f 74%);
  .box {
    width: 25vw;
    min-height: 600px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    text-align: center;
    box-sizing: border-box;
    background-color: #eec0c6;
    background-image: linear-gradient(315deg, #eec0c6 0%, #7ee8fa 74%);

    border-radius: 10px;
    margin: 40px;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
      rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
      rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  }

  .circle {
    width: 20vw;
    min-height: 600px;
    margin-left: 5em;
    border-radius: 10px;
    /* border: 1px solid red; */
    background-color: #eec0c6;
    background-image: linear-gradient(315deg, #eec0c6 0%, #7ee8fa 74%);

    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
      rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
      rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    display: flex;
    flex-direction: column;
  }
  .circle > div,
  .box > div {
    width: 100px;
    height: 100px;
    box-sizing: border-box;
    border-radius: 50%;
    border: 5px solid;
    /* margin: auto; */
    margin: auto;
    margin-top: 10px;
    margin-bottom: 10px;
    cursor: pointer;
  }
  .inpt-btn {
    box-sizing: border-box;
    border-radius: 40px;
    width: 30vw;
    height: 60vh;
    display: flex;
    margin-right: 40px;
    /* padding: 10em; */
    align-items: center;
    margin-left: auto;
    background-color: #f5f186;
    background-image: linear-gradient(315deg, #f5f186 0%, #9dfbc8 74%);
    flex-direction: column;
  }
  .inpt-btn > input {
    width: 200px;
    height: 40px;
    border-radius: 5px;
    font-weight: bold;
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
  #inpt-btn-p {
    font-size: 20px;
    font-weight: bold;
    color: black;
  }
  #inpt-btn-pe {
    font-size: 20px;
    font-weight: bold;
    color: red;
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
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const Main = () => {
  const [inputvalue, setInputvalue] = React.useState(""); // it is input controlling
  const [circle, SetCircle] = React.useState([]);
  const [boxdata, setBoxdata] = React.useState([]);
  const [currinput, setCurrinput] = React.useState(true);

  const handleinput = (e) => {
    setInputvalue(e.target.value); // input value controlling function
  };

  const handleshoot = () => {
    if (inputvalue <= circle.length && inputvalue > 0) {
      let curr = circle.filter((each, idx) => idx === inputvalue - 1);
      let data = circle.filter((each, idx) => idx !== inputvalue - 1);

      SetCircle(data);
      setBoxdata([...boxdata, ...curr]); //here circle will removed and set into box;
      if (currinput === false) {
        setCurrinput(true);
      }
      setInputvalue("");
    } else {
      setCurrinput(false);

      return;
    }
  };

  //here 5 circle will  mount to uI(circle) on 1st render;
  React.useEffect(() => {
    var arr = [];

    for (var i = 1; i <= 5; i++) {
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256); //color generation
      let b = Math.floor(Math.random() * 256);

      let payload = {
        id: i,
        color: `rgba(${r},${g},${b}, .6)`,
      };
      arr.push(payload);

      SetCircle(arr);
    }
  }, []);

  //this function is used for reverting circle to its orginal position
  const revertCircle = (idp) => {
    var newarr = [];
    let curr = boxdata.filter((each) => each.id === idp);
    let data = boxdata.filter((each) => each.id !== idp);

    newarr.push(...curr, ...circle);
    newarr.sort((a, b) => a.id - b.id);

    SetCircle(newarr);
    setBoxdata(data);

    if (circle.length < inputvalue - 1) {
      setCurrinput(false);
    } else {
      setCurrinput(true);
    }
  };

  return (
    <Div>
      <div className="box">
        <h2>Collection</h2>
        <br />

        {boxdata.map((eachl, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: `${eachl.color}`,
              borderColor: `${eachl.color}`,
            }}
            onClick={() => revertCircle(eachl.id)}
          ></div>
        ))}
      </div>
      <div className="circle">
        {circle.map((each) => (
          <div
            key={each.id}
            style={{
              backgroundColor: `${each.color}`,
              borderColor: `${each.color}`,
            }}
          ></div> //here all current circle is mapped
        ))}
      </div>

      <div className="inpt-btn">
        {currinput ? (
          <p id="inpt-btn-p">Enter Input Here</p>
        ) : (
          <p id="inpt-btn-pe">Enter Valid Input</p>
        )}
        <input
          type="number"
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
