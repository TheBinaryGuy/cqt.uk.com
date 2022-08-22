import PrimeLife from '@/assets/images/logos/PrimeLife.png';
import CourseCTA from '@/components/CourseCTA';
import CourseHeader from '@/components/CourseHeader';
import CourseTestimonial from '@/components/CourseTestimonial';

const ConflictResolutionTraining = () => (
    <div className='overflow-hidden bg-gray-50 py-16'>
        <div className='mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8'>
            <CourseHeader
                category='Health And Safety'
                title='Conflict Resolution Training'
            />
            <div className='lg:grid lg:grid-cols-2 lg:items-start lg:gap-8'>
                <div className='relative z-10'>
                    <div className='prose prose-indigo mx-auto lg:max-w-none'>
                        <h2>Course overview</h2>
                        <p>
                            This course deals with the key principles in
                            Conflict Resolution and participants will understand
                            how to recognise various aspects of conflict and to
                            explore and understand different methods and
                            techniques to effectively manage and resolve
                            conflict situations.
                        </p>

                        <hr />

                        <h2>Target Group</h2>
                        <p>
                            This course is designed for all people who may come
                            into contact with individuals exhibiting verbal or
                            physical aggressive behaviours.
                        </p>

                        <hr />
                        <h2>Learning Outcomes</h2>
                        <ul className='marker:text-black'>
                            <li>
                                Describe common causes of conflict and the
                                communication models, which can help in conflict
                                resolution
                            </li>
                            <li>Explain different warning and danger signs</li>
                            <li>
                                Describe and demonstrate aspects of non-verbal
                                de-escalation, verbal strategies and conflict
                                resolution styles
                            </li>
                            <li>
                                Describe individual and organisational
                                responsibilities in relation to legal, ethical
                                and moral frame works regarding the use of
                                reasonable force in relation to conflict
                                resolution
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
                        image: PrimeLife,
                        name: 'Prime-Life',
                        role: 'Care Worker',
                    }}
                    content='I now have a greater understanding of some of the mental health triggers. I will be more aware of the mental health issues that some people are suffering with. I am now able to handle difficult situations.'
                />
            </div>
        </div>
    </div>
);

ConflictResolutionTraining.pageTitle =
    'Working with Young People who Self Harm Training';

export default ConflictResolutionTraining;
