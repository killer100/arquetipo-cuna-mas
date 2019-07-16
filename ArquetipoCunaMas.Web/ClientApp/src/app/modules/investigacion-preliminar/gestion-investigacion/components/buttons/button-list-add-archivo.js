import React from "react";
import Fab from "@material-ui/core/Fab";
import { red, blue, green, orange } from "@material-ui/core/colors";
import Icon from "@material-ui/core/Icon";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

const PdfFabButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(red["A200"]),
    backgroundColor: red["A200"],
    "&:hover": {
      backgroundColor: red["A700"]
    }
  }
}))(Fab);

const VideoFabButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
    "&:hover": {
      backgroundColor: blue[700]
    }
  }
}))(Fab);

const PhotoFabButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(green[700]),
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700]
    }
  }
}))(Fab);

const AudioFabButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(orange[800]),
    backgroundColor: orange[500],
    "&:hover": {
      backgroundColor: orange[700]
    }
  }
}))(Fab);

const ButtonListAddArchivo = () => {
  const classes = useStyles();
  return (
    <>
      <Tooltip title="Subir Pdf" aria-label="Add" placement="top">
        <PdfFabButton aria-label="Pdf" className={classes.margin} size="small">
          <Icon>insert_drive_file</Icon>
        </PdfFabButton>
      </Tooltip>
      <Tooltip title="Subir Video" aria-label="Add" placement="top">
        <VideoFabButton aria-label="Video" className={classes.fab} size="small">
          <Icon>videocam</Icon>
        </VideoFabButton>
      </Tooltip>
      <Tooltip title="Subir Imagen" aria-label="Add" placement="top">
        <PhotoFabButton
          aria-label="Imagen"
          className={classes.margin}
          size="small"
        >
          <Icon>insert_photo</Icon>
        </PhotoFabButton>
      </Tooltip>
      <Tooltip title="Subir Audio" aria-label="Add" placement="top">
        <AudioFabButton aria-label="Audio" className={classes.fab} size="small">
          <Icon>volume_up</Icon>
        </AudioFabButton>
      </Tooltip>
    </>
  );
};

export default ButtonListAddArchivo;
