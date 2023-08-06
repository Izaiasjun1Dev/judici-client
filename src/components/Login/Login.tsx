'use client'
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
    Box,
    Button,
    FormControl,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
    Typography
} from '@mui/material';

export default function Login() {
    
    return (
        <Grid container>
            <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '1rem', padding: "0", height: '80vh' }}>
                {/* grid centralizado para a logo centralizado para todos os tipos de telas */}
                <Grid
                    container
                    direction="row" 
                    justifyContent="center"
                    alignItems="center"
                    sx={
                        { 
                            height: '5rem', 
                            width: '15rem',
                            paddingBottom: '1rem',
                            paddingTop: '1rem',
                        }
                    }
                >
                    <Grid container rowSpacing={3} >
                        <Grid item xs={12} sm={6}>
                            <Box
                                component="img"
                                src="/logo.svg"
                                alt="logo"
                            ></Box>
                        </Grid>
                    </Grid>
                    
                </Grid>
                <Typography variant='h1' color={"#1E293B"} sx={{ fontSize: '2.5rem', font: {
                    fontFamily: 'Sans-Serif Product Sans',
                    fontWeight: 700,
                    lineHeight: '3rem',
                    letterSpacing: '0.1rem',
                    
                }, color: '#1E293B', paddingTop: "5rem" }}>
                    Bem-vindo(a) de volta!
                </Typography>
                <Typography variant='subtitle1' sx={{ fontSize: '1.5rem', color: '#1E293B' }}>
                    Faça login para continuar
                </Typography>
               
                <Box sx={
                    
                        { 
                            display: 'flex', 
                            flexDirection: 'column', 
                            gap: '1.5rem', 
                            width: '100%', 
                            maxWidth: '30rem', 
                            padding: '0 1rem' 
                            
                        }
                    } component="form">
                    <TextField
                        id="email"
                        autoFocus={true}
                        label="E-mail"
                        placeholder="Digite seu e-email"
                        fullWidth // Preenche toda a largura disponível
                        variant="outlined"
                    />
                    <FormControl variant="outlined" fullWidth>
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            placeholder="Digite sua senha"
                            id="outlined-adornment-password"
                            type='password'
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        edge="end"
                                    >
                                        <VisibilityOff />
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                    
                <Grid container rowSpacing={1} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '0.5rem' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography variant='subtitle1' sx={{ fontSize: '1rem' }}>
                            Não tem uma conta?
                        </Typography>
                        <Typography variant='subtitle1' sx={{ fontSize: '1rem', fontWeight: 'bold', color: '#7C3AED', marginLeft: '0.5rem' }}>
                            Registre-se
                        </Typography>
                    </Box>
                    {/* ajusta o conteine ao centro do conteiner principal */}
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography variant='subtitle1' sx={{ fontSize: '1rem' }}>
                            Esqueceu sua senha?
                        </Typography>
                        <Typography variant='subtitle1' sx={{ fontSize: '1rem', fontWeight: 'bold', color: '#7C3AED', marginLeft: '0.5rem' }}>
                            Recupere
                        </Typography>
                    </Box>
                    
                </Grid>
                
                <Grid container >
                    
                        <Button
                            variant="contained"
                            fullWidth
                            sx={{color: '#fff', fontWeight: 'bold', fontSize: '1rem', padding: '1rem 0' }}
                        >
                            Entrar
                        </Button>
                   
                </Grid>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Box
                    component="img"
                    src="/theme_img.png"
                    alt="theme_img"
                    sx={{
                        width: '100%',
                        height: '100vh',
                        objectFit: 'cover',
                        display: {
                            xs: 'none',
                            sm: 'none',
                            md: 'flex',
                            lg: 'flex',
                            xl: 'flex',
                        }, // Esconde a imagem em telas pequenas (xs)
                    }}
                />
            </Grid>
        </Grid>
    );
}
