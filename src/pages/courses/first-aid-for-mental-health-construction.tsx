import KAMPC from '@/assets/images/logos/KAM-Project-Consultants.png';
import CourseCTA from '@/components/CourseCTA';
import CourseHeader from '@/components/CourseHeader';
import CourseTestimonial from '@/components/CourseTestimonial';

const FirstAidForMentalHealthConstruction = () => (
    <div className='overflow-hidden bg-gray-50 py-16'>
        <div className='mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8'>
            <CourseHeader
                category='First Aid for Mental Health'
                title='First Aid for Mental Health Construction'
            />
            <div className='lg:grid lg:grid-cols-2 lg:items-start lg:gap-8'>
                <div className='relative z-10'>
                    <div className='prose prose-indigo mx-auto lg:max-w-none'>
                        <h2>Course overview</h2>
                        <p>
                            This course is designed specifically for people
                            working in construction to increase their knowledge
                            of mental health problems and/or become a Mental
                            Health First Aider in their workplace.
                        </p>

                        <hr />

                        <h2>Target Group</h2>
                        <p>TBD</p>

                        <hr />
                        <h2>Learning Outcomes</h2>
                        <ul className='marker:text-black'>
                            <li>TBD</li>
                        </ul>

                        <hr />
                        <h3>
                            Cost: <span className='font-normal'>TBD</span>
                        </h3>
                        <h3>
                            Duration: <span className='font-normal'>TBD</span>
                        </h3>
                    </div>
                    <CourseCTA id={8} />
                </div>
                <CourseTestimonial
                    author={{
                        image: KAMPC,
                        name: 'KAM Project Consultants',
                        role: 'Associate',
                    }}
                    content='I found the Mental Health First Aid course
                very informative with a very knowledgeable
                trainer who goes that extra mile. There were
                many elements of the training which will
                help me support people at work and socially
                so thank you Brian.'
                />
            </div>
        </div>
    </div>
);

FirstAidForMentalHealthConstruction.pageTitle =
    'First Aid for Mental Health Construction';

export default FirstAidForMentalHealthConstruction;
