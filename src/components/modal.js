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
        <Grid
          item
          xs={12}
          sm={12}
          md={1}
          onClick={() => closeModal(false)}
        ></Grid>
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
          style={{ minHeight: "100vh" }}
        >
          {/*Creating grid insnide of the middle grid*/}
          <Card
            variant="outlined"
            style={{
              height: "80vh",

              boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
              backgroundColor: "#fafafa",
              margin: "90px 90px 90px 90px",
              borderRadius: 20,
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
                {data.description}
              </Typography>
            </CardContent>
            <CardMedia
              style={{ width: "90%", marginLeft: "70px", height: "480px" }}
              component="iframe"
              image={data.video}
            />
            <br />
            <Button
              variant="contained"
              style={{ margin: "30px", width: "300px" }}
              href={data.github}
            >
              Github
            </Button>

            <Button
              variant="contained"
              style={{ margin: "30px", width: "300px" }}
              href={data.devpost}
            >
              Devpost
            </Button>
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={1} onClick={() => closeModal(false)}>
          <Button
            variant="contained"
            color="error"
            style={{
              margin: "90px 90px 90px 0px",
            }}
          >
            Close
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
