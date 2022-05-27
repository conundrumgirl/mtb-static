type Contributor = {
  name: string

  orgName?: string
  title?: string
  bio?: React.ReactNode
  photo: string
}

type Data = {
  orgName: string
  subName?: string
  orgDescription?: React.ReactNode
  orgLogo?: string
  people: Contributor[]
}

const data: Data[] = [
  {
    orgName: 'Northwestern University',
    people: [
      {
        name: 'Richard Gershon, PhD',

        title: 'Lead M-Principal Investigator, Contact PI',
        bio: (
          <>
            <p>
              Dr. Gershon is a Professor and Vice Chair for Research in the
              Department of Medical Social Sciences, and Professor in the
              Department of Preventive Medicine-Health and Biomedical
              Informatics at Northwestern University Feinberg School of
              Medicine. Dr. Gershon is a leading expert in the development of
              outcome measurement, with significant experience in both
              educational and health applications. In response to the
              realization that the outcomes tools he was using in clinical
              practice were outdated and failed to cover the needs of patients,
              Dr. Gershon’s career has focused on the development of modern
              assessment tools. He strives to find new ways to assess health
              outcomes and methodologies and provide that information to
              clinicians in ways that can immediately impact treatment. As PI
              for the NIH Toolbox for the Assessment of Neurological and
              Behavioral Function, Dr. Gershon oversaw a team of over 200
              researchers from around the world to create a large battery of
              instruments for clinical investigators to assess various areas
              within cognitive, motor, sensory, and emotional health, for
              longitudinal, clinical and comparative effectiveness research. He
              also serves as PI on the NIH Infant and Toddler Toolbox (aka Baby
              Toolbox) contract to develop a cognitive assessment battery for
              infants and children aged 1-42 months. Dr. Gershon is the MPI for
              the NIA sponsored grant Advancing Reliable Measurement in
              Alzheimer’s Disease and cognitive Aging (ARMADA), which validates
              the NIH Toolbox amongst Alzheimer’s populations and older age
              groups. In recently awarded grants, he is the contact PI for
              ToolBox Detect: Low-Cost Detection of Cognitive Decline in Primary
              Care Settings, and co-I for The MyCog Mobile Assessment:
              Development and Validation of a Telehealth Strategy for Routine
              Detection of Cognitive Impairment in Primary Care.
            </p>
            <p>
              Dr. Gershon also serves as the MPI for the Environmental
              influences on Child Health Outcomes (ECHO) PRO Measurement Core.
              Additionally, in his former role as PI for the NIH Roadmap Patient
              Reported Outcomes Measurement Information System (PROMIS)
              Technical Center, Dr. Gershon served as technology host for more
              than 2,000 researchers and clinicians who are registered users of
              AssessmentCenter.net, a test authoring and study administration
              portal. Dr. Gershon’s background is further augmented by his
              numerous publications and presentations, and role as a
              co-investigator and/or consultant on over 100 assessment
              development projects in health care, education, and certification.
            </p>
          </>
        ),
        photo: '_pl',
      },
      {
        name: 'Aaron Kaat, PhD',

        title: 'M-Principal Investigator',
        bio: (
          <p>
            Dr. Kaat is an Assistant Professor in the Department of Medical
            Social Sciences, Northwestern University. He has a broad background
            in psychology, with specific training in lifespan development,
            including neurodevelopmental disabilities, with a secondary emphasis
            in psychometrics and cognitive assessment. He has expertise in
            instrument validation using classical and modern test theory, latent
            variable models, and linking analysis methodology.  He is a key
            methodologist involved with several large-scale nationally-relevant
            assessment systems. Many of his research projects involve instrument
            development, adaptation, and evaluation. Dr. Kaat was one of the
            primary psychometricians in the validation of the iPad version of
            the NIH Toolbox and in the normative revision and update to it. He
            is also involved in several studies evaluating the Toolbox in
            special populations such as Duchenne muscular dystrophy, fragile X
            syndrome, down syndrome, and intellectual disability.
          </p>
        ),

        photo: '_pl',
      },

      {
        name: 'Cindy Nowinski, MD, PhD',

        title: 'Co-Investigator',
        bio: (
          <p>
            Dr. Nowinski is a Research Associate Professor in the Departments of
            Medical Social Sciences and Neurology, Northwestern University
            Feinberg School of Medicine. She is a licensed clinical psychologist
            and measurement scientist with over 20 years of experience in the
            development of patient-reported outcome measures and
            performance-based cognitive assessments for use with both children
            and adults. She played central roles in several large-scale
            initiatives to develop standardized outcome measures including
            Neuro-QoLTM (Quality of Life in Neurological Disorders), the
            Patient-Reported Outcomes Measurement Information System (PROMIS®)
            and the app-based NIH Toolbox for Assessment of Neurological and
            Behavioral Function (NIH Toolbox®). Her current work focuses on
            cognitive aging, cognitive screening, and development and
            implementation of smartphone-based and other digital assessments.
          </p>
        ),

        photo: '_pl',
      },

      {
        name: 'Sarah Pila, PhD ',

        title: 'Co-Investigator',
        bio: (
          <p>
            Dr. Pila-Leiderman is a Research Assistant Professor in the
            Department of Medical Social Sciences, Northwestern University
            Feinberg School of Medicine. She holds a doctorate in Media,
            Technology, and Society from Northwestern University. Her research
            interests focus on the benefits of prosocial and educational media
            for young children, particularly in early childhood education. As a
            developmental scientist and researcher, Sarah is most interested in
            the intersection of technology and media for health and well-being
            across the lifespan. She has been published in such works
            as Computer & Education, Mobile Media & Communication, and Journal
            of Medical Internet Research.
          </p>
        ),

        photo: '_pl',
      },

      {
        name: 'Miriam Novack, PhD',

        title: 'Co-Investigator',

        photo: '_pl',
      },
      {
        name: 'Stephanie Ruth Young, PhD',

        title: 'Co-Investigator',
        bio: (
          <p>
            Dr. Stephanie Young is a Research Assistant Professor in the
            Department of Medical Social Science (MSS) at Northwestern
            University Feinberg School of Medicine. She earned her doctorate in
            Educational Psychology from the University of Texas at Austin and is
            a licensed psychologist with clinical training in pediatric
            neuropsychology. Her research primarily focuses on the development
            and validation of neuropsychological measures, neurodiversity, and
            practical assessment issues. Much of her work has focused on
            technological advancements in assessment, including mobile and
            web-based assessments and telehealth. Stephanie is passionate about
            improving open sharing of materials within the research community.
            She has conducted several independent validations of the
            International Cognitive Ability Resource (ICAR), the first
            well-validated open-source cognitive assessment battery freely
            available to researchers. 
          </p>
        ),

        photo: '_pl',
      },

      {
        name: 'Zahra Hosseinian, MA',

        title: 'Project Manager',
        bio: (
          <p>
            Ms. Hosseinian has over a decade of experience as a project manager
            for multiple neuropsychological and health informatics research
            projects. She is an expert in research design, survey methodology,
            community-based participatory research, quality improvement, and
            healthcare information technology with experience in measure
            development and a certified data scientist. Prior to this, she was
            project manager for a national project with the Pew Charitable
            Trusts where they identified standard patient demographic variables
            to implement in policy.  She also managed projects for Society for
            Thoracic Surgeons, NORC, and University of Chicago. At present, she
            manages Mobile Toolbox, MyCog – Rapid Detection of Cognitive
            Impairment in Everyday Clinical Settings and Toolbox Detect.  
          </p>
        ),

        photo: '_pl',
      },

      {
        name: 'Maria Varela Diaz, MS',

        title: 'IT Project Director',
        bio: (
          <p>
            Ms. Varela Diaz holds a Master’s degree in Computer Science and has
            over 30 years’ experience developing software and managing software
            development groups. Prior to coming to Northwestern she was the
            Chief of Applications and Business Relationships for the United
            Nations World Food Programme, where she oversaw teams of over 20
            developers and analysts in a global organization with users in all
            continents. She currently plans and manages software development for
            PROMIS, NIH Toolbox, Baby Toolbox and Mobile Toolbox projects.
          </p>
        ),

        photo: '_pl',
      },

      {
        name: 'Anyelo Almonte, MS ',

        title: 'IT Project Manager',
        bio: (
          <p>
            Mr. Almonte is a Project Manager in the Department of Medical Social
            Sciences at Northwestern University’s Feinberg School of Medicine.
            Mr. Almonte joined MSS in 2019 as Business Analyst and has been
            performing business analysis and project management duties for the
            NIH Toolbox and Mobile Toolbox app implementation. Mr. Almonte holds
            a master's degree in Information Systems and Technology Management
            from the University of Delaware and a bachelor's in management
            information systems from Bloomfield College. With an extensive
            background in IT, Mr. Almonte has participated in many technical
            projects throughout his college career that primarily focused on
            data analytics and software development.
          </p>
        ),

        photo: '_pl',
      },

      {
        name: 'Hubert Adam, MS ',

        title: 'Data Manager',
        bio: (
          <p>
            Mr. Adam has a Master of Science in software engineering, and over
            six years of experience as a Data Manager and Database Programmer.
            He is responsible for maintaining data quality procedures across
            multiple platforms, preparing and disseminating data sets for
            internal and external collaborators, data analytic work for paper
            publications and poster/symposia/talk presentations, and overall
            management of databases. He is also taking a lead role in creating
            standard operating procedures and related documentation for
            data-use.   
          </p>
        ),

        photo: '_pl',
      },

      {
        name: 'Shalini Patel',

        title: 'Senior Developer',
        bio: (
          <p>
            Mrs. Patel is a Senior Software Developer for Northwestern
            University. She has 20+ years’ experience in software
            development/architecture with a focus on web applications, database
            application, iOS and Android app development. Her latest work
            includes Mobile Toolbox development on iOS and Android and NIH
            Toolbox iPad application development.
          </p>
        ),

        photo: '_pl',
      },

      {
        name: 'Andrey Pankov ',

        title: 'Senior Quality Assurance',
        bio: (
          <p>
            Mr. Pankov is an IT professional with over 10 years of experience in
            Software Quality and Software Quality Assurance.  For Mobile Toolbox
            Mr. Pankov will perform testing and other activities to ensure the
            quality of the end product. He will also support the hardware and
            software used for development and data collection, including mobile
            devices, laptops, and additional hardware. 
          </p>
        ),

        photo: '_pl',
      },

      {
        name: 'Anastasiya Shvaykovskaya',

        title: 'Quality Assurance',
        bio: (
          <p>
            Mrs. Shvaykovskaya is an experienced IT specialist with many years
            of experience in Software Quality Assurance. For Mobile Toolbox Mrs.
            Shvaykovskaya will conduct testing on various devices and perform
            other activities to verify the solid state of final customer-facing
            products.
          </p>
        ),

        photo: '_pl',
      },
    ],
  },
  {
    orgName: 'Helium Foot',
    people: [
      {
        name: 'Keith Alperin',
        bio: (
          <p>
            Keith Alperin launched Helium Foot Software in 2007. With roots in
            Apple's predecessor technology, Helium Foot was able to build some
            of the earliest iPhone apps when the iPhone SDK was first released
            in 2008. The company has been building apps on the iPhone, iPad,
            Android phones, Apple Watches, Macs and the web ever since. He
            received his BA in Molecular Biology & Philosophy from Northwestern
            University and lives with his family in Chicago.
          </p>
        ),
        photo: '_pl',
      },

      {
        name: 'Paula Hom Sievert',
        bio: (
          <p>
            Paula Hom Sievert began development work on mobile devices in the
            1990s, after years of experience doing software development on
            larger systems.  She started working on Mobile Toolbox in 2018 and
            helped to build the foundation and its initial measures on the iOS
            platform.  She received her BA in Computer Science from the
            University of California at Berkeley. 
          </p>
        ),
        photo: '_pl',
      },
    ],
  },

  {
    orgName: 'University of Delaware ',
    people: [
      {
        name: 'Jerry Slotkin, PhD',
        title: 'Co-Investigator, Site Principal Investigator',
        bio: (
          <p>
            Dr. Jerry Slotkin is a Research Assistant Professor in the College
            of Health Sciences at the University of Delaware and an Assistant
            Director of the Center for Health Assessment Research and
            Translation (CHART). He is an original, and continuing, lead
            developer for the NIH Toolbox cognitive measures, and took a lead
            role in the development of many of the NIT Toolbox sensation
            measures, as well. Dr. Slotkin also serves as a Co-Investigator and
            site PI for the Environmental Influences on Child Health Outcomes
            (ECHO) PRO Core and Advancing Reliable Measurement in Alzheimer’s
            Disease and cognitive Aging (ARMADA) grants, and serves as a
            co-investigator on several other grants focused on developing
            assessment for specialized rehabilitation populations and
            translating assessment results to interventions.
          </p>
        ),
        photo: '_pl',
      },

      {
        name: 'David Tulsky, PhD',
        title: 'Co-Investigator',
        bio: (
          <p>
            Dr. Tulsky is the Director of the Center for Health Assessment
            Research and Translation (CHART) at the University of Delaware and
            has academic appointments as a Professor in the Departments of
            Physical Therapy and Psychological & Brain Sciences. He has nearly
            30 years of experience developing tests and measurement instruments
            and is internationally recognized as a leader in the development of
            outcomes measurement tools, cognitive tests, and patient reported
            outcomes measurement systems. He was a member of the original NIH
            Toolbox Cognition Domain team.
          </p>
        ),
        photo: '_pl',
      },
    ],
  },
  {
    orgName: 'Sage Bionetworks',
    people: [],
  },

  {
    orgName: 'University of California, San Francisco ',
    subName: 'Brain Health Registry ',
    orgDescription: (
      <div>
        <strong>Background </strong>
        <p>
          Approximately 6.2 million Americans aged 65 and older are living with
          Alzheimer’s dementia. Research indicates that cognitive deficits begin
          to appear in middle adulthood, therefore, early detection is critical
          for the development of effective prevention and treatment/adaptive
          strategies. Presently, we lack standardized, validated, user-friendly,
          remote cognitive assessment tools needed for such detection, for a
          variety of reasons: (1) Cognitive assessment is challenging: cognition
          has multiple components and cognitive function changes across the
          lifespan, with decrements in many components regarded as normal in
          aging. (2) The expression of cognitive abilities can be affected by a
          host of other factors, including mood, the context of assessment,
          level of fatigue, and vision, hearing and motor function. (3) While we
          focus on cognitive decline, cognitive difficulties result from diverse
          etiologies with different natural histories. For example, problems may
          be chronic and progressive, such as those typically associated with
          neurodegenerative and other dementing processes or may result from
          acute brain insult (e.g., stroke, traumatic brain injury) with the
          potential for at least partial recovery, even without intervention.
          Ideally, cognitive assessments need to be sensitive to real change,
          able to differentiate normal variability from pathological change, and
          capable of assessing a diverse range of cognitive abilities and
          factors that may affect those abilities. (4) There are practical
          challenges to assessment: current measurement tools often place
          significant burden on both participants and researchers, assessments
          often require trained administrators, specialized equipment, and
          in-clinic evaluation of research participants (with travel time and
          costs), limiting their use in the broadest range of clinical
          populations and study types. Mobile devices have the potential to
          overcome some of these limitations.
        </p>

        <strong>Aim and Objectives</strong>
        <p>
          This study aims to establish normative values for the Mobile Toolbox
          assessment, and test the feasibility and compliance of administering
          the Mobile Toolbox app, a free, smartphone application with a version
          of the NIH Toolbox suite of cognitive tests, in participants enrolled
          in the UCSF Brain Health Registry. The Brain Healthy Registry is an
          online research registry for the recruitment, assessment, and
          longitudinal monitoring of cognition, function, and health in adult
          volunteers. The overall goals of the Mobile Toolbox Brain Health
          Registry Study (MTB-BHR) are to (1) enroll Brain Healthy Registry
          participants to establish national normative values for the Mobile
          Toolbox cognitive measures, and (2) address feasibility, usability,
          and compliance for the Mobile Toolbox app and in an unsupervised,
          remote setting in a diverse cohort of individuals. This study is part
          of a larger, collaborative effort (NIA U2CAG060426, Dr. Richard
          Gershon, Northwestern University as the Principal Investigator/Project
          Lead) to develop, administer, and deploy Mobile Toolbox in different
          populations to psychometrically evaluate the normative and construct
          validity of the Mobile Toolbox.
        </p>
        <strong>Tentative Timeline: February 2022-May 2024 </strong>
      </div>
    ),
    people: [
      {
        name: 'Michael Weiner, MD',
        title: 'M-Principal Investigator of Site',
        bio: (
          <p>
            Michael Weiner, MD, is a Professor in Residence in Radiology and
            Biomedical Imaging, Medicine, Psychiatry, and Neurology at the
            University of California, San Francisco. He is Principal
            Investigator the Brain Health Registry, an internet-based registry
            with the overall goal of accelerating development of effective
            treatments for brain diseases. Dr. Weiner is also the Principal
            Investigator of the Alzheimer’s Disease Neuroimaging Initiative, a
            14-year national longitudinal study of over 1500 subjects which is
            aimed at validating biomarkers for Alzheimer’s disease at 60 sites
            across the USA and Canada for cognitive testing, MRI, PET, and
            lumbar puncture. During the past 30 years he has worked to develop
            and optimized the use of MRI, PET, and blood-based biomarker methods
            to diagnose Alzheimer’s disease and other neurodegenerative
            disorders. His research focuses on monitoring effects of treatment
            to slow progressions in Alzheimer’s disease and early detection in
            patients who are not demented, but risk subsequent development of
            dementia. Recently he has focused on developing inexpensive,
            scalable, tools to identify normal elders at risk for cognitive
            decline and dementia, and to provide the Brain Health Registry
            software to facilitate the work of other investigators. Dr. Weiner
            has mentored over 120 postdoctoral fellows, has authored 821 peer
            reviewed research papers and 62 book chapters. He holds 19 separate
            research grants. He has received numerous honors including the
            Alzheimer’s Association Lifetime Achievement Award, the Middleton
            Award for outstanding research in the Veterans Administration, the
            Nancy and Ronald Reagan Award for research from the Alzheimer’s
            Association, and the Potemkin Award for research in Picks Disease,
            Alzheimer’s disease, and other neurodegenerative disorders from the
            American Association of Neurology and the American Brain Foundation.
          </p>
        ),
        photo: '_pl',
      },

      {
        name: 'Rachel Nosheny, PhD',
        title: 'Principal Investigator of Site',
        bio: (
          <p>
            Dr. Nosheny is a neuroscientist with molecular/cellular and clinical
            research experience focused on age-related cognitive decline,
            Alzheimer’s disease, Down syndrome, and AIDS Dementia. After
            receiving her Ph.D. in Neuroscience from Georgetown University, she
            completed a post-doctoral fellowship at Stanford University, where
            she identified important synaptic and intercellular signaling
            abnormalities in mouse models of Down syndrome and Alzheimer’s
            disease. Since joining the Center for Imaging of Neurodegenerative
            Diseases in 2012, her research efforts have focused on novel
            strategies to identify risk of cognitive decline and Alzheimer’s
            disease, using Brain Health Registry and Alzheimer’s Disease
            Neuroimaging Initiative (ADNI) data. In 2016 she led the development
            of the Study Partner Portal within BHR, a novel tool for engaging
            with and collecting information from study/care partners of BHR
            participants. A major goal of Dr. Nosheny’s current research is to
            validate novel, remote assessments to facilitate Alzheimer’s and
            aging clinical research studies and clinical trials.
          </p>
        ),
        photo: '_pl',
      },

      {
        name: 'Monica Camacho',
        title: 'Project Manager',
        bio: (
          <p>
            As a Program Director for the Brain Health Registry, Monica Camacho
            helps manage daily operations for the Brain Health Registry and
            several sub-studies and collaborations, including the Mobile Toolbox
            Brain Health Registry Study. She coordinates recruitment of new
            members, with a focus on increasing representation of adults that
            self-identify as Latino/x. Recently, she led launch of an entirely
            Spanish language version of the Brain Health Registry. Prior to
            joining the Brain Health Registry in 2014, Ms. Camacho assisted in
            MRI acquisition and processing for various Alzheimer’s disease and
            aging brain research studies at the Center of Imaging for
            Neurodegenerative Diseases. Ms. Camacho graduated with honors from
            Loyola Marymount University with a B.A. in Psychology.
          </p>
        ),
        photo: '_pl',
      },

      {
        name: 'Derek Flenniken ',
        title: 'Engineering Director',
        bio: (
          <p>
            Derek Flenniken is the Information Technology (IT) director for the
            Brain Health Registry. He has over 15 years of experience in
            software development. As lead developer for the Center for Imaging
            of Neurodegenerative Diseases (CIND), he has overseen development of
            a web application that manages the recruitment, scheduling, and data
            collection on over 12,000 participants in 40 studies. He has also
            overseen the development of applications which manage image
            processing through several different processing pipelines in a
            heterogeneous Windows & Windows environment that has help the CIND
            efficiently process over 70,000 images. He works closely with UCSF
            privacy officers to continue to protect data associated with the
            Brain Health Registry. He has a degree in Molecular and Cellular
            Biology; Neurobiology from the University of California Berkeley.
          </p>
        ),
        photo: '_pl',
      },
      {
        name: 'Alex Happ ',
        title: 'Senior Software Engineer',
        bio: (
          <p>
            Alexander Happ is a Web Developer and Senior Software Engineer that
            helps develop and maintain the Brain Health Registry. He builds new
            features for the Brain Health Registry aimed at improving the
            functionality and user experience and was integral in set-up and
            monitoring for this study. Prior to working at Brain Health
            Registry, Alexander worked as a product manager at Imaginary
            Foundation.
          </p>
        ),
        photo: '_pl',
      },
    ],
  },
  {
    orgName: 'Massachusetts General Hospital',
    orgDescription: (
      <div>
        Harvard Aging Brain Study <br />
        The IADL Study <br />
        The Subjective Cognitive Decline study <br />
        <p>
          <strong>Background: </strong>
          <br />
          Remote smart phone-based assessments are becoming more acceptable in
          research and clinical environments. These types of remote assessments
          allow individuals to complete testing in the comfort of their home, on
          their own devices, without the aid of a clinician or technician. More
          importantly, smart phone ownership is becoming more acceptable to
          older individuals and the use of smart phones are becoming more
          comparable between Black, Latinx and White Americans. The ability to
          obtain valid cognitive data, via a smart phone, across a broad
          demographic, is not only critical to aging research but will be
          particularly useful in clinical trials where clinic visits are more
          frequent and require longitudinal assessments of change.
        </p>
        <p>
          The NIH Mobile Toolbox (MTB) is a suite of mobile cognitive tests that
          was recently developed and validated against “gold standard” in-clinic
          tests. The MTB is administered via a smart phone on the individual’s
          own device. The MTB was found to have psychometric properties
          equivalent to “gold standard” in-clinic cognitive tests. What is
          unclear is whether the MTB can be useful in the clinical trial arena,
          particularly in Alzheimer Disease (AD) Prevention Trials. Feasibility
          will require that these tests, or a combination of tests, be able to
          detect cognitive changes associated with amyloid and tau biomarkers on
          PET imaging in otherwise, clinically healthy individuals.
        </p>
        <p>
          <strong>Aim and Objectives: </strong>
          <br />
          The purpose of this protocol is to deploy the MTB in a
          well-characterized cohort of 100 cognitively normal (CN), older
          individuals who have in-clinic cognitive testing, including the
          Primary Alzheimer Cognitive Composite (PACC) and AD biomarkers on PET
          imaging. Participants will be recruited from 3 existing NIH funded
          studies (i.e., the Harvard Aging Brain Study, the IADL Study and the
          Subjective Cognitive Decline study). We aim to determine if an optimal
          MTB composite can be derived that is associated with PACC performance,
          and subsequently investigate whether this ‘MTB PACC-like’ composite is
          sensitive to AD biomarkers and cognitive change over 6- and 12-month
          follow-up
        </p>
        <strong>We will accomplish the following objectives: </strong>
        <br />
        <ul>
          <li>
            Determine which MTB tests at baseline would be most strongly
            associated with traditional PACC performance and could be combined
            into an MTB PACC-like composite.
          </li>

          <li>
            Investigate the association of performance on the MTB PACC-like
            composite to AD biomarker burden on PET imaging.
          </li>

          <li>
            Determine the sensitivity to decline of the MTB PACC-like composite
            over 6 and 12 months and compare change over time to annual decline
            on the traditional PACC and AD biomarker burden.
          </li>
        </ul>
        <strong>Tentative Timeline: </strong>
      </div>
    ),
    people: [
      {
        name: 'Dorene M. Rentz, PsyD',
        title: 'M-Principal Investigator of MTB and Site',
        photo: '_pl',
        bio: (
          <p>
            {' '}
            Dorene M. Rentz, PsyD, is Professor of Neurology at Harvard Medical
            School and a practicing clinical neuropsychologist for over 30
            years. She has dual appointments in the Departments of Neurology at
            Brigham and Women’s Hospital and Massachusetts General Hospital. She
            serves as the Co-Director of the Center for Alzheimer Research and
            Treatment and the Director of the Outreach, Recruitment and
            Engagement Core at the Massachusetts Alzheimer’s Disease Research
            Center. She is also the Clinical Core Leader of the Harvard Aging
            Brain Study and Co-Leader of the Clinical Outcome Instrument Unit of
            the Alzheimer Clinical Trial Consortium. Her clinical and research
            interests have focused on early detection of cognitive changes
            related to preclinical Alzheimer’s disease as well as the impact of
            cognitive reserve on early detection. She is a recognized leader in
            the development of cognitive outcome measures for secondary
            prevention trials and the feasibility of mobile technology for
            assessing cognition in the clinic and home environment.
          </p>
        ),
      },
      {
        name: 'Roosmarijn (Roos) J.  Jutten, PhD ',
        title: 'Co-Principal Investigator of Site',
        photo: '_pl',
        bio: (
          <p>
            {' '}
            Roos Jutten, PhD, is a neuropsychologist and postdoctoral research
            fellow at Massachusetts General Hospital and Harvard Medical School.
            Her research focuses on understanding cognitive changes in early
            stages of Alzheimer’s disease (AD) and applying that to the
            development and validation of improved outcome measures of
            cognition. She received her PhD from the Amsterdam University
            Medical Centers (the Netherlands), where she worked at the Alzheimer
            Center Amsterdam memory-clinic and combined neuropsychology and
            psychometrics to refine the measurement of clinical progression in
            early AD dementia. The main goal of her current postdoctoral
            research is to improve the detection of the very first and subtle
            cognitive changes that occur in preclinical stages of AD, by
            leveraging digital remote cognitive assessments. Dr. Jutten is an
            active member of the ISTAART Cognition PIA, and a board member of
            the Dutch Neuropsychological Society.
          </p>
        ),
      },
      {
        name: 'Angela Juliano, B.S',
        title: 'Study Coordinator',
        photo: '_pl',
        bio: (
          <p>
            Angela Juliano is a Research Assistant II in the Center for
            Alzheimer Research and Treatment (CART) at Brigham and Women’s
            Hospital. She received her bachelor’s degree in Neuroscience and a
            minor in Cognitive Science from the University of Delaware. She
            currently coordinates three Alzheimer’s disease (AD) clinical
            trials. Her interests include cognitive and psychiatric assessment,
            behavioral intervention in dementia, and gerontology. Angela will
            pursue a Master of Clinical Social Work degree at Boston College in
            Fall 2022, with a specialization in Older Adults and Families.
          </p>
        ),
      },
    ],
  },
]

export default data
