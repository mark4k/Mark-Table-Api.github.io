import { Button, Grid, Paper, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function UserUpdate() {
  const UserCancel =()=>{
    window.location="/"
}
  const { id } = useParams();
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      
      redirect: "follow",
    };

    fetch("https://www.melivecode.com/api/users/" + id, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result["status"] === "ok") {
          setFname(result["user"]["fname"]);
          setLname(result["user"]["lname"]);
          setUsername(result["user"]["username"]);
          setEmail(result["user"]["email"]);
          setAvatar(result["user"]["avatar"]);
        }
      })
      .catch((error) => console.log("error", error));
  }, [id]);

  const HandleSubmit = (event) => {
    event.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      id:id,
      fname: fname,
      lname: lname,
      username: username,
      email: email,

      avatar: avatar,
    });

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://www.melivecode.com/api/users/update", requestOptions)
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
              Update User
            </Typography>
            <form onSubmit={HandleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    value={fname}
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
                    value={lname}
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
                    value={username}
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
                    value={email}
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
                    value={avatar}
                    id="avatar"
                    label="Avatar"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={(e) => setAvatar(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}sm={6}>
                  <Button type="submit" variant="contained" fullWidth>
                    Update
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button   onClick={() => UserCancel()} type="submit" variant="contained" fullWidth>
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
