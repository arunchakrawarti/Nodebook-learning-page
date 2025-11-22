import React from 'react'
import Banner from "../components/pages/Home/Banner"
import PopularCourse from "../components/pages/Home/PopularCourse"
import Student from "../components/pages/Home/Student"
import StudyMaterial from "../components/pages/Home/StudyMaterial"
import TestSeries from "../components/pages/Home/TestSeries"
import Global from "../components/pages/Home/Global"
import Achievement from "../components/pages/Home/Achievement"
import Explore from "../components/pages/Home/Explore"
import Channel from "../components/pages/Home/Channel"
import Impact from "../components/pages/Home/Impact"
import Notebook from "../components/pages/Home/Notebook"
import Learning from "../components/pages/Home/Learning"


export default function Home() {
  return (
   <div>
    <Banner/>
    <PopularCourse/>
    <Student/>
    <StudyMaterial/>
    <TestSeries/>
    <Global/>
    <Achievement/>
    <Explore/>
    <Channel/>
    <Impact/>
    <Notebook/>
    <Learning/>
    {/* <Calling/> */}
   </div>
  );
}


