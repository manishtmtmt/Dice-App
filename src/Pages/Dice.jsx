import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  List,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Dice = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [dice, setDice] = useState(1);
  const [error, setError] = useState(null);
  const [score, setScore] = useState(0);
  const numbers = [1, 2, 3, 4, 5, 6];

  const onNumberClicked = (value) => {
    setSelectedNumber(value);
    setError(null);
  };

  const genRandomNo = () => {
    if (selectedNumber) {
      const genratedNo = Math.ceil(Math.random() * 6);
      setDice(genratedNo);

      if (selectedNumber === genratedNo) {
        setScore((prev) => prev + genratedNo);
      } else {
        setScore((prev) => prev - 2);
      }
    } else {
      setError("Please Select Number");
    }
  };
  return (
    <>
      <Link to={"/"}><Button m="2">Home</Button></Link>
      <Stack justify="center" align="center" mx="auto" h="100vh">
        <Heading as="h1" color={error ? "red" : "black"} fontSize="4xl" mb="8">
          {error ? error : "Select Number"}
        </Heading>
        <Flex pb="10">
          {numbers.map((value) => (
            <Flex
              justify="center"
              align="center"
              h="40px"
              w="40px"
              bg={selectedNumber === value ? "green" : "black"}
              color="white"
              fontSize="2xl"
              key={value}
              mr={4}
              borderRadius="md"
              onClick={() => onNumberClicked(value)}
            >
              {value}
            </Flex>
          ))}
        </Flex>
        <Box h="150px" width="150px" onClick={genRandomNo}>
          <Image src={`/dice/dice${dice}.png`} />
        </Box>

        <Text as="p" fontSize="xl">
          Click on dice to roll
        </Text>

        <Text
          color={score > 0 ? "green" : "red"}
          fontSize="8xl"
          fontWeight="bold"
        >
          {score}
        </Text>
        <Text fontSize="4xl" fontWeight="bold">
          Total Score
        </Text>
        <Button onClick={() => setScore(0)}>Reset Score</Button>
      </Stack>
      <Stack maxW="700px" mx="auto" m={"20px"}>
        <Heading as="h4">Game Rules:-</Heading>
        <List>
          <ListItem>Select Number any number</ListItem>
          <ListItem>Click on dice image to roll it</ListItem>
          <ListItem>
            Select number is equal to obtained dice result then you will get
            same point of dice
          </ListItem>
          <ListItem>
            if You are Wrong Score will be deducted by 2 points
          </ListItem>
        </List>
      </Stack>
    </>
  );
};

export default Dice;
