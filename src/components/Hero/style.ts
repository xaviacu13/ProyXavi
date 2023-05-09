import { Theme } from '@mui/material'
// import { makeStyles } from '@mui/styles'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  hero: {
    paddingBottom: 10,
    marginBottom: 20,
  },
  avatar: {
    marginTop: -35,
    marginLeft: 20,
  },
  image: {
    alignContent: 'center',
    [theme.breakpoints.down('sm')]: {
      objectFit: 'cover',
    },
  },
}))

export default useStyles