import {StyledCard} from '@components/widgets/Styled'
import {Button, Grid, Typography} from '@mui/material'
import {styled} from '@mui/material/styles' //vs mui/styles
import {colors} from '@style/theme'
import React, {FunctionComponent} from 'react'

const InnerList = styled('ul')(({theme}) => ({
  listStyleType: 'decimal',
  paddingLeft: theme.spacing(5),
  '& li': {
    marginBottom: theme.spacing(8),
    color: colors.gray800,
    paddingLeft: theme.spacing(9),
  },
}))

const Security: FunctionComponent<{}> = () => {
  return (
    <>
      <Typography variant="h2" mb={10}>
        Security &amp; Governance
      </Typography>
      <Grid container rowSpacing={5} spacing={5}>
        <Grid item xs={7}>
          <Typography variant="h3" sx={{opacity: 0.6}}>
            The Mobile toolbox platform provides the highest levels of modern
            security standards built-in from the ground up. We offer industry
            leading data governance best practices and patterns.
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Typography variant="h3">Secure</Typography>
          <StyledCard sx={{color: colors.gray800}}>
            <InnerList>
              <li> AWS hosted HIPAA-compliant web services</li>

              <li>Acquisition &amp; secure transfer of multiple data types</li>

              <li>De-identification and storage of encrypted study data</li>

              <li>
                Separation of account and study data RBAC - controlled access
              </li>
            </InnerList>
          </StyledCard>
          <Button
            color="primary"
            variant="outlined"
            sx={{mx: 'auto', mt: 8, display: 'block'}}>
            Learn More
          </Button>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Typography variant="h3">Governance</Typography>
          <StyledCard sx={{color: colors.gray800}}>
            <Typography variant="h3" color={colors.neutralsBlack} mb={8}>
              Industry leading best practices and patterns:
            </Typography>
            <InnerList>
              <li> Privacy and data management toolkit</li>
              <li> Elements of informed consent</li>
              <li> Consent checklist</li>
            </InnerList>
          </StyledCard>
          <Button
            color="primary"
            variant="outlined"
            sx={{mx: 'auto', mt: 8, display: 'block'}}>
            Learn More
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default Security
