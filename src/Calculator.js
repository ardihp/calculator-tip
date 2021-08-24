import React, { useEffect } from "react";
import { Flex, Box, Text, Grid, Image, Button } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { storeTipAmount, storeTotal, reset } from "./store/calcuSlice";

import BoxTip from "./components/boxTip";
import BillInput from "./components/boxInput/bill";
import CustomInput from "./components/boxInput/custom";
import PeopleInput from "./components/boxInput/people";

const Calculator = () => {
  const bill = useSelector(state => state.calcu.bill);
  const people = useSelector(state => state.calcu.people);
  const tip = useSelector(state => state.calcu.tip);
  const tipAmount = useSelector(state => state.calcu.tipAmount);
  const total = useSelector(state => state.calcu.total);
  const dispatch = useDispatch();

  useEffect(() => {
    if (bill > 0 && people > 0 && tip > 0) {
      const tipAmount = ((bill / people) * tip) / 100;
      const total = bill / people + tipAmount;
      dispatch(storeTipAmount(tipAmount));
      dispatch(storeTotal(total));
    }
  });

  return (
    <Flex
      justifyContent={{ lg: "center", md: "center", base: "flex-end" }}
      alignItems="center"
      height={{ base: "100vh" }}
      direction="column"
    >
      <Flex mb={14}>
        <Image src={process.env.PUBLIC_URL + "./images/logo.svg"} alt="logo" />
      </Flex>
      <Grid
        p={8}
        background="white"
        rounded="2xl"
        width={{ lg: "65vw", md: "85vw", base: "100%" }}
        templateColumns={{ md: "1fr 1fr", base: "1fr" }}
        columnGap={8}
      >
        <Flex direction="column">
          <Flex direction="column">
            <BillInput />
          </Flex>
          <Flex direction="column" my={5}>
            <Text mb={3}>Select Tip %</Text>
            <Grid
              templateColumns={{ md: "repeat(3, 1fr)", base: "repeat(2, 1fr)" }}
              gap={3}
              color="white"
            >
              <BoxTip tip="5" />
              <BoxTip tip="10" />
              <BoxTip tip="15" />
              <BoxTip tip="25" />
              <BoxTip tip="50" />
              <Box>
                <CustomInput />
              </Box>
            </Grid>
          </Flex>
          <Flex direction="column">
            <PeopleInput />
          </Flex>
        </Flex>
        <Flex
          background="hsl(183, 100%, 15%)"
          rounded="xl"
          p={8}
          direction="column"
        >
          <Grid templateColumns="1fr" rowGap={2} mb={{ md: 32, base: 8 }}>
            <Flex
              color="white"
              alignItems="center"
              justifyContent="space-between"
              width="100%"
            >
              <Flex direction="column">
                <Text>Tip Amount</Text>
                <Text>/ Person</Text>
              </Flex>
              <Text fontSize="42px" color="hsl(172, 67%, 45%)">
                ${tipAmount.toFixed(2)}
              </Text>
            </Flex>
            <Flex
              color="white"
              alignItems="center"
              justifyContent="space-between"
              width="100%"
            >
              <Flex direction="column">
                <Text>Total</Text>
                <Text>/ Person</Text>
              </Flex>
              <Text fontSize="42px" color="hsl(172, 67%, 45%)">
                ${total.toFixed(2)}
              </Text>
            </Flex>
          </Grid>
          <Button
            background="hsl(172, 67%, 45%)"
            fontWeight="700"
            _hover={{ background: "hsl(185, 41%, 84%)" }}
            onClick={() => dispatch(reset())}
          >
            RESET
          </Button>
        </Flex>
      </Grid>
    </Flex>
  );
};

export default Calculator;
