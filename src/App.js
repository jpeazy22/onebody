// React and Router Imports
import { useState, useEffect } from 'react';
import { NavLink, BrowserRouter } from 'react-router-dom';

// Style Imports
import './App.css';
import './Nav.css';

// Logo and QR Code Image Imports
import logo from './assets/logo/obLogo.png';
import whiteLogo from './assets/logo/obLogo-white.png';
import qrCode from './assets/ob-qrcode.png';

// Header Text Image Imports
import titleText from './assets/headerText/groupFitnesstextblue.png';
import rateText from './assets/headerText/fitnessRatesBlue.png';
import scheduleText from './assets/headerText/scheduleTextBlue.png';
import massageText from './assets/headerText/massageText.png';
import taglineWhite from './assets/oneBody_tagline.png';
import taglineBlue from './assets/taglineBlue.png';

// Fitness Program Image Imports
import fit1 from './assets/monthlyMember.png';
import fit2 from './assets/nextLevel.png';
import fit3 from './assets/personalTraining.png';
import box1 from './assets/1.png';
import box2 from './assets/2.png';
import box3 from './assets/3.png';


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
        {/*<div id="about"><About /></div>*/}
        <div id="fitness"><Fitness /></div>
        <div id="schedule"><Schedule /></div>
        <div id="testimonials"><Test /></div>
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
                const offsetPosition = absoluteTop - 130;  // Offset for the fixed header

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
                        <li><a href="#home" onClick={() => handleScroll('home')}>Home</a></li>
                        {/*<li><a href="#about" onClick={() => handleScroll('about')}>About</a></li>*/}
                        <li><a href="#fitness" onClick={() => handleScroll('fitness')}>Group Fitness</a></li>
                        {/* <li><a href="#schedule" onClick={() => handleScroll('schedule')}>Workout Schedule</a></li> */}
                        <li><a href="#testimonials" onClick={() => handleScroll('testimonials')}>Testimonials</a></li>
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
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className="Home">
            {/*<video autoPlay muted loop className="BackgroundVideo">
                <source src={skyVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>*/}
            <div className="Container">
                <section>
                    <img src={whiteLogo} className="App-logo" alt="logo" />
                </section>
                <section>
                    <img src={taglineBlue} className="Tagline" alt="tagline" />
                </section>
                <section className="Services">
                    <div className="ServiceList">
                        <a href="#about" onClick={() => handleScroll('about')}>
                            <div className="Icon">
                                <img src={icon1} className="icons" alt="icon" />
                            </div>
                            <div className="Description">
                                <p>Outdoor Bootcamps</p>
                            </div>
                        </a>
                    </div>
                    <div className="ServiceList">
                        <a href="#fitness" onClick={() => handleScroll('fitness')}>
                            <div className="Icon">
                                <img src={icon2} className="icons" alt="icon" />
                            </div>
                            <div className="Description">
                                <p>Personal Training</p>
                            </div>
                        </a>
                    </div>
                    <div className="ServiceList">
                        <a href="#massage" onClick={() => handleScroll('massage')}>
                            <div className="Icon">
                                <img src={icon3} className="icons" alt="icon" />
                            </div>
                            <div className="Description">
                                <p>Massage Therapy</p>
                            </div>
                        </a>
                    </div>
                    <div className="ServiceList">
                        <a href="#about" onClick={() => handleScroll('about')}>
                            <div className="Icon">
                                <img src={icon4} className="icons" alt="icon" />
                            </div>
                            <div className="Description">
                                <p>Community</p>
                            </div>
                        </a>
                    </div>
                </section>
            </div>
        </div>
    )
}

{/* const About = () => {
    return (
        <div className="About">
        <section>
        <h2>What to Expect</h2>
        </section>
        </div>
        
    )
} */}
const Fitness = () => {
    return (
        <div className="FitnessContainer">
            <section className="Fitness">
                {/*<section className="Scan">
                    <img src={titleText} className="imageTitle" alt="titleText" />
                </section>*/}
                <section className="column">
                    <img src={box1} className="box" alt="titleText" />
                </section>
                <section className="column">
                    <img src={box2} className="box" alt="titleText" />
                </section>
                <section className="column">
                    <img src={box3} className="box" alt="titleText" />
                </section>
            </section>
        
            <div className="Rates">
                <div className="Container">
                    <section>
                        <img src={titleText} className="imageTitle" alt="rateText" />
                    </section>
                    <section className="InfoBlock">
                        <img src={fit1} className="fitnessRateImage" alt="" />
                        <h2>MONTHLY MEMBER</h2>
                        <ol>
                            <li>4 days/week program</li>
                            <li>Multiple class times available</li>
                            <li>Custom workout for home or gym</li>
                            <li>Lead by Professional Trainer</li>
                            <li>Drop-in for non-members: $25</li>
                            <li>Punch pass options available</li>
                        </ol>
                        <h4><b>$89.00/</b>month
                            <span>
                                <a href="https://onebody.pushpress.com/open/interested/usr_3716df7673660c" target="_blank" rel="noreferrer">Enroll Now</a>
                            </span>
                        </h4>
                {/* <li>⁃	$69/ mo- spouse discount </li>
                    <li>⁃	$59/ mo- senior discount (65+ years old)</li>
                    <li>⁃	$49/ mo- child discount (14-19 years old)</li> */}
                    </section>
                    <section className="InfoBlock">
                        <img src={fit2} className="fitnessRateImage" alt="" />
                        <h2>NEXT LEVEL TRAINING</h2>
                        <ol>
                            <li>Train with elite athletes</li>
                            <li>Increased Intensity</li>
                            <li>Drop in when you can</li>
                            <li>Schedule Varies</li>
                            <li>Donation based for members</li>
                        </ol>
                        <h4>
                            <span>
                                <a href="https://onebody.pushpress.com/open/interested/usr_3716df7673660c" target="_blank" rel="noreferrer">More Info</a>
                            </span>
                        </h4>
                    {/*<h2>Punch Pass</h2>
                        <ul>
                        <li>⁃	5 sessions/ $20= $100- exp 2 mo</li>
                        <li>⁃	10 sessions/ $15= $150- exp 4 mo</li>
                        <li>⁃	20 sessions/ $10= $200- exp 8 mo</li>
                        </ul>*/}
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
                            <li>$30 - Individual Workout Plan</li>
                        </ol>
                        <h4><b>Varies/</b>session
                            <span>
                                <a href="https://onebody.pushpress.com/open/interested/usr_3716df7673660c" target="_blank" rel="noreferrer">Sign Up</a>
                            </span>
                        </h4>
                    </section>
                        {/* <section className="InfoBlock">
                        <img src={fit3} className="fitnessRateImage" alt="" />
                        <h2>INDIVIDUAL WORKOUT PLAN</h2>
                        <ol>
                        <li>3 Day personalized written workout plan</li>
                        <li>This is for guidance and something simple you can do on your own.</li>
                        </ol>
                        <h4><b>$30/plan</b>
                        <span>
                        <a href="https://onebody.pushpress.com/open/interested/usr_3716df7673660c" target="_blank" rel="noreferrer">Get Started</a>
                        </span>
                        </h4>
                        </section> */}
                </div>
            </div>
        </div>
        )
    }
        const Schedule = () => {
            return (
                <div className="Schedule">
                    <img src={scheduleText} className="scheduleTitle" alt="Schedule Title" />
                    <section>
                        <div className="dailySchedule">
                            <h3>PETER PAN PARK / WESTMINSTER CENTER PARK</h3>
                            <p className="border">4801 W. 92nd Ave.<br/>
                            Westminster, CO 80031</p>
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
                                <span className="times">5:15am</span>
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
                                <span className="times">5:15am</span> 
                                <span className="times">6:30am</span>
                                <span className="times">9am</span>
                                <span className="times"></span>
                            </p>
                            <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.537072759645!2d-105.05196448429264!3d39.86392097943769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b89c439559c29%3A0x41f6c336186e8a3b!2sWestminster%20Center%20Park!5e0!3m2!1sen!2sus!4v1714089580274" 
                            width="400" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                        <div className="dailySchedule">
                            <h3>WESTMINSTER CITY PARK</h3>
                            <p className="border">10455 Sheridan Blvd.<br/>
                            Westminster, CO 80020</p>
                            <p className="border">
                                <span className="day">Saturday -</span>
                                <span className="times"></span> 
                                <span className="times"></span> 
                                <span className="times">9am</span> 
                                <span className="times"></span>
                            </p>
                            <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3061.3832043644225!2d-105.0589299!3d39.8880519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b898a5b759f83%3A0xb614968b3ea1dfa6!2sWestminster%20City%20Park!5e0!3m2!1sen!2sus!4v1714090185591!5m2!1sen!2sus" 
                            width="400" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </section>
                </div>
        )
    }
        const Massage = () => {
            return (
                <div className="Massage">
                    <section className="MassageHeader">
                        <img src={massageText} alt="massageText" />
                    </section>
                    <section className="column">
                        <h2>Your Expert in Personalized Therapeutic Massage</h2>
                        <p>
                            At One Body, Gabriel provides tailored massage therapies including:
                        </p>
                        <ul>
                            <li>Sports Massage</li>
                            <li>Structural Integration</li>
                            <li>Swedish</li>
                            <li>Trigger Point Therapy</li>
                        </ul>
                        <p>
                            Ideal for Colorado’s active lifestyle, these sessions enhance performance, aid in injury prevention, and relieve stress.<br /> Experience professional care that makes a difference!
                        </p>
                        <h2>Location</h2>
                        <p>11178 Huron Suite 7 (upstairs) Northglenn CO</p>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.881554769044!2d-104.9958001!3d39.899284099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c747f74ca257b%3A0xcdd60abb44bc41a4!2sDream%20Intentions%20Wellness%20Studio!5e0!3m2!1sen!2sus!4v1714138557957!5m2!1sen!2sus" width="300" height="200" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </section>
                    <section className="column">
                        <h2>Massage Rates</h2>
                        <ul>
                            <li>⁃	$80/ hour </li>
                            <li>⁃	$95/ 75 min </li>
                            <li>⁃	$110/ 90 min </li>
                            <li>⁃	$140/ 2 hour </li>
                        </ul>
                        <p>•	10% off to my fitness clients, 15% if they rebook within a month of their previous session </p>
                        <h2>Contact us to book your appointment and explore our exclusive offers!</h2>
                        <form className="ContactForm">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" required />

                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required />

                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" rows="4" required></textarea>

                            <button type="submit">Send</button>
                        </form>
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
            <div className="ContactContainer">
                <div className="LeftColumn">
                    <h2><span>Contact Me
                        <a href="https://onebody.pushpress.com/open/interested/usr_3716df7673660c" target="_blank" rel="noreferrer"> HERE</a>!
                    </span></h2>
                    <h2>Follow for updates!</h2>
                    <div className="SocialLinks">
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
