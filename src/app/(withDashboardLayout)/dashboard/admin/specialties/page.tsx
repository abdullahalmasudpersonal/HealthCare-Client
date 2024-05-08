'use client'
import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import { useState } from "react";
import SpecialityModal from "./components/SpecialityModal";
import { useDeleteSpecialtyMutation, useGetAllSpecialtiesQuery } from "@/redux/api/specialties.Api";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Image from "next/image";
import DeleteIcon from '@mui/icons-material/Delete'

const SpecialtiesPage = () => {
  const [isMOdalOpen, setIsMOdalOpen] = useState<boolean>(false);
  const { data, isLoading } = useGetAllSpecialtiesQuery({});
  const [deleteSpecialty] = useDeleteSpecialtyMutation();

  const handleDelete = async (id: string) => {
    try {
      const res = await deleteSpecialty(id)
    // console.log(res, id)
    } catch (err: any) {
      console.log(err)
    }
  }

  const columns: GridColDef[] = [
    { field: 'title', headerName: 'Title', width: 400 },
    {
      field: 'icon', headerName: 'Icon', flex: 1, headerAlign: 'center', align: 'center', renderCell: ({ row }) => {
        return (
          <Box my={2}>
            <Image src={row.icon} alt="" width={20} height={20} />
          </Box>
        )
      }
    },
    {
      field: 'action', headerName: 'Action', flex: 1, headerAlign: 'center', align: 'center', renderCell: ({ row }) => {
        return (
          <IconButton onClick={() => handleDelete(row.id)} aria-label="delete" >
            <DeleteIcon />
          </IconButton>
        )
      }
    },
  ];

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={() => setIsMOdalOpen(true)}>Create Speciality</Button>
        <SpecialityModal open={isMOdalOpen} setOpen={setIsMOdalOpen} />
        <TextField size="small" placeholder="Search Specialist" />
      </Stack>
      {
        !isLoading ?
          <Box>
            <h1>Display Specialities</h1>
            <DataGrid
              rows={data}
              columns={columns}
            />
          </Box> :
          <h1>Loading...</h1>
      }
    </Box>
  );
};

export default SpecialtiesPage;
