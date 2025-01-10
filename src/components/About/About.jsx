import React from 'react'
import Description from './Description'
import AboutBackground1 from '../../images/assests/AboutBackgroundVector1.png'
import AboutBackground2 from '../../images/assests/AboutBackgroundVector2.png'
import CurrentTeam from '../../constants/AboutText'
import TeamAlumini from './TeamAlumini'
// import FrequentQuestion from './FrequentQuestion'

//These are the comtents of heading and paragraphs
const heading1="What is Tensor?";
const heading2="Title Head";
const paragraph1='We are Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic nulla quidem pariatur nihil, maxime possimus dolorum beatae a ipsa quaerat eligendi nobis. Id voluptas nihil, repellat modi cum nulla eius! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore suscipit pariatur dicta expedita consequatur dolorum repudiandae, officia distinctio, consectetur quos repellat illo perspiciatis maiores, minus repellendus. Accusamus blanditiis laborum assumenda?';
const paragraph2='We are Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic nulla quidem pariatur nihil, maxime possimus dolorum beatae a ipsa quaerat eligendi nobis. Id voluptas nihil, repellat modi cum nulla eius! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore suscipit pariatur dicta expedita consequatur dolorum repudiandae, officia distinctio, consectetur quos repellat illo perspiciatis maiores, minus repellendus. Accusamus blanditiis laborum assumenda?';

const About = () => {
  return (
    <>
    <div className='relative flex flex-col items-center mt-10'>
        <img className='absolute -z-10 right-0 -top-10 h-AboutBackgroundHeight1 w-AboutBackgroundWidth1' src={AboutBackground1} alt="" />
        <h1 className=' z-0 text-8xl text-center'>About us</h1>
        <img className='absolute -z-0 left-0 top-44 h-AboutBackgroundHeight2 w-AboutBackgroundWidth2' src={AboutBackground2} alt="" />
        
        <div className=' z-0 mb-20'>
            <Description heading={heading1} paragraph={paragraph1}></Description>
            <Description heading={heading2} paragraph={paragraph2} reverse={true}></Description>
        </div>

        <h1 className=' z-0 text-6xl text-center font-AboutTeamFontWeight mb-20'>CURRENT TEAM</h1>
        <TeamAlumini TeamList={CurrentTeam}></TeamAlumini>
        
        <h1 className=' z-0 text-6xl text-center font-AboutTeamFontWeight mb-20'>ALUMNI</h1>
        <TeamAlumini TeamList={CurrentTeam}></TeamAlumini>

        <h1 className=' z-0 text-6xl text-center font-AboutTeamFontWeight mb-10'>FREQUENT ASKED QUESTION</h1>
        {/* <FrequentQuestion></FrequentQuestion>  */}
    </div></>
  )
}

export default About