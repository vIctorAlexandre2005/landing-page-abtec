import Companies from './components/Companies/Companies';
import Courses from './components/Courses/index';
import Mentor from './components/Mentor/index';
import Testimonials from './components/Testimonials/index';
import Newsletter from './components/Newsletter/Newsletter';
import { Banner } from './components/Banner';
import WhyAbtec from './components/Mentor/index';


export default function Home() {
  return (
    <main>
      <Banner />
      {/* <Companies /> */}
      <Courses />
      <WhyAbtec />
      <Testimonials />
      <Newsletter />
    </main>
  )
}
