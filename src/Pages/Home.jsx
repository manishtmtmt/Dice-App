import { Button, Flex, Heading, Image, Stack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Flex flexWrap={"wrap"} justify="center" align="center" py={"40px"}>
      <Image width="50%" src="/dices.png" />
      <Stack textAlign={"center"}>
        <Heading fontSize="7xl" as="h1">
          {" "}
          The Dice Game
        </Heading>
        <Link to={'/dice'}>
          <Button
            position={"absolute"}
            right={"130px"}
            bg="black"
            color="white"
            _hover={{ bg: "grey" }}
          >
            Start Game
          </Button>
        </Link>
      </Stack>
    </Flex>
  );
};

export default Home;
