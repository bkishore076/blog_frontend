import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const [value, setvalue] = useState();
  return (
    <AppBar position="sticky" sx={{ background: "green" }}>
      <Toolbar>
        <Typography variant="h4">WM</Typography>
        { isLoggedIn && <Box display="flex" marginLeft={"auto"} marginRight={"auto"}>
          <Tabs
            textColor="inherit"
            value={value}
            onChange={(e, val) => setvalue(val)}
          >
            <Tab LinkComponent={Link} to="/blogs" label="All Blogs" />
            <Tab LinkComponent={Link} to="/myBlogs" label="All Blogs" />
            <Tab label="My Blogs" />
          </Tabs>
        </Box>}
        <Box display="flex" marginLeft="auto">
          <Button
            LinkComponent={Link}
            to="/auth"
            label="All Blogs"
            variant="contained"
            sx={{ margin: "1", borderRadius: 10 }}
            color="warning"
          >
            Login
          </Button>
          <Button
            LinkComponent={Link}
            to="/auth"
            label="All Blogs"
            variant="contained"
            sx={{ margin: "1", borderRadius: 10 }}
            color="warning"
          >
            Signup
          </Button>
         {isLoggedIn && <Button
            LinkComponent={Link}
            to="/auth"
            label="All Blogs"
            variant="contained"
            sx={{ margin: "1", borderRadius: 10 }}
            color="warning"
          >
            Logout
          </Button>}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
