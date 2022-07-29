import Image, { StaticImageData } from 'next/future/image';
import Link from 'next/link';

// Mental Health Training
import AttachmentAndResilienceTraining from '@/assets/images/courses/Attachment-And-Resilience-Training.png';
import DementiaTraining from '@/assets/images/courses/Dementia-Training.png';
import FirstAidForMentalHealth from '@/assets/images/courses/First-Aid-For-Mental-Health.png';
import MentalHealthAwarenessTraining from '@/assets/images/courses/Mental-Health-Awareness-Training.png';
import MentalWellbeingVision from '@/assets/images/courses/Mental-Wellbeing-Vision.png';
import UnderstandingTheImpactOfAbuseAndTraumaOnTheDevelopingChild from '@/assets/images/courses/Understanding-The-Impact-Of-Abuse-And-Trauma-On-The-Developing-Child.png';
import WorkingWithYoungPeopleWhoSelfHarmTraining from '@/assets/images/courses/Working-With-Young-People-Who-Self-Harm-Training.png';

// Physical Intervention Training
import BreakawaySkillsOrHoldingSkills from '@/assets/images/courses/Breakaway-Skills-Or-Holding-Skills.png';
import ConflictResolutionTraining from '@/assets/images/courses/Conflict-Resolution-Training.png';
import RestraintReductionNetworkStandards from '@/assets/images/courses/Restraint-Reduction-Network-Standards.png';

// Health And Safety Training
import FirstAidTraining from '@/assets/images/courses/First-Aid-Training.png';
import MovingAndHandlingTraining from '@/assets/images/courses/Moving-And-Handling-Training.png';

type Course = {
    title: string;
    description: string;
    image: StaticImageData | string;
    href: string;
};

const mentalHealthTraining: Course[] = [
    {
        title: 'Mental Wellbeing Vision',
        description:
            'Our vision is to promote mental health in a positive light and to help eradicate the stigma that surrounds mental illness.',
        image: MentalWellbeingVision,
        href: '/courses/mental-wellbeing-vision',
    },
    {
        title: 'Mental Health Awareness Training',
        description:
            'This course is suitable for anybody as it equips learners with the required knowledge to recognise a suspected mental health condition.',
        image: MentalHealthAwarenessTraining,
        href: '/courses/mental-health-awareness-training',
    },
    {
        title: 'First Aid for Mental Health (1-Day)',
        description:
            'This one-day course available face-to-face or online is accompanied by a course workbook.',
        image: FirstAidForMentalHealth,
        href: '/courses/first-aid-for-mental-health-1-day',
    },
    {
        title: 'First Aid for Mental Health (2-Day)',
        description:
            'This two-day course builds on the one-day First Aid for Mental Health course and qualifies you as a Mental Health First Aider.',
        image: FirstAidForMentalHealth,
        href: '/courses/first-aid-for-mental-health-2-day',
    },
    {
        title: 'Working with Young People who Self Harm Training',
        description:
            'This one-day course will help you better understand about young people who self-harm.',
        image: WorkingWithYoungPeopleWhoSelfHarmTraining,
        href: '/courses/working-with-young-people-who-self-harm-training',
    },
    {
        title: 'Attachment and Resilience Training',
        description:
            'This one-day course will help support and train foster carers, adoptive parents, teachers, families, social care staff and other professionals.',
        image: AttachmentAndResilienceTraining,
        href: '/courses/attachment-and-resilience-training',
    },
    {
        title: 'Understanding the Impact of Abuse and Trauma on the Developing Child',
        description:
            'This one-day course is designed for foster carers, adoptive parents and all professionals working in the field of fostering and adoption.',
        image: UnderstandingTheImpactOfAbuseAndTraumaOnTheDevelopingChild,
        href: '/courses/understanding-the-impact-of-abuse-and-trauma-on-the-developing-child',
    },
    {
        title: 'Dementia Training',
        description:
            'This online training course follows the curriculum commissioned by the Department of Health and developed in collaboration by Skills for Health and Health Education England (HEE) in partnership with Skills for Care.',
        image: DementiaTraining,
        href: '/courses/dementia-training',
    },
];

const physicalInterventionTraining: Course[] = [
    {
        title: 'Restraint Reduction Network Standards',
        description:
            'CQT, welcomes the new Restraint Reduction Network (RRN) Training Standards and are now working towards the new training standards certification well in advance of the start of the RRN Training Standard going live in October and becoming a requirement from April 2020.',
        image: RestraintReductionNetworkStandards,
        href: '/courses/restraint-reduction-network-standards',
    },
    {
        title: 'Conflict Resolution Training (CRT)',
        description:
            'This course is designed for all people who may come into contact with individuals exhibiting verbal or physical aggressive behaviours.',
        image: ConflictResolutionTraining,
        href: '/courses/conflict-resolution-training',
    },
    {
        title: 'Breakaway Skills',
        description:
            'This one-day training programme follows the Restraint Reduction Network (RRN) Training Standards.',
        image: BreakawaySkillsOrHoldingSkills,
        href: '/courses/breakaway-skills',
    },
    {
        title: 'Holding Skills',
        description:
            'The course is designed to offer participants both pro-active and reactive strategies when supporting people with behaviour of concern that challenge services.',
        image: BreakawaySkillsOrHoldingSkills,
        href: '/courses/holding-skills',
    },
];

const healthAndSafetyTraining: Course[] = [
    {
        title: 'Moving and Handling Training',
        description:
            'Where there is a risk of injury due to manual handling, then training should be provided.',
        image: MovingAndHandlingTraining,
        href: '/courses/moving-and-handling-training',
    },
    {
        title: 'First Aid Training',
        description:
            "This course is designed to suit all employee's, it can be adapted to suit the needs of any organisation or audience and is ideal for lower risk businesses.",
        image: FirstAidTraining,
        href: '/courses/first-aid-training',
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
        <div className='mx-auto mt-16 space-y-4 px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-7xl lg:px-8'>
            <div className='flex items-center gap-5'>
                <h3 className='font-display flex-grow-0 text-3xl'>
                    Mental Health Training
                </h3>
                <div className='h-0.5 flex-grow rounded-full bg-primary' />
            </div>
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
        <div className='mx-auto mt-16 space-y-4 px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-7xl lg:px-8'>
            <div className='flex items-center gap-5'>
                <div className='h-0.5 flex-grow rounded-full bg-primary' />
                <h3 className='font-display flex-grow-0 text-3xl'>
                    Physical Intervention Training
                </h3>
            </div>
            <ol className='grid grid-cols-1 gap-y-10 gap-x-8 [counter-reset:video] sm:grid-cols-2 lg:grid-cols-4'>
                {physicalInterventionTraining.map(course => (
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
        <div className='mx-auto mt-16 space-y-4 px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-7xl lg:px-8'>
            <div className='flex items-center gap-5'>
                <h3 className='font-display flex-grow-0 text-3xl'>
                    Health And Safety Training
                </h3>
                <div className='h-0.5 flex-grow rounded-full bg-primary' />
            </div>
            <ol className='grid grid-cols-1 gap-y-10 gap-x-8 [counter-reset:video] sm:grid-cols-2 lg:grid-cols-4'>
                {healthAndSafetyTraining.map(course => (
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
