import React from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

// MUI
import Button from "@mui/material/Button";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MobileStepper from "@mui/material/MobileStepper";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

// Images
import pencils from "./images/pencils.png";
import kids from "./images/kids.png";
import crayolas from "./images/crayolas.png";

// Styles
import useStyles from "./styles/sliderStyles.js";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Slide = ({
	imgLabel = "imageLabel",
	imgSrc = null,
}) => {
	const classes = useStyles();

	return (
		<Box className={classes.sliderContainer}>
			{imgSrc ? (
				<img className={classes.sliderImage} src={imgSrc} alt={imgLabel} />
			) : null}
			
		</Box>
	);
};

// Data to get from anyplace
const defaultSliderData = [
	{
		id: 1,
		name: "test2",
		image: pencils,
	},
	{
		id: 2,
		name: "test3",
		image: kids,
	},
	{
		id: 3,
		name: "test4",
		image: crayolas,
	},
];

// Principal component
const Slider = ({ slidersData = defaultSliderData }) => {
	const classes = useStyles();
	const theme = useTheme();
	const [activeStep, setActiveStep] = React.useState(0);
	const maxSteps = slidersData.length;

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleStepChange = (step) => {
		setActiveStep(step);
	};

	return (
		<>
			<AutoPlaySwipeableViews
				enableMouseEvents
				onChangeIndex={handleStepChange}
				index={activeStep}
				axis={theme.direction === "rtl" ? "x-reverse" : "x"}
				interval={5000}>
				{slidersData.map((slideData) => {
					return (
						<Slide
							key={slideData.id}
							imgLabel={slideData.name}
							imgSrc={slideData.image}
						/>
					);
				})}
			</AutoPlaySwipeableViews>
			<Container className={classes.arrows}>
				<MobileStepper
					steps={maxSteps}
					position="static"
					activeStep={activeStep}
					nextButton={
						<Button
							size="small"
							color="secondary"
							onClick={handleNext}
							disabled={activeStep === maxSteps - 1}>
							{theme.direction === "rtl" ? (
								<KeyboardArrowLeft />
							) : (
								<KeyboardArrowRight />
							)}
						</Button>
					}
					backButton={
						<Button
							size="small"
							color="secondary"
							onClick={handleBack}
							disabled={activeStep === 0}>
							{theme.direction === "rtl" ? (
								<KeyboardArrowRight />
							) : (
								<KeyboardArrowLeft />
							)}
						</Button>
					}
				/>
			</Container>
		</>
	);
};

export default Slider;
