import React, {useRef, useState} from 'react';
import "./About.css";
import images from "../../constants/images";
import {about_stats} from "../../constants/data";
import video from "../../assets/videos/video.mp4";
import {FaPlay} from "react-icons/fa";

const About = () => {
    const vidRef = useRef(null);
    const [toggleVideo, setToggleVideo] = useState(false);
    const playVideo = () => {
        setToggleVideo(!toggleVideo);
        if(toggleVideo) vidRef.current.play();
        else vidRef.current.pause();
    }

  return (
    <div className='about section-p' id='about'>
        <div className='container'>
            <div className='about-content'>
                <div className='about-grid grid'>
                    <img src = {images.About_Alex} alt = "" className='about-img mx-auto' />
                    <div className='section-title'>
                        <h3 className='text-brown'>JnJ <span className='text-dark'>Laundry Services</span></h3>
                        <p className='text mx-auto'>JnJ Laundry Services is the epitome of convenience and excellence in the laundry industry. With a focus on customer satisfaction, cutting-edge technology, and a commitment to eco-friendly practices, we provide top-notch laundry services that cater to your busy lifestyle. Our highly skilled team ensures that every garment is treated with utmost care, employing advanced techniques to deliver clean and fresh clothes. From delicate fabrics to heavy-duty linens, we handle it all with precision and attention to detail. With flexible scheduling and convenient pickup and delivery options, JnJ Laundry Services is the go-to solution for all your laundry needs. Experience the difference in quality and convenience with JnJ Laundry Services today.</p>
                    </div>
                </div>

                <div className='about-grid grid'>
                    {
                        about_stats.map((about_stat, index) => {
                            return (
                                <div className='about-item text-center flex' key = {index}>
                                    <div className='about-item-icon'>
                                        <img src = {about_stat.image} alt = "" />
                                    </div>
                                    <div className='about-item-text text-left'>
                                        <h3 className='fs-24 ls-2'>{about_stat.value}</h3>
                                        <p className='text'>{about_stat.title}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className='about-grid grid'>
                    <div className='section-title'>
                        <h3 className='text-brown'>Laundry <span className='text-dark'>Takers</span></h3>
                        <p className='text mx-auto'>Leave the hassle of laundry behind and let us take care of it for you! Our professional laundry services ensure that your garments are handled with the utmost care and attention to detail. From sorting and treating stains to washing, drying, and folding, we handle every step of the laundry process to deliver clean, fresh clothes. With flexible scheduling and convenient pickup and delivery options, you can enjoy the convenience of having your laundry expertly taken care of while you focus on more important things. Experience the peace of mind and impeccable results of our laundry services today!</p>
                    </div>

                    <div className='about-video'>
                        <video className='about-video' autoPlay loop ref = {vidRef}>
                            <source src = {video} type = "video/mp4" />
                        </video>
                        <button type = "button" className='vidPlayBtn flex flex-c' onClick={playVideo}>
                            <FaPlay className='text-brown' size = {28} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About