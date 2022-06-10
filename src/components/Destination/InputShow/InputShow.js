import React from "react";
import { Badge, Button, Center, Circle, Heading } from "@chakra-ui/react";
import { useAuth } from "../../../firebase/AuthContext";
import Layout from "../../../functions/Layout";
import { SubmittingAuth } from "../DestinationAuth/DestinationAuth";
import pic from "../../../images/logo9.png";
import Card from "../../../functions/Card";
import DividerWithText from "../../../functions/DividerWithText";
import { BsArrowDownCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

const InputShow = () => {
  const { From, To } = SubmittingAuth();
  const { currentUser, registerNames } = useAuth();

  return (
    <Layout>
      <section>
        {currentUser && (
          <div className="profile-container">
            {currentUser.photoURL === null ? (
              <div>
                <Circle size="110px" bg="#c2c2c2">
                  <img
                    className="img-circle-null"
                    src={pic}
                    alt={currentUser.displayName}
                  />
                </Circle>
              </div>
            ) : (
              <div>
                <Circle size="120px" bg="#c2c2c2">
                  <img
                    className="img-circle"
                    src={currentUser.photoURL}
                    alt={currentUser.displayName}
                  />
                </Circle>
              </div>
            )}
            <br />

            <Heading as="h3" size="lg">
              {currentUser.displayName === null ? (
                <div>
                  <p>{`${registerNames}`}</p>
                  <p>{`${currentUser.email}`}</p>
                </div>
              ) : (
                <div>
                  <p>{`${currentUser.displayName}`}</p>
                </div>
              )}
            </Heading>
          </div>
        )}
      </section>
      <section>
        <Card maxW="md" mx="auto" mt={4}>
          <Center>
            <Badge ml="1" fontSize="1.8em" colorScheme="pink">
              <h1>{From}</h1>
            </Badge>
          </Center>
          <DividerWithText my={6}>{<BsArrowDownCircle />}</DividerWithText>
          <Center>
            <Badge ml="1" fontSize="1.8em" colorScheme="green">
              <h1>{To}</h1>
            </Badge>
          </Center>
          <Center>
            <Link to="/congratulations">
              <Button m={6} variant="outline" colorScheme="gray">
                <h1>Confirm</h1>
              </Button>
            </Link>
          </Center>
        </Card>
      </section>
    </Layout>
  );
};

export default InputShow;
