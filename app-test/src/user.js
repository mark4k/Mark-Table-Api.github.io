import { Button, ButtonGroup, Link, Paper } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";

// function createData(
//   name: string,
//   calories: number,
//   fat: number,
//   carbs: number,
//   protein: number
// ) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),
//   createData("Gingerbread", 356, 16.0, 49, 3.9),
// ];

export default function User() {
  const [items, setItems] = useState([]);
  useEffect(() => {
   UserGet();
  }, []);
  const UserGet = ()=>{
    fetch("https://www.melivecode.com/api/users")
    .then((res) => res.json())
    .then(
      (result) => {
        setItems(result);
      }
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
    );
  }
const UserUpdate = (id)=>{
    window.location='/update/'+id
}
  const UserDelete =(id)=>{
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "id": id,
});

var requestOptions = {
  method: 'DELETE',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://www.melivecode.com/api/users/delete", requestOptions)
  .then(response => response.json())
  .then(result => {
    alert(result['message'])
    if(result['status']==='ok'){
        UserGet();
    }

  })
  .catch(error => console.log('error', error));
  }
  return (
    <React.Fragment>
      <CssBaseline />

      <Container maxWidth="lg" sx={{ padding: 2 }}>
        <Paper sx={{ padding: 2 }}>
          <Box display="flex">
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h6" gutterBottom>
                User
              </Typography>
            </Box>
            <Box>
            <Link href="/create">
              <Button variant="contained">create</Button>
              </Link>
            </Box>
          </Box>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>id</TableCell>
                  <TableCell align="center">Avatar</TableCell>
                  <TableCell align="right">Fname</TableCell>
                  <TableCell align="right">Lname</TableCell>
                  <TableCell align="right">Username</TableCell>
                 
                 
                  
                  <TableCell align="right">การจัดการ</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="center">
                        <Box display={"flex"}justifyContent={"center"} >
                        <Avatar alt={row.username} src={row.avatar} />
                        </Box>
                    
                        </TableCell>
                    
                    <TableCell align="right">{row.fname}</TableCell>
                    <TableCell align="right">{row.lname}</TableCell>

                    <TableCell align="right">{row.username}</TableCell>

                    <TableCell align="right">
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
  <Button onClick={()=>UserUpdate(row.id)}>Edit</Button>
  <Button color="error" onClick={()=>UserDelete(row.id)} >Del</Button>

</ButtonGroup>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    </React.Fragment>
  );
}
