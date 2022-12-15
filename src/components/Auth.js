import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Auth = () => {
  const [isSignup, setisSignup] = useState(false)
  return (
    <div>
      <form>
        <Box
        maxWidth={400}
          display="flex"
          flexDirection={"coloumn"}
          alignItems="center"
          justifyContent={"center"}
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          margin='auto'
          marginTop={5}
          borderRadius={5}
        >
          <Typography variant="h2" padding={3} textAlign='center'>Login</Typography>
          <TextField margin="normal" placeholder="Name" />
          <TextField type={'email'} margin="normal" placeholder="Email" />
          <TextField type={'password'}margin="normal" placeholder="Password" />
          <Button variant="contained"color="warning" sx={{borderRadius:3,marginTop:3}}>Submit</Button>
          <Button sx={{borderRadius:3}}>Change to Signup</Button>
        </Box>
      </form>
    </div>
  );
};

export default Auth;
