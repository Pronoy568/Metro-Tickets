import { Circle, Heading } from "@chakra-ui/react";
import React from "react";
import { useAuth } from "../../firebase/AuthContext";
import Layout from "../../functions/Layout";
import "./Profile.css";
import pic from "../../images/logo9.png";

const Profile = () => {
  const { currentUser, registerNames } = useAuth();

  return (
    <Layout>
      {!currentUser && (
        <div className="profile-container">
          <Heading as="h1" size="lg">
            Please Login
          </Heading>
        </div>
      )}
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
              <div>{`${registerNames}`}</div>
            ) : (
              <div> {`${currentUser.displayName}`}</div>
            )}
          </Heading>

          <Heading as="h4" size="sm">
            {`${currentUser.email}`}
          </Heading>
        </div>
      )}
    </Layout>
  );
};

export default Profile;
