
import './Faqs.css'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';





const Faqs = () => {
  return (
    <div className="FAQsContainer">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">How can I find delivery restaurants near me?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          - TeCc Food has a huge selection of restaurants and stores in your city. Just enter your address or turn on “location services”, and you’ll be able to see which restaurants deliver near you.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">Does TeCc Food offer only food delivery?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          We also offer grocery delivery from your favourite local stores. No additional app downloads required — search for the store and items of your choice directly within
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography component="span">Can I order takeaway food with the app?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Yes, you can! Select “Pickup” as your delivery option when you place your order, and the store will prepare it for you to pick up.
        </AccordionDetails>
        <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">How can I provide feedback about my food delivery experience?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          We're always looking for ways to improve our service, and your feedback plays an important role in that process. After you receive your delivery, you can rate the quality of your food and the delivery experience inside the TeCc Food delivery app.
        </AccordionDetails>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">How do I get updates on the progress of my order?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            You can track your order in real time inside the app. We'll also send you notifications at every stage of the delivery process, so you’ll always know where your order is!
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">How can I find delivery restaurants near me?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            - TeCc Food has a huge selection of restaurants and stores in your city. Just enter your address or turn on “location services”, and you’ll be able to see which restaurants deliver near you.
          </AccordionDetails>
        </Accordion>
      </Accordion>
    </div>
  )
}

export default Faqs