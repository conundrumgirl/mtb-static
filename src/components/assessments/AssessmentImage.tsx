import assDetailFrame from '@assets//assessment_detail_frame.svg'
import DefaultImg from '@assets/sage.svg'
import { Box, CardMedia, styled } from '@mui/material'
import { AssessmentResource } from '@typedefs/types'
import React, { FunctionComponent, ReactNode } from 'react'

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 180,
  backgroundColor: '#f6f6f6',
  padding: `${theme.spacing(2)} ${theme.spacing(2)} 0 ${theme.spacing(2)}`,
  backgroundPositionY: 'center',
  backgroundSize: '90%',

  display: 'flex',
  flexShrink: 0,
  flexDirection: 'row',
}))

const DetailImageContainer = styled(Box)(({ theme }) => ({
  padding: '9px 0px 16px 0px',
  backgroundImage: `url(${assDetailFrame})`,
  backgroundRepeat: 'no-repeat',
  height: '270px',
  width: '530px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '& img': {
    width: '100%',

  },
}))



type AssessmentImageProps = {
  resources: AssessmentResource[] | undefined
  name: string
  variant: 'small' | 'detail' | 'normal'
  children?: ReactNode
  smallVariantProperties?: React.CSSProperties
}

const AssessmentImage: FunctionComponent<AssessmentImageProps> = ({
  resources,
  name,
  variant = 'normal',
  children = <></>,
  smallVariantProperties,
}: AssessmentImageProps) => {


  const screen = resources?.find(
    resource =>
      resource.category === 'icon' &&
      !resource.deleted &&
      resource.upToDate &&
      resource.title.includes('_square') &&
      resource.url
  )
  let image

  switch (variant) {
    case 'small': {
      image = (
        <img
          src={screen?.url || DefaultImg}
          alt={name}
          height="100%"
          style={smallVariantProperties}
        />
      )
      break
    }
    case 'detail': {

      image = (
        <DetailImageContainer>
          <img src={screen?.url || DefaultImg} alt={name} height="100%" style={smallVariantProperties} />
        </DetailImageContainer>
      )
      break

    }
    default: {
      image = (
        <StyledCardMedia

          image={screen?.url || DefaultImg}
          title={name}>
          {children}
        </StyledCardMedia>
      )
    }
  }
  return image
}

export default AssessmentImage
