import { Box, CircularProgress, styled } from '@mui/material'
import { RequestStatus } from '@typedefs/types'
import React from 'react'



const Root = styled(Box)(({theme}) => ({

    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}))

export type LoadingComponentType = {
  children?: React.ReactNode
  reqStatusLoading: RequestStatus | boolean
  variant?: 'full' | 'small'
  style?: any
  loaderSize?: string | number
}

const LoadingComponent = ({
  reqStatusLoading,
  children,
  variant = 'full',
  loaderSize = '3rem',
  style,
}: LoadingComponentType) => {

  return reqStatusLoading === 'PENDING' || reqStatusLoading === true ? (
    <Root

      sx={{height: variant==='full'?'100vh': 'auto' }}
      style={{...style}}>
      <CircularProgress size={loaderSize} />
    </Root>
  ) : (
    <>{children}</>
  )
}

export default LoadingComponent
