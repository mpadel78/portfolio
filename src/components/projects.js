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

function Projects() {
  const [data, setData] = useState(projects);
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState(projects[0]);

  return (
    <div>
      {open && (
        <div style={{ height: "100vh" }}>
          <Modal closeModal={setOpen} data={modalData} />
        </div>
      )}

      {!open && (
        <>
          <AppBar
            position="static"
            style={{ marginBottom: 25, background: "#27ae60" }}
          >
            <Toolbar>
              <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                My Projects
              </Typography>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
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

          <Grid container>
            <Grid item xs={12} sm={12} md={1}></Grid>
            <Grid item xs={12} sm={12} md={10}>
              <Grid container justify="space-around" spacing={8}>
                {/*A single grid is created which maps the project */}

                {data.map((item) => (
                  <Grid item xs={12} sm={12} md={4}>
                    {""}
                    {/*Creating grid insnide of the middle grid*/}
                    <Card
                      variant="outlined"
                      style={{
                        maxWidth: 345,
                        boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
                        backgroundColor: "#fafafa",
                        marginBottom: 10,
                        borderRadius: 20,
                      }}
                      onClick={() => {
                        setOpen(true);
                        setModalData(projects[item.id - 1]);
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="100px"
                        image="https://cdn.iconscout.com/icon/free/png-256/code-language-coding-development-application-project-24615.png"
                      />
                      <CardContent>
                        <Typography color="primary" variant="h5">
                          {item.name}
                        </Typography>
                        <Typography color="textSecondary" variant="subtitle2">
                          {item.description}
                        </Typography>
                      </CardContent>
                      <Button>Demo</Button>

                      <Button>Github</Button>
                      <Button>Video Demo</Button>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={1}></Grid>
          </Grid>
        </>
      )}
    </div>
  );
}

export default Projects;
