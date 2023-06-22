import React, { FC } from "react";
import "./list.css";
import { IState } from "../../model/state";

const List: FC<IState> = ({ people }) => {
  const renderList = (): JSX.Element[] => {
    return people.map((el, i) => {
      return (
        <li
          className="List"
          key={i}
        >
          <div className="List-header">
            <img
              src={el.url}
              alt="picture"
              className="List-img"
            />
            <h2>{el.name}</h2>
          </div>
          <p>{el.age} years old</p>
          <p className="List-note">{el.note}</p>
        </li>
      );
    });
  };

  return <ul>{renderList()}</ul>;
};

export default List;
