'use client';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  IconButton,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import translations from '../lib/translations';

const generations = [
  { labelKey: 'gen1', path: '/gen1' },
  { labelKey: 'gen2', path: '/gen2' },
  { labelKey: 'gen3', path: '/gen3' },
];

export default function Navbar({ lang, mode }: { lang: string; mode: 'light' | 'dark' }) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const t = translations[lang];
  const pathname = usePathname();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="default" sx={{ backgroundColor: theme.palette.background.paper }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href={`/${lang}`} style={{ textDecoration: 'none', color: theme.palette.text.primary }}>
            PokemonX
          </Link>
        </Typography>
        <Box>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" onClick={handleMenu}>
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {generations.map((gen) => (
              <MenuItem key={gen.labelKey} onClick={handleClose}>
                <Link
                  href={`/${lang}${gen.path}`}
                  style={{ textDecoration: 'none', color: theme.palette.text.primary }}
                >
                  {t[gen.labelKey]}
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
