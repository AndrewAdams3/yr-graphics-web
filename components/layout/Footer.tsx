import { makeStyles, withStyles, Grid, Box, Typography, List, ListItem, ListItemText, Divider } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  footer: {
    width: "100%",
    backgroundColor: theme.palette.secondary.main,
    textAlign: "center",
    paddingTop: "1rem"
  },
  container: {
    width: "80%",
    margin: "auto"
  },
  para: {
    textAlign: 'left',
    color: theme.palette.grey[400],
    fontSize: "1em"
  },
  title: {
    textAlign: 'left',
    color: "white",
  },
  gutter: {
    padding: 0
  },
  listItemText: {
    margin: 0,
    textAlign: 'left',
    color: theme.palette.grey[400],
    fontSize: "1em"
  },
  list: {
    padding: 0
  }
}))

const LinkItemStyle = withStyles({
  noGutter: {
    padding: 0
  }
})

//@ts-ignore
const FooterListItem = LinkItemStyle(({ children, classes }) => {
  return (
    <ListItem classes={{ gutters: classes.noGutter }}>{children}</ListItem>
  )
})

export default function Footer() {
  const classes = useStyles()
  return (<>
    <footer className={classes.footer}>
      <Grid container spacing={1} className={classes.container}>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h6" className={classes.title}>About</Typography>
            <Typography className={classes.para}>
              EcoGraphicPrints is an awesome new marketplace where customers can shop for unique tshirts knowing that each one purchase will be supporting an awesome cause!
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box>
            <Typography variant="h6" className={classes.title}>Categories</Typography>
            <List dense className={classes.list}>
              <FooterListItem>
                <ListItemText className={classes.listItemText} primary="Water" />
              </FooterListItem>
              <FooterListItem>
                <ListItemText className={classes.listItemText} primary="Animals" />
              </FooterListItem>
              <FooterListItem>
                <ListItemText className={classes.listItemText} primary="Air" />
              </FooterListItem>
              <FooterListItem>
                <ListItemText className={classes.listItemText} primary="Labor" />
              </FooterListItem>
            </List>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box>
            <Typography variant="h6" className={classes.title}>Quick Links</Typography>
            <List dense className={classes.list}>
              <FooterListItem>
                <ListItemText className={classes.listItemText} primary="About Us" />
              </FooterListItem>
              <FooterListItem>
                <ListItemText className={classes.listItemText} primary="Contact Us" />
              </FooterListItem>
              <FooterListItem>
                <ListItemText className={classes.listItemText} primary="Shop" />
              </FooterListItem>
              <FooterListItem>
                <ListItemText className={classes.listItemText} primary="Get Involved" />
              </FooterListItem>
            </List>
          </Box>
        </Grid>
      </Grid>
      <Divider style={{ width: "80%", margin: "1rem", marginLeft: "auto", marginRight: "auto", backgroundColor: "white" }} />
      <Box width={"80%"} margin="auto" paddingBottom=".5rem">
        <Typography variant="body2" align="left" className={classes.para}>Copyright claims here 2020</Typography>
      </Box>
    </footer>
    <style jsx>
      {`
      .site-footer {
        
      }  
    `}
    </style>
  </>
  )
}