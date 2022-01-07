import React from "react";
import { useState, useEffect } from "react";
import { NavItem } from "react-bootstrap";
function App() {
  const [chat, setChat] = useState("");
  const [list, setlist] = useState([]);

  const msg = (e) => {
    const newMsg = e.target.value;
    setChat(newMsg);
    console.log(newMsg);
  };

  const add = () => {
    let nnlist = [...list, setChat];
    setlist(nnlist);
    setChat("");
  };

  return (
    <>
      <div className="containerfluid">
        <div className="bg-dark text-light p-4">
          <span style={{ "font-size": "35px" }}>MyChatApp</span> By (Nitesh
          Satpute)(071_Nitesh_KH)
        </div>
        <div className="container">
          <div className="row ">
            <div className="col-8 ">
              <input
                className="w-100 mt-3 p-3"
                type="text"
                name=""
                value={chat}
                placeholder="Let's chat here..."
                onChange={msg}
              ></input>
            </div>
            <div className="col-4 ">
              <input
                className="btn btn-lg btn-outline-dark w-100 p-3 mt-3"
                type="button"
                value="SEND"
                onClick={add}
              ></input>
            </div>
          </div>
          <div>
            <div>
              {list.map((item, index) => (
                <div className="bg-primary" key={index}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
