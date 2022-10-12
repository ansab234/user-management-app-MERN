import React, { useState } from "react";
import { Avatar, FormGroup, Snackbar, Typography } from "@mui/material";
import { FormControl } from "@mui/material";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import "./form.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import MuiAlert from "@mui/material/Alert";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import avatar from "../../assets/avatar.png";
import { BsBellFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

const baseUrl = "http://localhost:5000/api/create-new-recruitment";

const Form = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState();

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const [recruitment_name, setRecruitmentName] = useState("");

  const sendRequest = async () => {
    await axios
      .post(`${baseUrl}`, {
        recruitment_name,
      })

      .then((res) => res.data);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!recruitment_name) {
      setOpen(true);
    } else {
      e.preventDefault();
      sendRequest().then(() => navigate("/"));
    }
  };

  const cancelButton = () => {
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box>
        <Box sx={{ display: "inline" }}>
          <BsBellFill className="bell-icon" />
          <Avatar
            sx={{ position: "absolute", left: "auto", right: 200, top: 20 }}
            alt="Cindy Baker"
            src={avatar}
          />
          <Typography
            sx={{ position: "absolute", left: "auto", right: 120, top: 30 }}
          >
            John Doe
          </Typography>
          <IoIosArrowDown className="arrow-icon" />
        </Box>
        <Typography
          sx={{
            fontFamily: "Roboto",
            fontWeight: "600",
            fontSize: "24px",
            color: "#142D52",
            marginRight: "350px",
          }}
        >
          Create New Recruitment
        </Typography>
      </Box>
      <Box className="box">
        <FormGroup>
          <TextField
            sx={{ width: "140%" }}
            placeholder="Enter Name of your Recruitment"
            variant="outlined"
            value={recruitment_name}
            onChange={(e) => setRecruitmentName(e.target.value)}
            name="name"
            fullWidth
          />
        </FormGroup>

        {/* <FormControl
          sx={{
            display: "inline",
          }}
        >
          <TextField
            sx={{
              marginTop: "30px",
              width: "40%",
            }}
            placeholder="Job Role: Other"
            variant="outlined"
          />
          <TextField
            sx={{
              marginTop: "30px",
              width: "40%",
            }}
            placeholder="Select Level of Employee"
            variant="outlined"
          />
        </FormControl> */}
        <Box sx={{ display: "flex", marginTop: "30px" }}>
          <FormControl sx={{ width: "50%" }}>
            <InputLabel>Job Role: Other</InputLabel>
            <Select label="Job Role: Other">
              <MenuItem value={10}>Developer</MenuItem>
              <MenuItem value={20}>Marketing</MenuItem>
              <MenuItem value={30}>Graphic Designer</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ width: "50%" }}>
            <InputLabel>Select Level of Employee</InputLabel>
            <Select label="Select Level of Employee">
              <MenuItem value={10}>20</MenuItem>
              <MenuItem value={20}>50</MenuItem>
              <MenuItem value={30}>100</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <FormGroup sx={{ marginTop: "30px" }}>
          <TextField
            sx={{ width: "140%" }}
            placeholder="Other"
            variant="outlined"
            fullWidth
          />
        </FormGroup>

        <FormGroup sx={{ marginTop: "60px" }}>
          <TextField
            sx={{ width: "140%", height: 100 }}
            placeholder="Write description here"
            fullWidth
            multiline
            rows={4}
          />
        </FormGroup>

        <Button
          sx={{
            backgroundColor: "#06BF97",
            position: "absolute",
            left: "auto",
            right: 90,
            marginTop: 7,
            fontFamily: "SF UI Text",
            textTransform: "capitalize",
            width: "160px",
          }}
          variant="contained"
          type="submit"
          color="success"
        >
          Save & Continue
        </Button>

        <Button
          sx={{
            color: "#06BF97",
            position: "absolute",
            left: "auto",
            right: 260,
            marginTop: 7,
            fontFamily: "SF UI Text",
            textTransform: "capitalize",
            width: "160px",
            borderColor: "#06BF97",
          }}
          variant="outlined"
          color="success"
          onClick={cancelButton}
        >
          Cancel
        </Button>
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
          <Alert severity="error" sx={{ width: "100%" }}>
            Please Enter Recruitment Name!
          </Alert>
        </Snackbar>
      </Box>
    </form>
  );
};

export default Form;
