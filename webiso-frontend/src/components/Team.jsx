import React, { useRef } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import p1 from '../assets/images/Team/p1.jpg';
import p2 from '../assets/images/Team/p2.jpg';
import p3 from '../assets/images/Team/p3.jpg';
import p4 from '../assets/images/Team/p4.jpg';
import p5 from '../assets/images/Team/p5.jpg';
import p6 from '../assets/images/Team/p6.jpg';
import p7 from '../assets/images/Team/p7.jpg';
import p8 from '../assets/images/Team/p8.jpg';
import '../styles/Team.css';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';

function Team() {
    const teamMembers = [
        {
            name: 'Oscar Andrews',
            img: p1,
            pos: 'Founder',
            fb: '#',
            x: '#',
            linkedIn: '#'
        },
        {
            name: 'Jamie Williams',
            img: p2,
            pos: 'Co-Founder',
            fb: '#',
            x: '#',
            linkedIn: '#'
        },
        {
            name: 'Bethany Brooks',
            img: p3,
            pos: 'Business Manager',
            fb: '#',
            x: '#',
            linkedIn: '#'
        },
        {
            name: 'Mason Lawson',
            img: p4,
            pos: 'Marketing Manager',
            fb: '#',
            x: '#',
            linkedIn: '#'
        },
        {
            name: 'Oscar Andrews',
            img: p5,
            pos: 'Founder',
            fb: '#',
            x: '#',
            linkedIn: '#'
        },
        {
            name: 'Oscar Andrews',
            img: p6,
            pos: 'Founder',
            fb: '#',
            x: '#',
            linkedIn: '#'
        },
        {
            name: 'Oscar Andrews',
            img: p7,
            pos: 'Founder',
            fb: '#',
            x: '#',
            linkedIn: '#'
        },
        {
            name: 'Oscar Andrews',
            img: p8,
            pos: 'Founder',
            fb: '#',
            x: '#',
            linkedIn: '#'
        }
    ];

    const teamRef = useRef(null);
    const teamTitleRef = useRef(null);

    const teamInView = useInView(teamRef, { once: true });
    const teamTitleInView = useInView(teamTitleRef, { once: true });

    return (
        <div className="team-con">
            <motion.div
                ref={teamTitleRef}
                initial={{ opacity: 0, y: 100 }}
                animate={teamTitleInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
                className="team-title">
                <div className="team-heading">
                    Meet our Team
                </div>
                <div className="team-subHeading">
                    We talk a lot about <span className="subHeadGrad">hope</span> helping and <span className="subHeadGrad">teamwork</span>.
                </div>
            </motion.div>
            <motion.div
                ref={teamRef}
                initial={{ opacity: 0 }}
                animate={teamInView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
                className="team-members">
                {teamMembers.map((member, index) => (
                    <div className="team-member" key={index}>
                        <div className="socials">
                            <a href={member.fb} target="_blank" rel="noopener noreferrer">
                                <FaFacebookF className='socials-logo' />
                            </a>
                            <a href={member.x} target="_blank" rel="noopener noreferrer">
                                <FaTwitter className='socials-logo' />
                            </a>
                            <a href={member.linkedIn} target="_blank" rel="noopener noreferrer">
                                <FaLinkedinIn className='socials-logo' />
                            </a>
                        </div>
                        <div className="member-img">
                            <img src={member.img} alt={member.name} />
                        </div>
                        <div className="member-detail">
                            <div className="member-name">{member.name}</div>
                            <div className="member-pos">{member.pos}</div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}

export default Team;