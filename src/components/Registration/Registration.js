import React, { useState } from "react";
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
import { FaGoogle } from "react-icons/fa";
import Layout from "../../functions/Layout";
import Card from "../../functions/Card";
import DividerWithText from "../../functions/DividerWithText";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../firebase/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Registration.css";

const Registration = () => {
  let navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [Error, setErrorMessage] = useState("");

  const { register, signInWithGoogle, registerNameF } = useAuth();

  return (
    <div className="registration-container">
      <Layout>
        <Heading textAlign="center" my={12}>
          Register
        </Heading>
        <Card maxW="md" mx="auto" mt={4}>
          <chakra.form
            onSubmit={async (e) => {
              e.preventDefault();
              // our register logic here

              setIsSubmitted(true);
              registerNameF(registerName);
              register(email, password)
                .then((response) => {
                  navigate(location.state?.from ?? "/profile");
                })
                .catch((error) => {
                  setErrorMessage(error.message);
                })
                .finally(() => setIsSubmitted(false));
            }}
          >
            <Stack spacing="6">
              <FormControl id="registerName">
                <FormLabel>Username</FormLabel>
                <Input
                  value={registerName}
                  onChange={(e) => setRegisterName(e.target.value)}
                  name="registerName"
                  type="text"
                  autoComplete="text"
                  required
                />
              </FormControl>

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

              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  type="password"
                  autoComplete="password"
                  required
                />
              </FormControl>
              {Error && (
                <Text textAlign="center" fontSize="18px" as="i" color="red">
                  {Error}
                </Text>
              )}
              <Button
                isLoading={isSubmitted}
                type="submit"
                colorScheme="gray"
                size="lg"
                fontSize="md"
              >
                Sign up
              </Button>
            </Stack>
            <Center my={4}>
              <Button variant="outline" colorScheme="whatsapp">
                <Link to="/login">Login</Link>
              </Button>
            </Center>
            <DividerWithText my={4}>OR</DividerWithText>
            <div className="google-signIn">
              <Button
                variant="outline"
                isFullWidth
                colorScheme="red"
                leftIcon={<FaGoogle />}
                onClick={() =>
                  signInWithGoogle()
                    .then((user) => {
                      navigate(location.state?.from ?? "/profile");
                    })
                    .then((error) => console.log(error))
                }
              >
                Sign in with Google
              </Button>
            </div>
          </chakra.form>
        </Card>
      </Layout>
    </div>
  );
};

export default Registration;
