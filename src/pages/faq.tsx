import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline';
import clsx from 'clsx';

const faqs: {
    question: string;
    answers: Array<() => JSX.Element>;
    isOpen: boolean;
}[] = [
    {
        question:
            'Why choose CQT to deliver your First Aid for Mental Health training?',
        answers: [
            () => (
                <p>
                    CQT are a well established specialist Mental Health training
                    provider. Our trainers are qualified experts in Mental
                    Health with over 30 years of experience working in mental
                    health settings and guarantee the highest standards in
                    teaching, consultancy and support. We can provide expert
                    consultancy and training to your workplaces.
                </p>
            ),
        ],
        isOpen: true,
    },
    {
        question:
            'How do I book a First Aid for Mental Health (FA4MH) training course?',
        answers: [
            () => (
                <p>
                    To book a First Aid for Mental Health course simply click on
                    Book this Course at the bottom of the course page and then
                    choose the applicable date/s and time slot available.
                </p>
            ),
        ],
        isOpen: false,
    },
    {
        question: 'Are your courses quality assured and regulated?',
        answers: [
            () => (
                <p>
                    Yes, we are committed to ensuring everyone gets a safe and
                    high-quality learning experience. Grounded in research and
                    rigorously tested, our courses are developed with input from
                    clinical experts and those with lived experience of mental
                    health issues.
                </p>
            ),
            () => (
                <p>
                    We ensure that those involved in the delivery of the course
                    and assessments are suitably qualified and meet the minimum
                    requirements outlined in Nuco&apos;s Quality Assurance
                    policy.
                </p>
            ),
        ],
        isOpen: false,
    },
    {
        question: 'What is a Regulated Qualifications Framework (RQF)?',
        answers: [
            () => (
                <p>
                    The Regulated Qualifications Framework (RQF) accredits
                    qualifications in England, Wales and Northern Ireland. RQF
                    is jointly regulated by the England&apos;s regulator Ofqual,
                    Wales DCELLS and Northern Ireland&apos;s CCEA, meaning they
                    are nationally recognised qualifications. Scotland has its
                    own system - the Scottish Credit and Qualifications
                    Framework (SQCF).
                </p>
            ),
        ],
        isOpen: false,
    },
    {
        question: 'How long is the training course?',
        answers: [
            () => (
                <p>
                    The one-day training courses last for a minimum of 6 hours
                    (excluding breaks).
                </p>
            ),
            () => (
                <p>
                    The two-day training courses last for a minimum of 12 hours
                    (excluding breaks).
                </p>
            ),
        ],
        isOpen: false,
    },
    {
        question: 'How do I get a qualification from the training?',
        answers: [
            () => (
                <div>
                    <p>
                        To be awarded the Level 3 qualification, all
                        participants must pass three assessments:
                    </p>
                    <ul className='marker:text-black'>
                        <li>Two multiple-choice question papers.</li>
                        <li>A practical assessment.</li>
                    </ul>
                </div>
            ),
            () => (
                <div>
                    <p>
                        To be awarded the Level 2 qualification, all
                        participants must pass two assessments:
                    </p>
                    <ul className='marker:text-black'>
                        <li>One multiple-choice question paper.</li>
                        <li>A practical assessment.</li>
                    </ul>
                </div>
            ),
            () => (
                <p>
                    To be awarded the Level 1 qualification, all participants
                    must pass a written assessment.
                </p>
            ),
        ],
        isOpen: false,
    },
    {
        question: 'Can you deliver your training courses flexibly?',
        answers: [
            () => (
                <p>
                    Yes, with our onsite, and digital learning options, we are
                    able to deliver quality mental health training to your
                    staff, no matter where they are based.
                </p>
            ),
        ],
        isOpen: false,
    },
    {
        question: 'How long does my qualification last?',
        answers: [
            () => (
                <p>
                    The qualification is valid for three years from the date of
                    achievement.
                </p>
            ),
        ],
        isOpen: false,
    },
    {
        question: 'Do I need to refresh or update my training?',
        answers: [
            () => (
                <p>
                    Yes, it is strongly recommended that participants attend
                    annual refresher updates for the First Aid for Mental Health
                    courses. The participant will also need to complete the full
                    course again to requalify for a further three years.
                </p>
            ),
        ],
        isOpen: false,
    },
    {
        question: 'What resources will I receive during the training?',
        answers: [
            () => (
                <div>
                    <p>
                        Apart from the presentation you will also receive a hard
                        copy of the First Aid for Mental Health manual, a CARE
                        action card and a digital or hard copy certificate.
                    </p>
                    <div>
                        <h4 className='underline'>Certification</h4>
                        <p>
                            A level 1, 2 or 3 Award will be issued to the
                            learner, subject to successful assessment. This
                            qualification is valid for three years from the date
                            of achievement. It is strongly recommended that the
                            learner attends annual refresher training.
                        </p>
                    </div>
                    <div>
                        <h4 className='underline'>Certification</h4>
                        <p>
                            All participants will be awarded the relevant level
                            Ofqual regulated RQF/SCQF qualification and issued
                            with a level 1, 2 or 3 Award, subject to successful
                            assessment based on the course they have completed.
                        </p>
                    </div>
                </div>
            ),
        ],
        isOpen: false,
    },
    {
        question: 'Where can I find more information about the course?',
        answers: [
            () => (
                <p>
                    If you have any more questions, please drop me an email at{' '}
                    <a href='mailto:bbw@cqt.uk.com' className='text-primary'>
                        bbw@cqt.uk.com
                    </a>
                    .
                </p>
            ),
        ],
        isOpen: false,
    },
];

const FAQ = () => (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <section
            id='faq'
            aria-labelledby='faq'
            className='scroll-mt-14 py-16 sm:scroll-mt-16 sm:py-20'>
            <div className='mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12'>
                <h2
                    id='faq'
                    className='font-display text-center text-4xl font-bold text-slate-900'>
                    Frequently Asked Questions
                </h2>
            </div>
            <dl className='mt-6 space-y-6 divide-y divide-gray-200'>
                {faqs.map(faq => (
                    <Disclosure
                        defaultOpen={faq.isOpen}
                        as='div'
                        key={faq.question}
                        className='pt-6'>
                        {({ open }) => (
                            <>
                                <dt className='text-lg'>
                                    <Disclosure.Button className='flex w-full items-start justify-between text-left text-gray-400'>
                                        <span className='font-medium text-gray-900'>
                                            {faq.question}
                                        </span>
                                        <span className='ml-6 flex h-7 items-center'>
                                            <ChevronDownIcon
                                                className={clsx(
                                                    open
                                                        ? '-rotate-180'
                                                        : 'rotate-0',
                                                    'h-6 w-6 transform'
                                                )}
                                                aria-hidden='true'
                                            />
                                        </span>
                                    </Disclosure.Button>
                                </dt>
                                <Disclosure.Panel
                                    as='dd'
                                    className='mt-2 pr-12'>
                                    {faq.answers.map((answer, idx) => (
                                        <div
                                            key={idx}
                                            className='prose min-w-full text-base text-gray-500'>
                                            {answer()}
                                        </div>
                                    ))}
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                ))}
            </dl>
        </section>
    </div>
);

FAQ.pageTitle = 'Frequently Asked Questions';

export default FAQ;
