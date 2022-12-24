import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    width: 100%;
    background: url(https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80) center/40% repeat-x #000;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 70px;
    background:  #ffc34d;
    line-height: 1;
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    margin: 10px;
    background:  #ffc34d;
`;

const Banner = () => {
    
    return (
        <Image>
            <Heading>TECH-BLOG</Heading>
            <SubHeading>STAY CURIOUS & CREATE YOU SPACE</SubHeading>
        </Image>
    )
}

export default Banner;