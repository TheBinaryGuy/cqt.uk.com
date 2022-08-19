import KAMPC from '@/assets/images/logos/KAM-Project-Consultants.png';
import CourseCTA from '@/components/CourseCTA';
import CourseHeader from '@/components/CourseHeader';
import CourseTestimonial from '@/components/CourseTestimonial';

const FirstAidForMentalHealthAwareness = () => (
    <div className='overflow-hidden bg-gray-50 py-16'>
        <div className='mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8'>
            <CourseHeader
                category='First Aid for Mental Health'
                title='First Aid for Mental Health Awareness'
            />
            <div className='lg:grid lg:grid-cols-2 lg:items-start lg:gap-8'>
                <div className='relative z-10'>
                    <div className='prose prose-indigo mx-auto lg:max-w-none'>
                        <h2>Course overview</h2>
                        <p>
                            This half-day Mental Health Awareness training is
                            designed to introduce people to the topic of mental
                            wellbeing, it raises awareness of mental health
                            problems and helps reduce the stigma and
                            discrimination surrounding mental health problems.
                        </p>
                        <p>
                            The course will teach participants to quickly
                            identify someone who may be experiencing mental
                            health problems and the simple things they can do
                            every day to proactively support themselves, friends
                            and colleagues, both in and out of the workplace.
                            It&apos;s a great stepping stone into other First
                            Aid for Mental Health courses.
                        </p>

                        <hr />

                        <h2>Target Group</h2>
                        <p>
                            This course is suitable for anybody as it equips
                            learners with the required knowledge to recognise a
                            suspected mental health condition. It also teaches
                            you the skills to start a conversation and be able
                            to signpost a person towards professional help.
                        </p>

                        <hr />
                        <h2>Learning Outcomes</h2>
                        <ul>
                            <li>What is First Aid for Mental Health?</li>
                            <li>Identifying mental health conditions</li>
                            <li>
                                Providing advice and starting a conversation
                            </li>
                        </ul>

                        <hr />
                        <h3>
                            Cost: <span className='font-normal'>£65.00</span>
                        </h3>
                        <h3>
                            Duration:{' '}
                            <span className='font-normal'>Half a Day</span>
                        </h3>
                    </div>
                    <CourseCTA id={2} />
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

FirstAidForMentalHealthAwareness.pageTitle =
    'First Aid for Mental Health Awareness';

export default FirstAidForMentalHealthAwareness;
