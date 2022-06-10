import {
  Button,
  Center,
  chakra,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Layout from "../../functions/Layout";
import Card from "../../functions/Card";
import { Link } from "react-router-dom";
import DividerWithText from "../../functions/DividerWithText";
import { useAuth } from "../../firebase/AuthContext";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState("");

  const { forgotPassword } = useAuth();

  return (
    <Layout>
      <Heading textAlign="center" my={12}>
        Forgot password
      </Heading>
      <Card maxW="md" mx="auto" mt={4}>
        <chakra.form
          onSubmit={async (e) => {
            e.preventDefault();
            // Forgot Password Logic
            forgotPassword(email)
              .then((response) => {
                console.log(response);
                setSent("Please Check Your Email or Spam in email");
              })
              .catch((err) => {
                setError(err.message);
              });
          }}
        >
          <Stack spacing="6">
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                type="email"
                autoComplete="email"
                required
              />
            </FormControl>
            {error && (
              <Text textAlign="center" fontSize="18px" as="i" color="red">
                {error}
              </Text>
            )}
            {sent && (
              <Text textAlign="center" fontSize="15px" as="i" color="green">
                {sent}
              </Text>
            )}
            <Button type="submit" colorScheme="pink" size="lg" fontSize="md">
              Submit
            </Button>
          </Stack>
        </chakra.form>
        <DividerWithText my={6}>OR</DividerWithText>
        <Center>
          <Button colorScheme="teal" variant="outline">
            <Link to="/login"> Login</Link>
          </Button>
        </Center>
      </Card>
    </Layout>
  );
};

export default ForgotPassword;
