import { ReactComponent as Northwestern_Logo } from '@assets/northwestern_logo.svg';
import { ReactComponent as PenState_Logo } from '@assets/pen_state_logo.svg';
import { ReactComponent as SageBio_Logo } from '@assets/sage_bio_logo.svg';
import PageShell from '@components/widgets/PageShell';
import { Box, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles'; //vs mui/styles
import { colors } from '@style/theme';
import React, { FunctionComponent } from 'react';

const PartnersContainer = styled(Box)(({ theme }) => ({

}))

const AboutUs: FunctionComponent<{}> = () => {
    return (
        <PageShell isLight={true} >
            <Container maxWidth="lg">
                <Typography variant="h2" color={colors.neutralsBlack} mb={10}>About Us</Typography>
                <Grid
                    container
                    rowSpacing={5}
                    columnSpacing={{ xs: 4, lg: 10 }}>

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
                            he Pennsylvania State University Sliwinski and Mangravite are at Northwestern University and Sage Bionetworks respectively. Dr. Martin Sliwinski of Penn State University leads the integration of the Mobile Toolbox collaboration with Mobile Monitoring of Cognitive Change (M2C2)</Typography>
                    </Grid>

                </Grid>
            </Container>
        </PageShell>
    )
}

export default AboutUs
