import * as React from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";

export default function Spinner() {
  return (
    <>
      <Stack
        sx={{
          color: "grey.500",
          margin: "auto",
          width: "200px",
          margin: " 20rem auto",
        }}
        spacing={2}
        direction="row"
      >
        <CircularProgress color="secondary" />
        <CircularProgress color="success" />
        <CircularProgress color="inherit" />
      </Stack>
    </>
  );
}
