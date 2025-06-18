import React, { useRef } from 'react'
import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import '../styles/Services.css'
import circleIcon from '../assets/images/circle-solid.svg'
import { IoMdPlay } from "react-icons/io";


export default function Services() {
  const insideboxuSRef = useRef(null);
  const headinglS = useRef(null);
  const card1 = useRef(null);
  const card2 = useRef(null);

  const isInView1 = useInView(insideboxuSRef, { once: true })
  const isInView2 = useInView(headinglS, { once: true })
  const isInView3 = useInView(card1, { once: true })
  const isInView4 = useInView(card2, { once: true })

  const [showIframe, setShowIframe] = useState(false);

  const handlePlayClick = () => {
    setShowIframe(true);
  };

  const services = [
    {
      icon1:
        <svg className='globeimg2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 21" width="40" height="42" color="#151515" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" />
          <path d="M8 12C8 18 12 22 12 22C12 22 16 18 16 12C16 6 12 2 12 2C12 2 8 6 8 12Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
          <path d="M21 15H3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M21 9H3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>,
      title: 'Web Design',
      subtitle: 'Habitant risus facilisis vitae curabitur hac nullam.',
      description: 'Netus condimentum erat vestibulum sollicitudin sem tempor lacinia. Torquent fringilla facilisi placerat magna pellentesque facilisis nisi faucibus.',
    },
    {
      icon2:
        <svg className='layersIcon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" color="#151515" fill="none">
          <path d="M8.64298 3.14559L6.93816 3.93362C4.31272 5.14719 3 5.75397 3 6.75C3 7.74603 4.31272 8.35281 6.93817 9.56638L8.64298 10.3544C10.2952 11.1181 11.1214 11.5 12 11.5C12.8786 11.5 13.7048 11.1181 15.357 10.3544L17.0618 9.56638C19.6873 8.35281 21 7.74603 21 6.75C21 5.75397 19.6873 5.14719 17.0618 3.93362L15.357 3.14559C13.7048 2.38186 12.8786 2 12 2C11.1214 2 10.2952 2.38186 8.64298 3.14559Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M20.788 11.0972C20.9293 11.2959 21 11.5031 21 11.7309C21 12.7127 19.6873 13.3109 17.0618 14.5072L15.357 15.284C13.7048 16.0368 12.8786 16.4133 12 16.4133C11.1214 16.4133 10.2952 16.0368 8.64298 15.284L6.93817 14.5072C4.31272 13.3109 3 12.7127 3 11.7309C3 11.5031 3.07067 11.2959 3.212 11.0972" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M20.3767 16.2661C20.7922 16.5971 21 16.927 21 17.3176C21 18.2995 19.6873 18.8976 17.0618 20.0939L15.357 20.8707C13.7048 21.6236 12.8786 22 12 22C11.1214 22 10.2952 21.6236 8.64298 20.8707L6.93817 20.0939C4.31272 18.8976 3 18.2995 3 17.3176C3 16.927 3.20778 16.5971 3.62334 16.2661" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>,
      title: 'Web Development',
      subtitle: 'Habitant risus facilisis vitae curabitur hac nullam.',
      description: 'Netus condimentum erat vestibulum sollicitudin sem tempor lacinia. Torquent fringilla facilisi placerat magna pellentesque facilisis nisi faucibus.',
    },
    {
      icon3:
        <svg className='shareIcon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" color="#151515" fill="none">
          <path d="M11.1002 3C7.45057 3.00657 5.53942 3.09617 4.31806 4.31754C3 5.63559 3 7.75698 3 11.9997C3 16.2425 3 18.3639 4.31806 19.6819C5.63611 21 7.7575 21 12.0003 21C16.243 21 18.3644 21 19.6825 19.6819C20.9038 18.4606 20.9934 16.5494 21 12.8998" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M20.9995 6.02511L20 6.02258C16.2634 6.01313 14.3951 6.0084 13.0817 6.95247C12.6452 7.2662 12.2622 7.64826 11.9474 8.08394C11 9.39497 11 11.2633 11 14.9998M20.9995 6.02511C21.0062 5.86248 20.9481 5.69887 20.8251 5.55315C20.0599 4.64668 18.0711 2.99982 18.0711 2.99982M20.9995 6.02511C20.9934 6.17094 20.9352 6.31598 20.8249 6.44663C20.0596 7.35292 18.0711 8.99982 18.0711 8.99982" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>,
      title: 'Digital Marketing',
      subtitle: 'Habitant risus facilisis vitae curabitur hac nullam.',
      description: 'Netus condimentum erat vestibulum sollicitudin sem tempor lacinia. Torquent fringilla facilisi placerat magna pellentesque facilisis nisi faucibus.',
    },
    {
      icon4:
        <svg className='puzzleIcon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="34" color="#151515" fill="none">
          <path d="M12.828 6.00096C12.9388 5.68791 12.999 5.35099 12.999 5C12.999 3.34315 11.6559 2 9.99904 2C8.34219 2 6.99904 3.34315 6.99904 5C6.99904 5.35099 7.05932 5.68791 7.17008 6.00096C4.88532 6.0093 3.66601 6.09039 2.87772 6.87868C2.08951 7.66689 2.00836 8.88603 2 11.1704C2.31251 11.06 2.64876 11 2.99904 11C4.6559 11 5.99904 12.3431 5.99904 14C5.99904 15.6569 4.6559 17 2.99904 17C2.64876 17 2.31251 16.94 2 16.8296C2.00836 19.114 2.08951 20.3331 2.87772 21.1213C3.66593 21.9095 4.88508 21.9907 7.16941 21.999C7.05908 21.6865 6.99904 21.3503 6.99904 21C6.99904 19.3431 8.34219 18 9.99904 18C11.6559 18 12.999 19.3431 12.999 21C12.999 21.3503 12.939 21.6865 12.8287 21.999C15.113 21.9907 16.3322 21.9095 17.1204 21.1213C17.9086 20.333 17.9897 19.1137 17.9981 16.829C18.3111 16.9397 18.648 17 18.999 17C20.6559 17 21.999 15.6569 21.999 14C21.999 12.3431 20.6559 11 18.999 11C18.648 11 18.3111 11.0603 17.9981 11.171C17.9897 8.88627 17.9086 7.66697 17.1204 6.87868C16.3321 6.09039 15.1128 6.0093 12.828 6.00096Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
        </svg>,
      title: 'Visual Identity',
      subtitle: 'Habitant risus facilisis vitae curabitur hac nullam.',
      description: 'Netus condimentum erat vestibulum sollicitudin sem tempor lacinia. Torquent fringilla facilisi placerat magna pellentesque facilisis nisi faucibus.',
    },
    {
      icon5:
        <svg className='messagesIcon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="32" color="#151515" fill="none">
          <path d="M7.79098 19C7.46464 18.8681 7.28441 18.8042 7.18359 18.8166C7.05968 18.8317 6.8799 18.9637 6.52034 19.2275C5.88637 19.6928 5.0877 20.027 3.90328 19.9983C3.30437 19.9838 3.00491 19.9765 2.87085 19.749C2.73679 19.5216 2.90376 19.2067 3.23769 18.5769C3.70083 17.7034 3.99427 16.7035 3.54963 15.9023C2.78384 14.7578 2.13336 13.4025 2.0383 11.9387C1.98723 11.1522 1.98723 10.3377 2.0383 9.55121C2.29929 5.53215 5.47105 2.33076 9.45292 2.06733C10.8086 1.97765 12.2269 1.97746 13.5854 2.06733C17.5503 2.32964 20.712 5.50498 20.9965 9.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M14.6976 21.6471C12.1878 21.4862 10.1886 19.5298 10.0241 17.0737C9.99195 16.593 9.99195 16.0953 10.0241 15.6146C10.1886 13.1585 12.1878 11.2021 14.6976 11.0411C15.5539 10.9862 16.4479 10.9863 17.3024 11.0411C19.8122 11.2021 21.8114 13.1585 21.9759 15.6146C22.008 16.0953 22.008 16.593 21.9759 17.0737C21.9159 17.9682 21.5059 18.7965 21.0233 19.4958C20.743 19.9854 20.928 20.5965 21.2199 21.1303C21.4304 21.5152 21.5356 21.7076 21.4511 21.8466C21.3666 21.9857 21.1778 21.9901 20.8003 21.999C20.0538 22.0165 19.5504 21.8123 19.1508 21.5279C18.9242 21.3667 18.8108 21.2861 18.7327 21.2768C18.6546 21.2675 18.5009 21.3286 18.1936 21.4507C17.9174 21.5605 17.5966 21.6283 17.3024 21.6471C16.4479 21.702 15.5539 21.7021 14.6976 21.6471Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
        </svg>,
      title: 'Consultation',
      subtitle: 'Habitant risus facilisis vitae curabitur hac nullam.',
      description: 'Netus condimentum erat vestibulum sollicitudin sem tempor lacinia. Torquent fringilla facilisi placerat magna pellentesque facilisis nisi faucibus.',
    },
    {
      icon6:
        <svg className='settingsIconServices' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="38" color="#151515" fill="none">
          <path d="M16.3083 4.38394C15.7173 4.38394 15.4217 4.38394 15.1525 4.28405C15.1151 4.27017 15.0783 4.25491 15.042 4.23828C14.781 4.11855 14.5721 3.90959 14.1541 3.49167C13.1922 2.52977 12.7113 2.04882 12.1195 2.00447C12.04 1.99851 11.96 1.99851 11.8805 2.00447C11.2887 2.04882 10.8077 2.52977 9.84585 3.49166C9.42793 3.90959 9.21897 4.11855 8.95797 4.23828C8.92172 4.25491 8.88486 4.27017 8.84747 4.28405C8.57825 4.38394 8.28273 4.38394 7.69171 4.38394H7.58269C6.07478 4.38394 5.32083 4.38394 4.85239 4.85239C4.38394 5.32083 4.38394 6.07478 4.38394 7.58269V7.69171C4.38394 8.28273 4.38394 8.57825 4.28405 8.84747C4.27017 8.88486 4.25491 8.92172 4.23828 8.95797C4.11855 9.21897 3.90959 9.42793 3.49166 9.84585C2.52977 10.8077 2.04882 11.2887 2.00447 11.8805C1.99851 11.96 1.99851 12.04 2.00447 12.1195C2.04882 12.7113 2.52977 13.1922 3.49166 14.1541C3.90959 14.5721 4.11855 14.781 4.23828 15.042C4.25491 15.0783 4.27017 15.1151 4.28405 15.1525C4.38394 15.4217 4.38394 15.7173 4.38394 16.3083V16.4173C4.38394 17.9252 4.38394 18.6792 4.85239 19.1476C5.32083 19.6161 6.07478 19.6161 7.58269 19.6161H7.69171C8.28273 19.6161 8.57825 19.6161 8.84747 19.716C8.88486 19.7298 8.92172 19.7451 8.95797 19.7617C9.21897 19.8815 9.42793 20.0904 9.84585 20.5083C10.8077 21.4702 11.2887 21.9512 11.8805 21.9955C11.96 22.0015 12.0399 22.0015 12.1195 21.9955C12.7113 21.9512 13.1922 21.4702 14.1541 20.5083C14.5721 20.0904 14.781 19.8815 15.042 19.7617C15.0783 19.7451 15.1151 19.7298 15.1525 19.716C15.4217 19.6161 15.7173 19.6161 16.3083 19.6161H16.4173C17.9252 19.6161 18.6792 19.6161 19.1476 19.1476C19.6161 18.6792 19.6161 17.9252 19.6161 16.4173V16.3083C19.6161 15.7173 19.6161 15.4217 19.716 15.1525C19.7298 15.1151 19.7451 15.0783 19.7617 15.042C19.8815 14.781 20.0904 14.5721 20.5083 14.1541C21.4702 13.1922 21.9512 12.7113 21.9955 12.1195C22.0015 12.0399 22.0015 11.96 21.9955 11.8805C21.9512 11.2887 21.4702 10.8077 20.5083 9.84585C20.0904 9.42793 19.8815 9.21897 19.7617 8.95797C19.7451 8.92172 19.7298 8.88486 19.716 8.84747C19.6161 8.57825 19.6161 8.28273 19.6161 7.69171V7.58269C19.6161 6.07478 19.6161 5.32083 19.1476 4.85239C18.6792 4.38394 17.9252 4.38394 16.4173 4.38394H16.3083Z" stroke="currentColor" stroke-width="1.5" />
          <path d="M15.5 12C15.5 13.933 13.933 15.5 12 15.5C10.067 15.5 8.5 13.933 8.5 12C8.5 10.067 10.067 8.5 12 8.5C13.933 8.5 15.5 10.067 15.5 12Z" stroke="currentColor" stroke-width="1.5" />
        </svg>,
      title: 'Web Maintenance',
      subtitle: 'Habitant risus facilisis vitae curabitur hac nullam.',
      description: 'Netus condimentum erat vestibulum sollicitudin sem tempor lacinia. Torquent fringilla facilisi placerat magna pellentesque facilisis nisi faucibus.',
    },
    // Add other services here...
  ];

  // Define the fade-in animation
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } },
  };

  const cardsRef = useRef(null);

  const cardsInView = useInView(cardsRef, { once: true});

  return (
    <>

      <div className="lowerSection">
        <div className="insideboxlS">
          <motion.div
            ref={headinglS}
            initial={{ opacity: 0, x: -100 }}
            animate={isInView2 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.5, ease: "easeOut" }}
            className="headinglS"
          >
            <div className='headingLearnMorelS'>Innovative Design for
              <span className='headingLearnMore2'> Modern Businesses</span>.</div>
            <p className='lowerLearnMorelS'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <button className="learnMoreButtonlS">Learn more</button>
          </motion.div>
        </div>

        <div className="cards">
          <motion.div
            ref={card1}
            initial={{ opacity: 0, y: -100 }}
            animate={isInView3 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.3, ease: "easeOut" }}
            className="card1">
            <h2 className="percentages" id='card1'>+60% <svg className='arrows' xmlns="http://www.w3.org/2000/svg" viewBox="-6 0 24 24" width="48" height="48" color="#71ecb6" fill="none">
              <path d="M12 4L12 20" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M16.9998 8.99996C16.9998 8.99996 13.3174 4.00001 11.9998 4C10.6822 3.99999 6.99982 9 6.99982 9" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round" />
            </svg></h2>
            <h2 className="cardsHeading">Traffic Increase</h2>
            <p className="cardsSubtitle1">By optimizing your website for search engines and enhancing user experience.</p>
          </motion.div>
          <motion.div
            ref={card2}
            initial={{ opacity: 0, y: 100 }}
            animate={isInView4 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.3, ease: "easeOut" }}
            className="card2">
            <h2 className="percentages" id='card2'>+30% <svg className='arrows' xmlns="http://www.w3.org/2000/svg" viewBox="-6 0 24 24" width="48" height="48" color="#71ecb6" fill="none">
              <path d="M12 4L12 20" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M16.9998 8.99996C16.9998 8.99996 13.3174 4.00001 11.9998 4C10.6822 3.99999 6.99982 9 6.99982 9" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round" />
            </svg></h2>
            <h2 className="cardsHeading">Revenue Increase</h2>
            <p className="cardsSubtitle2">Rise in revenue as more visitors convert into paying customers.</p>
          </motion.div>
        </div>
      </div>
      {/* Video Section */}
      <div className="vid-con">
        <div className="video-container">
          <div className="text-container">
            {!showIframe ? (
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 0 0 rgba(255, 255, 255, 0.2), 0 0 0 0 rgba(255, 255, 255, 0.3), 0 0 0 0 rgba(255, 255, 255, 0.5)',
                    '0 0 0 5px rgba(255, 255, 255, 0.2), 0 0 0 15px rgba(255, 255, 255, 0.3), 0 0 0 25px rgba(255, 255, 255, 0.2)',
                  ],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 0.5,
                }}
                className='play-btn-container'
                onClick={handlePlayClick}
              >
                <IoMdPlay className='play-btn' />
              </motion.div>
            ) : (
              <div className="fullscreen-iframe-container">
                <iframe
                  className='fullscreen-iframe'
                  src="https://www.youtube.com/embed/VhBl3dHT5SY?si=Rh9gW43Kvr71f5Vl"
                  title="video player"
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
                <button className="close-btn" onClick={() => setShowIframe(false)}>✖</button>
              </div>
            )}
            <div className='text-title'>
              <span className='title-gradiant'>Innovative Solutions </span>
              <br className='text-br' />for Your Online Success
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className='cards-section'>
        <section className="services-section">
          <div className="container">
            <div className="services-grid">
              {services.map((service, index) => (
                <motion.div
                  ref={cardsRef}
                  className="service-card"
                  initial="hidden"
                  animate={cardsInView ? "visible" : {}}
                  key={index}
                  variants={fadeIn}
                >
                  <div className="service-header">
                    <div className="service-circle-icon">
                      <div className="circle">
                        <img src={circleIcon} alt="circle icon" />
                        {service.icon1}
                        {service.icon2}
                        {service.icon3}
                        {service.icon4}
                        {service.icon5}
                        {service.icon6}
                      </div>
                    </div>
                    <div className="service-titles">
                      <div className="service-title">{service.title}</div>
                      <div className="service-subtitle">{service.subtitle}</div>
                    </div>
                  </div>
                  <div className="service-description">{service.description}</div>
                  <button className="service-button">Get Started</button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}