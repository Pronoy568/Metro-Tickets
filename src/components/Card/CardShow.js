import { Badge, Box, Button, Container, chakra, Text } from "@chakra-ui/react";
import React from "react";
import { GiTicket } from "react-icons/gi";
import { Link } from "react-router-dom";
import "./Card.css";

const CardShow = (props) => {
  const { text, money, bg } = props.ticket;
  return (
    <Box>
      <Container
        style={{
          height: "280px",
          width: "230px",
          backgroundImage: `url(${bg})`,
          backgroundSize: `100% 100%`,
          backgroundPosition: `center center`,
        }}
        className="ticketService"
      >
        <div>
          <div>
            <chakra.span
              fontWeight="black"
              fontStyle="italic"
              fontSize="4xl"
              mx={2}
            >
              {text}
            </chakra.span>
            <Text my={6}></Text>
            <Badge ml="1" fontSize="1.5em" colorScheme="green">
              {money}
            </Badge>
          </div>
          <Text my={6}></Text>
          <div className="margin">
            <Link to={`/destination/${text}`}>
              <Button leftIcon={<GiTicket />} colorScheme="telegram">
                Buy Now
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </Box>
  );
};

export default CardShow;
