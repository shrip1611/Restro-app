import Hero from '../components/Hero';
import Gallary from '../components/Gallary';
import Banner from '../components/Banner';
import Form from '../components/Form';
import WorkingHours from '../components/WorkTime';
import EventsSection from '../components/EventsSection';
import Testimonial from '../components/Testimonial';

const Home = () => {
    return (
        <>
            <Hero />
            <Gallary />
            <Banner />
            <Form />
            <WorkingHours />
            <EventsSection />
            <Testimonial />
        </>
    )
}

export default Home