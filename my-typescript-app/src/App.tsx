import React from "react";
import "./App.css";
import {
  Stack,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Container,
  TextField,
} from "@mui/material";

const App = () => {
  return (
    <div>
      <Stack sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <Container>
          <Stack spacing={2}>
            <TextField label="Name" variant="outlined" />
            <TextField label="Age" variant="outlined" />
            <TextField label="Address" variant="outlined" />
            <TextField label="City" variant="outlined" />
            <Button variant="contained">Contained</Button>
          </Stack>
        </Container>
      </Stack>
    </div>
  );
};

export default App;