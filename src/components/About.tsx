import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import SchoolIcon from '@mui/icons-material/School';
import SecurityIcon from '@mui/icons-material/Security';

const stats = [
  { label: 'Projects', value: '2+' },
  { label: 'Internships', value: '2' },
  { label: 'Certifications', value: '8+' },
  { label: 'CGPA Potential', value: '8+' },
];

export default function About() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <Box
      id="about"
      sx={{
        py: { xs: 10, md: 14 },
        px: { xs: 3, md: 8 },
        position: 'relative',
        zIndex: 2,
      }}
    >
      <Typography
        variant="overline"
        sx={{
          color: 'primary.main',
          letterSpacing: 4,
          fontWeight: 600,
          display: 'block',
          mb: 1,
          textAlign: 'center',
        }}
      >
        GET TO KNOW ME
      </Typography>
      <Typography
        variant="h2"
        sx={{ textAlign: 'center', mb: { xs: 6, md: 8 }, fontWeight: 700 }}
      >
        About{' '}
        <Box
          component="span"
          sx={{
            background: 'linear-gradient(135deg, #00e5ff, #00ff88)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Me
        </Box>
      </Typography>

      <Grid container spacing={6} alignItems="center" justifyContent="center">
        {/* Profile image */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              sx={{
                position: 'relative',
                display: 'inline-block',
              }}
            >
              {/* Outer glow ring */}
              <Box
                sx={{
                  position: 'absolute',
                  inset: -6,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #00e5ff, #00ff88, #00e5ff)',
                  animation: 'spin 6s linear infinite',
                  '@keyframes spin': {
                    from: { transform: 'rotate(0deg)' },
                    to: { transform: 'rotate(360deg)' },
                  },
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  inset: -4,
                  borderRadius: '50%',
                  bgcolor: 'background.default',
                }}
              />
              <Avatar
                src={`${baseUrl}images/WhatsApp_Image_2026-07-02_at_7.00.43_PM.jpeg`}
                alt="Gowtham P"
                sx={{
                  width: { xs: 200, md: 260 },
                  height: { xs: 200, md: 260 },
                  position: 'relative',
                  border: '3px solid rgba(0, 229, 255, 0.3)',
                  boxShadow: '0 0 40px rgba(0, 229, 255, 0.2)',
                }}
              />
              {/* Floating badge */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 10,
                  right: -10,
                  bgcolor: 'background.paper',
                  border: '1px solid rgba(0, 229, 255, 0.3)',
                  borderRadius: 2,
                  px: 1.5,
                  py: 0.75,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.75,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
                }}
              >
                <SecurityIcon sx={{ color: 'primary.main', fontSize: 16 }} />
                <Typography variant="caption" sx={{ fontWeight: 600, color: 'primary.main', fontSize: '0.7rem' }}>
                  Cyber Security
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>

        {/* Info */}
        <Grid size={{ xs: 12, md: 8 }}>
          <Typography
            variant="h4"
            sx={{ mb: 2, fontWeight: 600, color: 'primary.main' }}
          >
            Cybersecurity Undergraduate
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', lineHeight: 1.9, mb: 3, fontSize: '1.05rem' }}
          >
            I'm a passionate cybersecurity student at KSR Institute for Engineering and Technology,
            specializing in penetration testing and vulnerability assessment. With hands-on experience
            in OSINT, web application security, and cloud security, I'm driven to build safer digital
            ecosystems. I also explore AI-based security automation and threat detection systems.
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <EmailIcon sx={{ color: 'primary.main', fontSize: 18 }} />
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                gowtham1717k@gmail.com
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <PhoneIcon sx={{ color: 'primary.main', fontSize: 18 }} />
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                +91 6379420426
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <SchoolIcon sx={{ color: 'primary.main', fontSize: 18 }} />
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                B.E. CSE (Cyber Security) — KSR Institute, 2023–2027
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
            {['Penetration Testing', 'CTF Player', 'OSINT', 'SQL', 'Web App Security', 'AI/ML'].map((tag) => (
              <Chip
                key={tag}
                label={tag}
                size="small"
                sx={{
                  bgcolor: 'rgba(0, 229, 255, 0.08)',
                  border: '1px solid rgba(0, 229, 255, 0.25)',
                  color: 'primary.main',
                  fontWeight: 500,
                }}
              />
            ))}
          </Box>

          {/* Stats */}
          <Grid container spacing={2}>
            {stats.map((s) => (
              <Grid key={s.label} size={{ xs: 6, sm: 3 }}>
                <Box
                  sx={{
                    bgcolor: 'background.paper',
                    border: '1px solid rgba(0, 229, 255, 0.12)',
                    borderRadius: 2,
                    p: 2,
                    textAlign: 'center',
                    transition: 'all 0.3s',
                    '&:hover': {
                      borderColor: 'primary.main',
                      boxShadow: '0 0 20px rgba(0,229,255,0.15)',
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 800,
                      background: 'linear-gradient(135deg, #00e5ff, #00ff88)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      lineHeight: 1.2,
                    }}
                  >
                    {s.value}
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                    {s.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
