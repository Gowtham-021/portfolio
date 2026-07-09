import { useRef, type MouseEvent as ReactMouseEvent } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import PolicyIcon from '@mui/icons-material/Policy';
import MapIcon from '@mui/icons-material/Map';

const projects = [
  {
    title: 'CopConnect',
    subtitle: 'Tamil Nadu Police Virtual Assistant',
    description:
      'A multilingual virtual assistant bridging citizens and law enforcement with 24/7 access to police services, emergency guidance, and public safety information through automated query handling.',
    tags: ['NLP', 'Python', 'Multilingual', 'Virtual Assistant', 'Public Safety'],
    icon: <PolicyIcon sx={{ fontSize: 32 }} />,
    gradient: 'linear-gradient(135deg, rgba(0,229,255,0.15), rgba(0,100,150,0.08))',
    color: '#00e5ff',
    highlights: [
      'Multilingual communication support',
      '24/7 emergency guidance system',
      'Automated query handling',
    ],
  },
  {
    title: 'Roots & Routes',
    subtitle: 'Heritage & Location Explorer of Tamil Nadu',
    description:
      'A location-based web application exploring Tamil Nadu\'s cultural heritage, historical sites, and tourist locations with interactive maps, search, and filtering to promote cultural awareness.',
    tags: ['Web App', 'Maps API', 'JavaScript', 'Heritage', 'Tourism'],
    icon: <MapIcon sx={{ fontSize: 32 }} />,
    gradient: 'linear-gradient(135deg, rgba(0,255,136,0.12), rgba(0,100,60,0.06))',
    color: '#00ff88',
    highlights: [
      'Interactive map integration',
      'Search & filtering system',
      'Heritage landmark discovery',
    ],
  },
];

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -8;
    const rotateY = ((x - cx) / cx) * 8;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    }
  };

  return (
    <Box
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      sx={{
        bgcolor: 'background.paper',
        border: `1px solid ${project.color}22`,
        borderRadius: 3,
        p: { xs: 3, md: 4 },
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'default',
        transition: 'transform 0.1s ease, box-shadow 0.3s ease, border-color 0.3s',
        background: project.gradient,
        '&:hover': {
          borderColor: project.color,
          boxShadow: `0 20px 60px rgba(0,0,0,0.4), 0 0 40px ${project.color}20`,
        },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Corner accent */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: 80,
          height: 80,
          background: `radial-gradient(circle at top right, ${project.color}20, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />

      <Box
        sx={{
          p: 1.5,
          bgcolor: `${project.color}15`,
          border: `1px solid ${project.color}30`,
          borderRadius: 2,
          color: project.color,
          display: 'inline-flex',
          mb: 2.5,
          width: 'fit-content',
        }}
      >
        {project.icon}
      </Box>

      <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5, color: project.color }}>
        {project.title}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500, mb: 2 }}>
        {project.subtitle}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 3, flexGrow: 1 }}>
        {project.description}
      </Typography>

      <Box sx={{ mb: 3 }}>
        {project.highlights.map((h) => (
          <Box key={h} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.75 }}>
            <Box
              sx={{
                width: 5,
                height: 5,
                borderRadius: '50%',
                bgcolor: project.color,
                boxShadow: `0 0 6px ${project.color}`,
                flexShrink: 0,
              }}
            />
            <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.85rem' }}>
              {h}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
        {project.tags.map((tag) => (
          <Chip
            key={tag}
            label={tag}
            size="small"
            sx={{
              bgcolor: `${project.color}12`,
              border: `1px solid ${project.color}30`,
              color: project.color,
              fontSize: '0.7rem',
              fontWeight: 500,
            }}
          />
        ))}
      </Box>
    </Box>
  );
}

export default function Projects() {
  return (
    <Box
      id="projects"
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
        WHAT I'VE BUILT
      </Typography>
      <Typography variant="h2" sx={{ textAlign: 'center', mb: { xs: 6, md: 8 }, fontWeight: 700 }}>
        Featured{' '}
        <Box
          component="span"
          sx={{ background: 'linear-gradient(135deg, #00e5ff, #00ff88)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
        >
          Projects
        </Box>
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {projects.map((p) => (
          <Grid key={p.title} size={{ xs: 12, md: 6 }}>
            <ProjectCard project={p} />
          </Grid>
        ))}
      </Grid>

      <Box
        sx={{
          mt: 6,
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1,
          color: 'text.secondary',
        }}
      >
        <OpenInNewIcon sx={{ fontSize: 16 }} />
        <Typography variant="body2">
          More projects coming soon — currently building in stealth mode
        </Typography>
      </Box>
    </Box>
  );
}
