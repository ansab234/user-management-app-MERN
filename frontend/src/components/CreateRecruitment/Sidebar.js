import React from "react";
import Image from "mui-image";
import Box from "@mui/material/Box";
import img from "../../assets/sidebar-logo.png";
import "./sidebar.css";
import { Typography } from "@mui/material";
import { BiBriefcase } from "react-icons/bi";

const Sidebar = () => {
  return (
    <>
      <Box
        sx={{
          width: "250.21px",
          bgcolor: "#142D52",
          height: "1335.98px",
          left: "0px",
          right: "0px",
          position: "absolute",
        }}
      />
      <Image className="sidebar-logo" src={img} width={174} height={51} />

      <Typography
        sx={{
          position: "absolute",
          color: "white",
          marginTop: "80px",
          fontSize: "15px",
          fontFamily: "SF UI Text",
          marginLeft: "20px",
          fontWeight: 200,
        }}
      >
        <BiBriefcase className="icon" />
        My Recruitment
      </Typography>
    </>
  );
};

export default Sidebar;
