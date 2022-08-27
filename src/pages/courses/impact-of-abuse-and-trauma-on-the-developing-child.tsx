import Sutton from '@/assets/images/logos/Sutton.png';
import CourseCTA from '@/components/CourseCTA';
import CourseHeader from '@/components/CourseHeader';
import CourseTestimonial from '@/components/CourseTestimonial';

const ImpactOfAbuseAndTraumaOnTheDevelopingChild = () => (
    <div className='overflow-hidden bg-gray-50 py-16'>
        <div className='mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8'>
            <CourseHeader
                category='Mental Health Adults and Children'
                title='Impact of Abuse and Trauma on the Developing Child'
            />
            <div className='lg:grid lg:grid-cols-2 lg:items-start lg:gap-8'>
                <div className='relative z-10'>
                    <div className='prose prose-indigo mx-auto lg:max-w-none'>
                        <h2>Course overview</h2>
                        <p>
                            This one-day course will equip and educate course
                            participants to develop theoretical knowledge and
                            practical implications of day-to-day care when
                            working with children and young people in looked
                            after care, at school and at home.
                        </p>
                        <p>
                            By attending this course, you will gain an
                            understanding of the importance The Impact of Abuse
                            and Trauma to the children and young people you care
                            for and how you can contribute in practical ways to
                            helping them when attachment has been damaged.
                        </p>

                        <hr />

                        <h2>Target Group</h2>
                        <p>
                            This one-day course is designed for foster carers,
                            adoptive parents and all professionals working in
                            the field of fostering and adoption.
                        </p>

                        <hr />
                        <h2>Learning Outcomes</h2>
                        <ul className='marker:text-black'>
                            <li>
                                Developed an awareness of how abuse, neglect and
                                trauma can impact on a child&apos;s development
                                and their view of the world
                            </li>
                            <li>
                                Considered the day-to-day implications for
                                parenting and caring
                            </li>
                            <li>
                                Discussed practical strategies to address the
                                emotional needs of children with traumatic
                                histories
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
                    </div>
                    <CourseCTA id={9} />
                </div>
                <CourseTestimonial
                    author={{
                        image: Sutton,
                        name: 'London Borough Sutton Council',
                        role: 'Social worker',
                    }}
                    content='I work with children aged between 11 and 18. It will definitely help support my role when I meet with troubled children on a daily basis. I will use strategies with young people. Very Helpful and Educational.'
                />
            </div>
        </div>
    </div>
);

ImpactOfAbuseAndTraumaOnTheDevelopingChild.pageTitle =
    'Impact of Abuse and Trauma on the Developing Child';

export default ImpactOfAbuseAndTraumaOnTheDevelopingChild;
