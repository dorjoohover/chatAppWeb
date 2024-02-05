import { Box } from "@chakra-ui/react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box
      m={"auto"}
      maxWidth={{
        md: 950,
        base: "auto",
      }}
      px={{
        md: 10, 
        base: 4
      }}
    >
      {children}
    </Box>
  );
}
