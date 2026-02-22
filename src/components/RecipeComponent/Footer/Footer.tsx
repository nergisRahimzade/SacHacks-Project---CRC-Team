import { Box, Typography, Stack, Link } from "@mui/material";
import CoffeeIcon from "@mui/icons-material/Coffee";
import footerBg from "../../../assets/footer-bg.png";

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundImage: `url(${footerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        sx={{
          maxWidth: "1280px",
          mx: "auto",
          px: 4,
          py: 7,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          minHeight: "240px",
        }}
      >
        {/* Left - Tagline */}
        <Stack direction="row" alignItems="center" spacing={1.5} sx={{ pb: 1, color: "hsl(20,10%,15%)" }}>
          <CoffeeIcon sx={{ fontSize: 40 }} />
          <Typography variant="h5" sx={{ fontStyle: "italic", fontWeight: 600, letterSpacing: 1, whiteSpace: "nowrap" }}>
            Delícias à Mesa
          </Typography>
        </Stack>

        {/* Right - The Pantry Link */}
        <Box sx={{ pb: 1 }}>
          <Link
            href="https://thepantry.ucdavis.edu/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "hsl(20,10%,15%)",
              fontWeight: 600,
              fontSize: "0.875rem",
              textDecorationOffset: "3px",
              "&:hover": { opacity: 0.8 },
            }}
          >
            The Pantry
          </Link>
        </Box>
      </Box>
    </Box>
  );
}