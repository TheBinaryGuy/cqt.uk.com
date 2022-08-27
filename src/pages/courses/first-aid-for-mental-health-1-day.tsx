import KAMPC from '@/assets/images/logos/KAM-Project-Consultants.png';
import CourseCTA from '@/components/CourseCTA';
import CourseHeader from '@/components/CourseHeader';
import CourseNote from '@/components/CourseNote';
import CourseTestimonial from '@/components/CourseTestimonial';

const MentalHealth1Day = () => (
    <div className='overflow-hidden bg-gray-50 py-16'>
        <div className='mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8'>
            <CourseHeader
                category='First Aid for Mental Health'
                title='First Aid for Mental Health 1-Day (RQF Level 2 Award)'
            />
            <div className='lg:grid lg:grid-cols-2 lg:items-start lg:gap-8'>
                <div className='relative z-10'>
                    <div className='prose prose-indigo mx-auto lg:max-w-none'>
                        <h2>Course overview</h2>
                        <p>
                            This regulated one-day training course offers a RQF
                            qualification and a level 2 FAA Award. The course is
                            available face-to-face or online and is accompanied
                            by a course manual.
                        </p>
                        <p>
                            The course teaches participants to recognise the
                            early signs of suspected mental health conditions
                            and helps participants to build their confidence to
                            offer appropriate and valuable first aid for mental
                            health to people in the workplace and the community.
                        </p>
                        <p>
                            The course will provide participants with a range of
                            practical tools and techniques to create a
                            supportive climate and lead positive conversations
                            about mental health.
                        </p>
                        <p>
                            Participants will not be taught how to diagnose or
                            treat mental health conditions as this can only be
                            carried out by professionals who have the
                            appropriate knowledge, experience and
                            qualifications.
                        </p>

                        <hr />

                        <h2>Target Group</h2>
                        <p>
                            The regulated course is designed for anyone wanting
                            to increase their knowledge of mental health
                            conditions and become a First Aider for Mental
                            Health in their workplace.
                        </p>

                        <hr />
                        <h2>Learning Outcomes</h2>
                        <p>
                            On completion of the training the participant will
                            be able to:
                        </p>
                        <ul className='marker:text-black'>
                            <li>
                                Know what mental health is, why people develop
                                mental health conditions and the role of a First
                                Aider for mental health.
                            </li>
                            <li>
                                Know how to provide advice and practical support
                                for a person presenting a mental health
                                condition.
                            </li>
                            <li>Know how to recognise and manage stress.</li>
                            <li>
                                Know how to recognise a range of mental health
                                conditions.
                            </li>
                            <li>
                                Understand the impact of substance abuse on
                                mental health.
                            </li>
                            <li>
                                Understand the first aid action plan for mental
                                health and be able to put it in place.
                            </li>
                            <li>
                                Know how to implement a positive mental health
                                culture in the workplace.
                            </li>
                        </ul>

                        <hr />
                        <h3>
                            Cost: <span className='font-normal'>£120.00</span>
                        </h3>
                        <h3>
                            Duration:{' '}
                            <span className='font-normal'>1 - Day</span>
                        </h3>
                        <h3>
                            Refresher Course:{' '}
                            <span className='font-normal'>0.5 - Day</span>
                        </h3>

                        <hr />
                        <CourseNote />
                    </div>
                    <CourseCTA id={3} />
                </div>
                <CourseTestimonial
                    author={{
                        image: KAMPC,
                        name: 'KAM Project Consultants',
                        role: 'Associate',
                    }}
                    content='I found the Mental Health First Aid course very informative with a very knowledgeable trainer who goes that extra mile. There were many elements of the training which will help me support people at work and socially so thank you Brian.'
                />
            </div>
        </div>
    </div>
);

MentalHealth1Day.pageTitle =
    'First Aid for Mental Health 1-Day (RQF Level 2 Award)';

export default MentalHealth1Day;
