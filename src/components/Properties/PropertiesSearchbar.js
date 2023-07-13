import React from 'react'
import { emphasize,styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Chip from '@mui/material/Chip';
import SearchIcon from '@mui/icons-material/Search';
import './Properties.scss'
import { Breadcrumbs } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
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

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor =
      theme.palette.mode === 'light'
        ? theme.palette.grey[100]
        : theme.palette.grey[800];
    return {
      backgroundColor,
      height: theme.spacing(3),
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightRegular,
      '&:hover, &:focus': {
        backgroundColor: emphasize(backgroundColor, 0.06),
      },
      '&:active': {
        boxShadow: theme.shadows[1],
        backgroundColor: emphasize(backgroundColor, 0.12),
      },
    };
  });  
function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');

  }
  ///....................
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


const PropertiesSearchbar = () => {
  return (
    <div>
         <Box sx={{display: 'flex' }}>
      <AppBar position="static">
        <Toolbar>
            
          <Search className='search'>
          <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
            
              placeholder="Add More"
              inputProps={{ 'aria-label': 'search' }}
            />
    
          </Search>
          <Breadcrumbs aria-label="">        
                <StyledBreadcrumb
                label="Top Localities"
                deleteIcon={<ExpandMoreIcon className='dropIcon' />}
                onDelete={handleClick}
                />
                 <StyledBreadcrumb
                label=" Budget"
                deleteIcon={<ExpandMoreIcon className='dropIcon' />}
                onDelete={handleClick}
                />
                 <StyledBreadcrumb
                label="Property Type "
                deleteIcon={<ExpandMoreIcon className='dropIcon' />}
                onDelete={handleClick}
                />
               
                 <StyledBreadcrumb
                label=" BHK"
                deleteIcon={<ExpandMoreIcon className='dropIcon' />}
                onDelete={handleClick}
                />
                 <StyledBreadcrumb
                label="Owners"
                deleteIcon={<ExpandMoreIcon className='dropIcon' />}
                onDelete={handleClick}
                />
                  <StyledBreadcrumb
                label="  More Filters"
                deleteIcon={<ExpandMoreIcon className='dropIcon' />}
                onDelete={handleClick}
                />
          </Breadcrumbs>
        </Toolbar>
      </AppBar>
    </Box>
</div>
  )
}

export default PropertiesSearchbar