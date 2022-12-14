import Link from 'next/link';

const About = () => (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <section
            id='about'
            aria-labelledby='about-title'
            className='scroll-mt-14 py-16 sm:scroll-mt-16 sm:py-20'>
            <div className='mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12'>
                <h2
                    id='about-title'
                    className='font-display text-center text-4xl font-bold text-slate-900'>
                    About
                </h2>
            </div>
            <div className='prose prose-lg mx-auto mt-16'>
                <p>
                    CQT is managed by its Founder and Director, Brian
                    Bowlay-Williams who is known for his knowledge and expertise
                    in Mental Health having directed learning and innovation in
                    this field whilst supporting the Care Quality Commission
                    (CQC) as a Specialist Advisor over the last decade.
                </p>
                <p>
                    Brian&apos;s vision is to promote mental health in a
                    positive light and to help eradicate the stigma that
                    surrounds mental illness. As a company CQT believe that the
                    mental health needs of all individuals should be treated
                    with equal importance and be supported in the same way
                    people do about their physical health needs. Hence
                    Brian&apos;s drive to resolutely promote First Aid in Mental
                    Health far and wide; because all too often people living
                    with mental health problems still experience stigma and
                    discrimination, many people struggle to get the right help
                    at the right time.
                </p>
            </div>
        </section>

        <section
            id='the-arts-and-mental-health'
            aria-labelledby='the-arts-and-mental-health-title'
            className='scroll-mt-14 py-16 sm:scroll-mt-16 sm:py-20'>
            <div className='mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12'>
                <h2
                    id='the-arts-and-mental-health-title'
                    className='font-display text-center text-4xl font-bold text-slate-900'>
                    The Arts and Mental Health
                </h2>
            </div>
            <div className='prose prose-lg mx-auto mt-16'>
                <p>
                    It is time to acknowledge the positive contribution the arts
                    can make to a person&apos;s mental health and why we should
                    establish an open-minded culture in the workplace to
                    understand the value of arts to an individual&apos;s mental
                    wellbeing.
                </p>
                <p>
                    CQT are a very forward thinking and progressive company and
                    have partnered with writer, comic and Mental Health nurse{' '}
                    <Link
                        href='https://www.robgee.co.uk/'
                        rel='noreferrer'
                        target='_blank'
                        className='text-primary'>
                        Rob Gee
                    </Link>{' '}
                    and the company Weave to bring an alternative dimension to
                    how we deliver mental health and wellbeing training and
                    courses to organisations and workforces across the UK.
                </p>
                <p>
                    We believe that the arts can help keep us well, aid our
                    recovery and support longer lives better lived. The arts can
                    help meet major challenges facing health and social care:
                    ageing, long-term conditions, loneliness and mental health.
                </p>
            </div>
        </section>
    </div>
);

About.pageTitle = 'About';

export default About;
