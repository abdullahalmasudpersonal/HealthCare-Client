import { Box, List, Stack, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import { drawerItems } from "@/utils/drawerItems";
import { UserRole } from "@/types";
import SideBerItem from "./SideBerItem";
import { getUserInfo } from "@/services/auth.services";
import { useEffect, useState } from "react";

const SideBer = () => {
  const [userRole, setUserRole] = useState("");
  useEffect(() => {
    const { role } = getUserInfo() as any;
    setUserRole(role);
  }, []);
  // console.log(userInfo.role);
  return (
    <Box>
      <Stack
        sx={{
          py: 1,
          mt: 1,
        }}
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={1}
        component={Link}
        href="/"
      >
        <Image width={40} height={40} src={assets.svgs.logo} alt="logo" />
        <Typography>PH Health Care</Typography>
      </Stack>
      <List>
        {drawerItems(userRole as UserRole).map((item, index) => (
          <SideBerItem key={index} item={item} />
        ))}
      </List>
    </Box>
  );
};

export default SideBer;
