"use client";
import { Box, Button, Stack, TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useState } from "react";
import DoctorModal from "./components/DoctorModal";

const DoctorsPage = () => {
  const [isMOdalOpen, setIsMOdalOpen] = useState<boolean>(false);
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={() => setIsMOdalOpen(true)}>Create New Doctor</Button>
        <DoctorModal open={isMOdalOpen} setOpen={setIsMOdalOpen} />
        <TextField size="small" placeholder="Search Specialist" />
      </Stack>
      {/* {!isLoading ? (
      <Box>
        <h1>Display Specialities</h1>
        <DataGrid rows={data} columns={columns} />
      </Box>
    ) : (
      <h1>Loading...</h1>
    )} */}
    </Box>
  );
};

export default DoctorsPage;
