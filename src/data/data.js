import person01 from '../assets/person-1.png';
import person02 from '../assets/person-2.png';
import person03 from '../assets/person-3.png';
export const swiperObj = [
    {
        id: 1,
        name: 'Andrei Serdulet',
        jobTitle: 'Developer',
        description: 'I love testing',
        img: person01
    },
    {
        id: 2,
        name: 'Sorin Rabbit Blaga',
        jobTitle: 'Developer',
        description: 'I love testing more than the guy in the left',
        img: person02
    },
    {
        id: 3,
        name: 'Andrei Rovena',
        jobTitle: 'Senior Tester',
        description: 'Testing is awesome',
        img: person03,
    },
    {
        id: 4,
        name: 'EREH GUB',
        jobTitle: 'Definetly not a tester',
        description: `Read my name in reverse`,
        img: 'image'
    },
]


export const listObj = [
    {
        id: 1,
        label: `Always know what to test. Make sure you have the software requirements and acceptance criteria ready beforehand,`
    },
    {
        id: 2,
        label: `Make sure you have the necessary  about the part of the application you are testing. If you are not sure, ask business analyst, project manager, mentor, co-worker... 
        You <strike>MUST</strike> know how the application is suppose to be working,`
    },
    {
        id: 3,
        label: `Make sure you have the test data at you disposal - you will need it to test the software, any kind of software and any kind of test,
`
    },
    {
        id: 4,
        label: `Always try with exploratory testing - go through the part you are testing a couple of times to get yourself familiar with the feature you're testing,`
    },
    {
        id: 5,
        label: `Write a happy path test with appropriate test steps and descriptions,`
    },
    {
        id: 6,
        label: `Add validation testing and try to think of a scenario (several test steps) which could potentiality break the functionality,`
    },
    {
        id: 7,
        label: `When the feature is not working as it's suppose to work, that is called a "bug". Make sure you log the bug and add the precise steps so the developers can reproduce it,`
    },
    {
        id: 8,
        label: `Once the bug is fixed, always re-test it.`
    },
]
export const descriptionBug03 = `Before we can proceed with any kind of testing it is important to understand what and how to test it.`
export const titleBug03 = 'Testing procedures';
export const titleBug02 = 'Testing Discipline ';
export const infoDescriptionBug02 = `We use this space as the entry point for the fresh testers. We introduce manual testing and parts of automation as well. As a part of on-boarding process for our newly joined Endavans we have prepared several learning environments. We are using those sand-boxed environments to introduce the testing discipline to every new comer. There is a brief introduction to manual and automated testing, furthermore we explain some of the most common expressions, key words and technologies we use at our everyday tasks.`;