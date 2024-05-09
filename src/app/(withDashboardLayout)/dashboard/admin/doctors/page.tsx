"use client";
import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React, { useState } from "react";
import DoctorModal from "./components/DoctorModal";
import Link from "next/link";
import { useDeleteDoctorMutation, useGetAllDoctorsQuery } from "@/redux/api/doctorApi";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useDebounced } from "@/redux/hooks";
import { toast } from "sonner";

const DoctorsPage = () => {
  const [isMOdalOpen, setIsMOdalOpen] = useState<boolean>(false);
  const query: Record<string, any> = {};
  const [searchTerm, setSearchTerm] = useState<string>("");
  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });
  if (!!debouncedTerm) {
    query["searchTerm"] = searchTerm;
  }

  const { data, isLoading } = useGetAllDoctorsQuery({ ...query });
  const [deleteDoctor] = useDeleteDoctorMutation();
  const doctors = data?.doctors;
  const meta = data?.meta;

  const handleDelete = async (id: string) => {
    // console.log(id);
    try {
       const res = await deleteDoctor(id).unwrap();
       if (res?.id) {
         toast.success("Doctor deleted successfully!!!");
       }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "contactNumber", headerName: "Contact Number", flex: 1 },
    { field: "gender", headerName: "Gender", flex: 1 },
    { field: "apointmentFee", headerName: "Appointment Fee", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box>
            <IconButton
               onClick={() => handleDelete(row.id)} 
              aria-label="delete"
            >
              <DeleteIcon sx={{ color: "red" }} />
            </IconButton>
            <Link href={`/dashboard/admin/doctors/edit/${row.id}`}>
              <IconButton aria-label="delete">
                <EditIcon />
              </IconButton>
            </Link>
          </Box>
        );
      },
    },
  ];

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={() => setIsMOdalOpen(true)}>Create New Doctor</Button>
        <DoctorModal open={isMOdalOpen} setOpen={setIsMOdalOpen} />
        <TextField  onChange={(e) => setSearchTerm(e.target.value)} size="small" placeholder="Search Specialist" />
      </Stack>

      {!isLoading ? (
        <Box>
          <h1>Display Doctors</h1>
          <DataGrid rows={doctors} columns={columns} hideFooter={true} />
        </Box>
      ) : (
        <h1>Loading...</h1>
      )}
    </Box>
  );
};

export default DoctorsPage;
