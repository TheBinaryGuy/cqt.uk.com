import KAMPC from '@/assets/images/logos/KAM-Project-Consultants.png';
import CourseCTA from '@/components/CourseCTA';
import CourseHeader from '@/components/CourseHeader';
import CourseTestimonial from '@/components/CourseTestimonial';

const AttachmentAndResilienceTraining = () => (
    <div className='overflow-hidden bg-gray-50 py-16'>
        <div className='mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8'>
            <CourseHeader
                category='Mental Health Adults and Children'
                title='Attachment and Resilience Training'
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
                            understanding of the importance of Attachment and
                            Resilience to the children and young people you care
                            for and how you can contribute in practical ways to
                            helping them when attachment has been disrupted.
                        </p>

                        <hr />

                        <h2>Target Group</h2>
                        <p>
                            This one-day course will help support and train
                            foster carers, adoptive parents, teachers, families,
                            social care staff and other professionals.
                        </p>

                        <hr />
                        <h2>Learning Outcomes</h2>
                        <ul>
                            <li>
                                An understanding of what attachment is and how
                                neglect and abuse can impact on its healthy
                                development
                            </li>
                            <li>
                                How the disrupted development of attachment can
                                impact and affect how children and young people
                                behave and feel?
                            </li>
                            <li>
                                An understanding of the emotional brain - and
                                how disruptions in attachment, and more
                                generally neglect and abuse, affect its
                                development
                            </li>
                            <li>
                                Connections between disrupted attachment and
                                trauma, loss and anger in children and young
                                people
                            </li>
                            <li>
                                Using understanding of attachment disruption in
                                our behaviour management approaches
                            </li>
                            <li>
                                An understanding of the importance of play and
                                other forms of positive activities relating in
                                the repair of disrupted attachment
                            </li>
                            <li>
                                Tools and techniques to build resilience in
                                children and young people
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
                    <CourseCTA id={11} />
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

AttachmentAndResilienceTraining.pageTitle =
    'Attachment and Resilience Training';

export default AttachmentAndResilienceTraining;
