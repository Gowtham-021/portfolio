import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Tooltip from '@mui/material/Tooltip';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DownloadIcon from '@mui/icons-material/Download';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article';
import CloseIcon from '@mui/icons-material/Close';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ShieldIcon from '@mui/icons-material/Shield';

const ROLES = [
  'Cybersecurity Engineer',
  'Penetration Tester',
  'CTF Player',
  'Security Researcher',
];

const keyframes = `
@keyframes float {
  0%, 100% { transform: translateY(0px) rotateX(15deg) rotateY(15deg); }
  50% { transform: translateY(-20px) rotateX(25deg) rotateY(25deg); }
}
@keyframes rotateCube {
  0% { transform: rotateX(0deg) rotateY(0deg); }
  100% { transform: rotateX(360deg) rotateY(360deg); }
}
@keyframes scanline {
  0% { top: -10%; }
  100% { top: 110%; }
}
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
`;

const SOCIAL_LINKS = [
  {
    icon: <EmailIcon />,
    label: 'Email',
    href: 'mailto:gowtham1717k@gmail.com',
    color: '#00e5ff',
  },
  {
    icon: <GitHubIcon />,
    label: 'GitHub',
    href: 'https://github.com/Gowtham-021',
    color: '#e0e6ed',
  },
  {
    icon: <LinkedInIcon />,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/gowtham-p-75085528b',
    color: '#0077b5',
  },
  {
    icon: <ShieldIcon />,
    label: 'TryHackMe',
    href: 'https://tryhackme.com/p/23cy20',
    color: '#88cc14',
    isExternal: true,
  },
];

export default function Hero() {
  const baseUrl = import.meta.env.BASE_URL;
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    if (typing) {
      if (charIndex < currentRole.length) {
        const t = setTimeout(() => {
          setDisplayed(currentRole.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        }, 70);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (charIndex > 0) {
        const t = setTimeout(() => {
          setDisplayed(currentRole.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
        }, 40);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((r) => (r + 1) % ROLES.length);
        setTyping(true);
      }
    }
  }, [typing, charIndex, roleIndex]);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        px: { xs: 3, md: 8 },
      }}
    >
      <style>{keyframes}</style>

      {/* Scanline effect */}
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          width: '100%',
          height: '2px',
          background: 'linear-gradient(90deg, transparent, rgba(0,229,255,0.3), transparent)',
          animation: 'scanline 6s linear infinite',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* 3D Cube */}
      <Box
        sx={{
          position: 'absolute',
          right: { xs: '5%', md: '10%' },
          top: '50%',
          transform: 'translateY(-50%)',
          width: { xs: 150, md: 220 },
          height: { xs: 150, md: 220 },
          perspective: 800,
          display: { xs: 'none', sm: 'block' },
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            position: 'relative',
            transformStyle: 'preserve-3d',
            animation: 'rotateCube 12s linear infinite',
          }}
        >
          {[
            { transform: 'rotateY(0deg) translateZ(75px)' },
            { transform: 'rotateY(90deg) translateZ(75px)' },
            { transform: 'rotateY(180deg) translateZ(75px)' },
            { transform: 'rotateY(-90deg) translateZ(75px)' },
            { transform: 'rotateX(90deg) translateZ(75px)' },
            { transform: 'rotateX(-90deg) translateZ(75px)' },
          ].map(({ transform }, i) => (
            <Box
              key={i}
              sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                transform,
                border: '1.5px solid rgba(0, 229, 255, 0.5)',
                background: 'rgba(0, 229, 255, 0.03)',
                boxShadow: 'inset 0 0 20px rgba(0, 229, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: 'primary.main', boxShadow: '0 0 8px #00e5ff' }} />
            </Box>
          ))}
        </Box>
      </Box>

      {/* Floating orbs */}
      <Box sx={{ position: 'absolute', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,229,255,0.06) 0%, transparent 70%)', top: '10%', left: '60%', pointerEvents: 'none' }} />
      <Box sx={{ position: 'absolute', width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,255,136,0.05) 0%, transparent 70%)', bottom: '15%', left: '50%', pointerEvents: 'none' }} />

      {/* Main content */}
      <Box sx={{ maxWidth: { xs: '100%', md: '60%' }, position: 'relative', zIndex: 2 }}>
        <Chip
          label="Available for opportunities"
          size="small"
          sx={{
            bgcolor: 'rgba(0, 255, 136, 0.1)',
            border: '1px solid rgba(0,255,136,0.4)',
            color: 'secondary.main',
            fontWeight: 600,
            mb: 3,
            animation: 'fadeInUp 0.6s ease forwards',
            animationDelay: '0.1s',
            opacity: 0,
          }}
        />

        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2.8rem', sm: '4rem', md: '5.5rem' },
            fontWeight: 800,
            lineHeight: 1.05,
            mb: 1,
            animation: 'fadeInUp 0.6s ease forwards',
            animationDelay: '0.2s',
            opacity: 0,
          }}
        >
          Hi, I'm{' '}
          <Box component="span" sx={{ background: 'linear-gradient(135deg, #00e5ff 0%, #00ff88 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline-block' }}>
            Gowtham P
          </Box>
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 3, height: 56, animation: 'fadeInUp 0.6s ease forwards', animationDelay: '0.35s', opacity: 0 }}>
          <Typography variant="h4" component="span" sx={{ fontSize: { xs: '1.4rem', md: '1.8rem' }, color: 'primary.main', fontWeight: 500 }}>
            {displayed}
          </Typography>
          <Box component="span" sx={{ display: 'inline-block', width: 3, height: { xs: 24, md: 32 }, bgcolor: 'primary.main', animation: 'blink 1s step-end infinite', borderRadius: 1 }} />
        </Box>

        <Typography
          variant="body1"
          sx={{ color: 'text.secondary', maxWidth: 520, lineHeight: 1.8, mb: 4, fontSize: '1.05rem', animation: 'fadeInUp 0.6s ease forwards', animationDelay: '0.5s', opacity: 0 }}
        >
          Cybersecurity undergraduate passionate about penetration testing, vulnerability
          assessment, and AI-powered security solutions. Building secure digital environments
          one exploit at a time.
        </Typography>

        {/* CTA Buttons */}
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', animation: 'fadeInUp 0.6s ease forwards', animationDelay: '0.65s', opacity: 0, mb: 3 }}>
          <Button
            variant="contained"
            size="large"
            onClick={() => scrollTo('#contact')}
            sx={{ bgcolor: 'primary.main', color: '#000', fontWeight: 700, px: 4, py: 1.5, boxShadow: '0 0 20px rgba(0, 229, 255, 0.4)', '&:hover': { bgcolor: 'primary.light', boxShadow: '0 0 30px rgba(0, 229, 255, 0.6)', transform: 'translateY(-2px)' }, transition: 'all 0.3s' }}
          >
            Get In Touch
          </Button>
          <Button
            variant="outlined"
            size="large"
            startIcon={<ArticleIcon />}
            onClick={() => setResumeOpen(true)}
            sx={{ borderColor: 'primary.main', color: 'primary.main', fontWeight: 600, px: 4, py: 1.5, '&:hover': { bgcolor: 'rgba(0, 229, 255, 0.08)', transform: 'translateY(-2px)' }, transition: 'all 0.3s' }}
          >
            View Resume
          </Button>
          <Button
            variant="outlined"
            size="large"
            startIcon={<DownloadIcon />}
            href={`${baseUrl}resume1_(1)_(1).pdf`}
            download
            sx={{ borderColor: 'rgba(0,255,136,0.5)', color: 'secondary.main', fontWeight: 600, px: 4, py: 1.5, '&:hover': { bgcolor: 'rgba(0, 255, 136, 0.08)', transform: 'translateY(-2px)' }, transition: 'all 0.3s' }}
          >
            Download CV
          </Button>
        </Box>

        {/* Social Icons Row */}
        <Box
          sx={{
            display: 'flex',
            gap: 1.5,
            alignItems: 'center',
            animation: 'fadeInUp 0.6s ease forwards',
            animationDelay: '0.8s',
            opacity: 0,
          }}
        >
          <Typography variant="caption" sx={{ color: 'text.secondary', letterSpacing: 2, fontSize: '0.65rem', mr: 0.5 }}>
            CONNECT
          </Typography>
          {SOCIAL_LINKS.map((s) => (
            <Tooltip key={s.label} title={s.label} placement="top">
              <IconButton
                component="a"
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                size="small"
                sx={{
                  color: 'text.secondary',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 2,
                  p: 1,
                  transition: 'all 0.25s',
                  '&:hover': {
                    color: s.color,
                    borderColor: s.color,
                    bgcolor: `${s.color}12`,
                    transform: 'translateY(-3px)',
                    boxShadow: `0 4px 15px ${s.color}30`,
                  },
                }}
              >
                {s.icon}
              </IconButton>
            </Tooltip>
          ))}
        </Box>
      </Box>

      {/* Scroll indicator */}
      <Box
        sx={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.5, cursor: 'pointer', opacity: 0.6, '&:hover': { opacity: 1 }, transition: 'opacity 0.2s' }}
        onClick={() => scrollTo('#about')}
      >
        <Typography variant="caption" sx={{ color: 'text.secondary', letterSpacing: 2, fontSize: '0.65rem' }}>SCROLL</Typography>
        <KeyboardArrowDownIcon sx={{ color: 'primary.main', animation: 'float 2s ease-in-out infinite', fontSize: 28 }} />
      </Box>

      {/* Resume Viewer Modal */}
      <Dialog
        open={resumeOpen}
        onClose={() => setResumeOpen(false)}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          sx: {
            bgcolor: 'background.paper',
            border: '1px solid rgba(0, 229, 255, 0.2)',
            borderRadius: 3,
            height: '90vh',
          },
        }}
      >
        <DialogTitle
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(0, 229, 255, 0.12)',
            pb: 2,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <ArticleIcon sx={{ color: 'primary.main' }} />
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              Resume — Gowtham P
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Tooltip title="Open in new tab">
              <IconButton
                component="a"
                href={`${baseUrl}resume1_(1)_(1).pdf`}
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                sx={{ color: 'primary.main', '&:hover': { bgcolor: 'rgba(0,229,255,0.1)' } }}
              >
                <OpenInNewIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Download">
              <IconButton
                component="a"
                href={`${baseUrl}resume1_(1)_(1).pdf`}
                download
                size="small"
                sx={{ color: 'primary.main', '&:hover': { bgcolor: 'rgba(0,229,255,0.1)' } }}
              >
                <DownloadIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <IconButton onClick={() => setResumeOpen(false)} size="small" sx={{ color: 'text.secondary', '&:hover': { bgcolor: 'rgba(255,255,255,0.08)' } }}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent sx={{ p: 0, overflow: 'hidden' }}>
          <Box
            component="iframe"
            src={`${baseUrl}resume1_(1)_(1).pdf#toolbar=0`}
            title="Gowtham P Resume"
            sx={{
              width: '100%',
              height: '100%',
              border: 'none',
              display: 'block',
              minHeight: 'calc(90vh - 80px)',
            }}
          />
        </DialogContent>
      </Dialog>
    </Box>
  );
}
