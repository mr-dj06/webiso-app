import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import img1 from '../assets/images/Reviews/img1.jpg'
import img2 from '../assets/images/Reviews/img2.jpg'
import img3 from '../assets/images/Reviews/img3.jpg'
import img4 from '../assets/images/Reviews/img4.jpg'

import 'swiper/css'
import 'swiper/css/pagination'
import "../styles/Review.css"

export default function Review() {

    const persons = [
        {
            img: img1,
            name: "Joe",
            pos: "CEO of Digital Agency",
            msg: "Webiso delivered exactly what we were looking for a beautiful, mobile-friendly website that attracts more customers to our online store. The process was smooth, and their support post-launch has been outstanding. We couldn't be happier with the results!"
        },
        {
            img: img2,
            name: "Josh",
            pos: "CTO of Digital Agency",
            msg: "Webiso's team did an incredible job redesigning our website. Their commitment to delivering a user-friendly, visually appealing site was evident throughout the project. We've seen a 40% increase in user engagement and donations since the launch. Highly recommended!"
        },
        {
            img: img3,
            name: "Jerry",
            pos: "Designing Expert, THINKBOX",
            msg: "Webiso transformed our outdated website into a modern, user-friendly platform that perfectly represents our brand. Their attention to detail and innovative design solutions have significantly increased our online engagement and sales. I highly recommend their services!"
        },
        {
            img: img4,
            name: "Jenny",
            pos: "Marketing Specialist",
            msg: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Webiso transformed our outdated website into a modern, user-friendly platform that perfectly represents our brand. Ad reiciendis impedit ex possimus molestiae debitis culpa non dicta recusandae."
        }
    ]

    return (
        <div className="review-con">
            <div className="review-heading">
                <div className="review-title">
                    Testimonial
                </div>
                <div className="review-subTitle">Client
                    <span className='subTitle-gradiant'> Feedback </span>
                    & Reviews.
                </div>
            </div>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                // centeredSlides={true}
                grabCursor={true}
                loop={true}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {persons.map((person, index) => (
                    <SwiperSlide className='slide' key={index}>
                        <div className="msg">{person.msg}</div>
                        <div className="profile">
                            <div className="img">
                                <img src={person.img} alt="" />
                            </div>
                            <div className="person-details">
                                <div className="person-name">{person.name}</div>
                                <div className="person-pos">{person.pos}</div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
