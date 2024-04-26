import { useState, useEffect } from 'react'
import { NavLink, BrowserRouter } from 'react-router-dom'
import logo from './assets/obLogo.png'
import whiteLogo from './assets/obLogo-white.png'
import titleText from './assets/groupFitnesstextblue.png'
import rateText from './assets/fitnessRatesBlue.png'
import scheduleText from './assets/scheduleTextBlue.png'
import qrCode from './assets/ob-qrcode.png'
import fit1 from './assets/monthlyMember.png'
import fit2 from './assets/nextLevel.png'
import fit3 from './assets/personalTraining.png'
import icon1 from './assets/deadlift.png'
import icon2 from './assets/personal-trainer.png'
import icon3 from './assets/lotus.png'
import massage from './assets/black-zen-stones.jpg'
import './App.css';
import './Nav.css';

function App() {
    return (
        <div className="App">
        <Navbar />
        <div id="home"><Home /></div>
        <div id="fitness"><Fitness /></div>
        <div id="massage"><Massage /></div>
        <div id="testimonials"><Test /></div>
        <div id="about"><About /></div>
        <div id="contact"><Contact /></div>
        </div>
    );
}

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    
    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    };
    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    return (
        <nav>
        <div className="NavContainer">
        <img src={logo} className="App-logo-nav-mobile" alt="logo" />
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
        <img src={logo} className="App-logo-nav" alt="logo" />
        <ul>
        <li><a href="#home" onClick={() => handleScroll('home')}>Home</a></li>
        <li><a href="#fitness" onClick={() => handleScroll('fitness')}>Group Fitness</a></li>
        <li><a href="#massage" onClick={() => handleScroll('massage')}>Massage</a></li>
        <li><a href="#testimonials" onClick={() => handleScroll('testimonials')}>Testimonials</a></li>
        <li><a href="#about" onClick={() => handleScroll('about')}>About</a></li>
        <li><a href="#contact" onClick={() => handleScroll('contact')}>Contact</a></li>
        </ul>
        </div>
        </div>
        </nav>
    );
};
const Home = () => {
    return (
        <div className="Home">
            <div className="Container">
                <section>
                    <img src={whiteLogo} className="App-logo" alt="logo" />
                </section>
                <section>
                    <div className="ServiceList">
                        <div className="Icon">
                            <img src={icon1} className="icons" alt="icon" />
                        </div>
                        <div className="Description">
                            <p>Outdoor Group Fitness</p>
                        </div>
                    </div>
                    <div className="ServiceList">
                        <div className="Icon">
                            <img src={icon2} className="icons" alt="icon" />
                        </div>
                        <div className="Description">
                            <p>Personal Training</p>
                        </div>
                    </div>
                    <div className="ServiceList">
                        <div className="Icon">
                            <img src={icon3} className="icons" alt="icon" />
                        </div>
                        <div className="Description">
                            <p>Massage Therapy</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

const Fitness = () => {
    return (
        <div className="Fitness">
            <section className="Scan">
                <img src={titleText} className="imageTitle" alt="titleText" />
                <p>With NASM Certified Professional Trainer</p>
                <h4>COACH GABRIEL GABALDON</h4>
                <h2>
                    <a href="https://onebody.pushpress.com/open/interested/usr_3716df7673660c" target="_blank" rel="noreferrer">Click Here</a> or Scan Below for 3 Free Classes
                </h2>
                <img src={qrCode} className="qrCode" alt="qrCode" />
            </section>
        
            <div className="Rates">
                <div className="Container">
                    <section>
                        <img src={rateText} className="imageTitle" alt="rateText" />
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
                        <h4><b>$25/</b>session
                            <span>
                                <a href="https://onebody.pushpress.com/open/interested/usr_3716df7673660c" target="_blank" rel="noreferrer">Enroll Now</a>
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
            <div className="schedule-container">
  <section className="schedule-section">
    <img src={scheduleText} className="scheduleTitle" alt="Schedule Title" />
    <div className="daily-schedule">
      <h2>Mentality Monday</h2>
      <p>@Westminster Center Park - Trainer: Gabriel <span className="time">5am</span> <span className="time">6:30am</span> <span className="time">9am</span> <span className="time">6pm</span></p>
    </div>
    <div className="daily-schedule">
      <h2>Tiny Tuesday</h2>
      <p>@Westminster Center Park - Trainer: Gabriel <span className="time">5am</span> <span className="time">6:30am</span> <span className="time">9am</span> <span className="time">6pm</span></p>
    </div>
    <div className="daily-schedule">
      <h2>Washboard Ab Wednesday</h2>
      <p>@Westminster Center Park - Trainer: Chris <span className="time">5:15am</span> <span className="time">6pm</span></p>
    </div>
    <div className="daily-schedule">
      <h2>Thickboy Thursday</h2>
      <p>@Westminster Center Park - Trainer: Gabriel <span className="time">5am</span> <span className="time">6:30am</span> <span className="time">9am</span> <span className="time">6pm</span></p>
    </div>
    <div className="daily-schedule">
      <h2>Freestyle Friday</h2>
      <p>@Westminster Center Park - Trainer: Chris <span className="time">5:15am</span> <span className="time">6:30am</span></p>
      <p>@Westminster Center Park - Trainer: Gabriel <span className="time">9am</span></p>
    </div>
    <div className="daily-schedule">
      <h2>Stair Saturday</h2>
      <p>@Westminster City Park - Trainer: Gabriel <span className="time">9am</span></p>
    </div>
  </section>
  <section className="location-section">
    <h2>LOCATIONS</h2>
    <p>Indoor- November- March Outdoor April-October</p>
    <p>Weekday Location: Westminster Center Park, 4801 W 92nd Ave, Westminster, CO 80031</p>
    <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.537072759645!2d-105.05196448429264!3d39.86392097943769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b89c439559c29%3A0x41f6c336186e8a3b!2sWestminster%20Center%20Park!5e0!3m2!1sen!2sus!4v1714089580274" 
          width="300" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    <p>Saturday Location: Westminster City Park, 10455 Sheridan Blvd, Westminster, CO 80020</p>
    <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3061.3832043644225!2d-105.0589299!3d39.8880519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b898a5b759f83%3A0xb614968b3ea1dfa6!2sWestminster%20City%20Park!5e0!3m2!1sen!2sus!4v1714090185591!5m2!1sen!2sus" 
        width="300" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <p>Rain Location: Squires Park, 3450 W 99th Ave, Westminster, CO 80031</p>
    <iframe 
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12247.690829664329!2d-105.0322845!3d39.8759692!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b89e03ccd4b93%3A0x92b4c7c229f9a4a8!2sSquires%20Park!5e0!3m2!1sen!2sus!4v1714090322560!5m2!1sen!2sus" width="300" height="300" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <p>Indoor Location: Legacy Event Center, 9051 N Harlan St, Westminster, CO 80031</p>
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12250.573568310565!2d-105.065387!3d39.859824!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b89ba5d7d0d9d%3A0x1a4fe67d2975b370!2sLegacy%20Event%20Center!5e0!3m2!1sen!2sus!4v1714090385320!5m2!1sen!2sus" width="300" height="300" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <p>Nutrition Coaching - coming Fall 2024</p>
  </section>
</div>

                </div>
            )
        }
        const Massage = () => {
            return (
                <div className="Massage">
                    <section className="MassageHeader">
                        <h1>Massage</h1>
                    </section>
                    <section className="column">
                        <h2>Describe what you do/offer</h2>
                        <p>something, something, I'm the best</p>
                        <h2>Location</h2>
                    </section>
                    <section className="column">
                        <h2>Massage Rates</h2>
                        <ul>
                            <li>⁃	$80/ hour </li>
                            <li>⁃	$95/ 75 min </li>
                            <li>⁃	$110/ 90 min </li>
                            <li>⁃	$140/ 2 hour </li>
                        </ul>
                        <p>•	Tips not expected or required</p>
                        <p>•	10% off to my fitness clients, 15% if they rebook within a month of their previous session </p>
                    </section>
                </div>
            )
        }
        
        
        const testimonials = [
          { id: 1, text: "This is the best service ever. Totally recommend to everyone!", author: "John Doe" },
          { id: 2, text: "Incredible results and fantastic support!", author: "Jane Smith" },
          { id: 3, text: "Very professional and highly skilled. Loved it!", author: "Alice Johnson" }
        ];

const Test = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000); // Change testimonial every 3 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="testimonial-slider">
      <div className="testimonial-item">
        <p>"{testimonials[currentIndex].text}"</p>
        <p className="author">- {testimonials[currentIndex].author}</p>
      </div>
    </div>
  );
};

        const About = () => {
            return (
                <div className="About">
                <section>
                <h2>About</h2>
                </section>
                </div>
                
            )
        }
        const Contact = () => <h2>Contact</h2>;
        
        
        
        export default App;
