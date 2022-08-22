import Sutton from '@/assets/images/logos/Sutton.png';
import CourseCTA from '@/components/CourseCTA';
import CourseHeader from '@/components/CourseHeader';
import CourseNote from '@/components/CourseNote';
import CourseTestimonial from '@/components/CourseTestimonial';

const Awareness = () => (
    <div className='overflow-hidden bg-gray-50 py-16'>
        <div className='mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8'>
            <CourseHeader
                category='First Aid for Mental Health'
                title='Awareness of First Aid for Mental Health (RQF Level 1 Award)'
            />
            <div className='lg:grid lg:grid-cols-2 lg:items-start lg:gap-8'>
                <div className='relative z-10'>
                    <div className='prose prose-indigo mx-auto lg:max-w-none'>
                        <h2>Course overview</h2>
                        <p>
                            This half-day training available face-to-face or
                            online is designed to introduce people to the topic
                            of mental wellbeing and is accompanied by a course
                            manual. It raises awareness of mental health
                            conditions, stigma and discrimination surrounding
                            mental health problems. The course will teach
                            participants to identify someone who has a mental
                            health condition and how to support them both in and
                            out of the workplace.
                        </p>

                        <hr />

                        <h2>Target Group</h2>
                        <p>
                            This regulated training course offers a RQF
                            qualification, and a level 1 FAA Award it equips
                            learners with the required knowledge to recognise a
                            suspected mental health condition. It also teaches
                            you the skills to start a conversation and be able
                            to signpost a person towards professional help. The
                            course is suitable for anybody wanting to increase
                            their knowledge of Mental Health conditions.
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
                                Aider for mental health
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
                        </ul>

                        <hr />
                        <h3>
                            Cost: <span className='font-normal'>£60.00</span>
                        </h3>
                        <h3>
                            Duration:{' '}
                            <span className='font-normal'>0.5 - Day</span>
                        </h3>

                        <hr />
                        <CourseNote />
                    </div>
                    <CourseCTA id={2} />
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

Awareness.pageTitle =
    'Awareness of First Aid for Mental Health (RQF Level 1 Award)';

export default Awareness;
