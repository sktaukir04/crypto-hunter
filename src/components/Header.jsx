import { AppBar, Container, MenuItem, Select, ThemeProvider, Toolbar, Typography, createTheme, makeStyles } from '@material-ui/core'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CryptoState } from '../CryptoContext'

const useStyles = makeStyles(() => ({
    title: {
        color: 'gold',
        flex: 1,
        fontFamily: "Montserrat",
        fontWeight: "bold",
        cursor: 'pointer',
    }
}))

const Header = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const {currency,setCurrency}=CryptoState();
    const darkTheme = createTheme(
        {
            palette: {
                primary: {
                    main: '#fff',
                },
                secondary: {
                    main: '#fff'
                },
                type: 'dark'
            }
        }
    )
    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <AppBar color='transparent' position='static'>
                    <Container>
                        <Toolbar>
                            <Typography variant='h6' onClick={() => { navigate('/') }} className={classes.title}>
                                Trader-ST
                            </Typography>
                            <Select  variant='outlined' style={{
                                width: 100,
                                height: 40,
                                marginRight: 15,

                            }}
                            value={currency}
                            onChange={(e)=>setCurrency(e.target.value)}
                            >
                                <MenuItem value={'USD'}>USD</MenuItem>
                                <MenuItem value={"INR"}>INR</MenuItem>
                            </Select>
                        </Toolbar>
                    </Container>
                </AppBar>
            </ThemeProvider>
        </>
    )
}

export default Header