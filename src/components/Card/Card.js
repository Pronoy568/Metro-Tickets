import React from "react";
import Layout from "../../functions/Layout";
import bg1 from "../../images/bg01.png";
import bg2 from "../../images/bg02.png";
import bg3 from "../../images/bg03.png";
import bg4 from "../../images/bg04.png";
import CardShow from "./CardShow";
import "./Card.css";

const Card = () => {
  const tickets = [
    {
      id: 1,
      text: "One Time Ticket",
      money: "৳100",
      bg: bg1,
    },
    {
      id: 2,
      text: "One Day Pass",
      money: "৳500",
      bg: bg2,
    },
    {
      id: 3,
      text: "Monthly Pass",
      money: "৳1500",
      bg: bg3,
    },
    {
      id: 4,
      text: "Annual Pass",
      money: "৳9000",
      bg: bg4,
    },
  ];

  return (
    <Layout>
      <div className="ticket-layout">
        {tickets.map((ticket) => (
          <CardShow ticket={ticket} key={ticket.id}></CardShow>
        ))}
      </div>
    </Layout>
  );
};

export default Card;
