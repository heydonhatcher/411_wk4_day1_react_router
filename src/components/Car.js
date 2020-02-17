import React from "react";
import cars from "../cars.json";
import { Container, Paper, Chip, Typography } from "@material-ui/core";

const Car = props => {
  const id = props.match.params.id;
  const car = cars.find(car => car.id == id);

  console.log(car);

  return (
    <div style={{ padding: "25px" }}>
      <Container fixed maxWidth="sm">
        <Typography variant="h3">{car.Name}</Typography>
        <Paper
          style={{
            display: "flex",
            justifyContent: "left",
            flexWrap: "wrap",
            padding: "10px"
          }}
          elevation={3}
        >
          {Object.keys(car).map((carkey, i) => {
            return (
              <Chip
                style={{ padding: "5px" }}
                size="small"
                label={`${carkey}: ${car[carkey]}`}
              />
            );
          })}
        </Paper>
      </Container>
    </div>
  );
};

export default Car;
