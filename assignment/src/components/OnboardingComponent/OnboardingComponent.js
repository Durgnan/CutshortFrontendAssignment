import React, {useState} from 'react';
import StepperComponent from '../Stepper/StepperComponent'
import Button from '@mui/material/Button';
import {CheckCircleRounded, Person, Groups} from '@mui/icons-material';
import Color from '../utils/Color'
import { Card,Form,FormLabel, InputGroup,FormControl } from 'react-bootstrap'

const MainTitles = [
    "Welcome! First things first...",
    "Let's set up a home for all your work",
    "How are you planning to use Eden?",
    "Congratulations, {displayName}!"
];
const SecondaryTitles = [
    "You can always change them later.",
    "You can always create another workspace later.",
    "We'll streamline your setup experience accordingly",
    "You have completed onboarding, you can start using the Eden!"
]

const OnboardingComponent = () =>
{

    const [activeStep,incrementActiveStep] = useState(0);
    const [fullName,setFullName] = useState("")
    const [displayName,setDisplayName] = useState("")
    const [workspaceName,setWorkspaceName] = useState("")
    const [workspaceURL,setWorkspaceURL] = useState("")
    const [forMyself,setForMyself] = useState(true)

    const incrementStep = () => 
    {
        incrementActiveStep(activeStep+1)
    }

    const submitDetails = () => 
    {
        const result = `Full Name : ${fullName} \nDisplay Name : ${displayName} \nWorkspace Name : ${workspaceName} \nWorkspace URL : ${workspaceURL} \nFor Myself : ${forMyself}`
        console.log(result)
        alert(result)
    }

    


    return (
        <div>
            <StepperComponent activeStep={activeStep} />

            {activeStep === 3 && <div><br/><br/><br/><CheckCircleRounded style={{fontSize:50, color: Color.PURPLE,marginLeft:'48%'}}/></div>}
            
            <h1 className='mt-5' style={{color:Color.SLATE}}>{MainTitles[activeStep].replace('{displayName}',displayName)}</h1> 
            <h5 className='mt-2' style={{color:Color.DARK_GREY}}>{SecondaryTitles[activeStep]}</h5> 
            
            { activeStep === 0 && 
            <Form>

                <FormLabel className="FormControlText" htmlFor="fullName" style={{textAlign:'left !important'}}>Full Name</FormLabel>
                <InputGroup className="mb-3">
                    <FormControl required className="FormControlText" id='fullName' placeholder='Steve Jobs' type='text' value={fullName}  onChange={(event) => {setFullName(event.target.value)} }/>
                </InputGroup>
                <br /><br /><br />
                <FormLabel className="FormControlText" htmlFor="displayName">Display Name</FormLabel>
                <InputGroup className="mb-3">
                    <FormControl required className="FormControlText" id="displayName" placeholder='Steve' type='text' value={displayName} onChange={(event) => {setDisplayName(event.target.value)} }/>
                </InputGroup>
            </Form>}

            { activeStep === 1 && 
            <Form>
                <FormLabel className="FormControlText" htmlFor="workspaceName">Workspace Name</FormLabel>
                <InputGroup className="mb-3">
                    <FormControl required className="FormControlText" id="workspaceName" placeholder='Eden' type='text' value={workspaceName} onChange={(event) => {setWorkspaceName(event.target.value)} }/>
                </InputGroup>
                <br /><br /><br />
                <FormLabel className="FormControlText" htmlFor="workspaceURL">Workspace URL (Optional)</FormLabel>
                <InputGroup className="mb-3 ml-5 mr-5">
                    <InputGroup.Text style={{marginLeft:'30%'}}>
                    www.eden.com/
                    </InputGroup.Text>
                    <FormControl style={{marginRight:'30%'}}  id="workspaceURL" className="FormControlText" placeholder='Example' type='text' value={workspaceURL} onChange={(event) => {setWorkspaceURL(event.target.value)} }/>
                </InputGroup>
            </Form>}
            { activeStep === 2 &&
            <div className="FormControlText mt-3 mb-5">
                <Card style={{ marginLeft: '16%',marginRight: '8px',width: '12rem',float:'left',textAlign:'left', borderColor: forMyself? Color.PURPLE:Color.DARK_GREY }} onClick={()=> setForMyself(true)}>
                    <Card.Body>
                        <Person style={{color: forMyself? Color.PURPLE:Color.SLATE}}/><br/>
                        <Card.Title>For myself</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Write better. Think more clearly. Stay organized.</Card.Subtitle>
                    </Card.Body>
                </Card>
                <Card className="ml-5" style={{ width: '12rem',textAlign:'left', borderColor: !forMyself? Color.PURPLE:Color.DARK_GREY }} onClick={()=> setForMyself(false)}>
                    <Card.Body>
                        <Groups style={{color: !forMyself? Color.PURPLE:Color.SLATE}}/><br/>
                        <Card.Title>With my Team</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Wikis, docs, tasks and project, all in one place.</Card.Subtitle>
                    </Card.Body>
                </Card>
            </div>
            }

            {activeStep < 3 && <Button variant="contained" onClick={() => incrementStep()} style={{backgroundColor: Color.PURPLE,marginLeft:'43%'}}>Create Workspace</Button>}
            {activeStep === 3 && <Button variant="contained" style={{backgroundColor: Color.PURPLE,marginLeft:'43%'}} onClick={() => submitDetails()}>Launch {workspaceName}</Button>}

        </div>
    )
}

export default OnboardingComponent;