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
import Image from 'next/image';

export default function Login() {
    return (
        <Grid container>
            <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '1rem', padding: "0", height: '80vh' }}>
                <Image 
                    src="/logo.svg"
                    alt="judici logo"
                    width={300}
                    height={250}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <Typography variant="h3" sx={{ fontWeight: 'bold', fontSize: '3rem' }}>
                        Acesse a plataforma
                    </Typography>
                    <Typography variant='subtitle1' sx={{ fontSize: '1rem' }}>
                        Faça login ou registre-se para começar a sua nova era judicial.
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%', maxWidth: '30rem', padding: '0 1rem' }}>
                    <TextField
                        id="email"
                        label="E-mail"
                        placeholder="Digite seu e-email"
                        multiline
                        fullWidth // Preenche toda a largura disponível
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
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '30rem', padding: '0 1rem' }}>
                    <Typography variant="body1">
                        Não tem uma conta? <Typography variant="body1" sx={{ color: '#7C3AED', fontWeight: 'bold', ":hover": { cursor: 'pointer', color: '#600DEE' } }}>
                            Registre-se!
                        </Typography>
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#7C3AED', fontWeight: 'bold', ":hover": { cursor: 'pointer', color: '#600DEE' } }}>
                        Esqueceu sua senha?
                    </Typography>
                </Box>
                <Button variant="contained" sx={{ backgroundColor: '#7C3AED', fontWeight: 'bold', fontSize: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', maxWidth: '30rem', height: '4rem', ":hover": { backgroundColor: '#600DEE' } }}>
                    Entrar
                </Button>
            </Grid>
            {/* Aqui adicionamos a propriedade display: none para esconder a imagem em telas pequenas (xs) */}
            <Grid item xs={false} sm={6} sx={{ backgroundImage: 'url(/theme_img.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '100vh', zIndex: 1 }}></Grid>
        </Grid>
    );
}
