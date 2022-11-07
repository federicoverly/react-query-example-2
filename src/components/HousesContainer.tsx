import { Box, CircularProgress } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { IHouse } from "../interfaces/Interfaces";
import { House } from "./House";

export const HousesContainer = () => {
  const fetchWizards = async () => {
    const response = await fetch(
      "https://wizard-world-api.herokuapp.com/Houses"
    );
    return response.json();
  };

  const { isLoading, data } = useQuery(["wizards"], fetchWizards, {
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <CircularProgress />;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        flexWrap: "wrap",
      }}
    >
      {isLoading && <CircularProgress />}
      {data.map((house: IHouse) => (
        <House key={house.id} house={house} />
      ))}
    </Box>
  );
};
