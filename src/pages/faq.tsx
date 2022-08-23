import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline';
import clsx from 'clsx';

const faqs = [
    {
        question:
            'Why choose CQT to deliver your First Aid for Mental Health training?',
        answers: [
            () =>
                'Our trainers are qualified experts in Mental Health with over 30 years of experience working in mental health settings and guarantee the highest standards in teaching, consultancy and support. We can provide expert consultancy and training to your workplaces.',
        ],
        isOpen: true,
    },
    {
        question: 'Are your courses quality assured and regulated?',
        answers: [
            () =>
                "We're committed to ensuring everyone gets a safe and high-quality learning experience. Grounded in research and rigorously tested, our courses are developed with input from clinical experts and those with lived experience of mental health issues.",
            () =>
                "CQT's First Aid for Mental Health courses are regulated by Ofqual and SQA Accreditation. The qualification sits on the Regulated Qualifications Framework (RQF) and the Scottish Credit and Qualifications Framework (SCQF).",
        ],
        isOpen: false,
    },
    {
        question: 'Can you deliver your training courses flexibly?',
        answers: [
            () =>
                'With our onsite, and digital learning options, we are able to deliver quality mental health training to your staff, no matter where they are based.',
        ],
        isOpen: false,
    },
    {
        question: 'Do I need to refresh or update my training?',
        answers: [
            () => (
                <p>
                    Certain courses will need annual updates which will be
                    indicated at the bottom of the course page. (
                    <strong>e.g. Refresher Course:</strong> 0.5 - Day)
                </p>
            ),
        ],
        isOpen: false,
    },
    {
        question: 'What resources will I receive during the training?',
        answers: [
            () =>
                'Apart from the presentation you will also receive a hard copy of the First Aid for Mental Health manual, a CARE action card and a digital or hard copy certificate.',
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
                                        <p
                                            key={idx}
                                            className='text-base text-gray-500'>
                                            {answer()}
                                        </p>
                                    ))}
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                ))}
            </dl>
            <div className='prose prose-lg mt-12'>
                <p>
                    If you have any more questions, please drop me an email at{' '}
                    <a href='mailto:bbw@cqt.uk.com' className='text-primary'>
                        bbw@cqt.uk.com
                    </a>
                </p>
            </div>
        </section>
    </div>
);

FAQ.pageTitle = 'Frequently Asked Questions';

export default FAQ;
