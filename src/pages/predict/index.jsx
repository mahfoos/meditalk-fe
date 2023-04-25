import Head from 'next/head';
import PredictForm from '../../components/PredictForm';
import styles from '../../styles/Home.module.css';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';

export default function Predict() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Meditalk - Predict Severity</title>
        <meta name="description" content="Meditalk Severity Prediction" />
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
        <h1 className={styles.title}>Predict Severity</h1>
        <div className={styles.grid}>
          <div className={styles.card}>
            <PredictForm />
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <Typography variant="body2" color="textSecondary" align="center">
          &copy; {new Date().getFullYear()} Meditalk
        </Typography>
      </footer>
    </div>
  );
}
