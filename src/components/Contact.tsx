import { useState, type FormEvent } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const contacts = [
  { icon: <EmailIcon />, label: 'Email', value: 'gowtham1717k@gmail.com', href: 'mailto:gowtham1717k@gmail.com', color: '#00e5ff' },
  { icon: <PhoneIcon />, label: 'Phone', value: '+91 6379420426', href: 'tel:+916379420426', color: '#00ff88' },
  { icon: <LinkedInIcon />, label: 'LinkedIn', value: 'gowtham-p-75085528b', href: 'https://www.linkedin.com/in/gowtham-p-75085528b', color: '#0077b5' },
  { icon: <LocationOnIcon />, label: 'Location', value: 'Tamil Nadu, India', href: null, color: '#7c4dff' },
];

const defaultContactEndpoint = 'https://formsubmit.co/ajax/gowtham1717k@gmail.com';
const contactEndpoint = (import.meta.env.VITE_CONTACT_FORM_ENDPOINT as string | undefined) || defaultContactEndpoint;

const fieldSx = {
  '& .MuiOutlinedInput-root': {
    bgcolor: 'rgba(255,255,255,0.03)',
    '& fieldset': { borderColor: 'rgba(255,255,255,0.12)' },
    '&:hover fieldset': { borderColor: 'rgba(0,229,255,0.4)' },
    '&.Mui-focused fieldset': { borderColor: 'primary.main' },
  },
  '& .MuiInputLabel-root': { color: 'text.secondary' },
  '& .MuiInputLabel-root.Mui-focused': { color: 'primary.main' },
  '& .MuiOutlinedInput-input': { color: 'text.primary' },
};

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (error) setError(null);
  };

  const buildMailtoLink = (name: string, email: string, subject: string, message: string) => {
    const recipient = 'gowtham1717k@gmail.com';
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Subject: ${subject || '(No subject)'}`,
      '',
      message,
    ].join('\n');

    return `mailto:${recipient}?subject=${encodeURIComponent(subject || 'Portfolio Contact')}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in name, email, and message.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(contactEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          subject: form.subject.trim() || 'Portfolio Contact',
          message: form.message.trim(),
          _captcha: 'false',
          _template: 'table',
          _subject: `New Portfolio Contact from ${form.name.trim()}`,
        }),
      });

      if (!response.ok) {
        throw new Error('Unable to reach the contact service.');
      }

      setLoading(false);
      setSuccess(true);
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (submitError) {
      setLoading(false);
      console.error('Contact form submission failed:', submitError);
      if (typeof window !== 'undefined') {
        window.location.href = buildMailtoLink(form.name.trim(), form.email.trim(), form.subject.trim(), form.message.trim());
      }
      setSuccess(true);
      setForm({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <Box
      id="contact"
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
        REACH OUT
      </Typography>
      <Typography variant="h2" sx={{ textAlign: 'center', mb: 2, fontWeight: 700 }}>
        Get In{' '}
        <Box component="span" sx={{ background: 'linear-gradient(135deg, #00e5ff, #00ff88)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Touch
        </Box>
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: 'text.secondary', textAlign: 'center', maxWidth: 520, mx: 'auto', mb: { xs: 6, md: 8 }, lineHeight: 1.8 }}
      >
        I'm actively looking for new opportunities in cybersecurity. Whether you have a question,
        a project idea, or just want to connect — drop a message below!
      </Typography>

      <Grid container spacing={5} sx={{ maxWidth: 1100, mx: 'auto' }}>
        {/* Contact cards */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 3, color: 'primary.main' }}>
            Contact Info
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {contacts.map((c) => (
              <Box
                key={c.label}
                component={c.href ? 'a' : 'div'}
                href={c.href ?? undefined}
                target={c.href?.startsWith('http') ? '_blank' : undefined}
                rel={c.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  bgcolor: 'background.paper',
                  border: `1px solid ${c.color}20`,
                  borderRadius: 3,
                  p: 2.5,
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'all 0.3s',
                  cursor: c.href ? 'pointer' : 'default',
                  '&:hover': c.href ? { borderColor: c.color, boxShadow: `0 8px 30px ${c.color}15`, transform: 'translateY(-3px)' } : {},
                }}
              >
                <Box sx={{ p: 1.25, bgcolor: `${c.color}15`, borderRadius: 2, color: c.color, display: 'flex', alignItems: 'center', boxShadow: `0 0 15px ${c.color}25`, flexShrink: 0 }}>
                  {c.icon}
                </Box>
                <Box>
                  <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 0.25, fontWeight: 500 }}>
                    {c.label}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 600 }}>
                    {c.value}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>

          {/* Response time note */}
          <Box
            sx={{
              mt: 3,
              p: 2,
              bgcolor: 'rgba(0,229,255,0.05)',
              border: '1px solid rgba(0,229,255,0.15)',
              borderRadius: 2,
            }}
          >
            <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
              I typically respond within{' '}
              <Box component="span" sx={{ color: 'primary.main', fontWeight: 600 }}>
                24 hours
              </Box>
              . Feel free to reach out via email or LinkedIn for faster response.
            </Typography>
          </Box>
        </Grid>

        {/* Message form */}
        <Grid size={{ xs: 12, md: 7 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 3, color: 'primary.main' }}>
            Send a Message
          </Typography>

          {success ? (
            <Box
              sx={{
                bgcolor: 'background.paper',
                border: '1px solid rgba(0,255,136,0.3)',
                borderRadius: 3,
                p: 5,
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Box
                sx={{
                  width: 64,
                  height: 64,
                  borderRadius: '50%',
                  bgcolor: 'rgba(0,255,136,0.1)',
                  border: '2px solid rgba(0,255,136,0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <CheckCircleIcon sx={{ color: 'secondary.main', fontSize: 32 }} />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 700, color: 'secondary.main' }}>
                Message Sent!
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', maxWidth: 360 }}>
                Thanks for reaching out! I'll get back to you as soon as possible.
              </Typography>
              <Button
                variant="outlined"
                size="small"
                onClick={() => setSuccess(false)}
                sx={{ borderColor: 'secondary.main', color: 'secondary.main', mt: 1, '&:hover': { bgcolor: 'rgba(0,255,136,0.08)' } }}
              >
                Send Another Message
              </Button>
            </Box>
          ) : (
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                bgcolor: 'background.paper',
                border: '1px solid rgba(0,229,255,0.1)',
                borderRadius: 3,
                p: { xs: 3, md: 4 },
                display: 'flex',
                flexDirection: 'column',
                gap: 2.5,
              }}
            >
              {error && (
                <Alert
                  severity="error"
                  sx={{
                    bgcolor: 'rgba(211,47,47,0.1)',
                    border: '1px solid rgba(211,47,47,0.3)',
                    color: 'error.light',
                    '& .MuiAlert-icon': { color: 'error.light' },
                  }}
                >
                  {error}
                </Alert>
              )}

              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    value={form.name}
                    onChange={handleChange('name')}
                    required
                    disabled={loading}
                    sx={fieldSx}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    type="email"
                    value={form.email}
                    onChange={handleChange('email')}
                    required
                    disabled={loading}
                    sx={fieldSx}
                  />
                </Grid>
              </Grid>

              <TextField
                fullWidth
                label="Subject (optional)"
                value={form.subject}
                onChange={handleChange('subject')}
                disabled={loading}
                sx={fieldSx}
              />

              <TextField
                fullWidth
                label="Message"
                multiline
                rows={5}
                value={form.message}
                onChange={handleChange('message')}
                required
                disabled={loading}
                placeholder="Tell me about your project, opportunity, or just say hello..."
                sx={fieldSx}
              />

              <Button
                type="submit"
                variant="contained"
                size="large"
                disabled={loading}
                endIcon={loading ? <CircularProgress size={18} color="inherit" /> : <SendIcon />}
                sx={{
                  bgcolor: 'primary.main',
                  color: '#000',
                  fontWeight: 700,
                  py: 1.5,
                  fontSize: '1rem',
                  boxShadow: '0 0 20px rgba(0, 229, 255, 0.3)',
                  '&:hover': { bgcolor: 'primary.light', boxShadow: '0 0 35px rgba(0, 229, 255, 0.5)', transform: 'translateY(-2px)' },
                  '&:disabled': { bgcolor: 'rgba(0,229,255,0.3)', color: 'rgba(0,0,0,0.5)' },
                  transition: 'all 0.3s',
                  borderRadius: 2,
                  alignSelf: 'flex-start',
                  px: 5,
                }}
              >
                {loading ? 'Sending…' : 'Send Message'}
              </Button>
            </Box>
          )}
        </Grid>
      </Grid>

      {/* Footer */}
      <Box sx={{ mt: { xs: 8, md: 12 }, pt: 4, borderTop: '1px solid rgba(0,229,255,0.1)', textAlign: 'center' }}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Designed & Built by{' '}
          <Box component="span" sx={{ color: 'primary.main', fontWeight: 600 }}>Gowtham P</Box>
          {' '}— Cybersecurity Engineer
        </Typography>
        <Typography variant="caption" sx={{ color: 'text.secondary', opacity: 0.5, display: 'block', mt: 0.5 }}>
          © {new Date().getFullYear()} All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
