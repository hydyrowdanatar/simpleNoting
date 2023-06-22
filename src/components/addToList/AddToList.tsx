import React, { Dispatch, FC, SetStateAction, useState } from "react";
import "./AddToList.css";
import { IProps } from "../../model/iprops";

const AddToList: FC<IProps> = ({ people, setPeople }) => {
  const [input, setinput] = useState({
    name: "",
    age: "",
    note: "",
    url: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    setinput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    if (!input.name || !input.age || !input.url) {
      return;
    }
    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.url,
        note: input.note,
      },
    ]);
    setinput({
      name: "",
      age: "",
      note: "",
      url: "",
    });
  };

  return (
    <div className="AddToList">
      <input
        type="text"
        className="AddToList-input"
        placeholder="Name"
        value={input.name}
        name="name"
        onChange={handleChange}
      />
      <input
        type="text"
        className="AddToList-input"
        placeholder="Age"
        value={input.age}
        name="age"
        onChange={handleChange}
      />
      <input
        type="text"
        className="AddToList-input"
        placeholder="Image Url"
        value={input.url}
        name="url"
        onChange={handleChange}
      />
      <textarea
        className="AddToList-input"
        placeholder="Note"
        name="note"
        value={input.note}
        onChange={handleChange}
      />
      <button
        className="AddToList-btn"
        onClick={handleClick}
      >
        Add to List
      </button>
    </div>
  );
};

export default AddToList;
