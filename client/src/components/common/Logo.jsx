import { Typography, useTheme } from '@mui/material';

const Logo = () => {
  const theme = useTheme();

  return (
    <Typography fontWeight="700" fontSize="1.7rem">
      Movie<span style={{ color: theme.palette.primary.main }}>Prox</span>
    </Typography>
  );
};

export default Logo;