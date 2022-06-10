import React from "react";
import Navbar from "./Navbar";
import { Container } from "@chakra-ui/react";

const Layout = (props) => {
  return (
    <div>
      <Navbar />
      <Container maxW="container.lg">{props.children}</Container>
    </div>
  );
};

export default Layout;
