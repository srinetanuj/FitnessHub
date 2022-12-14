import { Button } from "@chakra-ui/react";
import React from "react";
import logobgless from "../../Assets/Fitness_hub_bg_less.png";
import "../../App.css"

const LoginNavbar = () => {
  return (
    <div
      className="navbar-resp"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "60rem",
        backgroundColor: "#262A3B",
        color:"white"
      }}
    >
      <div style={{display:"flex", alignItems:"center"}}>
        <img src={logobgless} alt="" width="70px" />
        <p style={{fontSize:"25px", fontWeight:"600"}}>FitnessHub</p>
      </div>
      <div style={{ display: "flex", gap: "3rem" }}>
        <Button variant="ghost">Home</Button>
        <button
          style={{
            backgroundColor: "#4299E1",
            padding: "5px 20px",
            color: "white",
            borderRadius: "5px",
          }}
        >
          Signup
        </button>
      </div>
    </div>
  );
};

export default LoginNavbar;
