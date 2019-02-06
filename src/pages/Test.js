import React from "react";

function Test(props) {
  return (
    <div className="questions-list">
      <h4
        className={
          props.itemlist.skipped !== undefined &&
          props.itemlist.skipped === true
            ? "question-error"
            : ""
        }
      >
        <span>{props.itemlist.id}.</span> {props.itemlist.question}
      </h4>
      <div className="options-bar">
        <input
          type="radio"
          name={"options" + props.itemlist.id}
          value="1"
          id={props.itemlist.id + "1"}
          onChange={() => props.handleChange(props.itemlist.id)}
        />
        <label htmlFor={props.itemlist.id + "1"}> 1</label>

        <input
          type="radio"
          name={"options" + props.itemlist.id}
          value="2"
          id={props.itemlist.id + "2"}
          onChange={() => props.handleChange(props.itemlist.id)}
        />
        <label htmlFor={props.itemlist.id + "2"}> 2</label>

        <input
          type="radio"
          name={"options" + props.itemlist.id}
          value="3"
          id={props.itemlist.id + "3"}
          onChange={() => props.handleChange(props.itemlist.id)}
        />
        <label htmlFor={props.itemlist.id + "3"}> 3</label>
      </div>
    </div>
  );
}

export default Test;
