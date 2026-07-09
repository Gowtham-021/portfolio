import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';

const items = [
  {
    type: 'work',
    company: 'Pargavan Cyber Solution',
    role: 'Cybersecurity Intern',
    period: 'July 2025',
    color: '#00e5ff',
    bullets: [
      'Performed penetration testing and vulnerability assessment using standard security methodologies.',
      'Solved Capture The Flag (CTF) challenges to strengthen exploitation and reconnaissance skills.',
      'Gained hands-on experience in OSINT, web application security, and cloud security.',
    ],
    tags: ['Penetration Testing', 'CTF', 'OSINT', 'Web App Security', 'Cloud Security'],
  },
  {
    type: 'work',
    company: 'United Soft Tech',
    role: 'AI/ML Intern',
    period: 'June 2024',
    color: '#00ff88',
    bullets: [
      'Completed training on AI-powered Machine Learning and Deep Learning techniques.',
      'Learned supervised and unsupervised learning concepts and data-driven decision making.',
      'Explored AI applications in cybersecurity automation and threat detection.',
    ],
    tags: ['Machine Learning', 'Deep Learning', 'AI', 'Cybersecurity Automation'],
  },
  {
    type: 'education',
    company: 'KSR Institute for Engineering and Technology',
    role: 'B.E. CSE (Cyber Security)',
    period: '2023 – 2027',
    color: '#7c4dff',
    bullets: [
      'Pursuing Bachelor of Engineering in Computer Science & Engineering with Cyber Security specialization.',
      'Active participation in hackathons and security competitions.',
      'Coursework in network security, web application security, and ethical hacking.',
    ],
    tags: ['Cyber Security', 'Engineering', 'Networking', 'Ethical Hacking'],
  },
];

export default function Experience() {
  return (
    <Box
      id="experience"
      sx={{
        py: { xs: 10, md: 14 },
        px: { xs: 3, md: 8 },
        position: 'relative',
        zIndex: 2,
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, transparent, rgba(0,229,255,0.015), transparent)',
          pointerEvents: 'none',
        },
      }}
    >
      <Typography
        variant="overline"
        sx={{ color: 'primary.main', letterSpacing: 4, fontWeight: 600, display: 'block', mb: 1, textAlign: 'center' }}
      >
        MY JOURNEY
      </Typography>
      <Typography variant="h2" sx={{ textAlign: 'center', mb: { xs: 6, md: 8 }, fontWeight: 700 }}>
        Experience &{' '}
        <Box
          component="span"
          sx={{ background: 'linear-gradient(135deg, #00e5ff, #00ff88)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
        >
          Education
        </Box>
      </Typography>

      <Box sx={{ maxWidth: 800, mx: 'auto', position: 'relative' }}>
        {/* Vertical line */}
        <Box
          sx={{
            position: 'absolute',
            left: { xs: 20, sm: 28 },
            top: 0,
            bottom: 0,
            width: 2,
            background: 'linear-gradient(180deg, #00e5ff, #00ff88, #7c4dff)',
            opacity: 0.3,
          }}
        />

        {items.map((item, index) => (
          <Box
            key={item.company}
            sx={{
              display: 'flex',
              gap: { xs: 3, sm: 4 },
              mb: index < items.length - 1 ? 5 : 0,
              position: 'relative',
            }}
          >
            {/* Icon node */}
            <Box sx={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Box
                sx={{
                  width: { xs: 40, sm: 56 },
                  height: { xs: 40, sm: 56 },
                  borderRadius: '50%',
                  bgcolor: 'background.paper',
                  border: `2px solid ${item.color}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: `0 0 20px ${item.color}40`,
                  zIndex: 1,
                  position: 'relative',
                  flexShrink: 0,
                }}
              >
                {item.type === 'work' ? (
                  <WorkIcon sx={{ color: item.color, fontSize: { xs: 18, sm: 22 } }} />
                ) : (
                  <SchoolIcon sx={{ color: item.color, fontSize: { xs: 18, sm: 22 } }} />
                )}
              </Box>
            </Box>

            {/* Content card */}
            <Box
              sx={{
                flex: 1,
                bgcolor: 'background.paper',
                border: `1px solid ${item.color}20`,
                borderRadius: 3,
                p: { xs: 2.5, sm: 3.5 },
                transition: 'all 0.3s',
                '&:hover': {
                  borderColor: item.color,
                  boxShadow: `0 8px 40px ${item.color}15`,
                  transform: 'translateX(4px)',
                },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: 1,
                  mb: 1,
                }}
              >
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: item.color, lineHeight: 1.2 }}>
                    {item.role}
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary' }}>
                    {item.company}
                  </Typography>
                </Box>
                <Chip
                  label={item.period}
                  size="small"
                  sx={{
                    bgcolor: `${item.color}12`,
                    border: `1px solid ${item.color}30`,
                    color: item.color,
                    fontWeight: 600,
                    fontSize: '0.75rem',
                  }}
                />
              </Box>

              <Box component="ul" sx={{ pl: 2, mt: 1.5, mb: 2 }}>
                {item.bullets.map((b) => (
                  <Box
                    component="li"
                    key={b}
                    sx={{
                      color: 'text.secondary',
                      fontSize: '0.875rem',
                      lineHeight: 1.8,
                      mb: 0.5,
                      '&::marker': { color: item.color },
                    }}
                  >
                    {b}
                  </Box>
                ))}
              </Box>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                {item.tags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    size="small"
                    sx={{
                      bgcolor: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: 'text.secondary',
                      fontSize: '0.7rem',
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
