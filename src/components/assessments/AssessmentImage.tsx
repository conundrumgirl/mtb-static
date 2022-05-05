import DefaultImg from '@assets/sage.svg'
import { Box, CardMedia, styled } from '@mui/material'
import { AssessmentResource } from '@typedefs/types'
import React, { FunctionComponent, ReactNode } from 'react'

const StyledCardMedia = styled(CardMedia)(({theme}) => ({
  height: 180,
      padding: `${theme.spacing(2)} ${theme.spacing(2)} 0 ${theme.spacing(2)}`,
      backgroundPositionY: 'top',
      display: 'flex',
      flexShrink: 0,
      flexDirection: 'row',
}))

const StyledImgBox = styled(Box)(({theme}) => ({
    detailImageContainer: {
      padding: theme.spacing(0),
      '& img': {
        width: '100%',
      },
    },
  })
)

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
        <StyledImgBox>
          <img
            src={screen?.url || DefaultImg}
            alt={name}
            height="100%"
            style={smallVariantProperties}
          />
       </StyledImgBox> 
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
