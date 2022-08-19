import { StaticImageData } from 'next/future/image';

import AttachmentAndResilienceTraining from '@/assets/images/courses/Attachment-And-Resilience-Training.png';
import BreakawaySkillsOrHoldingSkills from '@/assets/images/courses/Breakaway-Skills-Or-Holding-Skills.png';
import ConflictResolutionTraining from '@/assets/images/courses/Conflict-Resolution-Training.png';
import FirstAidForMentalHealth from '@/assets/images/courses/First-Aid-For-Mental-Health.png';
import MentalHealthAwarenessTraining from '@/assets/images/courses/Mental-Health-Awareness-Training.png';
import UnderstandingTheImpactOfAbuseAndTraumaOnTheDevelopingChild from '@/assets/images/courses/Understanding-The-Impact-Of-Abuse-And-Trauma-On-The-Developing-Child.png';
import WorkingWithYoungPeopleWhoSelfHarmTraining from '@/assets/images/courses/Working-With-Young-People-Who-Self-Harm-Training.png';

export type Course = {
    title: string;
    description: string;
    image: StaticImageData | string;
    href: string;
};

const mentalHealth: Course[] = [
    {
        title: 'First Aid for Mental Health Awareness',
        description:
            'This half-day Mental Health Awareness training is designed to introduce people to the topic of mental wellbeing.',
        image: MentalHealthAwarenessTraining,
        href: '/courses/first-aid-for-mental-health-awareness',
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
        title: 'First Aid for Mental Health Young People',
        description: 'TBD',
        image: 'https://dummyimage.com/800x450/000/aaa',
        href: '/courses/first-aid-for-mental-health-young-people',
    },
    {
        title: 'First Aid for Mental Health Online',
        description: 'TBD',
        image: 'https://dummyimage.com/800x450/000/aaa',
        href: '/courses/first-aid-for-mental-health-online',
    },
    {
        title: 'First Aid for Mental Health Universities and Schools',
        description: 'TBD',
        image: 'https://dummyimage.com/800x450/000/aaa',
        href: '/courses/first-aid-for-mental-health-universities-and-schools',
    },
    {
        title: 'First Aid for Mental Health Construction',
        description: 'TBD',
        image: 'https://dummyimage.com/800x450/000/aaa',
        href: '/courses/first-aid-for-mental-health-construction',
    },
];

const adultsAndChildren: Course[] = [
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
];

const healthAndSafety: Course[] = [
    {
        title: 'Conflict Resolution Training',
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
];

export const courses: {
    [key in 'mentalHealth' | 'adultsAndChildren' | 'healthAndSafety']: Course[];
} = {
    mentalHealth,
    adultsAndChildren,
    healthAndSafety,
};
