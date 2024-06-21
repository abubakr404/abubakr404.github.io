import { FaExpand, FaXmark } from "react-icons/fa6";
import { useState } from "react";
import { styled } from "@mui/system";
import {
  Box,
  Button,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
} from "@mui/material";

// Styled components
const PostCard = styled(Card)(({ theme, isZoomed }) => ({
  background: theme.palette.background.default,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  ...(isZoomed && {
    position: "fixed",
    zIndex: 11,
    bottom: "calc(52% - var(--header-height) / 2)",
    right: "50%",
    transform: "translate(50%, 50%)",
    width: "95%",
    maxHeight: "75vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: `2px solid ${theme.palette.divider}`,
    backgroundColor: "#151f3894",
  }),
}));

const PostImage = styled(CardMedia)(({ theme, isZoomed }) => ({
  cursor: isZoomed ? "zoom-out" : "zoom-in",
  borderRadius: `${theme.shape.borderRadius} ${theme.shape.borderRadius} 0 0`,
  ...(isZoomed && {
    maxWidth: "40%",
    borderRadius:
      "0 0 calc(var(--main-border-radius) - 0.0625rem) calc(var(--main-border-radius) - 0.0625rem)",
    border: `1px solid ${theme.palette.divider}`,
  }),
}));

const PostContent = styled(CardContent)(({ theme, isZoomed }) => ({
  overflow: isZoomed ? "auto" : "initial",
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
}));

const CloseButton = styled(IconButton)(({ theme, isZoomed }) => ({
  display: isZoomed ? "block" : "none",
  position: "absolute",
  left: "calc(100% - 3.5rem)",
  padding: theme.spacing(1),
  bottom: "100%",
  backgroundColor: "#15213f",
  borderRadius: theme.shape.borderRadius,
  "&:hover": {
    backgroundColor: theme.palette.common.black,
  },
}));

const Post = ({ postImg, postTitle, postDetails, postDate }) => {
  const [isZoomed, setIsZoom] = useState(false);

  return (
    <PostCard isZoomed={isZoomed}>
      <Box>
        <CloseButton isZoomed={isZoomed} onClick={() => setIsZoom((prevData) => !prevData)}>
          <FaXmark />
        </CloseButton>
        <PostImage
          component="img"
          image={postImg}
          alt=""
          isZoomed={isZoomed}
          onClick={() => setIsZoom((prevData) => !prevData)}
        />
        <PostContent isZoomed={isZoomed}>
          <Typography variant="h5" title={postTitle} noWrap>
            {postTitle}
          </Typography>
          <Typography variant="body2" noWrap>
            {postDetails}
          </Typography>
          <Typography variant="body2" noWrap title={new Date(postDate).toLocaleString()}>
            <small>{new Date(postDate).toLocaleString()}</small>
          </Typography>
        </PostContent>
      </Box>
      <CardActions>
        <Button onClick={() => setIsZoom((prevData) => !prevData)} startIcon={<FaExpand />}>
          Read More
        </Button>
      </CardActions>
    </PostCard>
  );
};

export default Post;
