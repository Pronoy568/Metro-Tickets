import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaGoogle } from "react-icons/fa";
import React, { useState } from "react";
import Layout from "../../functions/Layout";
import Card from "../../functions/Card";
import { Link, useLocation } from "react-router-dom";
import DividerWithText from "../../functions/DividerWithText";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { useAuth } from "../../firebase/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [Error, setErrorMessage] = useState("");

  let navigate = useNavigate();
  const location = useLocation();

  const { login, signInWithGoogle } = useAuth();

  return (
    <div className="login-container">
      <Layout>
        <Heading textAlign="center" my={8}>
          Login
        </Heading>
        <Card maxW="md" mx="auto" mt={4}>
          <chakra.form
            onSubmit={async (e) => {
              e.preventDefault();
              // login logic here

              setIsSubmitted(true);
              login(email, password)
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
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter Email address"
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
                  placeholder="Enter Password"
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
                Sign in
              </Button>
            </Stack>
          </chakra.form>
          <HStack justifyContent="space-between" my={4}>
            <Button variant="ghost" colorScheme="red">
              <Link to="/forgotPassword">Forgot password ?</Link>
            </Button>
            <Button variant="ghost" colorScheme="whatsapp">
              <Link to="/register">Register</Link>
            </Button>
          </HStack>
          <DividerWithText my={6}>OR</DividerWithText>
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
        </Card>
      </Layout>
    </div>
  );
};

export default Login;
