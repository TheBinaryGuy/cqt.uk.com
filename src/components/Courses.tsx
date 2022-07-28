import Image from 'next/future/image';

import AttachmentAndResilienceTraining from '@/assets/images/courses/Attachment-And-Resilience-Training.png';
import DementiaTraining from '@/assets/images/courses/Dementia-Training.png';
import FirstAidForMentalHealth from '@/assets/images/courses/First-Aid-For-Mental-Health.png';
import MentalHealthAwarenessTraining from '@/assets/images/courses/Mental-Health-Awareness-Training.png';
import MentalWellbeingVision from '@/assets/images/courses/Mental-Wellbeing-Vision.png';
import UnderstandingTheImpactOfAbuseAndTraumaOnTheDevelopingChild from '@/assets/images/courses/Understanding-The-Impact-Of-Abuse-And-Trauma-On-The-Developing-Child.png';
import WorkingWithYoungPeopleWhoSelfHarmTraining from '@/assets/images/courses/Working-With-Young-People-Who-Self-Harm-Training.png';
import Link from 'next/link';

const mentalHealthTraining = [
    {
        title: 'Mental Wellbeing Vision',
        description:
            'Our vision is to promote mental health in a positive light and to help eradicate the stigma that surrounds mental illness.',
        image: MentalWellbeingVision,
        href: 'mental-wellbeing-vision',
    },
    {
        title: 'Mental Health Awareness Training',
        description:
            'This course is suitable for anybody as it equips learners with the required knowledge to recognise a suspected mental health condition.',
        image: MentalHealthAwarenessTraining,
        href: 'mental-health-awareness-training',
    },
    {
        title: 'First Aid for Mental Health (1-Day)',
        description:
            'This one-day course available face-to-face or online is accompanied by a course workbook.',
        image: FirstAidForMentalHealth,
        href: 'first-aid-for-mental-health-1-day',
    },
    {
        title: 'First Aid for Mental Health (2-Day)',
        description:
            'This two-day course builds on the one-day First Aid for Mental Health course and qualifies you as a Mental Health First Aider.',
        image: FirstAidForMentalHealth,
        href: 'first-aid-for-mental-health-2-day',
    },
    {
        title: 'Working with Young People who Self Harm Training',
        description:
            'This one-day course will help you better understand about young people who self-harm.',
        image: WorkingWithYoungPeopleWhoSelfHarmTraining,
        href: 'working-with-young-people-who-self-harm-training',
    },
    {
        title: 'Attachment and Resilience Training',
        description:
            'This one-day course will help support and train foster carers, adoptive parents, teachers, families, social care staff and other professionals.',
        image: AttachmentAndResilienceTraining,
        href: 'attachment-and-resilience-training',
    },
    {
        title: 'Understanding the Impact of Abuse and Trauma on the Developing Child',
        description:
            'This one-day course is designed for foster carers, adoptive parents and all professionals working in the field of fostering and adoption.',
        image: UnderstandingTheImpactOfAbuseAndTraumaOnTheDevelopingChild,
        href: 'understanding-the-impact-of-abuse-and-trauma-on-the-developing-child',
    },
    {
        title: 'Dementia Training',
        description:
            'This online training course follows the curriculum commissioned by the Department of Health and developed in collaboration by Skills for Health and Health Education England (HEE) in partnership with Skills for Care.',
        image: DementiaTraining,
        href: 'dementia-training',
    },
];

const Courses = () => (
    <section
        id='courses'
        aria-labelledby='courses-title'
        className='scroll-mt-14 py-16 sm:scroll-mt-16 sm:py-20'>
        <div className='mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12'>
            <h2
                id='courses-title'
                className='font-display text-center text-4xl font-bold text-slate-900'>
                Courses
            </h2>
        </div>
        <div className='mx-auto mt-16 px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-7xl lg:px-8'>
            <ol className='grid grid-cols-1 gap-y-10 gap-x-8 [counter-reset:video] sm:grid-cols-2 lg:grid-cols-4'>
                {mentalHealthTraining.map(course => (
                    <Link href={course.href} key={course.title}>
                        <li>
                            <div className='flex overflow-hidden rounded shadow-sm'>
                                <Image src={course.image} alt={course.title} />
                            </div>
                            <h3 className='mt-4 text-base font-medium tracking-tight text-slate-900'>
                                {course.title}
                            </h3>
                            <p className='mt-2 text-sm text-slate-600'>
                                {course.description}
                            </p>
                        </li>
                    </Link>
                ))}
            </ol>
        </div>
    </section>
);

export default Courses;
