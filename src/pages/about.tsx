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
            id='course-information'
            aria-labelledby='course-information'
            className='scroll-mt-14 py-16 sm:scroll-mt-16 sm:py-20'>
            <div className='mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12'>
                <h2
                    id='course-information'
                    className='font-display text-center text-4xl font-bold text-slate-900'>
                    Course Information
                </h2>
            </div>
            <div className='prose prose-lg mx-auto mt-16'>
                <p>
                    Our Mental Health Awareness course helps to create a
                    positive wellbeing culture in the workplace and community.
                </p>
                <p>
                    Our one and two-day regulated First Aid for Mental Health
                    courses are Level 2 and Level 3 qualifications, from
                    awarding organisation RQF meaning they are nationally
                    recognised qualifications.
                </p>
                <div>
                    <h4>
                        To be awarded the Level 2 qualification, all
                        participants must pass the below assessments
                    </h4>
                    <ul className='marker:text-black'>
                        <li>One multiple-choice question paper.</li>
                        <li>A practical assessment.</li>
                    </ul>
                </div>
                <div>
                    <h4>
                        To be awarded the Level 3 qualification, all delegates
                        must pass the below assessments
                    </h4>
                    <ul className='marker:text-black'>
                        <li>Two multiple-choice question papers.</li>
                        <li>A practical assessment.</li>
                    </ul>
                </div>
                <div>
                    <h4>Certification</h4>
                    <p>
                        All candidates will be awarded the relevant level Ofqual
                        regulated RQF/SCQF qualification based on the course
                        they have completed and upon the completion of a
                        short-written assessment.
                    </p>
                </div>
            </div>
        </section>
    </div>
);

About.pageTitle = 'About';

export default About;
