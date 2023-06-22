import { Dispatch, SetStateAction } from "react";
import { IState } from "./state";

export interface IProps {
    people: IState["people"];
    setPeople: Dispatch<SetStateAction<IState["people"]>>;
  }