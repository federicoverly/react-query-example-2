import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HousesContainer } from "./components/HousesContainer";
import { Typography } from "@mui/material";
import { Feedback } from "./components/Feedback";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Typography variant="h2" textAlign="center">
        Harry Potter Houses
      </Typography>
      <HousesContainer />
      <Feedback />
    </QueryClientProvider>
  );
}

export default App;
