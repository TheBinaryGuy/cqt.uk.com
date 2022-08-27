import CourseCTA from '@/components/CourseCTA';
import CourseHeader from '@/components/CourseHeader';
import CourseNote from '@/components/CourseNote';

const MentalHealthUniversitiesAndSchools = () => (
    <div className='overflow-hidden bg-gray-50 py-16'>
        <div className='mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8'>
            <CourseHeader
                category='First Aid for Mental Health'
                title='First Aid for Mental Health Universities and Schools'
            />
            <div className='lg:grid lg:grid-cols-2 lg:items-start lg:gap-8'>
                <div className='relative z-10'>
                    <div className='prose prose-indigo mx-auto lg:max-w-none'>
                        <h2>Course overview</h2>
                        <p>
                            This regulated one or two-day training course offers
                            a RQF qualification and a level 2 or 3 FAA Award
                            (depending on the course chosen). The course is
                            available face-to-face or online and is accompanied
                            by a course manual.
                        </p>
                        <p>
                            The course will give staff and students the skills
                            and tools to recognise the early signs of mental
                            health conditions, an understanding of mental health
                            and the factors that can affect mental wellbeing.
                        </p>
                        <p>
                            The course will provide participants with a range of
                            practical tools and techniques to help grow their
                            confidence to support themselves, their colleagues,
                            students and peers. Participants will also learn how
                            to prevent issues arising by building a supportive
                            culture, encouraging positive conversations and
                            creating a healthy climate around mental wellbeing.
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
                            qualification a FAA level 1, 2 or 3 Award and is
                            suitable for academic staff, support staff, and
                            students and anyone who actively engages with young
                            adults working or studying in schools or
                            universities.
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
                                culture in the workplace7. Understand a range of
                                mental health disorders and the support/therapy
                                provided by professional healthcare.
                            </li>
                        </ul>

                        <hr />
                        <h3>
                            Cost:{' '}
                            <span className='font-normal'>
                                £115.00 - £230.00
                            </span>
                        </h3>
                        <h3>
                            Duration:{' '}
                            <span className='font-normal'>1 or 2 - Days</span>
                        </h3>
                        <h3>
                            Refresher Course:{' '}
                            <span className='font-normal'>0.5 - Day</span>
                        </h3>

                        <hr />
                        <CourseNote />
                        <p>
                            <em>
                                Please note that the First Aid for Mental Health
                                and Awareness courses are not bespoke to a
                                university or school environment. They have been
                                designed to work across sectors.
                            </em>
                        </p>
                    </div>
                    <CourseCTA id={6} />
                </div>
            </div>
        </div>
    </div>
);

MentalHealthUniversitiesAndSchools.pageTitle =
    'First Aid for Mental Health Universities and Schools';

export default MentalHealthUniversitiesAndSchools;
