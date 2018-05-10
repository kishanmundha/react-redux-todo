import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import withStyles from 'material-ui/styles/withStyles';

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
});

const Header = ({ title, classes }) => (
  <div>
    <AppBar>
      <Toolbar>
        <Typography variant="title" color="inherit" noWrap>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
    <div className={classes.toolbar} />
  </div>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
