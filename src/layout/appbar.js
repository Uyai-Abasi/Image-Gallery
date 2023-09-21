import React,{useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {BiLogoSpringBoot} from'react-icons/bi'
import InputBase from '@mui/material/InputBase';
import {BiSearch} from 'react-icons/bi'
import { signOut } from 'firebase/auth';
import { auth } from '../services/_config'
import { styled, alpha } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
export default function ButtonAppBar({onSearchChange}) {
  const [searchQuery, setSearchQuery] = useState('');
console.log(searchQuery)
  const handleSearchChange = (e) => {
    const newQuery = e.target.value;
    setSearchQuery(newQuery);
    onSearchChange(newQuery); 
  };
  const handleLogout = async () => {
    try {
      await signOut(auth);
      // Redirect the user to the login page or any other desired page
      // router.push('/login'); // Uncomment this line if you want to redirect
    } catch (error) {
      console.error('Logout error', error);
    }
  };
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)',}}>
        <Toolbar >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <BiLogoSpringBoot />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          ImageGallery
          </Typography>
          <Search>
            <SearchIconWrapper>
            <BiSearch />

            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search image"
              inputProps={{ 'aria-label': 'search' }}
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </Search>
          <Button color="inherit" onClick={handleLogout}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}