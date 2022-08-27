import { StaticImageData } from 'next/future/image';

export type Course = {
    title: string;
    description: string;
    image: StaticImageData | string;
    href: string;
};

const mentalHealth: Course[] = [
    {
        title: 'Awareness of First Aid for Mental Health (RQF Level 1 Award)',
        description:
            'This regulated half-day Awareness training is designed to introduce people to the topic of mental health and wellbeing.',
        image: '/images/courses/awareness-of-first-aid-for-mental-health.png',
        href: '/courses/awareness-of-first-aid-for-mental-health',
    },
    {
        title: 'First Aid for Mental Health 1-Day (RQF Level 2 Award)',
        description:
            'This regulated course provides learners with the knowledge to identify suspected mental health conditions and qualifies you as a First Aider for Mental health.',
        image: '/images/courses/first-aid-for-mental-health-1-day.png',
        href: '/courses/first-aid-for-mental-health-1-day',
    },
    {
        title: 'Supervising First Aid for Mental Health 2 Days (RQF Level 3 Award)',
        description:
            'This regulated course builds on the one-day First Aid for Mental Health course and qualifies you as a First Aid for Mental health Supervisor.',
        image: '/images/courses/supervising-first-aid-for-mental-health-2-days.png',
        href: '/courses/supervising-first-aid-for-mental-health-2-days',
    },
    {
        title: 'First Aid for Youth Mental Health 1-Day (RQF Level 2 Award)',
        description:
            'This regulated course has been designed with children and young people in mind and qualifies you as a Youth First Aider for Mental health.',
        image: '/images/courses/first-aid-for-young-mental-health-1-day.png',
        href: '/courses/first-aid-for-youth-mental-health-1-day',
    },
    {
        title: 'First Aid for Mental Health Universities and Schools',
        description:
            'This regulated course provides staff and students with the knowledge to identify suspected mental health conditions and qualifies you as a First Aider for Mental health.',
        image: '/images/courses/first-aid-for-mental-health-universities-and-schools.png',
        href: '/courses/first-aid-for-mental-health-universities-and-schools',
    },
];

const adultsAndChildren: Course[] = [
    {
        title: 'Working with Young People who Self Harm Training',
        description:
            'This one-day course will help you better understand about young people who self-harm.',
        image: '/images/courses/working-with-young-people-who-self-harm-training.png',
        href: '/courses/working-with-young-people-who-self-harm-training',
    },
    {
        title: 'Attachment and Resilience Training',
        description:
            'This one-day course will help support and train foster carers, adoptive parents, teachers, families, social care staff and other professionals.',
        image: '/images/courses/attachment-and-resilience-training.png',
        href: '/courses/attachment-and-resilience-training',
    },
    {
        title: 'Impact of Abuse and Trauma on the Developing Child',
        description:
            'This one-day course is designed for foster carers, adoptive parents and all professionals working in the field of fostering and adoption.',
        image: '/images/courses/impact-of-abuse-and-trauma-on-the-developing-child.png',
        href: '/courses/impact-of-abuse-and-trauma-on-the-developing-child',
    },
];

const healthAndSafety: Course[] = [
    {
        title: 'Conflict Resolution Training',
        description:
            'This course is designed for all people who may come into contact with individuals exhibiting verbal or physical aggressive behaviours.',
        image: '/images/courses/conflict-resolution-training.png',
        href: '/courses/conflict-resolution-training',
    },
    {
        title: 'Breakaway Skills',
        description:
            'This one-day training programme follows the Restraint Reduction Network (RRN) Training Standards.',
        image: '/images/courses/breakaway-skills.png',
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
