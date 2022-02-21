import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Color from '../utils/Color';

const StepperComponent = ({activeStep}) => 
{
    const steps = ['Step1','Step2','Step3','Step4'];

    return (
        <Box >
            <br/><br/><br/><br/>
            <Stepper activeStep={activeStep} alternativeLabel style={{marginLeft: '25%', marginRight:'25%'}}>
                {steps.map((label) => (
                <Step key={label} style={{borderColor: Color.PURPLE}}>
                    <StepLabel></StepLabel>
                </Step>
                ))}
            </Stepper>
        </Box>
    )
}

export default StepperComponent;