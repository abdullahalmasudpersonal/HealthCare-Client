import { Box, Button, Stack, TextField } from "@mui/material";
import SpecialistModal from "./components/SpecialistModal";
import { useState } from "react";

const SpecialtiesPage = () => {
  const [isMOdalOpen, setIsMOdalOpen] = useState<Boolean>(false);

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={() => setIsMOdalOpen(true)}>Create Speciality</Button>
        <SpecialistModal open={isMOdalOpen} setOpen={setIsMOdalOpen} />
        <TextField size="small" placeholder="Search Specialist" />
      </Stack>
    </Box>
  );
};

export default SpecialtiesPage;
