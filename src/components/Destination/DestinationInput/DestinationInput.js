import React, { useState } from "react";
import {
  Badge,
  Button,
  Center,
  chakra,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import { SubmittingAuth } from "../DestinationAuth/DestinationAuth";
import { Link } from "react-router-dom";

const DestinationInput = () => {
  const [From, setFrom] = useState("");
  const [To, setTo] = useState("");
  const { setFromFunction, setToFunction } = SubmittingAuth();

  return (
    <Badge p={5} ml="20Badge" fontSize="1.6em" colorScheme="gray">
      <chakra.form
        onSubmit={async (e) => {
          e.preventDefault();
        }}
      >
        <Stack spacing="6">
          <FormControl id="From">
            <FormLabel>Leaving From</FormLabel>
            <Input
              value={From}
              onChange={(e) => {
                setFrom(e.target.value);
                setFromFunction(e.target.value);
              }}
              name="From"
              type="From"
              autoComplete="From"
              placeholder="Enter Pick From"
              required
            />
          </FormControl>
          <FormControl id="To">
            <FormLabel>Going To</FormLabel>
            <Input
              value={To}
              onChange={(e) => {
                setTo(e.target.value);
                setToFunction(e.target.value);
              }}
              name="To"
              type="To"
              autoComplete="To"
              placeholder="Enter To"
              required
            />
          </FormControl>

          <Button
            type="submit"
            colorScheme="orange"
            size="lg"
            fontSize="md"
            required
          >
            <Link to="/confirm">
              <Center>Submit</Center>
            </Link>
          </Button>
        </Stack>
      </chakra.form>
    </Badge>
  );
};

export default DestinationInput;
