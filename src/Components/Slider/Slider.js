import React, { useEffect } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useSelector, useDispatch } from 'react-redux'
import { fetchSlides, selectAllSlides, selectSlidesStatus } from '../../redux/slides/slidesSlice'
import parse from 'html-react-parser';


// MUI
import { IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import MobileStepper from '@mui/material/MobileStepper'
import { useTheme } from '@mui/material/styles'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'

// Styles
import useStyles from './styles'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const Slide = ({ title, description, imgLabel, imgSrc }) => {
  const classes = useStyles()

  return (
    <>
      <Box
        component="img"
        className={classes.sliderImage}
        src={imgSrc}
        alt={imgLabel}
      />
      <Box className={classes.textContainer}>
        <Typography variant="h6" className={classes.textTitle}>
          {title}
        </Typography>
        <Typography variant="caption" className={classes.textDesc}>
          {parse(description)}
        </Typography>
      </Box>
    </>
  )
}

// Principal component
const Slider = () => {
  const dispatch = useDispatch()
  const {slides} = useSelector(state =>state.slides)

  // const slidesLimited = slides.slice(0, 3);

  useEffect(() => {
      dispatch(fetchSlides())
  }, []);

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = slides?.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleStepChange = (step) => {
    setActiveStep(step)
  }


  const classes = useStyles()

  return (
    <Box className={classes.containerGeneral}>
      <AutoPlaySwipeableViews
        enableMouseEvents
        onChangeIndex={handleStepChange}
        index={activeStep}
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        interval={50000000000000000}
      >
        {slides.map((slideData) => {
          return (
            <Slide
              key={slideData.id}
              imgLabel={slideData.name}
              description={slideData.description}
              title={slideData.name}
              imgSrc={slideData.image}
            />
          )
        })}
      </AutoPlaySwipeableViews>

      {/* Slider buttons */}
      <IconButton
        className={classes.slideButtonLeft}
        size="medium"
        onClick={handleBack}
        disabled={activeStep === 0}
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        className={classes.slideButtonRight}
        size="medium"
        onClick={handleNext}
        disabled={activeStep === maxSteps - 1}
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>

      {/* Slider dots */}
      <MobileStepper
        className={classes.sliderDots}
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
      />
    </Box>
  )
}

export default Slider
