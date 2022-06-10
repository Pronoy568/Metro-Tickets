import { createContext, useContext } from "react";
import { useState } from "react";

const DestinationAuth = createContext({
  From: null,
  To: null,
});

export const SubmittingAuth = () => useContext(DestinationAuth);

export default function DestinationAuthProvider({ children }) {
  const [From, setFrom] = useState("");
  const [To, setTo] = useState("");

  function setFromFunction(from) {
    return setFrom(from);
  }

  function setToFunction(to) {
    return setTo(to);
  }

  const value = {
    From,
    To,
    setFromFunction,
    setToFunction,
  };

  return (
    <DestinationAuth.Provider value={value}>
      {children}
    </DestinationAuth.Provider>
  );
}
