import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { storePeople } from "../../store/calcuSlice";
import { Text, Input } from "@chakra-ui/react";

const Index = () => {
  const people = useSelector(state => state.calcu.people);
  const dispatch = useDispatch();

  return (
    <div>
      <Text mb={3}>Number of People</Text>
      <Input
        type="number"
        py={6}
        mb={{ md: 0, base: 5 }}
        placeholder="0"
        textAlign="right"
        background="hsl(189, 41%, 97%)"
        fontWeight="700"
        fontSize="24px"
        value={people}
        color="hsl(183, 100%, 15%)"
        border="2px solid hsl(189, 41%, 97%)"
        _focus={{ border: "2px solid hsl(172, 67%, 45%)" }}
        min="1"
        onChange={e => dispatch(storePeople(e.target.value))}
      />
    </div>
  );
};

export default Index;
