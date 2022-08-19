import KAMPC from '@/assets/images/logos/KAM-Project-Consultants.png';
import CourseCTA from '@/components/CourseCTA';
import CourseHeader from '@/components/CourseHeader';
import CourseTestimonial from '@/components/CourseTestimonial';

const FirstAidForMentalHealth2Day = () => (
    <div className='overflow-hidden bg-gray-50 py-16'>
        <div className='mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8'>
            <CourseHeader
                category='First Aid for Mental Health'
                title='First Aid for Mental Health (2-Day)'
            />
            <div className='lg:grid lg:grid-cols-2 lg:items-start lg:gap-8'>
                <div className='relative z-10'>
                    <div className='prose prose-indigo mx-auto lg:max-w-none'>
                        <h2>Course overview</h2>
                        <p>
                            This two-day course builds on the one-day First Aid
                            for Mental Health course and qualifies you as a
                            Mental Health First Aider. It covers a wider range
                            of mental health conditions and provides
                            participants with the knowledge to recognise the
                            early signs and symptoms of mental health problems
                            and will explore the range of therapy and
                            professional support that a person may be given by
                            professional bodies during treatment for a mental
                            health condition.
                        </p>
                        <p>
                            The learning takes place over two days through a
                            mixture of group activities, presentations and
                            discussions. Each session is built around a First
                            Aid for Mental Health action plan, accompanied by a
                            comprehensive set of resources inside your own
                            personal manual.
                        </p>
                        <p>
                            Participants will learn how to start a supportive
                            conversation and when and how to signpost a person
                            to seek appropriate professional help.
                        </p>
                        <p>
                            Participants will learn about the first aid action
                            plan for mental health, be able to put it in place
                            and understand how to implement a positive mental
                            health culture in the workplace.
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
                            This course is ideal for Heads of Service in all
                            sectors, Teachers, Line Managers, HR professionals,
                            Wellbeing/Mental Health Champions, Occupational
                            Health, Health and Safety representatives and
                            anybody who wants to qualify as a First Aider for
                            Mental Health.
                        </p>

                        <hr />
                        <h2>Learning Outcomes</h2>
                        <ul className='marker:text-black'>
                            <li>Impact of Mental Health issues</li>
                            <li>Stigma and discrimination</li>
                            <li>First Aid For Mental Health Action Plan</li>
                            <li>Alcohol, Drugs and Mental Health</li>
                            <li>Suicide</li>
                            <li>
                                Depression: symptoms, risk factors, first aid,
                                treatment, self-care
                            </li>
                            <li>Anxiety Disorders</li>
                            <li>Cognitive Disorders and CBT</li>
                            <li>
                                Personality Disorders, Eating Disorders and
                                Self-Harm
                            </li>
                            <li>
                                Psychosis: risk factors, early development
                                signs, crisis first aid for acute psychosis
                            </li>
                            <li>Schizophrenia</li>
                            <li>Bipolar Disorder</li>
                            <li>
                                Recovery, building resources and First Aid For
                                Mental Health action planning
                            </li>
                        </ul>

                        <hr />
                        <h3>
                            Cost: <span className='font-normal'>£250.00</span>
                        </h3>
                        <h3>
                            Duration:{' '}
                            <span className='font-normal'>2 Days</span>
                        </h3>
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

FirstAidForMentalHealth2Day.pageTitle = 'First Aid for Mental Health (2-Day)';

export default FirstAidForMentalHealth2Day;
