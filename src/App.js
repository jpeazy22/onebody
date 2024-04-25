import { useState } from 'react'
import { NavLink, BrowserRouter } from 'react-router-dom'
import logo from './assets/obLogo.png'
import whiteLogo from './assets/obLogo-white.png'
import titleText from './assets/groupFitnesstextblue.png'
import rateText from './assets/fitnessRatesBlue.png'
import scheduleText from './assets/fitnessScheduleText.png'
import qrCode from './assets/ob-qrcode.png'
import fit1 from './assets/monthlyMember.png'
import fit2 from './assets/nextLevel.png'
import fit3 from './assets/personalTraining.png'
import icon1 from './assets/deadlift.png'
import icon2 from './assets/personal-trainer.png'
import icon3 from './assets/lotus.png'
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
        <h2><a href="https://onebody.pushpress.com/open/interested/usr_3716df7673660c" target="_blank" rel="noreferrer">Click Here</a> or Scan Below for 3 Free Classes</h2>
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
                </ol>
                <h4><b>Varies/</b>session
                <span>
                <a href="https://onebody.pushpress.com/open/interested/usr_3716df7673660c" target="_blank" rel="noreferrer">Sign Up</a>
                </span>
                </h4>
                </section>
                <section className="InfoBlock">
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
                </section>
                </div>
                <section className="Schedules">
                <img src={scheduleText} className="scheduleTitle" alt="scheduleText" />
                <div>
                <h2>Mentality Monday</h2>
                <p>@Peter Pan Park</p>
                <ul>
                <li>•	Trainer Gabriel</li>
                <li>⁃	5am</li>
                <li>⁃	6:30am</li>
                <li>⁃	9am</li>
                <li>⁃	6pm</li>
                </ul>
                </div>
                <div>
                <h2>Tiny Tuesday</h2>
                <p>@Peter Pan Park</p>
                <ul>
                <li>•	Trainer Gabriel</li>
                <li>⁃	5am</li>
                <li>⁃	6:30am</li>
                <li>⁃	9am</li>
                <li>⁃	6pm</li>
                </ul>
                </div>
                <div>
                <h2>Washboard Ab Wednesday</h2>
                <p>@Peter Pan Park</p>
                <ul>
                <li>•	Trainer Chris</li>
                <li>⁃	5:15am</li>
                <li>⁃	6pm</li>
                </ul>
                </div>
                <div>
                <h2>Thickboy Thursday</h2>
                <p>@Peter Pan Park</p>
                <ul>
                <li>•	Trainer Gabriel</li>
                <li>⁃	5am</li>
                <li>⁃	6:30am</li>
                <li>⁃	9am</li>
                <li>⁃	6pm</li>
                </ul>
                </div>
                <div>
                <h2>Freestyle Friday</h2>
                <p>@Peter Pan Park</p>
                <ul>
                <li>⁃	5:15am- Trainer Chris </li>
                <li>⁃	6:30am- Trainer Chris</li>
                <li>⁃	9am- Trainer Gabriel</li>
                </ul>
                </div>
                <div>
                <h2>Stair Saturday</h2>
                <p>@Westminster City Park</p>
                <ul>
                <li>⁃	9am</li>
                </ul>
                </div>
                </section>
                <section className="SchedulesTwo">
                <div>
                <h2>Mentality Monday</h2>
                <p>@Peter Pan Park -Trainer: Gabriel Times: <span>5am</span><span>6:30am</span><span>9am</span><span>6pm</span></p>
                </div>
                <div>
                <h2>Tiny Tuesday</h2>
                <p>@Peter Pan Park -Trainer: Gabriel Times: <span>5am</span><span>6:30am</span><span>9am</span><span>6pm</span></p>
                </div>
                <div>
                <h2>Washboard Ab Wednesday</h2>
                <p>@Peter Pan Park -Trainer: Chris Times: <span>5:15am</span><span>6pm</span></p>
                </div>
                <div>
                <h2>Thickboy Thursday</h2>
                <p>@Peter Pan Park -Trainer: Gabriel Times: <span>5am</span><span>6:30am</span><span>9am</span><span>6am</span></p>
                </div>
                <div>
                <h2>Freestyle Friday</h2>
                <p>@Peter Pan Park -Trainer: Chris Times: <span>5:15am</span><span>6:30am</span></p>
                <p>@Peter Pan Park -Trainer: Gabriel Times: <span>9am</span></p>
                </div>
                <div>
                <h2>Stair Saturday</h2>
                <p>@Westminster City Park -Trainer: Gabriel Times: <span>9am</span></p>
                </div>
                </section>
                <section>
                <h2>LOCATIONS</h2>
                <p>
                Indoor- November- March
                Outdoor April-October 
                </p>
                <p>
                Weekday Location
                Peter Pan Park 
                4801 W 92nd Ave
                Westminster, CO 80031
                </p>
                <p>
                Saturday Location 
                Westminster City Park
                10455 Sheridan Blvd
                Westminster, CO 80020
                </p>
                <p>
                Rain Location 
                Squires Park
                3450 W 99th Ave
                Westminster, CO  80031
                </p>
                <p>
                Indoor Location 
                Legacy Event Center
                9051 N Harlan St
                Westminster, CO 80031
                </p>
                <p>
                Nutrition Coaching
                ⁃	coming Fall 2024
                </p>
                </section>
                </div>
                </div>
            )
        }
        const Massage = () => {
            return (
                <div className="Massage">
                <section>
                <h3>Massage</h3>
                </section>
                <section>
                Massage Rates
                ⁃	$80/ hour 
                ⁃	$95/ 75 min 
                ⁃	$110/ 90 min 
                ⁃	$140/ 2 hour 
                •	Tips not expected or required, but of course appreciated
                •	10% off to my fitness clients, 15% if they rebook within a month of their previous session 
                </section>
                </div>
            )
        }
        const Test = () => {
            const Testimonials = [
                {
                    id: 1,
                    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
                    author: "John Doe",
                    image: "https://via.placeholder.com/150"
                },
                {
                    id: 2,
                    quote: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
                    author: "Jane Smith",
                    image: "https://via.placeholder.com/150"
                },
                // Add more testimonials as needed
            ]
            
            const TestimonialSlider = () => {
                const [currentTestimonial, setCurrentTestimonial] = useState(0)
                
                const nextTestimonial = () => {
                    setCurrentTestimonial((currentTestimonial + 1) % Testimonials.length);
                }
                
                const prevTestimonial = () => {
                    setCurrentTestimonial((currentTestimonial - 1 + Testimonials.length) % Testimonials.length);
                }
                return (
                    <div className="TestimonialSlider">
                    <h1>TESTimonial slider section</h1>
                    <div className="Testimonial">
                    <img src={Testimonials[currentTestimonial].image} alt="Testimonial" />
                    <blockquote>{Testimonials[currentTestimonial].quote}</blockquote>
                    <cite>- {Testimonials[currentTestimonial].author}</cite>
                    </div>
                    <div className="controls">
                    <button onClick={prevTestimonial}>Previous</button>
                    <button onClick={nextTestimonial}>Next</button>
                    </div>
                    </div>
                )
            }
        }
        
        
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
