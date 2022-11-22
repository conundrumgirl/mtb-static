import PageShell from '@components/widgets/PageShell'
import { Section } from '@components/widgets/Styled'
import { styled, Typography } from '@mui/material'
import { FunctionComponent } from 'react'

const QuestionStyled = styled(Typography)(({ theme }) => ({
    fontSize: '18px',
    fontWeight: '700',
    lineHeight: '20px',
    textAlign: 'left',
    marginBottom: theme.spacing(3),
}))

const AnswerStyled = styled(Typography)(({ theme }) => ({
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '20px',
    letterSpacing: '0px',
    textAlign: 'left',
    paddingBottom: theme.spacing(4),
    borderBottom: '1px solid #EAECEE',
    marginBottom: theme.spacing(4),
}))

const Faq: FunctionComponent<{ onJoin: () => void }> = ({ onJoin }) => {
    return (
        <PageShell islight={true} onJoin={onJoin}>
            <Section sx={{ maxWidth: '800px' }}>
                <Typography variant="h2" textAlign="left" mb={6}>
                    FAQs
                </Typography>

                <QuestionStyled>When can I use Mobile Toolbox?</QuestionStyled>
                <AnswerStyled>
                    Mobile Toolbox is completing its Beta release phase through June 2022.
                    Mobile Toolbox will onboard a limited number of early adopters
                    beginning July 2022.
                </AnswerStyled>
                <QuestionStyled>
                    How can I receive updates about Mobile Toolbox?
                </QuestionStyled>
                <AnswerStyled>
                    Sign up for our <a href="https://forms.gle/CgAWzq8j48PBvo1H7" target="_blank">mailing list</a> to receive updates and announcements.
                </AnswerStyled>
                <QuestionStyled>How much does Mobile Toolbox cost?</QuestionStyled>
                <AnswerStyled>
                    The cost for Mobile Toolbox for Beta contributors and early adopters
                    is currently subsidized by existing development projects but will
                    transition to a tiered cost model. The app is and will always be free
                    for download and use by study participants. There are no in-app
                    purchases or advertising.
                </AnswerStyled>
                <QuestionStyled>What devices can my participants use?</QuestionStyled>
                <AnswerStyled>
                    The Mobile Toolbox App is freely available for both iPhone and Android
                    smartphones. The app is accessible through the Apple App Store and the
                    Google Play Store using an Apple or Google Account. We recommend that
                    participants use iPhone devices newer than the 1st generation iPhone
                    SE and Android devices running at least Android 6. Note that Google
                    Play Store is not compatible with some Huawei devices.
                </AnswerStyled>
                <QuestionStyled>
                    What are the data sharing policies for Mobile Toolbox studies?
                </QuestionStyled>
                <AnswerStyled>
                    All Mobile Toolbox data will be shared through a two-tier model. Tier
                    1 will share data from all Mobile Toolbox studies as part of a
                    "population" dataset in aggregate. This data will be released yearly,
                    and will contain data that was collected at least 6 months prior to
                    data release. Data will be highly de-identified and will not include
                    information about disease state unless shared by the study PI. Summary
                    statistics and the distribution of scores for sub-populations will be
                    shared 6 months after completion of data collection for all studies.
                    Tier 2 will share curated, study specific data using the Sage
                    Bionetworks Digital Health Knowledge Portal at <a href="https://dhealth.synapse.org" target="_blank">https://dhealth.synapse.org</a>. All data can be requested through an
                    established governance procedure modeled on the Sage Bionetworks
                    qualified researcher process and data use statements. All data is
                    retained on the Synapse platform indefinitely.
                </AnswerStyled>
                <QuestionStyled>
                    Will data sharing help me comply with NIH requirements?
                </QuestionStyled>
                <AnswerStyled>
                    With a greater demand for open sharing by funding agencies (e.g.
                    genomic data sharing policy of NIH and Open access mandates) providing
                    an easy path for scientists to share their data in a standardized way
                    through the infrastructure being built for the Mobile Toolbox and <a href="https://dhealth.synapse.org" target="_blank">https://dhealth.synapse.org</a> can ease these requirements. These include
                    automatic generation of doi:s for the data, providing standard
                    licenses and infrastructure that is already accepted by several
                    journals as a public repository.
                </AnswerStyled>
                <QuestionStyled>
                    What security requirements does Mobile Toolbox adhere to?
                </QuestionStyled>
                <AnswerStyled>
                    Amazon Web Services (AWS) provides the base layer for all Mobile
                    Toolbox Services. AWS is the world-wide leader in cloud computing and
                    provides security measures at the physical and network layers that
                    comply with strict federal requirements including the standards of
                    HIPAA (<a href="http://aws.amazon.com/compliance" target="_blank">http://aws.amazon.com/compliance</a>). Account information is
                    encrypted at rest, as documented in Encrypting Amazon RDS Resources
                    (<a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Encryption.html" target="_blank">https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Encryption.html</a>).
                    Database connections must use SSL.
                </AnswerStyled>
                <QuestionStyled>
                    What data governance checks are in place?
                </QuestionStyled>
                <AnswerStyled>
                    Mobile Toolbox and Synapse operate under a strict governance process
                    that includes <a href="https://studies.mobiletoolbox.org/MTB-ToS-v2-210923.pdf" target="_blank">Terms of Service</a> guidelines and operating procedures for
                    handling data, data security measures with strict information and
                    privacy-enhancing technologies, as well as the right of audit and
                    external reviews (WIRB 20112068). The Privacy-Enhancing Technologies
                    options include login requirement, data, and communication encryption
                    via Secure Sockets Layers (SSL) when transmitting data or command,
                    firewalls for both ingress and egress, and authentication and
                    authorization of users who access data on Synapse
                    (<a href="http://docs.synapse.org/articles/governance.html" target="_blank">http://docs.synapse.org/articles/governance.html</a>). Study consents
                    must include agreements for data storage and sharing and must be
                    transparent and explicit in the intent of studies to share data with
                    qualified researchers..
                </AnswerStyled>
                <QuestionStyled>How is participant PII managed?</QuestionStyled>
                <AnswerStyled>
                    No PII is currently collected through Mobile Toolbox or the Mobile
                    Toolbox App. Participants are given a unique identifier by
                    researchers. Only the researcher holds the linkage between the unique
                    identifier and participant PII. The unique identifiers are carried
                    through the Mobile Toolbox platform, along with an internal
                    identifier. Should a participant withdraw from a study, the unique
                    identifier is severed from the account and only the internal
                    identifier remains to connect data to a consent tag.
                </AnswerStyled>
                <QuestionStyled>
                    Can I consent my participants through Mobile Toolbox App?
                </QuestionStyled>
                <AnswerStyled>
                    No mechanism exists to consent participants through the smartphone
                    app. All participants must be consented outside of the App, and then
                    given login information to join your study within the App. Once a
                    participant joins the study by logging into the App, they are assumed
                    to be consented and are tagged as consented within the Mobile Toolbox
                    platform.
                </AnswerStyled>
                <QuestionStyled>
                    Can I deliver custom Patient Reported Outcomes or other surveys to
                    study participants?
                </QuestionStyled>
                <AnswerStyled>
                    This capability is under active development.
                </AnswerStyled>
                <QuestionStyled>
                    Can I use Mobile Toolbox for studies outside the US?
                </QuestionStyled>
                <AnswerStyled>
                    No. Mobile Toolbox currently supports US-based research studies only.
                </AnswerStyled>
                <QuestionStyled>
                    Does Mobile Toolbox support languages besides English?
                </QuestionStyled>
                <AnswerStyled>
                    Mobile Toolbox is English only. Mobile Toolbox Spanish-language App
                    and Assessments are in active development.
                </AnswerStyled>
                <QuestionStyled>
                    How will participants know which study to join?
                </QuestionStyled>
                <AnswerStyled>
                    Study coordinators will provide a Study ID and a unique login ID to
                    each participant. Researchers have the option of customizing the App
                    with their own logo, colors, welcome message, notifications, and study
                    information that is displayed to participants when they open up the
                    App on their phone.
                </AnswerStyled>
                <QuestionStyled>How can I provide feedback?</QuestionStyled>
                <AnswerStyled>
                    If you have feedback, questions, or feature requests you can provide
                    them in our <a href="https://forms.gle/x1gJeJkw3zMrmQT96" target="_blank">Feedback form</a>. The Feedback form will not generate a
                    response to your question, but you may see an update to our FAQs or
                    receive an update from our <a href="https://forms.gle/CgAWzq8j48PBvo1H7" target="_blank">mailing list</a>.
                </AnswerStyled>
                <QuestionStyled>
                    What studies are currently using Mobile Toolbox?
                </QuestionStyled>
                <AnswerStyled>
                    <p>
                        The <a href="https://www.brainhealthregistry.org/" target="_blank"><strong>UC San Francisco Brain Health Registry</strong></a> study enrolls Brain
                        Healthy Registry participants to establish national normative values
                        for the Mobile Toolbox cognitive measures, and looks at feasibility,
                        usability, and compliance for the Mobile Toolbox app in an
                        unsupervised, remote setting in a diverse cohort of individuals.
                        Launched February 2022
                    </p>
                    <p>
                        <strong>Harvard Aging Brain Study</strong> deploys Mobile Toolbox into a
                        well-characterized cohort of 100 cognitively normal (CN), older
                        individuals who have in-clinic cognitive testing, including the
                        Primary Alzheimer Cognitive Composite (PACC) and AD biomarkers on
                        PET imaging. Participants will be recruited from 3 existing NIH
                        funded studies (the Harvard Aging Brain Study, the IADL Study and
                        the Subjective Cognitive Decline study).<strong> Launched April 2022.</strong>
                    </p>
                    <p>
                        <strong>The Emory Healthy Brain Study (EHBS) and Emory Healthy Aging Study
                            (EHAS)</strong> deploys Mobile Toolbox to participants divided into three
                        groups based on cognitive functioning instrument (CFI) scores,
                        matched for age, race, gender, and education in a series of steps.
                        Launched April 2022.
                    </p>
                    <p>
                        <strong>UC San Diego</strong> deploys Mobile Toolbox in a sample of persons who are
                        living with HIV (PWH), with and without HIV-associated
                        neurocognitive disorders (HAND). Launched April 2022.
                    </p>
                    <p>
                        <strong>Washington University, St. Louis</strong> uses Mobile Toolbox in a cohort of
                        brain-healthy individuals who originally participated in the Human
                        Connectome Project. Launched March 2022.
                    </p>
                    <p>
                        Sage Bionetworks uses Mobile Toolbox in 4 sub-populations of their
                        existing mPower 2.0 digital health studies in Parkinson’s Disease
                        populations.
                    </p>
                </AnswerStyled>
            </Section>
        </PageShell>
    )
}

export default Faq
