import { Button, Grid, Paper, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";

export default function UserCreate() {


const UserCancel =()=>{
    window.location="/"
}
  const HandleSubmit = (event) => {
    event.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      fname: fname,
      lname: lname,
      username: username,
      email: email,

      avatar: avatar,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://www.melivecode.com/api/users/create", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        alert(result["message"]);
        if (result["status"] === "ok") {
          window.location.href = "/";
        }
      })
      .catch((error) => console.log("error", error));
  };
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ padding: 2 }}>
        <Paper sx={{ padding: 2 }}>
          <Box>
            <Typography variant="h6" gutterBottom>
              Create User
            </Typography>
            <form onSubmit={HandleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="fname"
                    label="firstName"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={(e) => setFname(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="lname"
                    label="LastName"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={(e) => setLname(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="username"
                    label="UserName"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    id="avatar"
                    label="Avatar"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={(e) => setAvatar(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button type="submit" variant="contained" fullWidth>
                    create
                  </Button>
                </Grid>
                <Grid item xs={12}sm={6}>
                  <Button
                    type="submit"
                    variant="contained"
                    onClick={() => UserCancel()}
                    fullWidth
                  >
                    cancel
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Paper>
      </Container>
    </React.Fragment>
  );
}
