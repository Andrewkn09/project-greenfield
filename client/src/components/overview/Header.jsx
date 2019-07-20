import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { fade, makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  navbar: {
    background: '#000042',
  },
  homeButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
}));

const ShieldIcon = props => {
  return (
    <SvgIcon {...props} viewBox="0 0 454 454">
      <path d="M387.514 66.486C344.639 23.612 287.634 0 227 0S109.361 23.612 66.486 66.486C23.612 109.361 0 166.366 0 227s23.612 117.639 66.486 160.514C109.361 430.388 166.366 454 227 454s117.639-23.612 160.514-66.486C430.388 344.639 454 287.634 454 227s-23.612-117.639-66.486-160.514zM227 434c-114.141 0-207-92.859-207-207S112.859 20 227 20s207 92.859 207 207-92.859 207-207 207z" />
      <path d="M227 50.677c-97.225 0-176.323 79.099-176.323 176.323S129.775 403.323 227 403.323 403.323 324.225 403.323 227 324.225 50.677 227 50.677zm0 332.646c-86.197 0-156.323-70.126-156.323-156.323S140.803 70.677 227 70.677 383.323 140.803 383.323 227 313.197 383.323 227 383.323z" />
      <path d="M227 101.354c-69.281 0-125.646 56.365-125.646 125.646 0 41.358 20.09 78.108 51.019 101.018.247.221.503.434.775.632.262.19.533.362.809.524 20.598 14.768 45.823 23.473 73.044 23.473 27.221 0 52.445-8.705 73.043-23.472.275-.162.547-.334.81-.525.272-.198.528-.411.775-.632 30.929-22.909 51.019-59.66 51.019-101.018-.002-69.281-56.367-125.646-125.648-125.646zm95.225 79.91H260.23l-19.161-58.971c35.821 4.788 66.022 27.589 81.156 58.971zM259.5 243.74l16.453 50.639-43.075-31.296c-1.753-1.273-3.815-1.91-5.878-1.91s-4.125.637-5.878 1.91l-43.075 31.296L194.5 243.74c1.339-4.12-.128-8.634-3.633-11.18l-43.076-31.297h53.245c4.332 0 8.172-2.79 9.511-6.91L227 143.715l16.453 50.639c1.339 4.12 5.179 6.91 9.511 6.91h53.245l-43.076 31.297c-3.505 2.545-4.972 7.059-3.633 11.179zm-46.569-121.448l-19.161 58.971h-61.995c15.134-31.381 45.335-54.182 81.156-58.971zM121.354 227c0-6.478.589-12.82 1.711-18.979l50.169 36.449-19.143 58.917c-20.16-19.251-32.737-46.378-32.737-76.387zm55.5 92.967L227 283.533l50.146 36.434c-14.928 8.084-32.01 12.68-50.146 12.68s-35.218-4.596-50.146-12.68zm123.055-16.581l-19.143-58.917 50.169-36.449c1.122 6.159 1.711 12.501 1.711 18.979 0 30.01-12.577 57.137-32.737 76.387z" />
    </SvgIcon>
  );
};

const CartIcon = props => {
  return (
    <SvgIcon {...props} viewBox="0 0 300.005 300.005">
      <path d="M182.936 76.966h-.002c0-18.516-15.066-33.58-33.58-33.58-18.516 0-33.58 15.064-33.58 33.58v11.671h67.162V76.966zM206.585 104.199h-8.09v10.911c2.498 2.179 4.113 5.351 4.113 8.93 0 6.57-5.325 11.897-11.894 11.897-6.564 0-11.894-5.327-11.894-11.897 0-3.577 1.611-6.749 4.113-8.927v-10.914h-67.162v10.911c2.5 2.181 4.113 5.351 4.113 8.93 0 6.57-5.327 11.897-11.894 11.897-6.57 0-11.894-5.327-11.894-11.897 0-3.577 1.613-6.751 4.113-8.93v-10.911h-8.09c-4.573 0-8.292 3.719-8.292 8.292v111.168c0 4.573 3.719 8.292 8.292 8.292h114.465c4.57 0 8.292-3.722 8.292-8.292V112.491c.001-4.573-3.721-8.292-8.291-8.292z" />
      <path d="M150 0C67.159 0 .002 67.162.002 150S67.159 300.005 150 300.005 300.003 232.841 300.003 150 232.841 0 150 0zm80.439 223.659c0 13.152-10.704 23.854-23.854 23.854H92.121c-13.152 0-23.854-10.701-23.854-23.854V112.491c0-13.152 10.701-23.854 23.854-23.854h8.09V76.966c0-27.098 22.046-49.142 49.142-49.142s49.142 22.046 49.142 49.142v11.671h8.09c13.15 0 23.854 10.701 23.854 23.854v111.168z" />
    </SvgIcon>
  );
};

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.homeButton}
            color="inherit"
            aria-label="Open drawer">
            <ShieldIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Vibranium
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'Search' }}
            />
          </div>
          <IconButton color="inherit">
            <CartIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
