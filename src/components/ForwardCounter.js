import { useCallback } from "react";
import useCounter from "../hooks/use-counter";

import Card from "./Card";

const ForwardCounter = () => {
  const countFunc = useCallback((prevState) => prevState + 1, []);
  const counter = useCounter(countFunc);
  return <Card>{counter}</Card>;
};

export default ForwardCounter;
