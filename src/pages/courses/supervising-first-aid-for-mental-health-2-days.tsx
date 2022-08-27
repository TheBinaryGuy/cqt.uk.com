import KAMPC from '@/assets/images/logos/KAM-Project-Consultants.png';
import CourseCTA from '@/components/CourseCTA';
import CourseHeader from '@/components/CourseHeader';
import CourseNote from '@/components/CourseNote';
import CourseTestimonial from '@/components/CourseTestimonial';

const MentalHealth2Days = () => (
    <div className='overflow-hidden bg-gray-50 py-16'>
        <div className='mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8'>
            <CourseHeader
                category='First Aid for Mental Health'
                title='Supervising First Aid for Mental Health 2 Days (RQF Level 3 Award)'
            />
            <div className='lg:grid lg:grid-cols-2 lg:items-start lg:gap-8'>
                <div className='relative z-10'>
                    <div className='prose prose-indigo mx-auto lg:max-w-none'>
                        <h2>Course overview</h2>
                        <p>
                            This regulated 2-Day training course offers a RQF
                            qualification and a level 3 FAA Award. The course is
                            available face-to-face or online and is accompanied
                            by a course manual.
                        </p>
                        <p>
                            The course goes into detail on a wide range of
                            mental health conditions and the support and help
                            provided by healthcare professionals. It covers the
                            content of both the Level 1 and Level 2
                            qualifications The learning takes place over two
                            days through a mixture of group activities,
                            presentations and discussions.
                        </p>
                        <p>
                            On the course participants will gain the knowledge
                            to recognise a wide range of mental health
                            conditions, how to start a supportive conversation
                            and when and how to signpost a person to seek
                            appropriate professional help.
                        </p>
                        <p>
                            Participants will learn about the first aid action
                            plan for mental health, be able to put it in place
                            and understand how to implement a positive mental
                            health culture in the workplace. Each course is
                            accompanied by a comprehensive set of resources as
                            well as your own personal manual.
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
                            The regulated course is ideal for Heads of Service,
                            Trainer/ Assessors, Teachers, Line Managers, HR
                            professionals, Wellbeing/Mental Health Champions,
                            Health and Safety representatives and anybody who
                            wants to qualify as a First Aider for Mental Health
                            within the workplace.
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
                                for a person presenting a suspected mental
                                health condition.
                            </li>
                            <li>Know how to recognise and manage stress.</li>
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
                            <li>
                                Understand a range of mental health disorders
                                and the support/therapy provided by professional
                                healthcare.
                            </li>
                        </ul>

                        <hr />
                        <h3>
                            Cost: <span className='font-normal'>£230.00</span>
                        </h3>
                        <h3>
                            Duration:{' '}
                            <span className='font-normal'>2 - Days</span>
                        </h3>

                        <hr />
                        <CourseNote />
                    </div>
                    <CourseCTA id={4} />
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

MentalHealth2Days.pageTitle =
    'Supervising First Aid for Mental Health 2 Days (RQF Level 3 Award)';

export default MentalHealth2Days;
