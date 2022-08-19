import KAMPC from '@/assets/images/logos/KAM-Project-Consultants.png';
import CourseCTA from '@/components/CourseCTA';
import CourseHeader from '@/components/CourseHeader';
import CourseTestimonial from '@/components/CourseTestimonial';

const BreakawaySkills = () => (
    <div className='overflow-hidden bg-gray-50 py-16'>
        <div className='mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8'>
            <CourseHeader
                category='Health And Safety'
                title='Breakaway Skills'
            />
            <div className='lg:grid lg:grid-cols-2 lg:items-start lg:gap-8'>
                <div className='relative z-10'>
                    <div className='prose prose-indigo mx-auto lg:max-w-none'>
                        <h2>Course overview</h2>
                        <p>
                            This one-day training programme follows the
                            Restraint Reduction Network (RRN) Training
                            Standards. It equips course participants to safely
                            breakaway from people who are disruptive and
                            challenging. The course teaches people to focus on
                            least restrictive practices and promotes positive
                            and proactive communication to manage and
                            de-escalate difficult situations, with an emphasis
                            on any physical intervention skills taught, to be
                            used as a last resort. (Positive and Proactive care
                            DOH 2014).
                        </p>

                        <hr />

                        <h2>Target Group</h2>
                        <p>
                            This course is designed for Health, Social Care and
                            Council staff, Care Home staff, Independent and
                            Voluntary Organisations, Dental staff, Staff working
                            in Head/Brain Injury units, Security and Facilities
                            staff working across statutory organisations, Staff
                            working in GP surgeries, Schools/Academies,
                            Colleges, Universities and Community settings.
                        </p>

                        <hr />
                        <h2>Learning Outcomes</h2>
                        <ul className='marker:text-black'>
                            <li>
                                The skills required to deal with face-to-face
                                aggression
                            </li>
                            <li>
                                Techniques, knowledge and the confidence to
                                escape from threatening situations
                            </li>
                            <li>
                                Developed an awareness of relevant law including
                                the use of reasonable force
                            </li>
                            <li>
                                Considered risks and the organisations and
                                individual&apos;s responsibilities around
                                policies and procedures
                            </li>
                        </ul>

                        <hr />
                        <h3>
                            Cost:{' '}
                            <span className='font-normal'>
                                Please contact CQT
                            </span>
                        </h3>
                        <h3>
                            Duration: <span className='font-normal'>1 Day</span>
                        </h3>
                        <h3>
                            Refresher Course:{' '}
                            <span className='font-normal'>0.5 Day</span>
                        </h3>
                    </div>
                    <CourseCTA id={10} />
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

BreakawaySkills.pageTitle = 'Breakaway Skills';

export default BreakawaySkills;
