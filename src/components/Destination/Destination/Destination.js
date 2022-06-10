import React from "react";
import { chakra } from "@chakra-ui/react";
import Layout from "../../../functions/Layout";
import DestinationData from "../DestinationData/DestinationData";
import "./Destination.css";
import DestinationInput from "../DestinationInput/DestinationInput";
import { useAuth } from "../../../firebase/AuthContext";

const Destination = () => {
  const { currentUser } = useAuth();

  return (
    <Layout>
      <>
        <div className="Destination-Text">
          <chakra.span
            fontWeight="black"
            fontStyle="italic"
            fontSize="4xl"
            textAlign="center"
            mx={2}
          >
            Destination Selection
          </chakra.span>
        </div>
        {currentUser && (
          <div className="Destination-spacing">
            <DestinationData />
            <DestinationInput />
          </div>
        )}
      </>
    </Layout>
  );
};

export default Destination;
