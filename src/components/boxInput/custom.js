import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeTip } from "../../store/calcuSlice";
import { Input } from "@chakra-ui/react";

const Custom = () => {
  const tip = useSelector(state => state.calcu.tip);
  const dispatch = useDispatch();

  return (
    <div>
      <Input
        type="number"
        py={6}
        textAlign="right"
        placeholder="Custom"
        background="hsl(189, 41%, 97%)"
        fontSize="24px"
        fontWeight="700"
        color="hsl(183, 100%, 15%)"
        value={tip}
        border="2px solid hsl(189, 41%, 97%)"
        _focus={{ border: "2px solid hsl(172, 67%, 45%)" }}
        onChange={e => dispatch(storeTip(e.target.value))}
        min="0"
      />
    </div>
  );
};

export default Custom;
