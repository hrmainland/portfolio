import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Button,
  Box,
  Stack
} from '@mui/material';
import { Language, GitHub } from '@mui/icons-material';

const ProjectCard = ({ project }) => {
  return (
    <Card
      sx={{
        width: 450,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.4s ease',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
        overflow: 'hidden',
        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: '0 12px 24px rgba(129, 140, 248, 0.2)'
        }
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={project.image}
        alt={project.title}
        sx={{
          objectFit: 'cover'
        }}
      />
      <CardContent sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography
          variant="h5"
          component="h3"
          sx={{
            fontWeight: 700,
            mb: 2,
            color: 'text.primary',
            fontSize: '1.6rem'
          }}
        >
          {project.title}
        </Typography>
        
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            mb: 4,
            lineHeight: 1.7,
            fontSize: '1rem'
          }}
        >
          {project.description}
        </Typography>
        
        <Box sx={{ mb: 4 }}>
          <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
            {project.technologies.map((tech, index) => (
              <Chip
                key={index}
                label={tech}
                variant="outlined"
                size="small"
                sx={{
                  borderColor: 'grey.600',
                  color: 'text.secondary',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  fontWeight: 500,
                  mb: 1,
                  fontSize: '0.8rem',
                  '&:hover': {
                    borderColor: 'primary.main',
                    color: 'primary.light'
                  }
                }}
              />
            ))}
          </Stack>
        </Box>
        
        <Stack direction="row" spacing={2} sx={{ mt: 'auto' }}>
          <Button
            variant="contained"
            startIcon={<Language />}
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            fullWidth
            sx={{
              background: 'linear-gradient(135deg, #818cf8 0%, #6366f1 100%)',
              py: 2,
              fontSize: '1rem',
              fontWeight: 600,
              boxShadow: '0 4px 16px rgba(129, 140, 248, 0.4)',
              '&:hover': {
                background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 25px rgba(129, 140, 248, 0.5)'
              }
            }}
          >
            Website
          </Button>
          <Button
            variant="outlined"
            startIcon={<GitHub />}
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            fullWidth
            sx={{
              borderColor: 'primary.main',
              color: 'primary.main',
              py: 2,
              fontSize: '1rem',
              fontWeight: 600,
              borderWidth: 2,
              '&:hover': {
                borderColor: 'primary.dark',
                color: 'primary.dark',
                backgroundColor: 'rgba(129, 140, 248, 0.1)',
                transform: 'translateY(-2px)',
                borderWidth: 2
              }
            }}
          >
            GitHub
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;