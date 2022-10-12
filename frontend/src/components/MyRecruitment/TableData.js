import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Avatar, Button, Snackbar, Typography } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import deleteButton from "../../assets/delete-button.png";
import editButton from "../../assets/edit-button.png";
import addButton from "../../assets/add-button.png";
import avatar from "../../assets/avatar.png";
import MuiAlert from "@mui/material/Alert";
import { BsBellFill } from "react-icons/bs";
import Image from "mui-image";
// import "./TableData.css";
import "../../components/CreateRecruitment/form.css";
import { IoIosArrowDown } from "react-icons/io";

const baseUrl = "http://localhost:5000/api";

const TableData = () => {
  const [recruitment_name, setRecruitmentName] = useState([]);
  const navigate = useNavigate();
  const [open, setOpen] = useState();

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    axios.get(`${baseUrl}/myrecruitment`).then((res) => {
      setRecruitmentName(res.data);
      console.log(res.data);
    });
  }, []);

  const createButton = () => {
    navigate("/create-new-recruitment");
  };

  return (
    <>
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
            marginRight: "450px",
            marginTop: "50px",
          }}
        >
          My Recruitments
        </Typography>
        <Button
          sx={{
            backgroundColor: "#06BF97",
            position: "absolute",
            left: "auto",
            right: 120,
            fontSize: "15px",
            fontWeight: 500,
            fontFamily: "SF UI Text",
            textTransform: "capitalize",
            width: "200px",
            height: "50px",
          }}
          variant="contained"
          color="success"
          onClick={createButton}
        >
          Create New Recruitment
        </Button>
      </Box>
      <Box
        sx={{
          display: "inline-block",
          width: "80%",
          marginLeft: 30,
          marginTop: 10,
        }}
      >
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ fontSize: "16px", color: "#36404A", fontWeight: 700 }}
                >
                  ID
                </TableCell>
                <TableCell
                  sx={{ fontSize: "16px", color: "#36404A", fontWeight: 700 }}
                >
                  Recruitment Name
                </TableCell>
                <TableCell
                  sx={{ fontSize: "16px", color: "#36404A", fontWeight: 700 }}
                >
                  Candidates No.
                </TableCell>
                <TableCell
                  sx={{ fontSize: "16px", color: "#36404A", fontWeight: 700 }}
                >
                  Start Date
                </TableCell>
                <TableCell
                  sx={{ fontSize: "16px", color: "#36404A", fontWeight: 700 }}
                >
                  Status
                </TableCell>
                <TableCell
                  sx={{ fontSize: "16px", color: "#36404A", fontWeight: 700 }}
                >
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {recruitment_name &&
                recruitment_name.map((data, i) => (
                  <TableRow
                    key={i}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {data.ID}
                    </TableCell>
                    <TableCell>{data.recruitment_name}</TableCell>
                    <TableCell>{data.candidates_no}</TableCell>
                    <TableCell>{data.start_date}</TableCell>
                    <TableCell>{data.status}</TableCell>
                    <TableCell>
                      <Tooltip title="Delete">
                        <IconButton
                          onClick={() => {
                            axios
                              .delete(`${baseUrl}/delete/${data._id}`)
                              .then((res) => res.data)
                              .then(() => navigate("/"));
                            window.location.reload();
                            setOpen(true);
                          }}
                        >
                          <Image
                            sx={{ cursor: "pointer" }}
                            src={deleteButton}
                            width={15}
                            height={15}
                          />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Edit">
                        <IconButton
                          onClick={() => {
                            navigate(`/update/${data._id}`);
                          }}
                        >
                          <Image
                            sx={{ cursor: "pointer" }}
                            src={editButton}
                            width={15}
                            height={15}
                          />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Add">
                        <IconButton
                          onClick={() => {
                            navigate("/create-new-recruitment");
                          }}
                        >
                          <Image
                            sx={{ cursor: "pointer" }}
                            src={addButton}
                            width={15}
                            height={15}
                          />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert severity="success" sx={{ width: "100%" }}>
            Recruitment Deleted!
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
};

export default TableData;
