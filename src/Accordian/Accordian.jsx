import React, { useState } from "react";
import { data } from "./data";
import "./Style.css";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMulti, setEnableMulti] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleClick(getId) {
    setSelected(getId === selected ? null : getId);
  }

  function handleMultiClick(getId) {
    let cpyMultiple = [...multiple];

    const findIndexOfId = cpyMultiple.indexOf(getId);

    console.log(findIndexOfId);

    if (findIndexOfId === -1) cpyMultiple.push(getId);
    else cpyMultiple.splice(findIndexOfId, 1);

    setMultiple(cpyMultiple); 
  }
  console.log(multiple);
  return (
    <div className="wrapper">
      <h1> Accordian </h1>
      <button onClick={() => setEnableMulti(!enableMulti)}>
        {" "}
        Enable Multiple Selection{" "}
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((itm) => (
            <div className="itm">
              <div
                onClick={
                  enableMulti
                    ? () => handleMultiClick(itm.id)
                    : () => handleSingleClick(itm.id)
                }
                className="title"
              >
                <h3>{itm.question}</h3>
                <span> + </span>
              </div>
              {
                enableMulti ? multiple.indexOf(itm.id) !== -1 && 
               ( <div className="content">
                <h4>{itm.answer}</h4>
              </div> ): selected === itm.id && (<div className="content">
                <h4>{itm.answer}</h4> </div> 
                           ) }
              {/* {selected === itm.id || multiple.indexOf(itm.id) !== -1 ? (
                <div className="content">
                  <h4>{itm.answer}</h4>
                </div>
              ) : null} */}
            </div>
          ))
        ) : (
          <div> Data Not Found</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
