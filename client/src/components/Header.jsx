import React from "react";
import {
    AppBar,
    Typography,
    Toolbar,
    Box,
    Button,
} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";


const pages = [ 'Allblogs','MyBlogs', 'create'];
const auths = [  'login', 'signup']
const settings = ['Profile','Logout'];

function Header() { 
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.isLoggedIn)
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    };

return (
    <AppBar position="static"
        sx={{ background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",}}>
        <Container maxWidth="xl">
            <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                <Typography
                        variant="h6"
                        noWrap
                        component=""
                        href="" 
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}> TECH-BLOG
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                        >
                        <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{ display: { xs: 'block', md: 'none' }}}>
                                    {pages.map((page) => (
                                        isLoggedIn && (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center">
                                                <Link to={`/${page}`}>{page}</Link>
                                            </Typography>
                                    </MenuItem>
                                    )
                                ))}
                            </Menu>
                        </Box>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                        mr: 2,
                        display: { xs: 'flex', md: 'none' },
                        flexGrow: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.2rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        }}>TECH-BLOG
                    </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    { isLoggedIn && (
                            pages.map((page) => (
                                <Button  key={page}
                                    onClick={handleCloseNavMenu}
                                    variant="contained" sx={{ margin: 1, borderRadius: 10 }}>
                                    <Link to={`/${page}`}>{page}</Link>
                                </Button>
                            ))
                    )}
                </Box>
                <Box sx={{ flexGrow: -4, display: { xs: 'none', md: 'flex' }}}>
                    {!isLoggedIn && (
                            auths.map((auth) => (
                                <Button key={auth} onClick={handleOpenNavMenu} variant="contained" sx={{ margin: 1, borderRadius: 10 }}  >
                                    <Typography textAlign="center">
                                        <Link to={`/${auth}`}>{auth}</Link>
                                    </Typography>
                                </Button>
                            )
                        ))}
                </Box>
                <Box sx={{ flexGrow: 0 }}>
                    {isLoggedIn && (
                            <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt="Remy Sharp"src="/logo-img.png" />
                                    </IconButton>
                            </Tooltip>
                        )}
                    <Menu
                        sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu} >
                        {settings.map((setting) => (
                                    isLoggedIn && (
                                <MenuItem key={setting} onClick={handleCloseUserMenu} >
                                    <Typography textAlign="center">
                                        <Link   onClick={() => dispatch(authActions.logout())}
                                            to={`/${setting}`}>{setting} </Link>
                                    </Typography>
                                </MenuItem>
                            )))}                      
                        </Menu>
                    </Box>
            </Toolbar>
        </Container>
    </AppBar>
)
}
export default Header
