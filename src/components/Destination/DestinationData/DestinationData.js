import React from "react";
import { Badge, Button, Heading, Text } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import "./style.css";
import { useAuth } from "../../../firebase/AuthContext";

const tickets = [
  {
    id: 1,
    text: "One Time Ticket",
    money: "৳100",
  },
  {
    id: 2,
    text: "One Day Pass",
    money: "৳500",
  },
  {
    id: 3,
    text: "Monthly Pass",
    money: "৳1500",
  },
  {
    id: 4,
    text: "Annual Pass",
    money: "৳9000",
  },
];

const DestinationData = () => {
  const { text } = useParams();

  const DataInfo = tickets.filter((id) => id?.text === text).map((id) => id);

  const { currentUser } = useAuth();

  return (
    <>
      <div className="destination-selection">
        <Badge
          p={5}
          ml="20Badge"
          fontSize="2em"
          colorScheme="gray"
          className="badge"
        >
          {currentUser && (
            <div className="user-selected-all-text">
              <Heading as="h1" size="sm">
                Welcome{" "}
                <span className="user-selected-text">
                  {`${currentUser.email}`}{" "}
                </span>
                <br />, You Selected...
              </Heading>
            </div>
          )}

          <div>
            <Heading> {text}</Heading>
            <Text my={2}></Text>
            <Badge ml="20" fontSize="1.6em" colorScheme="blue">
              {DataInfo[0].money}
            </Badge>
          </div>

          <Button
            variant="outline"
            size="sm"
            colorScheme="green"
            ml="12"
            mt="10px"
          >
            <Link to="/home">Want a different ticket ?</Link>
          </Button>
        </Badge>
      </div>
    </>
  );
};

export default DestinationData;
