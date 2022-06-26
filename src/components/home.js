import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import profile from "../images/profile.png";

function Home() {
  return (
    <>
      <Grid container style={{ paddingTop: "10vh", height: "100vh" }}>
        <Grid item xs={1} sm={12} md={4}>
          {/*Just to divide the screen only*/}
        </Grid>
        <Grid item xs={10} sm={12} md={4} style={{ margin: "20px" }}>
          {" "}
          {/*For the middle section occupies the most */}
          <Card
            variant="outlined"
            style={{
              paddingTop: "50px",
              display: "block",
              height: "75vh",
              width: "90%",
              borderRadius: "20px",
              padding: "1em",
              lineHeight: "1.5em",
              boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
              paddingBottom: "20px",
            }}
          >
            <CardMedia
              component="img"
              height="300px"
              alt="green iguana"
              image={profile}
              style={{
                borderRadius: "50%",
                margin: "auto",
                display: "block",
                width: "100%",
                maxWidth: "300px",
              }}
            ></CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                Manish Paudel
              </Typography>
              <Typography variant="body3" color="text.secondary">
                An aspiring Software Engineer currently working on my Bachelor's
                in Computer Science. Currently working on Full Stack development
                projects. Open for opportunities.
              </Typography>
            </CardContent>

            <Button
              variant="contained"
              style={{
                margin: "20px",
                width: "30%",
                background: "#27ae60",
              }}
            >
              <Link
                to="/projects"
                style={{ textDecoration: "none", color: "#dfe6e9" }}
              >
                Projects
              </Link>
            </Button>

            <Button
              variant="contained"
              style={{ margin: "20px", width: "30%", background: "#8e44ad" }}
            >
              <Link
                to="/aboutme"
                style={{ textDecoration: "none", color: "#dfe6e9" }}
              >
                About Me
              </Link>
            </Button>

            {/*
            <Button
              variant="contained"
              style={{ margin: "20px", width: "20%", background: "#74b9ff" }}
            >
              <Link
                to="/contact"
                style={{ textDecoration: "none", color: "#dfe6e9" }}
              >
                Contact
              </Link>
            </Button>

            */}
          </Card>
        </Grid>
        <Grid item xs={1} sm={12} md={4}>
          {/*Just to divide the screen only*/}
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
