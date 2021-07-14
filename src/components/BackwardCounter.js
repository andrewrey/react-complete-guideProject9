import { useCallback } from "react";
import useCounter from "../hooks/use-counter";

import Card from "./Card";

const BackwardCounter = () => {
  const backFunc = useCallback((prevState) => prevState - 1, []);
  const counter = useCounter(backFunc);

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
