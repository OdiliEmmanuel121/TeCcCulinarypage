import './Services.css';
import restu1 from '../../assets/restu1.jpg';
import restu2 from '../../assets/restu2.jpg';
import restu3 from '../../assets/restu3.webp';
import restu4 from '../../assets/restu4.jpeg';
import YakoyoFoodCanteen from '../../assets/YakoyoFoodCanteen.jpg';
import IsaleEkoFoodCanteen from '../../assets/Isale-EkoFoodCanteen.jpg';
import AmalaFoodSpecials from '../../assets/AmalaFoodSpecials.jpg';
// FIX: Corrected typo 'Cafteria' to 'Cafeteria' for consistency, assuming asset name is correct
import LagoonCafeteria from '../../assets/LagoonCafteria.jpg';

// FIX: 'order1' was imported but not used in the original way. The second section
// used a string 'order1' which is incorrect. We must use the imported variable.
import order1 from '../../assets/order1.jpg';
import order2 from '../../assets/order2.jpg';
import order3 from '../../assets/order3.jpg';
import order4 from '../../assets/order4.jpg';
import order5 from '../../assets/order5.jpg';
import order6 from '../../assets/order6.jpg';
import order7 from '../../assets/order7.jpg';
import order8 from '../../assets/order8.jpg';
import order9 from '../../assets/order9.jpg';
import order10 from '../../assets/order10.jpg';

// Import all required Material UI components
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// FIX: Added Box for structural layout/spacing which is often preferred over simple divs in MUI
import Box from '@mui/material/Box';


// --- Main Services Component ---
const Services = () => {
  // CRITICAL FIX: The component MUST return JSX.
  return (
    // CRITICAL FIX: The component must return a single root element.
    <div className='services-root-container'>
      <section className='Sectionfirst'>
        <header>
          <h1>Our Services</h1>
        </header>
        <div className='Section1part'>
          <h2>🍽️ Discover Local Restaurants</h2>
          <p>Taste the flavors of the world with our wide selection of restaurants... <br />Be it your favorite local spot or hidden gem.
         </p>
        </div>
        <Box sx={{ py: 3 }}>
          <div className='cardBox'>

            {/* CRITICAL FIX: Changed src from string "orderX" to the 
              imported variable {orderX} for all image tags.
            */}

            <div className="card11">
              <img src={restu1} alt="Semo and Efo Riro" className="card-image" />
              <div className="card-content">
                <h3 className="card-title">Semo and Efo Riro</h3>
                <p className="card-text">
                  A hearty Nigerian staple of Semovita served with Efo Riro (spinach stew) - perfect for a satisfying meal.
                </p>
                <a href="#" className="card-button">Order Now</a>
              </div>
            </div>

            <div className="card12">
              <img src={restu2} alt="Bread and Beans" className="card-image2" />
              <div className="card-content2">
                <h3 className="card-title2">Bread and Beans</h3>
                <p className="card-text2">
                  A popular, comforting Nigerian street food combination of soft bread and rich stewed beans (Ewa).
                </p>
                <a href="#" className="card-button2">Order Now</a>
              </div>
            </div>

            <div className="card13">
              <img src={restu3} alt="Rice and beans" className="card-image3" />
              <div className="card-content3">
                <h3 className="card-title3">Rice and beans</h3>
                <p className="card-text3">
                  A classic and satisfying blend of steamed rice mixed with flavorful, soft beans stewed in pepper and palm oil
                </p>
                <a href="#" className="card-button3">Order Now</a>
              </div>
            </div>

            <div className="card14">
              <img src={restu4} alt="Ewa Agoin" className="card-image4" />
              <div className="card-content4">
                <h3 className="card-title4">Ewa Agoyin</h3> {/* FIX: Corrected title to match alt text description */}
                <p className="card-text4">
                  Soft, mashed beans served with a special dark, smoky, and extremely spicy palm oil sauce.
                </p>
                <a href="#" className="card-button4">Order Now</a>
              </div>
            </div>

            <div className="card15">
              <img src={YakoyoFoodCanteen} alt="Ofadarice and Moi-Moi" className="card-image5" />
              <div className="card-content5">
                <h3 className="card-title5">Ofadarice and Moi-Moi</h3>
                <p className="card-text5">
                  Ofada rice (local unpolished rice) served with a fiery Ata dindin sauce, traditionally paired with steamed Moi-Moi.
                </p>
                <a href="#" className="card-button5">Order Now</a>
              </div>
            </div>

            <div className="card16">
              <img src={IsaleEkoFoodCanteen} alt="Porridge Beans and Yam" className="card-image6" />
              <div className="card-content6">
                <h3 className="card-title6">Porridge Beans and Yam</h3>
                <p className="card-text6">
                  A comforting one-pot meal where sliced yam and beans are cooked together in a savory tomato and pepper-based stew.
                </p>
                <a href="#" className="card-button6">Order Now</a>
              </div>
            </div>

            <div className="card17">
              <img src={AmalaFoodSpecials} alt="Bowl of EdinKainKon" className="card-image7" />
              <div className="card-content7">
                <h3 className="card-title7">Edikaikong</h3> {/* FIX: Corrected title for better spelling/recognition */}
                <p className="card-text7">
                  A rich, nutritious, and classic Nigerian soup made from generous amounts of ugwu and waterleaf vegetables.
                </p>
                <a href="#" className="card-button7">Order Now</a>
              </div>
            </div>

            <div className="card18">
              <img src={LagoonCafeteria} alt="Amala and Egusi" className="card-image8" />
              <div className="card-content8">
                <h3 className="card-title8">Amala and Egusi</h3>
                <p className="card-text8">
                  Amala (yam flour swallow) served with Egusi (melon seed) soup, thickened with ground seeds and savory meats.
                </p>
                <a href="#" className="card-button8">Order Now</a>
              </div>
            </div>

            {/* NOTE: Card 9 is missing in your sequence, so I skipped it and fixed Card 10 */}

            <div className="card20">
              <img src={order10} alt="Beans and Plantain" className="card-image10" />
              <div className="card-content10">
                <h3 className="card-title10">Beans and Plantain</h3>
                <p className="card-text10">
                  Sweet, fried plantain (Dodo) served alongside a substantial, protein-packed portion of flavorful stewed beans.
                </p>
                <a href="#" className="card-button10">Order Now</a>
              </div>
            </div>
          </div>
        </Box>
      </section>


      <section className='sectionSecond'>
        <div className='Section2part'>
          <h2>📱 Order And Pay With Ease</h2>
          <p> Tap, tap, done! Place the order with just a few clicks and pay with your preferred method....... <br />Cash or card</p>
        </div>
        <Box sx={{ py: 3 }}>
          <div className='cardBox'>

            {/* CRITICAL FIX: Changed src from string "orderX" to the 
              imported variable {orderX} for all image tags.
            */}

            <div className="card">
              <img src={order1} alt="Semo and Efo Riro" className="card-image" />
              <div className="card-content">
                <h3 className="card-title">Semo and Efo Riro</h3>
                <p className="card-text">
                  A hearty Nigerian staple of Semovita served with Efo Riro (spinach stew) - perfect for a satisfying meal.
                </p>
                <a href="#" className="card-button">Order Now</a>
              </div>
            </div>

            <div className="card2">
              <img src={order2} alt="Bread and Beans" className="card-image2" />
              <div className="card-content2">
                <h3 className="card-title2">Bread and Beans</h3>
                <p className="card-text2">
                  A popular, comforting Nigerian street food combination of soft bread and rich stewed beans (Ewa).
                </p>
                <a href="#" className="card-button2">Order Now</a>
              </div>
            </div>

            <div className="card3">
              <img src={order3} alt="Rice and beans" className="card-image3" />
              <div className="card-content3">
                <h3 className="card-title3">Rice and beans</h3>
                <p className="card-text3">
                  A classic and satisfying blend of steamed rice mixed with flavorful, soft beans stewed in pepper and palm oil
                </p>
                <a href="#" className="card-button3">Order Now</a>
              </div>
            </div>

            <div className="card4">
              <img src={order4} alt="Ewa Agoin" className="card-image4" />
              <div className="card-content4">
                <h3 className="card-title4">Ewa Agoyin</h3> {/* FIX: Corrected title to match alt text description */}
                <p className="card-text4">
                  Soft, mashed beans served with a special dark, smoky, and extremely spicy palm oil sauce.
                </p>
                <a href="#" className="card-button4">Order Now</a>
              </div>
            </div>

            <div className="card5">
              <img src={order5} alt="Ofadarice and Moi-Moi" className="card-image5" />
              <div className="card-content5">
                <h3 className="card-title5">Ofadarice and Moi-Moi</h3>
                <p className="card-text5">
                  Ofada rice (local unpolished rice) served with a fiery Ata dindin sauce, traditionally paired with steamed Moi-Moi.
                </p>
                <a href="#" className="card-button5">Order Now</a>
              </div>
            </div>

            <div className="card6">
              <img src={order6} alt="Porridge Beans and Yam" className="card-image6" />
              <div className="card-content6">
                <h3 className="card-title6">Porridge Beans and Yam</h3>
                <p className="card-text6">
                  A comforting one-pot meal where sliced yam and beans are cooked together in a savory tomato and pepper-based stew.
                </p>
                <a href="#" className="card-button6">Order Now</a>
              </div>
            </div>

            <div className="card7">
              <img src={order7} alt="Bowl of EdinKainKon" className="card-image7" />
              <div className="card-content7">
                <h3 className="card-title7">Edikaikong</h3> {/* FIX: Corrected title for better spelling/recognition */}
                <p className="card-text7">
                  A rich, nutritious, and classic Nigerian soup made from generous amounts of ugwu and waterleaf vegetables.
                </p>
                <a href="#" className="card-button7">Order Now</a>
              </div>
            </div>

            <div className="card8">
              <img src={order8} alt="Amala and Egusi" className="card-image8" />
              <div className="card-content8">
                <h3 className="card-title8">Amala and Egusi</h3>
                <p className="card-text8">
                  Amala (yam flour swallow) served with Egusi (melon seed) soup, thickened with ground seeds and savory meats.
                </p>
                <a href="#" className="card-button8">Order Now</a>
              </div>
            </div>

            {/* NOTE: Card 9 is missing in your sequence, so I skipped it and fixed Card 10 */}

            <div className="card10">
              <img src={order10} alt="Beans and Plantain" className="card-image10" />
              <div className="card-content10">
                <h3 className="card-title10">Beans and Plantain</h3>
                <p className="card-text10">
                  Sweet, fried plantain (Dodo) served alongside a substantial, protein-packed portion of flavorful stewed beans.
                </p>
                <a href="#" className="card-button10">Order Now</a>
              </div>
            </div>
          </div>
        </Box>
      </section>
    </div>
  );
};

export default Services