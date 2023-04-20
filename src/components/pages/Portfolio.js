import React from 'react';
import { Project } from '../Project';
import imageOne from '../../images/blog_homepage.png'
import imageTwo from '../../images/weather-dashboard.png'
import imageThree from '../../images/run_app.png'
import imageFour from '../../images/note-taker-home.png'
import imageFive from '../../images/bens-friends.png'
import imageSix from '../../images/QC_screenshot_1.png'
import '../../styles/Portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useWindowSize } from '../../hooks/useWindowSize';

export default function Portfolio() {
    const { width } = useWindowSize()

    const isMobile = width <= 821

    return (
        <section className='section-mobile'>
            <h2 className='section-header'>Portfolio</h2>
            {isMobile ? 
            <div>
                <li><Project deployedLink={'https://sheltered-brushlands-54086.herokuapp.com'} repoLink={'https://github.com/RyanMBelcher/tech-blog'} name={'Tech Blog'} image={imageOne} alt={''} description={''} /></li>
                <li><Project deployedLink={'https://ryanmbelcher.github.io/weather-dashboard'} repoLink={'https://github.com/RyanMBelcher/weather-dashboard'} name={'Weather Dashboard'} image={imageTwo} alt={''} description={''} /></li>
                <li><Project deployedLink={'https://safe-reaches-30072.herokuapp.com'} repoLink={'https://github.com/RyanMBelcher/run_app'} name={'Run Tracker'} image={imageThree} alt={''} description={''} /></li>
                <li><Project deployedLink={'https://secret-everglades-28595.herokuapp.com/'} repoLink={'https://github.com/RyanMBelcher/note-taker'} name={'Note Taker App'} image={imageFour} alt={''} description={''} /></li>
                <li><Project deployedLink={'https://safe-savannah-72452.herokuapp.com/'} repoLink={'https://github.com/RyanMBelcher/bens-friends'} name={`Ben's Friends`} image={imageFive} alt={''} description={''} /></li>
                <li><Project deployedLink={'https://ryanmbelcher.github.io/quiz-app/'} repoLink={'https://github.com/RyanMBelcher/quiz-app'} name={`Quiz App`} image={imageSix} alt={''} description={''} /></li>
            </div>
            :
           <Swiper
                spaceBetween={50}
                slidesPerView={2}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                modules={[Navigation, EffectCoverflow]}
                navigation={true}
                grabCursor={true}
                effect={"coverflow"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                loop={true}
                centeredSlides={true}
                scrollbar={{ draggable: true }}
            >
                <SwiperSlide>
                    <li class="glide__slide"><Project deployedLink={'https://sheltered-brushlands-54086.herokuapp.com'} repoLink={'https://github.com/RyanMBelcher/tech-blog'} name={'Tech Blog'} image={imageOne} alt={''} description={''} /></li>
                </SwiperSlide>
                <SwiperSlide>
                    <li class="glide__slide"><Project deployedLink={'https://ryanmbelcher.github.io/weather-dashboard'} repoLink={'https://github.com/RyanMBelcher/weather-dashboard'} name={'Weather Dashboard'} image={imageTwo} alt={''} description={''} /></li>
                </SwiperSlide>
                <SwiperSlide>
                    <li class="glide__slide"><Project deployedLink={'https://ryanmbelcher.github.io/random-password-generator'} repoLink={'https://github.com/RyanMBelcher/random-password-generator'} name={'Random Password Generator'} image={imageThree} alt={''} description={''} /></li>
                </SwiperSlide>
                <SwiperSlide>
                    <li class="glide__slide"><Project deployedLink={'https://secret-everglades-28595.herokuapp.com/'} repoLink={'https://github.com/RyanMBelcher/note-taker'} name={'Note Taker App'} image={imageFour} alt={''} description={''} /></li>
                </SwiperSlide>
                <SwiperSlide>
                    <li class="glide__slide"><Project deployedLink={'https://safe-savannah-72452.herokuapp.com/'} repoLink={'https://github.com/RyanMBelcher/bens-friends'} name={`Ben's Friends`} image={imageFive} alt={''} description={''} /></li>
                </SwiperSlide>
                <SwiperSlide>
                    <li class="glide__slide"><Project deployedLink={'https://ryanmbelcher.github.io/quiz-app/'} repoLink={'https://github.com/RyanMBelcher/quiz-app'} name={`Quiz App`} image={imageSix} alt={''} description={''} /></li>
                </SwiperSlide>
            </Swiper>
          }
        </section>
    );
};

