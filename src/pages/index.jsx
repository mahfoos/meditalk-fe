import Head from 'next/head';
import { AppBar, Toolbar, Typography, Box, Button, Container, Grid, Card } from '@mui/material';
import { MedicalServices, TextSnippet } from '@mui/icons-material';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
export default function Home() {

  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>Meditalk</title>
        <meta name="description" content="Meditalk Text Processing App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppBar position="fixed" className={styles.appBar}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Meditalk
          </Typography>
        </Toolbar>
      </AppBar>

      <main>
      <section className={styles.hero}>
          <div className={styles.overlay}>
            <Container maxWidth="md">
              <Typography variant="h2" component="h1" gutterBottom className={styles.heroTitle}>
                Meditalk
              </Typography>
              <Typography variant="h5" component="p" gutterBottom className={styles.heroSubtitle}>
                Enhance your medical understanding with advanced text processing and analytics.
              </Typography>
            </Container>
          </div>
        </section>

        <Container maxWidth="md" className={styles.features}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card className={styles.card} onClick={() => router.push('/predict')}>
              <Box textAlign="center" className={styles.featuresCard}>
                <MedicalServices fontSize="large" />
                <Typography variant="h6" gutterBottom>
                  Predict Severity
                </Typography>
                <Typography>
                  Analyze patient questions and predict the severity of their condition using advanced Deep learning models.
                </Typography>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className={styles.card} onClick={() => router.push('/summarize')}>
              <Box textAlign="center" className={styles.featuresCard}>
                <TextSnippet fontSize="large" />
                <Typography variant="h6" gutterBottom>
                  Summarize Text
                </Typography>
                <Typography>
                  Automatically summarize medical text to extract the most important information, saving time and improving comprehension.
                </Typography>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>

      </main>

      <footer className={styles.footer}>
        <Typography variant="body2" color="textSecondary" align="center">
          &copy; {new Date().getFullYear()} Meditalk
        </Typography>
      </footer>
    </div>
  );
}
