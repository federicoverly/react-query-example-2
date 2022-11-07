import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { IHouse } from "../interfaces/Interfaces";

export interface IProps {
  house: IHouse;
}

export const House = ({ house }: IProps) => {
  return (
    <Card sx={{ minWidth: 275, margin: 10 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {house.animal}
        </Typography>
        <Typography variant="h5" component="div">
          {house.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {house.founder}
        </Typography>
        <Typography variant="body2">
          {house.commonRoom}
          <br />
          {house.ghost}
        </Typography>
      </CardContent>
    </Card>
  );
};
