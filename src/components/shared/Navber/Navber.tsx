import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";

const Navber = () => {
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
        <Button component={Link} href="/login">
          Login
        </Button>
      </Stack>
    </Container>
  );
};

export default Navber;
