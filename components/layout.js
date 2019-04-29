import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link'
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';

//libs
import Menu from '../libs/Menu'

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

class ResponsiveDrawer extends React.Component {
  state = {
    mobileOpen: false,
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  handleClick = (e) => {
    this.setState(state => ({ [e]: !state[e] }));
  };

  render() {
    const { classes, theme, children } = this.props;
    const drawer = (
      <div>
        <div className={classes.toolbar} >
          <Typography variant="h5" color="inherit">
            Responsive drawer
            </Typography>
        </div>
        <Divider />
        <List key={"list"}>
          {Menu.map((node, n) => {
            if (node.nodes === undefined) {
              return (
                <Link href={"/" + node.component} key={n + "link"}>
                  <ListItem button key={n + "menu"}>
                    {React.createElement(node.icon)}
                    <ListItemText inset primary={node.title} />
                  </ListItem>
                </Link>
              )
            } else {
              return (
                <div key={"div"+n}>
                  <ListItem button key={n + "menu"} onClick={this.handleClick.bind(null, node.dropdown)}>
                    {React.createElement(node.icon)}
                    <ListItemText inset primary={node.title} />
                    {this.state[node.dropdown] ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  <Collapse key={node.dropdown} in={this.state[node.dropdown]} timeout="auto" unmountOnExit>
                    <List key={n} component="div" disablePadding>
                      {node.nodes.map((subnode, n) => {
                        return (
                          <Link href={"/" + subnode.component} key={n + "sublink"}>
                            <ListItem button key={n + "submenu"}>
                              {React.createElement(node.icon)}
                              <ListItemText inset primary={subnode.title} />
                            </ListItem>
                          </Link>
                        )
                      })}
                    </List>
                  </Collapse>
                </div>
              )
            }
          })}
        </List>
      </div>
    );
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Responsive drawer
            </Typography>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {children}
        </main>
      </div>
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);

