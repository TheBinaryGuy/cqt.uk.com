import KAMPC from '@/assets/images/logos/KAM-Project-Consultants.png';
import CourseCTA from '@/components/CourseCTA';
import CourseHeader from '@/components/CourseHeader';
import CourseTestimonial from '@/components/CourseTestimonial';
import Link from 'next/link';

const FirstAidForMentalHealth1Day = () => (
    <div className='overflow-hidden bg-gray-50 py-16'>
        <div className='mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8'>
            <CourseHeader
                category='First Aid for Mental Health'
                title='First Aid for Mental Health (1-Day)'
            />
            <div className='lg:grid lg:grid-cols-2 lg:items-start lg:gap-8'>
                <div className='relative z-10'>
                    <div className='prose prose-indigo mx-auto lg:max-w-none'>
                        <h2>Course overview</h2>
                        <p>
                            This one-day course available face-to-face or online
                            is accompanied by a course workbook. The course
                            teaches participants to recognise the early signs of
                            mental health problems and helps participants to
                            build their confidence to offer appropriate and
                            valuable first-aid to people suffering from mental
                            health problems in the workplace and in the
                            community.
                        </p>
                        <p>
                            The course will provide participants with a range of
                            practical tools and techniques to create a
                            supportive climate and lead positive conversations
                            about mental health. Participants will not be taught
                            how to diagnose or treat mental health conditions as
                            this can only be carried out by professionals who
                            have the appropriate knowledge, experience and
                            qualifications.
                        </p>
                        <p>
                            <Link
                                href='https://www.firstaidawards.com/cfs/learning-outcomes/FAA-LO-FA-Mental-Health-L2.pdf'
                                target='_blank'
                                rel='noreferrer'>
                                First Aid Course Overview (PDF)
                            </Link>
                        </p>

                        <hr />

                        <h2>Target Group</h2>
                        <p>
                            This course is designed for anyone wanting to
                            increase their knowledge of mental health problems
                            and/or become a Mental Health First Aider in their
                            workplace.
                        </p>

                        <hr />
                        <h2>Learning Outcomes</h2>
                        <ul className='marker:text-black'>
                            <li>What is First Aid for Mental Health?</li>
                            <li>Identifying mental health conditions</li>
                            <li>Why people develop Mental Health conditions</li>
                            <li>Role of the Mental Health First Aider</li>
                            <li>
                                Providing advice and practical support for a
                                person presenting a Mental Health condition
                            </li>
                            <li>Recognising and managing stress</li>
                            <li>
                                <span>Identifying signs and symptoms of:</span>
                                <ul>
                                    <li>Depression</li>
                                    <li>Anxiety</li>
                                    <li>Psychosis</li>
                                    <li>Eating Disorders</li>
                                    <li>Suicide</li>
                                    <li>Self-Harm</li>
                                </ul>
                            </li>
                        </ul>

                        <hr />
                        <h3>
                            Cost: <span className='font-normal'>£125.00</span>
                        </h3>
                        <h3>
                            Duration: <span className='font-normal'>1 Day</span>
                        </h3>
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

FirstAidForMentalHealth1Day.pageTitle = 'First Aid for Mental Health (1-Day)';

export default FirstAidForMentalHealth1Day;
