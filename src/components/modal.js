import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";

export default function Modal({ closeModal, data }) {
  const [open, SetOpen] = useState(false);

  console.log(data);
  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={12} md={1} onClick={() => closeModal(false)}>
          <Button
            variant="contained"
            color="error"
            style={{
              margin: "10px 0px 0px 0px",
            }}
          >
            Close
          </Button>
        </Grid>

        {/*
        
        
        
        Middle grid 
        
        
        */}

        <Grid
          item
          xs={12}
          sm={12}
          md={10}
          justify="space-around"
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ width: "100%", minHeight: "100vh" }}
        >
          {/*Creating grid insnide of the middle grid*/}
          <Card
            variant="outlined"
            style={{
              height: "80vh",

              boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
              backgroundColor: "#fafafa",
              margin: "90px 30px 90px 30px",
              borderRadius: 20,
              paddingBottom: "20px",
            }}
          >
            <CardContent>
              <Typography color="primary" variant="h3">
                {data.name}
              </Typography>
              <br />
              <Typography
                color="textSecondary"
                variant="subtitle2"
                component="p"
              >
                <b> Description: </b>
                <br />
                {data.explanation}
              </Typography>
            </CardContent>
            {/*
            <CardMedia
              style={{
                width: "90%",
                marginLeft: "30vh",
                width: "50%",
                height: "40vh",
              }}
              component="iframe"
              image={data.image}
            />

            */}
            <br />

            <img src={data.image} style={{ height: "50%" }} />

            <br />

            <Button
              variant="contained"
              href={data.github}
              style={{ margin: "3vh", width: "6vw" }}
            >
              Github
            </Button>

            <Button
              variant="contained"
              href={data.demo}
              style={{ margin: "3vh", width: "6vw" }}
            >
              Demo
            </Button>
          </Card>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={1}
          onClick={() => closeModal(false)}
        ></Grid>
      </Grid>
    </div>
  );
}
