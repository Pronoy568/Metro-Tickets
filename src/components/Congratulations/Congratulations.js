import { Center } from "@chakra-ui/react";
import React from "react";
import Layout from "../../functions/Layout";
import logo from "../../images/giphy.gif";

const Congratulations = () => {
  return (
    <Layout>
      <Center>
        <img src={logo} alt="Thank You" />
      </Center>
    </Layout>
  );
};

export default Congratulations;
