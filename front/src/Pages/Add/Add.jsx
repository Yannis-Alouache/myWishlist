import * as React from 'react';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function Add() {
  const handleSubmit = (event) => {
    let config = {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    }

    event.preventDefault();

    const data = new FormData(event.currentTarget);

    console.log(data.get('image'));

    axios.post('http://127.0.0.1:5000/', data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
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
          <Avatar sx={{ m: 1, bgcolor: 'blue' }}>
            <AddIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Ajoutez un article
          </Typography>
          <Box component="form" method="POST" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <br />
            <input type="file" name="image" id="file" required class="inputfile" />
            <label for="file">Choisir un fichier</label>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Ajoutez
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}