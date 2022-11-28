import React, { useState } from "react";
import { IState as Props } from "../App";

interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    image: "",
    note: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const handleClick = (): void => {
    if (!input.name || !input.age || !input.image) {
      return;
    }
    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.image,
        note: input.note,
      },
    ]);
    setInput({
      name: "",
      age: "",
      image: "",
      note: "",
    });
  };

  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="Name"
        className="AddToList-input"
        value={input.name}
        onChange={handleChange}
        name="name"
      />
      <input
        type="text"
        placeholder="Age"
        className="AddToList-input"
        value={input.age}
        onChange={handleChange}
        name="age"
      />
      <input
        type="text"
        placeholder="Image"
        className="AddToList-input"
        value={input.image}
        onChange={handleChange}
        name="image"
      />
      <textarea
        placeholder="Notes"
        className="AddToList-input"
        value={input.note}
        onChange={handleChange}
        name="note"
      />
      <button className="AddToList-btn" onClick={handleClick}>
        Add to List
      </button>
    </div>
  );
};

export default AddToList;
