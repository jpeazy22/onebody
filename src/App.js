// React and Router Imports
import { useState, useEffect } from 'react';
import { NavLink, BrowserRouter } from 'react-router-dom';

// Style Imports
import './App.css';
import './Nav.css';
import './Carousel.css';


import MultiItemCarousel from './MultiItemCarousel.js';

// Logo and QR Code Image Imports
import logo from './assets/logo/obLogo.png';
import whiteLogo from './assets/logo/obLogo-white.png';
import qrCode from './assets/ob-qrcode.png';

// Header Text Image Imports
// import titleText from './assets/headerText/groupFitnesstextblue.png';
import groupFitnessText from './assets/headerText/groupFitness1.png';
import scheduleText from './assets/headerText/workout1.png';
import massageText from './assets/headerText/massageText.png';
import taglineWhite from './assets/taglineWhite.png';
import testimonial from './assets/headerText/testimonials1.png';
import connectText from './assets/headerText/connectText.png';

// import taglineBlue from './assets/taglineWhite.png';


// Fitness Program Image Imports
import fit1 from './assets/monthlyMember.png';
import fit2 from './assets/nextLevel.png';
import fit3 from './assets/personalTraining.png';
import box1 from './assets/circle1.png';
import box2 from './assets/circle2.png';
import box3 from './assets/circle3.png';
import photos from './assets/bg/testimonialbg.png';
import massage from './assets/bg/massagebg-1.png';


// Icon Image Imports
import icon1 from './assets/icons/deadlift.png';
import icon2 from './assets/icons/personal-trainer.png';
import icon3 from './assets/icons/lotus.png';
import icon4 from './assets/icons/jumping_hires.png';
import facebook from './assets/icons/facebook.png';
import instagram from './assets/icons/instagram.png';

// Testimonial Image Imports
import carolyn from './assets/testimonials/carolynM.jpg';
import cecile from './assets/testimonials/Dumbbells.jpg';
import lawrence from './assets/testimonials/before_after.png';

// Video Imports 
import video from './assets/woman-working-out.mp4';
import skyVideo from './assets/sky-background.mp4';

function App() {
    return (
        <div className="App">
            <Navbar />
            <div id="home"><Home /></div>
            <div id="fitness"><Fitness /></div>
            <div id="Calendar"><Calendar /></div>
            {/*<div id="testimonials"><Test /></div>*/}
            <div id="Carousel"><Carousel /></div>
            <div id="massage"><Massage /></div>
            <div id="contact"><Contact /></div>
            
        </div>
    );
}


const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    
    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    };

    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) {
            const scrollToPosition = () => {
                const rect = section.getBoundingClientRect();
                const absoluteTop = rect.top + window.pageYOffset;
                const offsetPosition = absoluteTop - 110;  // Offset for the fixed header

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            };

            // Ensure we are in sync with the browser's rendering
            requestAnimationFrame(() => {
                requestAnimationFrame(scrollToPosition);
            });
        }
    };
    
    return (
        <nav>
            <div className="NavContainer">
                <a href="#home" onClick={() => handleScroll('home')}>
                    <img src={logo} className="App-logo-nav-mobile" alt="logo" />
                </a>
                <div className="menu-icon" onClick={handleShowNavbar}>
                    <div id="nav-icon" className={showNavbar ? "open" : ""}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className={`nav-elements ${showNavbar ? 'active' : ''}`}>
                    <a href="#home" onClick={() => handleScroll('home')}>
                        <img src={logo} className="App-logo-nav" alt="logo" />
                    </a>
                    <ul>
                        <li><a href="#fitness" onClick={() => handleScroll('fitness')}>Group Fitness</a></li>
                        <li><a href="#Calendar" onClick={() => handleScroll('Calendar')}>Schedule</a></li>
                        <li><a href="#Carousel" onClick={() => handleScroll('carousel')}>Testimonials</a></li>
                        <li><a href="#massage" onClick={() => handleScroll('massage')}>Massage</a></li>
                        <li><a href="#contact" onClick={() => handleScroll('contact')}>Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

const Home = () => {
    
    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) {
            const scrollToPosition = () => {
                const rect = section.getBoundingClientRect();
                const absoluteTop = rect.top + window.pageYOffset;
                const offsetPosition = absoluteTop - 110;  // Offset for the fixed header

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            };

            // Ensure we are in sync with the browser's rendering
            requestAnimationFrame(() => {
                requestAnimationFrame(scrollToPosition);
            });
        }
    };
    
    return (
        <div className="Home">
            <video autoPlay muted loop className="BackgroundVideo">
                <source src={skyVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="Container">
                <section>
                    <img src={logo} className="App-logo" alt="logo" />
                </section>
                <section>
                    <img src={taglineWhite} className="Tagline" alt="tagline" />
                </section>
                <section className="Services">
                    <div className="ServiceList">
                        <a href="#fitness" onClick={() => handleScroll('fitness')}>
                            <div className="Icon">
                                <img src={icon1} className="icons" alt="icon" />
                            </div>
                            <div className="Description">
                                <h2>Outdoor Bootcamps</h2>
                            </div>
                        </a>
                    </div>
                    <div className="ServiceList">
                        <a href="#personalTraining" onClick={() => handleScroll('personalTraining')}>
                            <div className="Icon">
                                <img src={icon2} className="icons" alt="icon" />
                            </div>
                            <div className="Description">
                                <h2>Personal Training</h2>
                            </div>
                        </a>
                    </div>
                    <div className="ServiceList">
                        <a href="#massage" onClick={() => handleScroll('massage')}>
                            <div className="Icon">
                                <img src={icon3} className="icons" alt="icon" />
                            </div>
                            <div className="Description">
                                <h2>Massage Therapy</h2>
                            </div>
                        </a>
                    </div>
                    <div className="ServiceList">
                        <a href="#Calendar" onClick={() => handleScroll('Calendar')}>
                            <div className="Icon">
                                <img src={icon4} className="icons" alt="icon" />
                            </div>
                            <div className="Description">
                                <h2>Community</h2>
                            </div>
                        </a>
                    </div>
                </section>
            </div>
        </div>
    )
}


const Fitness = () => {
    
    const features = [
        "6 days/week program",
        "Multiple class times available",
        "Lead by Professional Trainer",
        "All Community Socials",
        "Unlimited check ins per month",
        "8 check ins per month",
        "4 check ins per month",
        "Yoga",
        "Run Club"
    ];

    // Assuming all options include all features
    const options = {
        option1: [true, true, true, true, true, true, true, true, true],
        option2: [false, true, true, true, false, true, false, false, false],
        option3: [false, true, true, true, false, false, true, false, false]
    };
    
    return (
        <div className="FitnessContainer">        
            <section className="Fitness">
                <section className="column">
                    <img src={box1} className="box" alt="titleText" />
                </section>
                <section className="column">
                    <a href="https://onebody.pushpress.com/open/interested/usr_3716df7673660c" target="_blank"><img src={box2} className="box" alt="titleText" /></a>
                </section>
                <section className="column">
                    <img src={box3} className="box" alt="titleText" />
                </section>
            </section>
        
            <div className="Rates">
                <div className="Container">
                <section>
                    <img src={groupFitnessText} className="scheduleTitle" alt="sectionTitle" />
                        <img src={photos} className="photoCollage" alt="" />
                    </section>
                    <div className="membership-grid">
                    <div className="features-table">
                    <div className="header-row">
                        <div className="feature-header"></div> {/* Empty top-left cell */}
                        <div className="option-header">Unlimited $89/mo</div>
                        <div className="option-header">Mid-Tier $79/mo</div>
                        <div className="option-header">Starter Pack $59/mo</div>
                    </div>
                    {features.map((feature, index) => (
                        <div key={feature} className="feature-row">
                            <div className="feature-name">{feature}</div>
                            <div className="feature-option">{options.option1[index] ? "✔️" : ""}</div>
                            <div className="feature-option">{options.option2[index] ? "✔️" : ""}</div>
                            <div className="feature-option">{options.option3[index] ? "✔️" : ""}</div>
                        </div>
                    ))}
                </div>
                <div className="signUp">
                    <h2>Sign up now and start your free trial - 
                        <span className="individualButton">
                        <a href="https://onebody.pushpress.com/open/interested/usr_3716df7673660c" target="_blank" rel="noreferrer">Sign Up!</a>
                        </span>
                    </h2>
                </div>
            </div>
            <div id="personalTraining" className="packages">
                    <section className="InfoBlock">
                        <img src={fit2} className="fitnessRateImage" alt="" />
                        <h2>NEXT LEVEL TRAINING</h2>
                        <ol>
                            <li>Train with elite athletes</li>
                            <li>Increased Intensity</li>
                            <li>Schedule varied based on upcoming competitions</li>
                            <li>Donation based for members</li>
                        </ol>
                        <h4>
                            <span>
                                <a href="https://onebody.pushpress.com/open/interested/usr_3716df7673660c" target="_blank" rel="noreferrer">More Info</a>
                            </span>
                        </h4>
                    </section>
                    <section className="InfoBlock">
                        <img src={fit3} className="fitnessRateImage" alt="" />
                        <h2>1 ON 1 PERSONAL TRAINING</h2>
                        <ol>
                            <li>$70/hr </li>
                            <li>$60/hr - pack of 4= $240</li>
                            <li>$50/hr - pack of 8= $400</li>
                            <li>$45/hr - pack of 12= $540</li>
                            <li>$40/hr - pack of 16= $640</li>
                            <li>$40/hr - intro session </li>
                            <li>$40/hr - Monthly Members</li>
                        </ol>
                        <h4><b>Varies/</b>session
                            <span>
                                <a href="https://onebody.pushpress.com/open/interested/usr_3716df7673660c" target="_blank" rel="noreferrer">Sign Up</a>
                            </span>
                        </h4>
                    </section>
                </div>
                </div>
            </div>
        </div>
        )
    }
    
    const activities = {
        "2": [{ activity: "7:00am", location: "Run Club" }],
        "7": [{ activity: "6:00pm", location: "Yoga" }],
        "8": [{ activity: "8:30am - Manitou Incline", location: "Social" }],
        "9": [{ activity: "6:00pm", location: "Run Club" }],
        "14": [{ activity: "9:00am", location: "Yoga" }],
        "16": [{ activity: "7:00am", location: "Run Club" }],
        "21": [{ activity: "6:00pm", location: "Yoga" }],
        "23": [{ activity: "6:00pm", location: "Run Club" }],
        "28": [{ activity: "9:00am", location: "Yoga" }],
        "30": [{ activity: "7:00am", location: "Run Club" }],
            // Add other activities as needed
    };

    const locations = {
        "Run Club": "#fdb827",
        "Yoga": "#4b90cd",
        "Social": "#002d62"
    };

    const Calendar = () => {
        const days = Array.from({ length: 30 }, (_, i) => i + 1);
        const emptyDays = Array.from({ length: 6 }).fill(null); // June starts on a Wednesday in 2024

        return (
            <div className="Schedule">
                <img src={scheduleText} className="scheduleTitle" alt="Schedule Title" />
                <section>
                    <div className="dailySchedule">
                        <h2>Weekly Workout Schedule</h2> 
                        <h3>PETER PAN PARK / McFall Park Amphitheater</h3>
                        <p className="border"><a href="https://maps.app.goo.gl/CREtyUomNe7kq9qX7">4801 W. 92nd Ave.<br/>
                        Westminster, CO 80031</a>
                        </p>
                        <p>
                            <span className="day">Monday -</span>
                            <span className="times">5am</span> 
                            <span className="times">6:30am</span> 
                            <span className="times">9am</span> 
                            <span className="times">6pm</span>
                        </p>
                        <p>
                            <span className="day">Tuesday -</span>
                            <span className="times">5am</span> 
                            <span className="times">6:30am</span> 
                            <span className="times">9am</span> 
                            <span className="times">6pm</span>
                        </p>
                        <p>
                            <span className="day">Wednesday -</span>
                            <span className="times">5am</span>
                            <span className="times"></span>
                            <span className="times"></span>
                            <span className="times">6pm</span>
                        </p>
                        <p>
                            <span className="day">Thursday -</span>
                            <span className="times">5am</span> 
                            <span className="times">6:30am</span> 
                            <span className="times">9am</span> 
                            <span className="times">6pm</span>
                        </p>
                        <p className="border">
                            <span className="day">Friday -</span>
                            <span className="times"></span> 
                            <span className="times">6:30am</span>
                            <span className="times">9am</span>
                            <span className="times"></span>
                        </p>            
                        <h3>WESTMINSTER CITY PARK</h3>
                        <p className="border"><a href="https://maps.app.goo.gl/yM92ZppaXvTxZd2P9">10455 Sheridan Blvd.<br/>
                        Westminster, CO 80020</a>
                        </p>
                        <p className="border">
                            <span className="day">Saturday -</span>
                            <span className="times"></span> 
                            <span className="times"></span> 
                            <span className="times">9am</span> 
                            <span className="times"></span>
                        </p>
                    </div>
                </section>
                <section>
                    <div className="calendar">
                        <header className="calendar-header">
                            <h2>June 2024 - Run Club, Yoga & Social Events</h2> 
                            <h3>*Social Events Open to All!</h3>
                            <h3>*Run Club & Yoga Included w/ Unlimited Memebership</h3>
                        </header>
                        <div className="header">
                            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
                                <div key={day} className="day-header">{day}</div>
                            ))}
                        </div>
                        <div className="days">
                            {emptyDays.map((_, index) => (
                                <div key={`empty-${index}`} className="daytime empty"></div>
                            ))}
                            {days.map(day => (
                                <div key={day} className="daytime">
                                    {day}
                                    {activities[day]?.map((event, index) => (
                                        <div key={index} className="activity" style={{ backgroundColor: locations[event.location] }}>
                                            {event.activity}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                        <div className="key">
                            {Object.entries(locations).map(([location, color]) => (
                                <div key={location} className="key-item">
                                    <span className="key-color" style={{ backgroundColor: color }}></span> {location}
                                </div>
                            ))}
                        </div>
                        <div className="address">
                            <span><a href="https://maps.app.goo.gl/uLkYNDwPKQdzhB6s9" target="_blank">9737 Wadsworth Pkwy <br />Westminster, CO 80021</a></span>
                            <span><a href="https://maps.app.goo.gl/Jd5vehbUSzeUxq846" target="_blank">4801 W. 92nd Ave.<br />Westminster, CO 80031</a></span>
                            <span><a href="https://maps.app.goo.gl/etWndSAs7gRAB7zH8" target="_blank">Manitou Springs, <br />Colorado 80829</a></span>
                        </div>
                    </div>
                </section>
            </div>
        );
    };
    const Carousel = () => {
        return (
            <div className="Carousel">
                <img src={testimonial} className="scheduleTitle" alt="Schedule Title" />
                <MultiItemCarousel />
            </div>
        )
    }
        
    const Massage = () => {
        return (
            <div className="Massage">
                <section className="MassageHeader">
                    <img src={massageText} className="scheduleTitle" alt="massageText" />
                </section>
                <section className="column">
                    <h2>Your Expert in Personalized Therapeutic Massage</h2>
                    <h3>
                        At One Body, Gabriel provides tailored bodywork including:
                    </h3>
                    <ul>
                        <li>Sports Massage</li>
                        <li>Structural Integration</li>
                        <li>Swedish</li>
                        <li>Trigger Point Therapy</li>
                    </ul>
                    <h3>
                        Ideal for Colorado’s active lifestyle, these sessions:
                    </h3>
                    <p>
                        <ul>
                            <li>Enhance Performance</li>
                            <li>Aid in Injury Prevention</li>
                            <li>Relieve Stress</li>
                        </ul>
                    </p>
                    
                    <h3>Location</h3>
                    <p><a href="https://maps.app.goo.gl/wEVTP8CR142AYYD68" target="_blank">11178 Huron Suite 7 (upstairs) Northglenn CO</a></p>
                </section>
                <section className="column">
                    <h2>Massage Rates</h2>
                    <img src={massage} alt="massage" />
                    <ul>
                        <li>⁃	$80/ hour </li>
                        <li>⁃	$95/ 75 min </li>
                        <li>⁃	$110/ 90 min </li>
                        <li>⁃	$140/ 2 hour </li>
                    </ul>
                    <p><em>•	10% off to my fitness clients, 15% if they rebook within a month of their previous session </em></p>
                </section>
                <section>
                    <h3>
                        Experience professional care that makes a difference!
                    </h3>
                </section>
                <section className="column">
                </section>
                
            </div>
        )
    }
        
    const testimonials = [
      { 
          id: 1, 
          text: "Gabe has been my Trainor since 2020 and has kept me on track and accountable in my fitness journey for 4 years. I started off with CG Games Individual in 2022 reaching the semi-finals to finally winning the CG Games Teams Division 50 + last year. I'm 60 this year and feel like I'm in the best shape I have ever been. It is because of the socials, fun workout games and the community aspect that I continue with Gabe as my trainor.", 
          author: "Carolyn M.", 
          image: carolyn
      },
      { 
          id: 2, 
          text: "I can't speak highly enough of my experience with Gabriel. I joined his outdoor bootcamp classes over a year ago, as I was approaching the big 5-0, after nearly two decades without regular exercise. Since then, I've been attending his classes 4-5 times a week, and I can honestly say I look forward to them each time. When you join One Body, you join a community of people of different ages and physical abilities that support each other. His approach is motivating and empowering, pushing me beyond what I thought possible while ensuring proper technique and safety. Thanks to his guidance, I've not only regained my fitness, but surpassed my own expectations. I feel stronger, healthier, and more energized than ever before. If you're looking for a trainer who will challenge and inspire you to reach your goals, look no further than Gabriel. I couldn't recommend him highly enough.", 
          author: "Cecile F.", 
          image: cecile
      },
      { 
          id: 3, 
          text: "Gabe has guided me to a level of athleticism that I would never have imagined, he’s been a real coach and friend.  He pushed me when I needed it but also compassionate when I needed it.  Thank you for all you do Gabe!", 
          author: "Lawrence G.",
          image: lawrence
       }
    ];

const Test = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, 5000); // Change testimonial every 3 seconds
    return () => clearInterval(timer);
  }, []);

  return (
      <div className="testimonial-slider">
       <div className="testimonial-item">
         <img src={testimonials[currentIndex].image} alt={`Testimonial from ${testimonials[currentIndex].author}`} className="testimonial-image" />
         <p>"{testimonials[currentIndex].text}"</p>
         <p className="author">- {testimonials[currentIndex].author}</p>
       </div>
     </div>
  );
};

const Contact = () => {
    return (
        <div className="Contact">
            <img src={connectText} className="scheduleTitle" alt="Connect Text Header" />
            <div className="ContactContainer">
                <div className="column">
                    <img src={logo} className="App-logo-footer" alt="logo" />
                </div>
                <div className="column">
                    <h3>Contact us to book your appointment and explore our exclusive offers!</h3>
                    <form name="contact" className="ContactForm" action="/success" netlify>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                        
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                        
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="4" required></textarea>
                        
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className="column">
                    <div className="SocialLinks">
                        <h3><span>Curious? Try it out for free.</span></h3>
                        <p>Scan or Click QR Code to get started</p>
                        <a href="https://onebody.pushpress.com/open/interested/usr_3716df7673660c" target="_blank" rel="noreferrer">
                        <img src={qrCode} alt="qrCode" className="qrCode" />
                        </a>
                        <h2><span>Feeling Social?</span></h2>
                        <p>Follow the action</p>
                        <a href="https://www.facebook.com/gabriel.gabaldon.1" target="_blank" rel="noreferrer">
                            <img src={facebook} alt="facebook" className="social-icons" />
                        </a>
                        <a href="https://www.instagram.com/one_body_303/" target="_blank" rel="noreferrer">
                            <img src={instagram} alt="instagram" className="social-icons" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
        
        
        
        export default App;
