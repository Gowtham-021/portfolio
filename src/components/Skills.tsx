import { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import PythonIcon from '@mui/icons-material/Code';
import BugReportIcon from '@mui/icons-material/BugReport';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
import TerminalIcon from '@mui/icons-material/Terminal';
import StorageIcon from '@mui/icons-material/Storage';
import GitHubIcon from '@mui/icons-material/GitHub';
import CloudIcon from '@mui/icons-material/Cloud';
import SmartToyIcon from '@mui/icons-material/SmartToy';

const skills = [
  { label: 'Python', value: 70, icon: <PythonIcon /> },
  { label: 'Java', value: 65, icon: <TerminalIcon /> },
  { label: 'Penetration Testing', value: 75, icon: <BugReportIcon /> },
  { label: 'Burp Suite', value: 60, icon: <BugReportIcon /> },
  { label: 'Wireshark', value: 72, icon: <NetworkCheckIcon /> },
  { label: 'Nmap', value: 80, icon: <NetworkCheckIcon /> },
  { label: 'Kali Linux', value: 85, icon: <TerminalIcon /> },
  { label: 'Metasploit', value: 60, icon: <CloudIcon /> },
  { label: 'Git', value: 75, icon: <GitHubIcon /> },
  { label: 'SQL', value: 60, icon: <SmartToyIcon /> },
  { label: 'OSINT', value: 75, icon: <StorageIcon /> },
  { label: 'Ubuntu', value: 60, icon: <TerminalIcon /> },
];

const toolCards = [
  { icon: <BugReportIcon />, title: 'Burp Suite', desc: 'Web application security testing' },
  { icon: <NetworkCheckIcon />, title: 'Wireshark', desc: 'Network protocol analysis' },
  { icon: <TerminalIcon />, title: 'Nmap', desc: 'Network scanning & discovery' },
  { icon: <TerminalIcon />, title: 'Kali Linux', desc: 'Penetration testing OS' },
  { icon: <PythonIcon />, title: 'Python', desc: 'Security scripting & automation' },
  { icon: <StorageIcon />, title: 'OSINT Tools', desc: 'Open source intelligence' },
];

function SkillCard({ label, value, icon }: { label: string; value: number; icon: React.ReactNode }) {
  const [progress, setProgress] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setProgress(value), 150);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <Box
      ref={ref}
      sx={{
        bgcolor: 'background.paper',
        border: '1px solid rgba(0, 229, 255, 0.1)',
        borderRadius: 3,
        p: 3,
        mb: 2,
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'translateY(-3px)',
          boxShadow: '0 20px 40px rgba(0, 229, 255, 0.08)',
        },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
        <Box
          sx={{
            width: 44,
            height: 44,
            borderRadius: '50%',
            bgcolor: 'rgba(0, 229, 255, 0.08)',
            color: 'primary.main',
            display: 'grid',
            placeItems: 'center',
            boxShadow: 'inset 0 0 0 1px rgba(0,229,255,0.08)',
          }}
        >
          {icon}
        </Box>
        <Box sx={{ flexGrow: 1, minWidth: 0 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.primary' }}>
            {label}
          </Typography>
        </Box>
        <Typography variant="subtitle2" sx={{ color: 'primary.main', fontWeight: 700 }}>
          {progress}%
        </Typography>
      </Box>
      <Box sx={{ height: 10, borderRadius: 5, bgcolor: 'rgba(255,255,255,0.08)', overflow: 'hidden' }}>
        <Box
          sx={{
            width: `${progress}%`,
            height: '100%',
            borderRadius: 5,
            background: 'linear-gradient(90deg, #00e5ff, #00ff88)',
            boxShadow: '0 0 16px rgba(0,229,255,0.2)',
            transition: 'width 1.1s ease',
          }}
        />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1, color: 'text.secondary', fontSize: '0.72rem' }}>
        <span>Novice</span>
        <span>Expert</span>
      </Box>
    </Box>
  );
}

export default function Skills() {
  return (
    <Box
      id="skills"
      sx={{
        py: { xs: 10, md: 14 },
        px: { xs: 3, md: 8 },
        position: 'relative',
        zIndex: 2,
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at top left, rgba(0,229,255,0.08), transparent 35%), radial-gradient(circle at bottom right, rgba(0,255,136,0.05), transparent 30%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Typography
        variant="overline"
        sx={{ color: 'primary.main', letterSpacing: 4, fontWeight: 600, display: 'block', mb: 1, textAlign: 'center' }}
      >
        WHAT I KNOW
      </Typography>
      <Typography variant="h2" sx={{ textAlign: 'center', mb: { xs: 6, md: 8 }, fontWeight: 700 }}>
        Technical{' '}
        <Box
          component="span"
          sx={{ background: 'linear-gradient(135deg, #00e5ff, #00ff88)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
        >
          Skills
        </Box>
      </Typography>

      <Grid container spacing={6}>
        <Grid size={{ xs: 12, md: 7 }}>
          <Typography variant="h6" sx={{ mb: 3, color: 'primary.main', fontWeight: 600 }}>
            Proficiency
          </Typography>
          <Grid container spacing={2}>
            {skills.map((s) => (
              <Grid key={s.label} size={{ xs: 12, sm: 6 }}>
                <SkillCard label={s.label} value={s.value} icon={s.icon} />
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid size={{ xs: 12, md: 5 }}>
          <Typography variant="h6" sx={{ mb: 3, color: 'primary.main', fontWeight: 600 }}>
            Tools & Technologies
          </Typography>
          <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' } }}>
            {toolCards.map((tool) => (
              <Box
                key={tool.title}
                sx={{
                  bgcolor: 'background.paper',
                  border: '1px solid rgba(0, 229, 255, 0.08)',
                  borderRadius: 3,
                  p: 3,
                  minHeight: 120,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.3s',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: '0 20px 40px rgba(0, 229, 255, 0.08)',
                    borderColor: 'primary.main',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: '50%',
                    bgcolor: 'rgba(0, 229, 255, 0.1)',
                    color: 'primary.main',
                    display: 'grid',
                    placeItems: 'center',
                    mb: 2,
                  }}
                >
                  {tool.icon}
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 700, mb: 0.5 }}>
                    {tool.title}
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                    {tool.desc}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
