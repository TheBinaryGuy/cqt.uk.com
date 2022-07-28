import Sutton from '@/assets/images/logos/Sutton.png';
import Courses from '@/components/Courses';
import { Hero } from '@/components/Hero';
import { Testimonial } from '@/components/Testimonial';

const Index = () => (
    <>
        <Hero />
        <Testimonial
            id='tommy-stroman-testimonial-1'
            author={{
                name: 'London Borough Sutton Council',
                role: 'Social Worker',
                image: Sutton,
            }}>
            <p>
                “I work with children aged between 11 and 18. It will definitely
                help support my role when I meet with troubled children on a
                daily basis. I will use strategies with young people. Very
                Helpful and Educational.”
            </p>
        </Testimonial>
        <Courses />
    </>
);

Index.pageTitle = 'Home';

export default Index;
