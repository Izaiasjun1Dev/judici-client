"use client";
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  OutlinedInput,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const SignupPage = () => {
  const isSmOrUp = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  const renderBackButton = () => {
    if (isSmOrUp) return null;
    return (
      <IconButton
        sx={{
          position: "absolute",
          top: "2rem",
          left: "2rem",
          bottom: "auto",
          color: "#1E293B",
        }}
      >
        <ArrowBackIcon />
      </IconButton>
    );
  }
  return (
    <Grid container>
      {isSmOrUp && (
        <Grid item xs={12} sm={6}>
          <Box
            component="img"
            src="/theme.png"
            sx={{
              width: "100%",
              height: "100vh",
            }}
          />
        </Grid>
      )}
      <Grid item xs={12} sm={6}>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100vh",
            paddingLeft: "3.5rem",
            paddingRight: "3.5rem",
          }}
        >
          {renderBackButton()}
          <Typography
            variant="h1"
            sx={{
              fontWeight: 700,
              fontSize: "3rem",
              color: "#1E293B",
              lineHeight: "3.5rem",
              letterSpacing: "0.1rem",
            }}
          >
            Cadastre-se
          </Typography>
          <Typography sx={{
            display: {
              xs: "none",
              sm: "block",
            }
          }}>
            e conheça o que há de melhor no mundo da tecnologia e processamento
            jurídico
          </Typography>
          <Grid
            container
            spacing={2}
            sx={{ width: "100%", paddingTop: "3.5rem" }}
          >
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount" sx={{
                    fontWeight: 700,
                  }}>
                  Nome
                </InputLabel>
                <OutlinedInput
                  id="input-nome"
                  label="Nome"
                  placeholder="Digite seu nome"
                  sx={{
                    fontWeight: 700,
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount" sx={{
                    fontWeight: 700,
                  }}>
                  Sobrenome
                </InputLabel>
                <OutlinedInput
                  id="input-sobrenome"
                  label="Sobrenome"
                  placeholder="Digite seu sobrenome"
                  sx={{
                    fontWeight: 700,
                  }}
                />
              </FormControl>
            </Grid>
            {/* Add more input fields here */}
            {/* For example: */}
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="e-mail" sx={{
                  fontWeight: 700,
                }}>
                  E-mail
                </InputLabel >
                <OutlinedInput
                  id="input-email"
                  label="E-mail"
                  placeholder="Digite o E-mail"
                  sx={{
                    fontWeight: 700,
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="Phone"
                  sx={{
                    fontWeight: 700,
                  }}
                >Phone</InputLabel >
                <OutlinedInput
                  id="input-phone"
                  label="Phone"
                  placeholder="Digite o seu telefone"
                  sx={{
                    fontWeight: 700,
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="password"
                  sx={{
                    fontWeight: 700,
                  }}
                >Password</InputLabel >
                <OutlinedInput
                  id="input-password"
                  label="Password"
                  placeholder="Digite a sua senha"
                  sx={{
                    fontWeight: 700,
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="confirm-pass"
                  sx={{
                    fontWeight: 700,
                  }}
                >Confirme Password</InputLabel >
                <OutlinedInput
                  id="input-confirm-pass"
                  label="Confirme sua senha"
                  placeholder="Confirme sua senha"
                  sx={{
                    fontWeight: 700,
                  }}
                />
              </FormControl>
            </Grid>
          </Grid>
          <Box
            component="div"
            sx={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "3.5rem",
            }}
          >
            <Button variant="contained" sx={{ 
              color: "#fff", fontWeight: 700, 
              fontSize: "1rem", padding: "1rem 0",
              width: "50%"
            }}>
              Cadastrar
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignupPage;
