import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Meditalk</title>
        <meta name="description" content="Meditalk Text Processing App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <AppBar position="fixed" className={styles.appBar}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Meditalk
            </Typography>
            <Box>
              <Button color="inherit" href="/predict">Predict Severity</Button>
              <Button color="inherit" href="/summarize">Summarize Text</Button>
            </Box>
          </Toolbar>
        </AppBar>
        <h1 className={styles.title}>Text Processing App</h1>
      </main>

      <footer className={styles.footer}>
        <Typography variant="body2" color="textSecondary" align="center">
          &copy; {new Date().getFullYear()} Meditalk
        </Typography>
      </footer>
    </div>
  );
}
