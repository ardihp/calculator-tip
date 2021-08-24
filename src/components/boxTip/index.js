import React from "react";
import { useDispatch } from "react-redux";
import { storeTip } from "../../store/calcuSlice";
import { Button } from "@chakra-ui/react";

const Index = ({ tip }) => {
  const dispatch = useDispatch();

  const handleSelect = () => {
    dispatch(storeTip(tip));
  };

  return (
    <div>
      <Button
        py={6}
        textAlign="center"
        background="hsl(183, 100%, 15%)"
        rounded="md"
        fontSize="24px"
        width="100%"
        _hover={{
          background: "hsl(185, 41%, 84%)",
          color: "hsl(183, 100%, 15%)"
        }}
        _focus={{ background: "hsl(172, 67%, 45%)" }}
        onClick={() => handleSelect()}
      >
        {tip}%
      </Button>
    </div>
  );
};

export default Index;
