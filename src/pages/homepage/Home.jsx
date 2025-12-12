
import './Home.css'
import food4 from "../../assets/food4.jpg"; // <-- LIKELY CORRECT
import food5 from '../../assets/food5.png'
import drink2 from "../../assets/drinks2.png";
import cartoonfood3 from '../../assets/cartoonfood3.png'
import cartoonfood2 from '../../assets/cartoonfood2.png'
import cartoonfood1 from '../../assets/cartoonfood1.png'
import whiterice from '../../assets/whiterice.png'
// import { FaLocationDot } from "react-icons/fa6";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import google1 from '../../assets/google1.png'
import apple1 from '../../assets/apple1.png'
import address from '../../assets/address.png'
import disco1 from '../../assets/disco1.png'
import disco2 from '../../assets/disco2.png'
import disco3 from '../../assets/disco3.png'
import fb from '../../assets/fb.png'
import inst from '../../assets/inst.png'
import wa from '../../assets/wa.png'
import twt from '../../assets/twt.png'
import faq from '../../assets/faq1.png'
import des from '../../assets/des.png'  




const Home = () => {
  return (
    <div className="HomeContainer">
      <h1>INDULGE YOUR CRAVINGS <br /> BY</h1>
      <p>Sharing your location with us, and we'll help you find a great canteen <br />nearby!</p>
      {/* <FaLocationDot id='location' /> */}
      <img src={address} alt="address image" className='location' />

      <section>
        <input type="text" placeholder="ENTER YOUR ADDRESS" />
        <button className='submitButton' type='submit'>Submit</button>
      </section>

      <div className="secondPart">
        <h2>TeCc Culinary has what you <br /> need</h2>
        <div className="food245">
          <img id="food4" src={food4} alt="food" />
          <img id="food5" src={food5} alt="food" />
          <img id="food2" src={drink2} alt="drink" />
        </div>

        <section>
          <div className="thirdPart">
            <img id="car1" src={cartoonfood3} alt="cartoon" />
            <img id="car2" src={cartoonfood2} alt="cartoon" />
            <img id="car3" src={cartoonfood1} alt="cartoon" />
            <img id="whiterice" src={whiterice} alt="rice" />
          </div>
        </section>
      </div>
      <div className="hunger">
        <h2>Hungry? Too tired to cook? Have friends over, or do <br /> you simply need us to get it to you? Download <br />TeCc Culinary, and let’s deliver happiness to your <br />doorstep in minutes</h2>
        <div className='download'>
          <img src={google1} alt="google" className='gg' />
          <img src={apple1} alt="apple" className='aa' />
        </div>
      </div>
      <div>
      </div>

      <div className='serviceBox'>
        <h4>Our services</h4>
        <Box className='cardBoxServ'>
          <h3>Canteen</h3>
          <h3>Food</h3>
          <h3>Order</h3>
        </Box>
      </div>

      <div className='SevFirstSection'>
        <h3 className='h3first' >Discover local restaurant</h3>
        <h3 className='h3Second' >Order and pay with ease</h3>
        <h3 className='h3third' >Track your order</h3>
      </div>

      <div className='SevSecondSection'>
        <h4 className='h4tag1'>Indulge your cravings by Sharing your location with us, and we'll help you find a great canteen nearby!</h4>
        <h4 className='h4tag2'>Tap, tap, done! Place the order with just a few clicks and pay with your preferred method....... cash or card</h4>
        <h4 className='h4tag3'>Stay updated with real-time tracking of your order from preparation to delivery right at your doorstep.</h4>
      </div>

      <div className='SevThirdSection'>
        <img src={disco1} alt="food" className='disco1' />
        <img src={disco2} alt="drink" className='disco2' />
        <img src={disco3} alt="food" className='disco3' />

      </div>

      <div className='FAQSection'>
        <img src={faq}alt="faq" className='faq'/>
      </div>
      <div className='DescriptionSection'>
        <img src={des} alt="des" className='des' />
      </div>


      <div className='SevFourtSection'>
        <h2 className='HeadingTeccAbout'>About TeCc</h2>
        <h3 className='TeccAbout' >TeCc Culinary establishment is a convenient platform that allows you to order food from various canteens nearby, ensuring it gets delivered right to your doorstep. Enjoy delicious meals without needing to leave the comfort of your home!</h3>
        <div className='GreyBox'>
          <input type="text" placeholder='Please enter your name' className='EnterName' />
          <input type="text" placeholder='Please enter a valid email' className='EnterEmail' />
          <input type="text" className='EnterMessage' />
          <a href="#" className="SevButton"> Submit </a>
        </div>
        <div className='SocialHandle'>
          <img src={fb} alt="facebook" className='Social' />
          <img src={inst} alt="instagram" className='Social' />
          <img src={wa} alt="whatsapp" className='Social' />
          <img src={twt} alt="twitter" className='Social' />
          
        </div>
        <div>
          <h5 className='Copyright'>© 2024 TeCc Culinary. All rights reserved.</h5>
        </div>
      </div>


    </div>
  )
}

export default Home