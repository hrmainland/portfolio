import {
  Card,
  CardContent,
  Typography,
  Chip,
  Button,
  Box,
  Stack
} from '@mui/material';
import { GitHub } from '@mui/icons-material';

const GitHubRepoCard = ({ repo }) => {
  const handleCardClick = (e) => {
    // Don't trigger card click if button was clicked
    if (e.target.closest('button')) return;
    window.open(repo.githubUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card
      onClick={handleCardClick}
      sx={{
        minWidth: 300,
        maxWidth: 340,
        height: 'fit-content',
        flexShrink: 0,
        transition: 'all 0.4s ease',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
        border: '1px solid',
        borderColor: 'rgba(129, 140, 248, 0.2)',
        cursor: 'pointer',
        '&:hover': {
          transform: 'translateY(-6px) scale(1.02)',
          boxShadow: '0 12px 30px rgba(129, 140, 248, 0.3)',
          borderColor: 'primary.main'
        }
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Typography
          variant="h6"
          component="h4"
          sx={{
            fontWeight: 600,
            color: 'text.primary',
            mb: 2,
            lineHeight: 1.3,
            fontSize: '1.1rem'
          }}
        >
          {repo.name}
        </Typography>
        
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            mb: 3,
            lineHeight: 1.6,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            fontSize: '0.95rem'
          }}
        >
          {repo.description}
        </Typography>
        
        <Box sx={{ mb: 3 }}>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            {repo.technologies.map((tech, index) => (
              <Chip
                key={index}
                label={tech}
                size="small"
                variant="outlined"
                sx={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  bgcolor: 'rgba(129, 140, 248, 0.1)',
                  borderColor: 'rgba(129, 140, 248, 0.3)',
                  color: 'primary.light',
                  height: 26,
                  mb: 0.5
                }}
              />
            ))}
          </Stack>
        </Box>
        
        <Button
          variant="text"
          startIcon={<GitHub sx={{ fontSize: '1.1rem' }} />}
          href={repo.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: 'primary.main',
            fontWeight: 600,
            fontSize: '0.9rem',
            p: 1,
            px: 2,
            borderRadius: 2,
            '&:hover': {
              backgroundColor: 'rgba(129, 140, 248, 0.1)',
              color: 'primary.light',
              transform: 'translateY(-1px)'
            }
          }}
        >
          View on GitHub
        </Button>
      </CardContent>
    </Card>
  );
};

export default GitHubRepoCard;