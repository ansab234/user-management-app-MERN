import { Button, FormGroup, TextField, Snackbar } from "@mui/material";
import React, { useState } from "react";
import MuiAlert from "@mui/material/Alert";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const baseUrl = "http://localhost:5000/api";

const UpdateData = () => {
  const [open, setOpen] = useState();
  const [recruitment_name, setRecruitmentName] = useState();
  const navigate = useNavigate();
  const id = useParams().id;

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const sendRequest = async () => {
    await axios
      .put(`${baseUrl}/update/${id}`, {
        recruitment_name: String(recruitment_name),
      })
      .then((res) => res.data);
  };

  const updateButton = (e) => {
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
    <>
      <FormGroup
        sx={{
          display: "inline-block",
          marginTop: "120px",
        }}
      >
        <TextField
          sx={{ width: "100%" }}
          placeholder="Enter Name of your Recruitment"
          variant="outlined"
          name="name"
          value={recruitment_name}
          onChange={(e) => setRecruitmentName(e.target.value)}
          fullWidth
        />
        <Button
          sx={{
            color: "#06BF97",
            marginRight: 5,
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
        <Button
          sx={{
            backgroundColor: "#06BF97",
            marginTop: 7,
            fontFamily: "SF UI Text",
            textTransform: "capitalize",
            width: "160px",
          }}
          variant="contained"
          type="submit"
          color="success"
          onClick={updateButton}
        >
          Update
        </Button>
      </FormGroup>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert severity="error" sx={{ width: "100%" }}>
          Please Enter Updated Recruitment Name!
        </Alert>
      </Snackbar>
    </>
  );
};

export default UpdateData;
