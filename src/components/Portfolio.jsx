import { useState, useRef, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid
} from '@mui/material';
import ProjectCard from './ProjectCard';
import GitHubRepoCard from './GitHubRepoCard';

const Portfolio = () => {
  const [isHovering, setIsHovering] = useState(false);
  const scrollContainerRef = useRef(null);
  const animationRef = useRef(null);
  const scrollPositionRef = useRef(0);
  const animationSpeedRef = useRef(1); // pixels per frame
  const lastFrameTimeRef = useRef(0);
  
  const featuredProjects = [
    {
      title: "Song Day",
      description: "A full-stack collaborative playlist creation platform, using the Spotify API",
      technologies: ["React", "Node.js", "MongoDB", "Express", "REST API"],
      liveUrl: "https://songday.co",
      githubUrl: "https://github.com/hrmainland/Song-Day",
      image: "/images/SD.png"
    },
    {
      title: "Yelp Camp",
      description: "A website for posting and reviewing campsites with full auth and session management",
      technologies: ["CSS", "Express", "JavaScript", "MongoDB", "Cloudinary"],
      liveUrl: "https://yelpcamp-n23a.onrender.com/",
      githubUrl: "https://github.com/hrmainland/YelpCamp",
      image: "/images/Yelp.png"
    }
  ];

  const githubRepos = [
    {
      name: "Surf Notifier",
      description: "A Python tool that checks surf conditions using StormGlass API and sends notifications when conditions are favorable",
      technologies: ["Python", "API Integration", "Pandas", "NumPy", "Pushover"],
      githubUrl: "https://github.com/hrmainland/Surf-Notifier",
    },    
    {
      name: "Habit Tracker",
      description: "A command-line habit tracking tool that uses the Pixela API for GitHub-style graphs and Pushover for notifications",
      technologies: ["Python", "Pixela API", "Pushover", "HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/hrmainland/HabitTracker",
    },    
    {
      name: "Paint By Numbers",
      description: "A web app that transforms uploaded photos into paint-by-numbers images using color quantization",
      technologies: ["JavaScript", "HTML", "Node.js"],
      githubUrl: "https://github.com/hrmainland/Paint-By-Numbers",
    },    
    {
      name: "Portfolio",
      description: "A modern, responsive portfolio website built with React, Material-UI, and Vite to showcase projects and skills",
      technologies: ["React", "Material-UI", "Vite", "React Router", "GitHub Pages"],
      githubUrl: "https://github.com/hrmainland/portfolio",
    },    
    {
      name: "IQ Fit Solver",
      description: "A Python solver for the IQ Fit puzzle game using depth-first search with backtracking and matplotlib visualization",
      technologies: ["Python", "Jupyter Notebook", "Matplotlib", "NumPy"],
      githubUrl: "https://github.com/hrmainland/IQ-Fit",
    },
    {
      name: "Software Modelling Final Assignment",
      description: "A Java-based Game of Thrones card game refactored to apply advanced design patterns and GRASP principles as part of a university project",
      technologies: ["Java", "Design Patterns", "GRASP Principles", "SOLID"],
      githubUrl: "https://github.com/hrmainland/Software-Modelling-Final-Assignment",
    },
    {
      name: "Artificial Intelligence Cachex Assignment",
      description: "An AI agent for the Cachex board game using minimax, alpha-beta pruning, and heuristic evaluation functions, developed for university coursework",
      technologies: ["Python", "Artificial Intelligence", "Minimax", "Alpha-Beta Pruning", "Iterative Deepening"],
      githubUrl: "https://github.com/hrmainland/Artificial-Intelligence-Cachex-Assignment",
    },
    {
      name: "Song Day",
      description: "A full-stack collaborative playlist creation platform, using the Spotify API",
      technologies: ["React", "Node.js", "MongoDB", "Express", "REST API"],
      githubUrl: "https://github.com/hrmainland/Song-Day",
    },
    {
      name: "Yelp Camp",
      description: "A website for posting and reviewing campsites with full auth and session management",
      technologies: ["CSS", "Express", "JavaScript", "MongoDB", "Cloudinary"],
      githubUrl: "https://github.com/hrmainland/YelpCamp",
    },
            
  ];


  useEffect(() => {
    const animate = (timestamp) => {
      if (!lastFrameTimeRef.current) {
        lastFrameTimeRef.current = timestamp;
      }
      
      const deltaTime = timestamp - lastFrameTimeRef.current;
      lastFrameTimeRef.current = timestamp;
      
      if (!isHovering && scrollContainerRef.current) {
        // Move the scroll position continuously
        scrollPositionRef.current += animationSpeedRef.current * (deltaTime / 16); // Normalize to ~60fps
        
        const container = scrollContainerRef.current;
        const maxScroll = container.scrollWidth - container.clientWidth;
        
        // Reset position when we've scrolled past halfway point (for infinite loop)
        if (scrollPositionRef.current >= maxScroll / 2) {
          scrollPositionRef.current = 0;
        }
        
        container.scrollLeft = scrollPositionRef.current;
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovering]);

  const handleMouseEnter = () => {
    setIsHovering(true);
    // Store current scroll position when user hovers
    if (scrollContainerRef.current) {
      scrollPositionRef.current = scrollContainerRef.current.scrollLeft;
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    // Update scroll position reference to where user left off
    if (scrollContainerRef.current) {
      scrollPositionRef.current = scrollContainerRef.current.scrollLeft;
    }
  };

  const handleScroll = (e) => {
    if (isHovering) {
      scrollPositionRef.current = e.target.scrollLeft;
    }
  };

  return (
    <Box>
      {/* Hero Section with Background Image */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #0f0f23 0%, #16213e 50%, #1a1a2e 100%)',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 30% 20%, rgba(129, 140, 248, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(245, 158, 11, 0.1) 0%, transparent 50%)',
            zIndex: 1
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23818cf8" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            zIndex: 0
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, py: { xs: 8, md: 12 } }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontWeight: 800,
                mb: 6,
                fontSize: { xs: '3rem', md: '5rem', lg: '6rem' },
                background: 'linear-gradient(135deg, #818cf8 0%, #f59e0b 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 40px rgba(129, 140, 248, 0.3)'
              }}
            >
              Hugo Mainland
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 400,
                maxWidth: '700px',
                mx: 'auto',
                lineHeight: 1.6,
                fontSize: { xs: '1.25rem', md: '1.5rem' },
                color: 'text.secondary',
                mb: 8
              }}
            >
              Full-stack devleoper blending function, simplicity, and impact
            </Typography>
            <Box
              sx={{
                display: 'flex',
                gap: 3,
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}
            >
              {['React', 'Node.js', 'JavaScript', 'Python', 'Express', 'SQL', 'Java'].map((tech) => (
                <Box
                  key={tech}
                  sx={{
                    px: 3,
                    py: 1,
                    borderRadius: 2,
                    background: 'rgba(129, 140, 248, 0.1)',
                    border: '1px solid rgba(129, 140, 248, 0.2)',
                    color: 'primary.light',
                    fontSize: '0.9rem',
                    fontWeight: 500
                  }}
                >
                  {tech}
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Featured Projects Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 16 } }}>
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              background: 'linear-gradient(135deg, #818cf8 0%, #f59e0b 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Featured Projects
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto',
              fontSize: '1.1rem'
            }}
          >
            A showcase of my recent work and the technologies I love working with
          </Typography>
        </Box>
        <Grid container spacing={6} justifyContent="center">
          {featuredProjects.map((project, index) => (
            <Grid item xs={12} md={6} key={index} sx={{ display: 'flex', justifyContent: 'center', maxWidth: '450px', mx: 'auto' }}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* GitHub Repos Section */}
      <Box sx={{ 
        bgcolor: 'background.paper', 
        py: { xs: 8, md: 16 },
        borderTop: '1px solid',
        borderColor: 'rgba(129, 140, 248, 0.1)'
      }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 10 }}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 700,
                mb: 3,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                background: 'linear-gradient(135deg, #f59e0b 0%, #818cf8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              More Projects
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                maxWidth: '600px',
                mx: 'auto',
                fontSize: '1.1rem'
              }}
            >
              Explore my other projects and experiments on GitHub
            </Typography>
          </Box>
          <Box
            ref={scrollContainerRef}
            sx={{
              overflowX: 'auto',
              overflowY: 'hidden',
              py: 2,
              cursor: isHovering ? 'grab' : 'default',
              '&:active': {
                cursor: isHovering ? 'grabbing' : 'default'
              },
              '&::-webkit-scrollbar': {
                height: isHovering ? '8px' : '0px',
                transition: 'height 0.2s ease'
              },
              '&::-webkit-scrollbar-track': {
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '4px',
                opacity: isHovering ? 1 : 0,
                transition: 'opacity 0.2s ease'
              },
              '&::-webkit-scrollbar-thumb': {
                background: 'rgba(129, 140, 248, 0.5)',
                borderRadius: '4px',
                opacity: isHovering ? 1 : 0,
                transition: 'opacity 0.2s ease',
                '&:hover': {
                  background: 'rgba(129, 140, 248, 0.7)'
                }
              }
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onScroll={handleScroll}
          >
            <Box
              sx={{
                display: 'flex',
                gap: 3,
                width: 'max-content',
                pr: 2
              }}
            >
              {/* Create multiple copies for infinite scroll effect */}
              {[...githubRepos, ...githubRepos, ...githubRepos].map((repo, index) => (
                <GitHubRepoCard key={`${repo.name}-${index}`} repo={repo} />
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box sx={{ 
        bgcolor: 'background.default', 
        py: { xs: 8, md: 12 },
        borderTop: '1px solid',
        borderColor: 'rgba(129, 140, 248, 0.1)'
      }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 700,
                mb: 6,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                background: 'linear-gradient(135deg, #818cf8 0%, #f59e0b 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Get In Touch
            </Typography>
            <Box sx={{ maxWidth: '400px', mx: 'auto' }}>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  fontSize: '1.1rem',
                  mb: 2
                }}
              >
                📧 hugo.mainland@example.com
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  fontSize: '1.1rem'
                }}
              >
                📱 (555) 123-4567
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Portfolio;