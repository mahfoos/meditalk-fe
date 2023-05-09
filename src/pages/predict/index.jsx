import Head from 'next/head';
import PredictForm from '../../components/PredictForm';
import styles from '../../styles/Home.module.css';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { useRouter } from 'next/router';

export default function Predict() {
  const router = useRouter();

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
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              onClick={() => router.push('/')}
              style={{ cursor: 'pointer' }}
            >
              Meditalk
            </Typography>
          </Toolbar>
        </AppBar>
        <h1 className={styles.title}>Predict Severity</h1>
        <div className={styles.grid}>
          <div className={styles.card}>
            <PredictForm />
          </div>
          <Box sx={{ marginTop: 3 }}>
        <Typography variant="body1">
          <strong>Low severity:</strong> is not serious and is likely to resolve with minimal
          intervention.
        </Typography>
        <Typography variant="body1">
          <strong>Medium severity:</strong> requires some attention and treatment, but is not
          life-threatening or urgent.
        </Typography>
        <Typography variant="body1">
          <strong>High severity:</strong> requires urgent attention, and may be life-threatening if
          not addressed promptly.
        </Typography>
      </Box>
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
