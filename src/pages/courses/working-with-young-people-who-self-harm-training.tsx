import KAMPC from '@/assets/images/logos/KAM-Project-Consultants.png';
import CourseCTA from '@/components/CourseCTA';
import CourseHeader from '@/components/CourseHeader';
import CourseTestimonial from '@/components/CourseTestimonial';

const WorkingWithYoungPeopleWhoSelfHarmTraining = () => (
    <div className='overflow-hidden bg-gray-50 py-16'>
        <div className='mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8'>
            <CourseHeader
                category='Mental Health Adults and Children'
                title='Working with Young People who Self Harm Training'
            />
            <div className='lg:grid lg:grid-cols-2 lg:items-start lg:gap-8'>
                <div className='relative z-10'>
                    <div className='prose prose-indigo mx-auto lg:max-w-none'>
                        <h2>Course overview</h2>
                        <p>
                            This one-day course will help you better understand
                            about young people who self-harm. It equips and
                            educates course participants so that they can
                            understand and manage children in looked after care,
                            at school and at home The course raises awareness of
                            the problems identified in &quot;Truth Hurts&quot; A
                            report into self-harm among young people, following
                            a national inquiry by the Camelot Foundation and the
                            Mental Health Foundation.
                        </p>

                        <hr />

                        <h2>Target Group</h2>
                        <p>
                            This one-day course is designed for you if you work
                            with, care for, or support young people. It is
                            suitable for you if you are a parent, foster carer
                            or someone who works professionally with young
                            people, particularly those young people in groups
                            considered to be more vulnerable to mental health
                            problems, such as Looked After Children, Adopted
                            Children, Young Offenders or homeless children.
                        </p>

                        <hr />
                        <h2>Learning Outcomes</h2>
                        <ul>
                            <li>Describe what self-harm is</li>
                            <li>
                                Describe the individual and environmental
                                factors associated with self-harm
                            </li>
                            <li>Identify high risk groups</li>
                            <li>
                                Describe the reasons young people may self-harm
                                and the possible functions the behaviour serves
                            </li>
                            <li>
                                Describe some ways that you may be able to
                                support a young person who self-harms
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

WorkingWithYoungPeopleWhoSelfHarmTraining.pageTitle =
    'Working with Young People who Self Harm Training';

export default WorkingWithYoungPeopleWhoSelfHarmTraining;