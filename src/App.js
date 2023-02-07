
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FaPizzaSlice } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function Copyright(props) {

 


  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://segundacasa.org.br/" target='blank'>
        Segunda Casa
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const nome = data.get('nomeCompleto')
    const telefone = data.get('telefone')
    if (nome.length < 2) {
        return toast.info('Nome é obrigatório', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,       
        theme: "dark",

      }
    
      )
    }

    if (telefone.length < 1) {
      return toast.info('O telefone é obrigatório', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,       
        theme: "dark",

      }
    
      )
    }
    console.log({
      nome: data.get('nomeCompleto'),
      telefone: data.get('telefone'),
      email: data.get('email'),
      rua: data.get('rua'),
      numero: data.get('numero'),
      bairro: data.get('bairro'),
      mussarela: data.get('mussarela'),
      calabresa: data.get('calabresa'),     
    });


    if (nome.length > 2 && telefone.length > 2) {
      toast.success('Pedido feito com sucesso!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      }
  
      )
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
       
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'none' }}>
            <FaPizzaSlice />
          </Avatar>
          <Typography component="h1" variant="h5">
            Faça seu pedido
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="nomeCompleto"
                  required
                  fullWidth
                  id="nomeCompleto"
                  label="Nome Completo"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="telefone"
                  label="Telefone"
                  name="telefone"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  
                  fullWidth
                  name="rua"
                  label="Rua"                 
                  id="rua"
                  autoComplete="new-rua"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  
                  fullWidth
                  id="numero"
                  label="Número"
                  name="numero"
                  autoComplete="family-numero"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  
                  fullWidth
                  id="bairro"
                  label="Bairro"
                  name="bairro"
                  autoComplete="family-bairro"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  
                  fullWidth
                  id="mussarela"
                  label="Pizza de Mussarela"
                  name="mussarela"
                  type='number'
                  autoComplete="family-bairro"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  
                  fullWidth
                  id="calabresa"
                  label="Pizza de Calabresa"
                  name="calabresa"
                  type='number'
                  autoComplete="family-bairro"
                />
              </Grid>
              <Grid item xs={13}>
                <FormControlLabel
                  control={<Checkbox value="accept" color="primary" />}
                  label='Aceito receber avisos nas próximas edições'
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Concluir Pedido
            </Button>
            
          </Box>
        </Box>
        <Copyright  sx={{ mt: 5 }} />
      </Container>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </ThemeProvider>
  );
}