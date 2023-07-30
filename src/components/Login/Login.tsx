import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Image from 'next/image'
import { 
    Box, 
    Button, 
    FormGroup, 
    FormControl, 
    Typography, 
    TextField, 
    InputLabel, 
    IconButton, 
    InputAdornment, 
    OutlinedInput
} from '@mui/material'

export default function Login() {

  return (
    <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
    }}>
        <FormGroup
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                gap: '1rem',
                padding: "0",
                width: '50%',
                height: '80vh',
            }}>
            <Image 
                src="/logo.svg"
                alt="judici logo"
                width={300}
                height={250}
            />
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
            }}>
                <Typography variant="h3" sx={{
                        fontWeight: 'bold',
                        fontSize: '3rem',
                    }}>
                        Acesse a plataforma
                </Typography>
                <Typography variant='subtitle1' sx={{
                    fontSize: '1rem',
                    }}>
                    Faça login ou registre-se para começar a sua nova era judicial.
                </Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
            }}>
                <TextField
                    id="email"
                    label="E-mail"
                    placeholder="Digite seu e-email"
                    multiline
                    sx={{
                        width: '30rem',
                        display: 'flex',
                        justifyContent: 'center',
                        
                    }}
                />
                <FormControl sx={{width: '30rem'}} variant="outlined">
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
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '30rem',
            }}>
                <Box>
                    <Typography variant="body1">
                            Não tem uma conta? <Typography variant="body1" sx={{
                                color: '#7C3AED',
                                fontWeight: 'bold',
                                ":hover": {
                                    cursor: 'pointer',
                                    color: '#600DEE',
                                }
                            }}>Registre-se!</Typography>
                    </Typography>
                </Box>

                <Typography variant="body1" sx={{
                    color: '#7C3AED',
                    fontWeight: 'bold',
                    ":hover": {
                        cursor: 'pointer',
                        color: '#600DEE',
                    }
                }}>
                        Esqueceu sua senha?
                </Typography>
            </Box>

            <Button variant="contained" sx={{
                backgroundColor: '#7C3AED',
                fontWeight: 'bold',
                fontSize: '1rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '30rem',
                height: '4rem',
                ":hover": {
                    backgroundColor: '#600DEE',
                }

            }}>Entrar</Button>
        </FormGroup>
        <Box sx={{
            backgroundImage: 'url(/theme_img.png)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: '50%',
            height: '100vh',
            zIndex: 1,
        }}></Box>
    </Box>
  )
}
