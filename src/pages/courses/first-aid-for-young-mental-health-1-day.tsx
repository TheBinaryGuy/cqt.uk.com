import Sutton from '@/assets/images/logos/Sutton.png';
import CourseCTA from '@/components/CourseCTA';
import CourseHeader from '@/components/CourseHeader';
import CourseNote from '@/components/CourseNote';
import CourseTestimonial from '@/components/CourseTestimonial';

const MentalHealthYoungPeople = () => (
    <div className='overflow-hidden bg-gray-50 py-16'>
        <div className='mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8'>
            <CourseHeader
                category='First Aid for Mental Health'
                title='First Aid for Youth Mental Health 1-Day (RQF Level 2 Award)'
            />
            <div className='lg:grid lg:grid-cols-2 lg:items-start lg:gap-8'>
                <div className='relative z-10'>
                    <div className='prose prose-indigo mx-auto lg:max-w-none'>
                        <h2>Course overview</h2>
                        <p>
                            The training course has been designed with children
                            and young people in mind covering areas such as
                            stress, anxiety, self-harm, eating disorders and
                            bullying, and will provide the knowledge and skills
                            to identify a potential mental health condition.
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
                            The regulated training course offers a RQF
                            qualification and a level 2 FAA Award and is
                            suitable for young adults and anyone who actively
                            connects with children such as parents, carers,
                            teachers and youth group leaders.
                        </p>

                        <hr />
                        <h2>Learning Outcomes</h2>
                        <ul className='marker:text-black'>
                            <li>
                                Know what mental health is, why young people
                                develop mental health conditions and the role of
                                a first aider for mental health.
                            </li>
                            <li>
                                Know how to recognise and manage stress and
                                anxiety.
                            </li>
                            <li>
                                Know how to recognise a range of mental health
                                conditions associated with young people.
                            </li>
                            <li>
                                Understand the first aid action plan for mental
                                health and be able to put it in place.
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
                    <CourseCTA id={5} />
                </div>
                <CourseTestimonial
                    author={{
                        image: Sutton,
                        name: 'London Borough Sutton Council',
                        role: 'Manager',
                    }}
                    content='Mental Health course given me more insight into a presenting problem that will enable me to signpost the young person to the right service if required.'
                />
            </div>
        </div>
    </div>
);

MentalHealthYoungPeople.pageTitle =
    'First Aid for Youth Mental Health 1-Day (RQF Level 2 Award)';

export default MentalHealthYoungPeople;
