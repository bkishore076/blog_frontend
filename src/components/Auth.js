import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const Auth = () => {
  const [isSignup, setisSignup] = useState(false);
  const [inputs, setinputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setinputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div>
      <form>
        <Box
          maxWidth={400}
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          margin="auto"
          marginTop={5}
          borderRadius={5}
        >
          <Typography variant="h2" padding={3} textAlign="center">
            Login
          </Typography>
          {isSignup ? "Signup" : "Login"}
          {isSignup && (
            <TextField
              name="name"
              onChange={handleChange}
              value={inputs.name}
              margin="normal"
              placeholder="Name"
            />
          )}
          {""}
          <TextField
            name="email"
            onChange={handleChange}
            value={inputs.email}
            type={"email"}
            margin="normal"
            placeholder="Email"
          />
          <TextField
            name="password"
            onChange={handleChange}
            value={inputs.password}
            type={"password"}
            margin="normal"
            placeholder="Password"
          />
          <Button
            variant="contained"
            color="warning"
            sx={{ borderRadius: 3, marginTop: 3 }}
          >
            Submit
          </Button>
          <Button
            onClick={() => setisSignup(!isSignup)}
            sx={{ borderRadius: 3 }}
          >
            Change to Signup{isSignup ? "Login" : "Signup"}
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Auth;
