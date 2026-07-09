import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/GridLegacy';
import VerifiedIcon from '@mui/icons-material/Verified';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import StarIcon from '@mui/icons-material/Star';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import BugReportIcon from '@mui/icons-material/BugReport';

interface Certification {
  title: string;
  issuer: string;
  type: string;
  color: string;
  icon: React.ReactNode;
  description: string;
  file: string;
}

const certifications: Certification[] = [
  {
    title: 'Thoothukudi District Police – Hackathon 2025',
    issuer: 'Thoothukudi District Police',
    type: 'Achievement',
    color: '#00e5ff',
    icon: <LocalPoliceIcon />,
    description: 'Recognized for participation and achievement in the district-level cybersecurity hackathon.',
    file: '/certificates/hackathon-2025.pdf',
  },
  {
    title: 'AI Powered Machine Learning & Deep Learning Techniques',
    issuer: 'United Soft Tech',
    type: 'Certification',
    color: '#00ff88',
    icon: <SmartToyIcon />,
    description: 'Completed advanced training in AI, ML, and Deep Learning applications in cybersecurity.',
    file: '/certificates/ai-ml-certificate.pdf',
  },
  {
    title: 'Web Application Testing',
    issuer: 'Industry Certification',
    type: 'Certification',
    color: '#7c4dff',
    icon: <BugReportIcon />,
    description: 'Certified in web application security testing methodologies and best practices.',
    file: '/certificates/web-app-testing.pdf',
  },
  {
    title: 'Mastering Network Security: Defending Against Cyber Threats',
    issuer: 'Cyber Training Institute',
    type: 'Certification',
    color: '#00e5ff',
    icon: <VerifiedIcon />,
    description: 'Completed advanced training in network security and threat mitigation.',
    file: '/certificates/mastering-network-security-defending-against-cyber-threats.pdf',
  },
  {
    title: 'GenAI Cybersecurity Solutions',
    issuer: 'FutureSec Academy',
    type: 'Certification',
    color: '#00ff88',
    icon: <VerifiedIcon />,
    description: 'Trained in AI-powered cybersecurity solutions and threat detection.',
    file: '/certificates/genai-cybersecurity-solutions.pdf',
  },
  {
    title: 'Ethical Hacking Virtual Internship',
    issuer: 'CyberPath Institute',
    type: 'Certification',
    color: '#7c4dff',
    icon: <VerifiedIcon />,
    description: 'Hands-on ethical hacking internship focused on penetration testing skills.',
    file: '/certificates/ethical-hacking-virtual-internship.pdf',
  },
  {
    title: 'Oracle Cloud Infrastructure',
    issuer: 'Oracle University',
    type: 'Certification',
    color: '#ffd700',
    icon: <VerifiedIcon />,
    description: 'Certified in Oracle Cloud Infrastructure fundamentals and security.',
    file: '/certificates/oracle-cloud-infrastructure.pdf',
  },
  {
    title: 'Pre Security',
    issuer: 'Cyber Safety Academy',
    type: 'Certification',
    color: '#00e5ff',
    icon: <VerifiedIcon />,
    description: 'Completed foundational cybersecurity training in pre-security principles.',
    file: '/certificates/pre-security.pdf',
  },

];

const achievements = [
  {
    title: 'NPTEL Elite + Silver Certification',
    subtitle: 'Introduction to Industry 4.0 and Industrial Internet of Things',
    detail: '79% — Elite + Silver',
    icon: <WorkspacePremiumIcon sx={{ fontSize: 28 }} />,
    color: '#ffd700',
    file: '',
  },
  {
    title: 'Blockchain and its Applications',
    subtitle: 'Completed with 60% in the certification program',
    detail: '60% — Blockchain and its Applications',
    icon: <StarIcon sx={{ fontSize: 28 }} />,
    color: '#00ff88',
    file: '/certificates/blockchain-and-its-applications.pdf',
  },
];

export default function Certifications() {

  return (
    <Box
      id="certifications"
      sx={{
        py: { xs: 10, md: 14 },
        px: { xs: 3, md: 8 },
        position: 'relative',
        zIndex: 2,
      }}
    >
      <Typography
        variant="overline"
        sx={{ color: 'primary.main', letterSpacing: 4, fontWeight: 600, display: 'block', mb: 1, textAlign: 'center' }}
      >
        ACCOMPLISHMENTS
      </Typography>
      <Typography variant="h2" sx={{ textAlign: 'center', mb: { xs: 6, md: 8 }, fontWeight: 700 }}>
        Certifications &{' '}
        <Box component="span" sx={{ background: 'linear-gradient(135deg, #00e5ff, #00ff88)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Achievements
        </Box>
      </Typography>

      {/* Certifications */}
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}>
        <VerifiedIcon sx={{ color: 'primary.main' }} />
        Certifications
      </Typography>
      <Grid container spacing={3} sx={{ mb: 6 }}>
        {certifications.map((cert) => (
          <Grid item key={cert.title} xs={12} sm={6} md={4}>
            <Box
              sx={{
                bgcolor: 'background.paper',
                border: `1px solid ${cert.color}20`,
                borderRadius: 3,
                p: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                transition: 'all 0.3s',
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                  borderColor: cert.color,
                  boxShadow: `0 8px 40px ${cert.color}15`,
                  transform: 'translateY(-6px)',
                },
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: 60,
                  height: 60,
                  background: `radial-gradient(circle at top right, ${cert.color}20, transparent 70%)`,
                  pointerEvents: 'none',
                }}
              />

              <Box
                sx={{
                  p: 1.5,
                  bgcolor: `${cert.color}15`,
                  borderRadius: 2,
                  color: cert.color,
                  display: 'inline-flex',
                  width: 'fit-content',
                }}
              >
                {cert.icon}
              </Box>

              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="body1" sx={{ fontWeight: 700, mb: 0.5, lineHeight: 1.4 }}>
                  {cert.title}
                </Typography>
                <Typography variant="caption" sx={{ color: cert.color, fontWeight: 600, display: 'block', mb: 1 }}>
                  {cert.issuer}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.82rem', lineHeight: 1.6 }}>
                  {cert.description}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 0.5,
                  px: 1.5,
                  py: 0.5,
                  bgcolor: `${cert.color}10`,
                  border: `1px solid ${cert.color}25`,
                  borderRadius: 1,
                  width: 'fit-content',
                }}
              >
                <VerifiedIcon sx={{ fontSize: 12, color: cert.color }} />
                <Typography variant="caption" sx={{ color: cert.color, fontWeight: 600, fontSize: '0.7rem' }}>
                  {cert.type}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Achievements */}
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}>
        <EmojiEventsIcon sx={{ color: '#ffd700' }} />
        Notable Achievements
      </Typography>
      <Grid container spacing={3}>
        {achievements.map((a) => (
          <Grid item key={a.title} xs={12} md={6}>
            <Box
              sx={{
                bgcolor: 'background.paper',
                border: `1px solid ${a.color}25`,
                borderRadius: 3,
                p: 3,
                display: 'flex',
                alignItems: 'center',
                gap: 3,
                transition: 'all 0.3s',
                '&:hover': {
                  borderColor: a.color,
                  boxShadow: `0 8px 40px ${a.color}15`,
                  transform: 'translateY(-4px)',
                },
              }}
            >
              <Box
                sx={{
                  p: 2,
                  bgcolor: `${a.color}15`,
                  borderRadius: 2,
                  color: a.color,
                  flexShrink: 0,
                  boxShadow: `0 0 20px ${a.color}30`,
                }}
              >
                {a.icon}
              </Box>
              <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                <Typography variant="body1" sx={{ fontWeight: 700, mb: 0.25 }}>
                  {a.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.75, lineHeight: 1.5 }}>
                  {a.subtitle}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <StarIcon sx={{ fontSize: 14, color: a.color }} />
                    <Typography variant="caption" sx={{ color: a.color, fontWeight: 700 }}>
                      {a.detail}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

    </Box>
  );
}
