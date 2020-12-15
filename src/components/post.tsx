import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { OutboundLink } from "gatsby-plugin-gtag";
import {
  Typography,
  Link as MuiLink,
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
  Snackbar,
  ListItemText,
} from "@material-ui/core";

import CustomMDXProvider from "./customMDXProvider";
import TwitterIcon from "./icons/twitter";
import LinkedInIcon from "./icons/linkedin";
import LinkIcon from "./icons/link";

import style from "../styles/post.module.css";

type Props = {
  title: string;
  path: string;
  coverImage: any;
  excerpt?: string;
  body: string;
  avatar: any;
};

const Post = ({ title, path, coverImage, excerpt, body, avatar }: Props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);

  const handleClickShare = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleShareTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      `${title} https://alexnault.dev${path} via @nault_alex`
    )}`;
    window.open(url, "_blank");
    setAnchorEl(null);
  };

  const handleShareLinkedIn = () => {
    const urlEncoded = encodeURI(
      `https://www.linkedin.com/shareArticle?mini=true&url=${`https://alexnault.dev${path}`}&title=${title}&summary=${excerpt}&source=LinkedIn`
    );

    window.open(
      urlEncoded,
      "_blank",
      "width=550,height=431,location=no,menubar=no,scrollbars=no,status=no,toolbar=no"
    );
    setAnchorEl(null);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setSnackbarOpen(true);
    setAnchorEl(null);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarOpen(false);
  };

  return (
    <article>
      <header>
        <Typography variant="h2" component="h1" className={style.title}>
          {title}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" paragraph>
          <b>{excerpt}</b>
        </Typography>
      </header>
      {coverImage && (
        <Img
          fluid={coverImage.childImageSharp.fluid}
          className={style.coverImage}
          alt="Post cover"
        />
      )}
      <CustomMDXProvider>
        <MDXRenderer>{body}</MDXRenderer>
      </CustomMDXProvider>
      <div className={style.actions}>
        <Button
          aria-controls="share-menu"
          aria-haspopup="true"
          color="primary"
          variant="contained"
          onClick={handleClickShare}
        >
          Share
        </Button>
        <Button
          component={OutboundLink}
          href={`https://github.com/alexnault/alexnault.dev/edit/master/src/posts/${path.replace(
            "/",
            ""
          )}.mdx`}
          variant="outlined"
          target="_blank"
          rel="noopener noreferrer"
        >
          Edit
        </Button>
        <Menu
          id="share-menu"
          keepMounted
          anchorEl={anchorEl}
          open={!!anchorEl}
          onClose={handleCloseMenu}
        >
          <MenuItem onClick={handleShareTwitter}>
            <ListItemIcon>
              <TwitterIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Twitter" />
          </MenuItem>
          <MenuItem onClick={handleShareLinkedIn}>
            <ListItemIcon>
              <LinkedInIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="LinkedIn" />
          </MenuItem>
          <MenuItem onClick={handleCopyLink}>
            <ListItemIcon>
              <LinkIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Copy link" />
          </MenuItem>
        </Menu>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={2000}
          onClose={handleCloseSnackbar}
          message="Link copied"
        />
      </div>
      <div className={style.author}>
        <Img
          fixed={avatar.childImageSharp.fixed}
          className={style.avatar}
          alt="Alex Nault"
        />
        <div>
          <Typography>
            <b>
              {"By "}
              <MuiLink component={Link} to="/">
                Alex Nault
              </MuiLink>
            </b>
          </Typography>
          <Typography>I write bite-sized articles for developers</Typography>
        </div>
      </div>
    </article>
  );
};

export default Post;
