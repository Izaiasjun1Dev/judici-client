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
        <Grid container sx={{
            "@media (max-width: 600px)": {
                // centraliza todos os itens em telas pequenas
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                // retira a theme_img.png
                "& > :nth-child(2)": {
                    display: 'none'
                },
                // ajusta o tamanho do container
                "& > :nth-child(1)": {
                    width: '100%',
                    height: '100vh'
                }
            },
            // ajusta para dispositivos ente 360 a 400px
            "@media (min-width: 360px) and (max-width: 400px)": {
                // ajusta o tamanho do container
                "& > :nth-child(1)": {
                    height: '80vh',
                    width: '100%'
                },
                // ajusta o tamanho da imagem logo.svg
                "& > :nth-child(1) > :nth-child(1)": {
                    height: '5rem',
                    width: '15rem'
                },
                // ajusta o tamanho dos inputs
                "& > :nth-child(1) > :nth-child(3)": {
                    width: '100%',
                    maxWidth: '20rem',
                },
                // ajusta o tamanho dos botões
                "& > :nth-child(1) > :nth-child(4)": {
                    width: '30rem',
                    maxWidth: '20rem',
                }
            }
        }}>
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
                    <Box
                        component="img"
                        src="/logo.svg"
                        sx={
                            { 
                                height: '100%', 
                                width: '100%',
                            }
                        }
                    ></Box>
                </Grid>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <Typography variant="h1" sx={{ fontWeight: 'bold', fontSize: '3rem', "@media (min-width: 360px) and (max-width: 400px)": { fontSize: '1.5rem' } }}>
                        Bem-vindo ao Judici A.i.
                    </Typography>
                    <Typography variant='subtitle1' sx={{ fontSize: '1rem', "@media (min-width: 360px) and (max-width: 400px)": { width: "17rem" } }}>
                        Um processo para automatizar seus processos.
                    </Typography>
                </Box>
               
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
                    
                <Grid container sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '0.5rem' }}>
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
                
                <Button variant="contained" sx={
                    { 
                        backgroundColor: '#7C3AED', 
                        fontWeight: 'bold', 
                        fontSize: '1rem', 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        width: '100%', 
                        maxWidth: '30rem', 
                        height: '4rem', 
                        ":hover": { backgroundColor: '#600DEE' },
                        "@media (min-width: 360px) and (max-width: 400px)": {
                            width: '30rem',
                            maxWidth: '18.5rem',
                        }
                    }}>
                    Entrar
                </Button>
                </Box>
            </Grid>
            {/* Aqui adicionamos a propriedade display: none para esconder a imagem em telas pequenas (xs) */}
            <Grid item xs={false} sm={6} sx={{ backgroundImage: 'url(/theme_img.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '100vh', zIndex: 1 }}></Grid>
        </Grid>
    );
}
