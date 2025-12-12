import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import './Contactus.css'; 

// --- SelectActionCard Component ---
const SelectActionCard = () => {
  const cards = [
    {
      id: 1,
      title: 'OUR HEAD OFFICE',
      description: '17 GREENBUSH JESSE LAGOS ATLANTA.',
    },
    {
      id: 2,
      title: 'PHONE NUMBER',
      // Corrected the extra '<' and space in the phone number string
      description: '+234-810-138-4066, +234-01-2350', 
    },
    {
      id: 3,
      title: 'EMAIL',
      description: 'TeCcclothings@qmail.co.uk, bosskidbeatz01@gmail.com',
    },
  ];

  // Initializes selectedCard state to -1 (or null/undefined) to indicate no card is selected initially.
  // Using 0 means the first card is selected by default. Changed to -1 for better logic.
  const [selectedCard, setSelectedCard] = React.useState(-1); 

  return (
    <Box
      sx={{
        width: '100%',
        display: 'grid',
        // Responsive grid columns
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(300px, 100%), 1fr))',
        gap: 4,
      }}
    >
      {cards.map((card, index) => (
        <Card key={card.id}>
          <CardActionArea
            onClick={() => setSelectedCard(index)}
            // Use a data-attribute for active styling with MUI's sx prop
            data-active={selectedCard === index ? 'true' : undefined}
            sx={{
              height: '100%',
              // Styling for the active state
              '&[data-active="true"]': {
                backgroundColor: 'action.selected',
                // Optional: change color of text or content when active
                '& .MuiTypography-root': {
                    color: (theme) => theme.palette.primary.main, // Example: make text primary color
                },
                '&:hover': {
                  backgroundColor: 'action.selectedHover',
                },
              },
            }}
          >
            <CardContent sx={{ height: '90%' }}>
              <Typography variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
};

// --- ContactUs Component (The Default Export) ---
const Contactus = () => {
  return (
    <div className="ContactUsContainer">
      {/* Add a header for context */}
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 4, pt: 4 }}>
        Contact Us
      </Typography>
      
      {/* Include the SelectActionCard component here */}
      <Box sx={{ maxWidth: 1000, margin: '0 auto', px: 2, mb: 4 }}>
        <SelectActionCard />
      </Box>

      <div className='inputs'>
        {/* Use the input element's 'name' attribute */}
        <input type="text" name="name" placeholder='Name' />
        <input type="email" name="email" placeholder='Email' />
        <textarea name="message" placeholder='Message for us' rows="6"></textarea> 
        {/* Changed the last input to a textarea for a message, and corrected 'type' attributes */}
        <button className='submit-button'>Send Message</button>
      </div>
    </div>
  );
};

export default Contactus;