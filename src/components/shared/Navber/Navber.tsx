"use client"
import { Box,  Container, Stack, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import Link from "next/link";

const Navber = () => {
  const AuthButton = dynamic( ()=> import("@/components/ui/AuthButton/AuthButton"),{ssr:false});

  
  return (
    <Container>
      <Stack
        py={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h5" component={Link} href="/" fontWeight={600}>
          P
          <Box component="span" color="primary.main">
            H
          </Box>
          Health Care
        </Typography>
        <Stack direction="row" gap={4} justifyContent="space-between">
          <Typography component={Link} href="/login">
            Consultation
          </Typography>
          <Typography component={Link} href="/login">
            Consultation
          </Typography>
          <Typography component={Link} href="/login">
            Consultation
          </Typography>
          <Typography component={Link} href="/login">
            Consultation
          </Typography>
          <Typography component={Link} href="/login">
            Consultation
          </Typography>
        </Stack>
      {/*   {
          userInfo?.userId ?
            (<Button onClick={handleLogOut} color="error">
              logout
            </Button>)
            :
            (<Button component={Link} href="/login">
              Login
            </Button>)
        } */}
        <AuthButton />
      </Stack>
    </Container>
  );
};

export default Navber;
