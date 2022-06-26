import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import projects from "./projects.json";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Modal from "./modal.js";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

//icons importing here are

import { DiReact } from "react-icons/di";

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
/>;

export default function aboutme() {
  return (
    <div>
      {" "}
      <AppBar
        position="static"
        style={{ marginBottom: 25, background: "#8e44ad" }}
      >
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            About me
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Link to="/">
              {" "}
              <HomeIcon />
            </Link>
          </IconButton>
        </Toolbar>
      </AppBar>
      {/*here starts the main page of about me section
      
      
      
      
      
      
      
      




      */}
      <Grid container justifyContent="center" spacing={3}>
        <Grid item xs={12} sm={12} md={12}>
          <Card
            variant="outlined"
            style={{
              height: "30vh",
              paddingTop: "10px",
              display: "block",
              maxWidth: "60vw",
              width: "100%",
              borderRadius: "20px",
              marginLeft: "18vw",
              padding: "1em",
              lineHeight: "1.5em",
              boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
              paddingBottom: "20px",
            }}
          >
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                About Manish:
              </Typography>
              <Typography variant="body3" color="text.secondary">
                Manish Paudel is an aspiring Software Engineer and is graduating
                with BS Computer Science on August 2022. He is currently working
                as an application Developer Intern at Acuity Brands. He is
                looking for fulltime opportunities after August of 2022.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/*
        
        
        Education starts here 
        
        
        */}

        <Grid item xs={12} sm={12} md={6} style={{ padding: "10px" }}>
          <Card
            variant="outlined"
            style={{
              marginTop: "20px",
              height: "60vh",
              marginLeft: "20px",
              maxWidth: "100vw",
              paddingTop: "0px",
              display: "block",
              maxWidth: "100vw",
              borderRadius: "20px",

              lineHeight: "1.5em",
              boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
            }}
          >
            <CardContent>
              <Typography gutterBottom variant="h3" component="div">
                Education
              </Typography>
              <br />
              <Typography variant="h4" color="text.secondary">
                University of Houston Clear Lake
              </Typography>
              <br />
              <Typography variant="overline">
                Bachelor's of Science - Computer Science
              </Typography>
              <br />
              <Typography variant="caption">(Aug 2020 - Aug 2022)</Typography>
              <br />
              <br />
              <br />
              <br />
              <Typography variant="body4" color="text.primary">
                Relevant courseworks:
              </Typography>
              <br />
              <br />

              <Typography variant="body3" color="text.secondary">
                Data Structures & Algorithms, Operating System, System Design,
                Database Development, Web application Development, Capstone
                Project, Software Engineering
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/*
   
   Here starts the work experience section
   
   */}

        <Grid item xs={12} sm={12} md={6} style={{ padding: "10px" }}>
          {/*Just to divide the screen only*/}
          <Card
            variant="outlined"
            style={{
              marginTop: "20px",
              height: "60vh",

              marginLeft: "20px",
              maxWidth: "100vw",
              paddingTop: "0px",
              display: "block",
              maxWidth: "100vw",
              borderRadius: "20px",

              lineHeight: "1.5em",
              boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
            }}
          >
            <CardContent>
              <Typography gutterBottom variant="h3" component="div">
                Work Experience
              </Typography>

              <br />
              <Typography variant="h5" color="text.secondary">
                Application Developer Intern - <b>Acuity Brands</b>{" "}
              </Typography>

              <Typography variant="body" color="text.secondary">
                <i> (June 6th 2022 to Present)</i>
              </Typography>
              <br />
              <br />

              <Typography variant="body3" color="text.secondary">
                <li>
                  Work with 7 plus developers and create web applications.
                </li>
                <li>
                  Use Javascript Frameworks like React.js and Next.Js to create
                  web applications
                </li>
              </Typography>
              <br />
              <br />

              <br />
              <Typography variant="h5" color="text.secondary">
                Student Tech IV - <b>UHCL</b>{" "}
              </Typography>

              <Typography variant="body" color="text.secondary">
                <i> (Spetember 18th 20220 - June 6th 2022 )</i>
              </Typography>
              <br />
              <br />

              <Typography variant="body3" color="text.secondary">
                <li>
                  Provide customer service and tech support to University Web
                  system
                </li>
                <li>
                  Lead 7 plus student assoicates and provide them with training
                  & support
                </li>
              </Typography>
              <br />
              <br />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={12} style={{ padding: "10px" }}>
          <Card
            variant="outlined"
            style={{
              height: "60vh",
              marginLeft: "20px",
              maxWidth: "100vw",
              paddingTop: "30px",
              display: "block",
              maxWidth: "100vw",
              borderRadius: "20px",

              lineHeight: "1.5em",
              boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
            }}
          >
            <CardContent>
              <Typography gutterBottom variant="h3" component="div">
                Skillset
              </Typography>
              <Typography variant="body3" color="text.secondary">
                Below are my programming languages, frameworks, tools and IDEs I
                am exposed to:
              </Typography>
              <br />
              <br />
              <Typography variant="body3" color="text.secondary">
                <b>Programming languages & Frameworks</b>: Java, Javascript,C#,
                PHP, Python, React.JS, Material UI, Node.Js, Express.JS, HTML,
                CSS, SASS, Bootstrap, Jquery, Ionic, HighCharts, Next.Js,
                ASP.net
              </Typography>
              <br />
              <br />
              <Typography variant="body3" color="text.secondary">
                <b>Database</b>: SQL, MySQL, Sqlite, MongoDB
              </Typography>
              <br />
              <br />
              <Typography variant="body3" color="text.secondary">
                <b>Version Control</b>: Git
              </Typography>
              <br />
              <br />
              <Typography variant="body3" color="text.secondary">
                <b>Testing</b>: Postman, Jest, Mocha, Chai
              </Typography>
              <br />
              <br />
              <Typography variant="body3" color="text.secondary">
                <b>Cloud</b>: AWS, Heroku, Firebase, Azure
              </Typography>

              <br />
              <br />
              <Typography variant="body3" color="text.secondary">
                <b>Development Tools</b>: Azure Devops, Trello
              </Typography>
              <br />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
