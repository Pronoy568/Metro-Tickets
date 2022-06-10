import React from "react";
import {
  Box,
  HStack,
  IconButton,
  Spacer,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import Navlink from "./Navlink";
import "./Navbar.css";
import { useAuth } from "../firebase/AuthContext";

const Navbar = () => {
  const { toggleColorMode } = useColorMode();

  const { currentUser, logout } = useAuth();

  return (
    <Box
      borderBottom="2px"
      borderBottomColor={useColorModeValue("gray.100", "gray.700")}
      mb={4}
      className="box"
    >
      <HStack
        className="HStack"
        py={4}
        justifyContent="flex-end"
        maxW="container.lg"
        mx="auto"
      >
        <Navlink
          className="nav-container"
          to="/"
          name="Metro Tickets"
          size="lg"
        />
        <Spacer />
        <div className="right-nav-container">
          <Navlink to="/home" name="home" />
          {!currentUser && <Navlink to="/login" name="Login" />}
          {!currentUser && <Navlink to="/register" name="Register" />}

          {currentUser && <Navlink to="/profile" name="Profile" />}
          {currentUser && (
            <Navlink
              to="/logout"
              name="Logout"
              onClick={async (e) => {
                e.preventDefault();
                // handle logout
                logout();
              }}
            />
          )}
          <IconButton
            variant="outline"
            icon={useColorModeValue(<FaSun />, <FaMoon />)}
            onClick={toggleColorMode}
            aria-label="toggle-dark-mode"
          />
        </div>
      </HStack>
    </Box>
  );
};

export default Navbar;
