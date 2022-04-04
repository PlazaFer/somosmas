import { useEffect, useState } from "react";
import useStyles from "./styles/HomeTitlesyles";
import { Box } from '@mui/material';
import { getOrganization } from "../../Services/Home";

const HomeTitle = () => {
  const classes = useStyles();

  const [title, setTitle] = useState();

  useEffect(() => {
    const getData = async () => {
      const { data } = await getOrganization();
      setTitle(data.welcome_text);
    };
    getData();
  }, []);

  return (
    <Box className={classes.container}>
      <Box className={classes.containerTitle}>
        <h1 className={classes.title}> {title} </h1>
      </Box>
    </Box>
  );
};

export default HomeTitle;
