import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import facebookIcon from "@/assets/landing_page/facebook.png";

const Footer = () => {
  return (
    <Box bgcolor="rgb(17,26,34)" py={5}>
      <Container>
        <Stack direction="row" gap={4} justifyContent="center">
          <Typography color="#fff" component={Link} href="/login">
            Consultation
          </Typography>
          <Typography color="#fff" component={Link} href="/login">
            Consultation
          </Typography>
          <Typography color="#fff" component={Link} href="/login">
            Consultation
          </Typography>
          <Typography color="#fff" component={Link} href="/login">
            Consultation
          </Typography>
          <Typography color="#fff" component={Link} href="/login">
            Consultation
          </Typography>
        </Stack>
        <Stack direction="row" gap={3} justifyContent="center" py={2}>
          <Image width={30} height={30} src={facebookIcon} alt="" />
          <Image width={30} height={30} src={facebookIcon} alt="" />
          <Image width={30} height={30} src={facebookIcon} alt="" />
          <Image width={30} height={30} src={facebookIcon} alt="" />
        </Stack>
        <div className="border-b-[1px] border-dotted">
          <Stack
            direction="row"
            gap={2}
            justifyContent="space-between"
            alignItems="center"
            py={3}
          >
            <Typography component="p" color="white">
              &copy;2024 Ph HealthCare. All Rights Reserved.
            </Typography>
            <Typography
              color="white"
              variant="h5"
              component={Link}
              href="/"
              fontWeight={600}
            >
              P
              <Box component="span" color="primary.main">
                H
              </Box>
              Health Care
            </Typography>
            <Typography component="p" color="white">
              Privacy Policy! Terms & Conditions
            </Typography>
          </Stack>
        </div>
      </Container>
    </Box>
  );
};

export default Footer;
