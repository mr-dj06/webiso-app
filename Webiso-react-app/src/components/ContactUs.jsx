import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { PiPhoneLight } from "react-icons/pi";
import '../styles/ContactUs.css';

import { ToastContainer, toast } from "react-toastify";
import axios from 'axios';

function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState({});


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' }); // Clear error when user types
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.company.trim()) newErrors.company = 'Company is required';
        if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
        else if (!/^[0-9]{10}$/.test(formData.phone)) newErrors.phone = 'Invalid phone number';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format';
        if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
        if (!formData.message.trim()) newErrors.message = 'Message is required';

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            toast.error('Please fix the errors in the form.');
        }

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        // Add your form submission logic here (e.g., API call)
        if (validateForm()) {
            console.log(formData)
            const response = await axios.post("http://localhost:8080/api/contact-us/", formData)
            console.log(response);
            toast.success('Form submitted successfully!');
            setFormData({
                name: '',
                company: '',
                phone: '',
                email: '',
                subject: '',
                message: ''
            });
        }
    };

    const handleClear = () => {
        setFormData({
            name: '',
            company: '',
            phone: '',
            email: '',
            subject: '',
            message: ''
        });
        setErrors({});
        toast.info('Form cleared successfully!');
    };

    //animations
    const conDetailsRef = useRef(null);
    const conFormRef = useRef(null);
    const conLocRef = useRef(null);

    const conDetailsInView = useInView(conDetailsRef, { once: true });
    const conFormInView = useInView(conFormRef, { once: true })
    const conLocInView = useInView(conLocRef, { once: true })

    return (
        <div className="contact-con">
            <div className="contact-details-con">
                <motion.div
                    ref={conDetailsRef}
                    initial={{ opacity: 0, x: -80 }}
                    animate={conDetailsInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="contact-details">
                    <div className="contact-heading f1">Get in touch</div>
                    <div className="contact-title f1">
                        Seamless Communication,
                        <span className="contact-grad"> Global Impact</span>
                        .
                    </div>
                    <div className="contact-subTitle f2">Auctor dictumst inceptos metus est ad himenaeos habitasse litora natoque libero nunc</div>
                    <div className="contact-address con-desc">
                        <CiLocationOn className="contact-icon" />
                        <div className="con-add">
                            <div className="con-add-title f1">
                                Head Office
                            </div>
                            <div className="con-add-subtitle f2">
                                Jalan Cempaka Wangi No 22 <br />
                                Jakarta - Indonesia
                            </div>
                        </div>
                    </div>
                    <div className="contact-email con-desc">
                        <CiMail className="contact-icon" />
                        <div className="con-email">
                            <div className="con-email-title f1">
                                Email Support
                            </div>
                            <div className="con-email-subtitle f2">
                                support@yourdomain.tld <br />
                                hello@yourdomain.tld
                            </div>
                        </div>
                    </div>
                    <div className="contact-phone con-desc">
                        <PiPhoneLight className="contact-icon" />
                        <div className="con-phone">
                            <div className="con-phone-title f1">
                                Let's Talk
                            </div>
                            <div className="con-phone-subtitle f2">
                                Phone : +6221.2002.2012 <br />
                                Fax : +6221.2002.2013
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    ref={conFormRef}
                    initial={{ opacity: 0, x: 80 }}
                    animate={conFormInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="contact-form">
                    <div className="consultation-form-container">
                        <h2>Send us a message</h2>
                        <p className="con-formSubTitle">
                            Auctor dictumst inceptos metus est ad himenaeos habitasse litora natoque libero nunc
                        </p>
                        <form onSubmit={handleSubmit}>
                            <div className="con-nameCompany">
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder='Name'
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.name && <p className="error">*{errors.name}</p>}

                                </div>
                                <div className="form-group">
                                    <label htmlFor="company">Company</label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        placeholder='Company'
                                        value={formData.company}
                                        onChange={handleChange}
                                    />
                                    {errors.company && <p className="error">*{errors.company}</p>}
                                </div>
                            </div>
                            <div className="con-phoneEmail">
                                <div className="form-group">
                                    <label htmlFor="phone">Phone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        placeholder='Phone'
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.phone && <p className="error">*{errors.phone}</p>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder='Email'
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.email && <p className="error">*{errors.email}</p>}
                                </div>
                            </div>
                            <div className="con-subject">
                                <div className="form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        placeholder='Subject'
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.subject && <p className="error">*{errors.subject}</p>}
                                </div>
                            </div>
                            <div className="con-message">
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder='Message'
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.message && <p className="error">*{errors.message}</p>}
                                </div>
                            </div>
                            <div className="con-submitbtn">
                                <button type="submit" onClick={handleSubmit} className="submit-button">
                                    Submit
                                </button>
                            </div>
                        </form>
                        <ToastContainer />
                    </div>
                </motion.div>
            </div>

            <motion.div
                ref={conLocRef}
                initial={{ opacity: 0 }}
                animate={conLocInView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
                className="contact-location">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.2682937878085!2d72.52630687509152!3d23.01391927917977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e855659790c87%3A0x2ac17e1785f20abc!2sAnanta%20Solution!5e0!3m2!1sen!2sin!4v1742535501589!5m2!1sen!2sin"
                    width="100%"
                    height="500"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ahmedabad Map"
                    className="map"
                ></iframe>
            </motion.div>
        </div>
    )
}

export default ContactUs
