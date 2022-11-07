import { Box, Button, TextField, Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import axios from "axios";
import { IFeedback } from "../interfaces/Interfaces";

const initialFeedback: IFeedback = {
  feedbackType: "General",
  feedback: "",
  entityId: "",
};

export const Feedback = () => {
  const [feedback, setFeedback] = useState(initialFeedback);

  const mutation = useMutation({
    mutationFn: (feedback: IFeedback) => {
      const postFeedback = axios.post(
        "https://wizard-world-api.herokuapp.com/Feedback",
        feedback
      );
      setFeedback({
        ...feedback,
        feedback: "",
      });
      return postFeedback;
    },
  });

  const handleInputValue = (e: any) => {
    const { name, value } = e.target;
    setFeedback({
      ...feedback,
      [name]: value,
    });
  };

  console.log(mutation.data?.data);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h5">Give us some feedback</Typography>
      <TextField
        id="feedback"
        label="Feedback"
        variant="outlined"
        value={feedback.feedback}
        name="feedback"
        onChange={handleInputValue}
        sx={{ margin: 5 }}
      />
      <Button
        onClick={() => {
          mutation.mutate(feedback);
        }}
        variant="contained"
      >
        Submit Feedback
      </Button>
      {mutation.isLoading && (
        <Typography variant="body1" sx={{ marginTop: 5 }}>
          We are sending your feedback
        </Typography>
      )}
      {mutation.isError && (
        <Typography variant="body1" sx={{ marginTop: 5 }}>
          Ups, seems that we encountered an error. Please try again
        </Typography>
      )}
      {mutation.isSuccess && (
        <Typography variant="body1" sx={{ marginTop: 5 }}>
          Thank you for your feedback
        </Typography>
      )}
    </Box>
  );
};
