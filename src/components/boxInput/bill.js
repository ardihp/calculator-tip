import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeBill } from "../../store/calcuSlice";
import { Text, Input } from "@chakra-ui/react";

const Index = () => {
  const bill = useSelector(state => state.calcu.bill);
  const dispatch = useDispatch();

  return (
    <div>
      <Text mb={3}>Bill</Text>
      <Input
        type="number"
        py={6}
        placeholder="00.00"
        textAlign="right"
        background="hsl(189, 41%, 97%)"
        fontWeight="700"
        fontSize="24px"
        value={bill}
        color="hsl(183, 100%, 15%)"
        border="2px solid hsl(189, 41%, 97%)"
        _focus={{ border: "2px solid hsl(172, 67%, 45%)" }}
        min="0"
        onChange={e => dispatch(storeBill(e.target.value))}
      />
    </div>
  );
};

export default Index;
