import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles'; //vs mui/styles
import { colors } from '@style/theme';


export const StyledCard = styled(Paper)<{
    minHeight?: number, minWidth?: number,
    paddingY?: number, paddingX?: number, color?: string
}>(({ theme, minWidth, minHeight, paddingX, paddingY, color }) => ({
    backgroundColor: theme.palette.common.white,
    borderRadius: '20px',
    borderLeft: `solid 17px ${colors.primaryGreenBlue}`,
    padding: theme.spacing(paddingY ?? 18, paddingX ?? 16),
    minHeight: theme.spacing(minHeight ?? 118),
    marginTop: theme.spacing(8),
    color: color ?? 'black'
}))