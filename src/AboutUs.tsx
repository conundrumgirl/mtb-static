import LMangravite from '@assets/l_mangravite.jpg';
import MSliwinski from '@assets/m_sliwinski.jpg';
import { ReactComponent as Northwestern_Logo } from '@assets/northwestern_logo.svg';
import { ReactComponent as PenState_Logo } from '@assets/pen_state_logo.svg';
import RGershon from '@assets/r_gershon.jpg';
import { ReactComponent as SageBio_Logo } from '@assets/sage_bio_logo.svg';
import PageShell from '@components/widgets/PageShell';
import { Box, Container, Grid, Typography } from '@mui/material';
import { alpha, styled } from '@mui/material/styles'; //vs mui/styles
import { colors } from '@style/theme';
import React, { FunctionComponent } from 'react';


const PartnersContainer = styled(Box)(({ theme }) => ({

}))

const AboutUs: FunctionComponent<{}> = () => {
    return (
        <PageShell isLight={true} >
            <Container maxWidth="md">
                <Typography variant="h2" color={colors.neutralsBlack} mb={10}>About Us</Typography>
                <Typography variant="h3" color={alpha(colors.neutralsBlack, .6)} mb={20}>
                    Mobile Toolbox comprises a team of clinical colleagues, cognition researchers, measurement scientists and technical experts with proven success in multiple large-scale validation and development projects.
                </Typography>
                <Typography variant="h3" color={alpha(colors.neutralsBlack, .6)}>
                    Co-Principal Investigators Drs. Gershon and Mangravite are at Northwestern University and Sage Bionetworks respectively. Dr. Martin Sliwinski of Penn State University leads the integration of the Mobile Toolbox collaboration with Mobile Monitoring of Cognitive Change (M2C2).
                </Typography>
                <Grid
                    container
                    rowSpacing={8}
                    mt={30}
                    columnSpacing={{ xs: 4, lg: 10 }}>



                    <Grid item xs={12} lg={3} textAlign="center">
                        <img src={LMangravite} alt="Lara Mangravite" />
                    </Grid>
                    <Grid item xs={12} lg={9}>

                        <Typography component="p" variant="body2" paragraph >
                            Lara Mangravite, PhD, is President of Sage Bionetworks, an organization that focuses on open practices to advance biomedicine through data-driven science and digital research. Recognizing that all research is limited by restrictions placed on the distribution of information, Dr. Mangravite works closely with institutes, foundations and research communities to improve information flow, benchmark research practices, and establish research outcomes of sufficient confidence to support translation.</Typography>
                    </Grid>
                    <Grid item xs={12} lg={3} textAlign="center">
                        <img src={MSliwinski} alt="Martin Sliwinski" />
                    </Grid>
                    <Grid item xs={12} lg={9}>
                        <Typography component="p" variant="body2" paragraph>
                            Martin Sliwinski, PhD, of Penn State University, is currently leading Mobile Monitoring of Cognitive Change (M2C2), working to using smartphones to measure cognitive function and subtle variations in cognitive performance in the context of everyday life. Dr. Sliwinski aims to develop infrastructure that provides the research community with open, flexible, and usable tools to enable scientific progress that depends on the sensitive and accurate measurement of cognitive change.</Typography>
                    </Grid>
                    <Grid item xs={12} lg={3} textAlign="center">
                        <img src={RGershon} alt="Richard Gershon" />
                    </Grid>
                    <Grid item xs={12} lg={9}>
                        <Typography component="p" variant="body2" paragraph>
                            Richard Gershon, PhD, of Northwestern University, is widely recognized for his expertise in advancing the use of technology for increasing the impact and reach of psychometrically robust health measurements. Dr. Gershon is the contact principal investigator for The Mobile Toolbox for Monitoring Cognitive Function, MyCog: Rapid detection of cognitive impairment in everyday clinical settings, and ARMADA: Advancing Reliable Measurement in Alzheimer’s Disease and cognitive Aging.</Typography>
                    </Grid>
                    <Grid item xs={12} >
                        <Typography variant="h2" color={colors.neutralsBlack} mb={10} mt={30}>Pur Partners</Typography>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <Northwestern_Logo />
                    </Grid>
                    <Grid item xs={12} lg={8}>

                        <Typography component="p" variant="body2" paragraph>
                            The Northwestern University  Gershon and Mangravite are at Northwestern University and Sage Bionetworks respectively. Dr. Martin Sliwinski of Penn State University leads the integration of the Mobile Toolbox collaboration with Mobile Monitoring of Cognitive Change (M2C2).
                        </Typography>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <SageBio_Logo />
                    </Grid>
                    <Grid item xs={12} lg={8}>
                        <Typography component="p" variant="body2" paragraph>
                            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.  Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id </Typography>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <PenState_Logo />
                    </Grid>
                    <Grid item xs={12} lg={8}>
                        <Typography component="p" variant="body2" paragraph>
                            The Pennsylvania State University Sliwinski and Mangravite are at Northwestern University and Sage Bionetworks respectively. Dr. Martin Sliwinski of Penn State University leads the integration of the Mobile Toolbox collaboration with Mobile Monitoring of Cognitive Change (M2C2)</Typography>
                    </Grid>

                </Grid>
            </Container>
        </PageShell>
    )
}

export default AboutUs
