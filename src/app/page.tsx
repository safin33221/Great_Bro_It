import CourseSection from "./components/Courses"
import HeroSlider from "./components/Hero"
import Mentor from "./components/Mentors"


export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSlider />
      <CourseSection />
      <Mentor/>
     
    </div>
  );
}
