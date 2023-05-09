import Head from 'next/head';
import SummarizeForm from '../../components/SummarizeForm';
import styles from '../../styles/Home.module.css';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { useRouter } from 'next/router';

export default function Summarize() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>Meditalk - Summarize Text</title>
        <meta name="description" content="Meditalk Text Summarization" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box sx={{ marginTop: 8 }}>
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
          <h1 className={styles.title}>Summarize Text</h1>
          <div className={styles.grid}>
            <div className={styles.card}>
              <SummarizeForm />
            </div>
          </div>
        </main>
      </Box>

      <footer className={styles.footer}>
        <Typography variant="body2" color="textSecondary" align="center">
          &copy; {new Date().getFullYear()} Meditalk
        </Typography>
      </footer>
    </div>
  );
}
