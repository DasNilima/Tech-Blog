import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/160-1606634_macbook-pro.jpg);
    width: 100%;
    height: 50vh;
    background-position: 25% 45%;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {
    return (
        <Box>
            <Banner />
            <Wrapper>
                <Typography variant="h3">Tech-Blog</Typography>
                <Text variant="h5">I'm a Software Engineer based in USA. 
                    I've built websites, desktop  and mobile applications.<br />
                    If you are interested, you can view some of my favorite projects here
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/DasNilima" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Text>
                <Text variant="h5">
                    Need something built or simply want to have chat? Reach out to me on
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.linkedin.com/in/dnilima/" color="inherit" target="_blank">
                            <LinkedIn />
                        </Link>
                    </Box>  
                        or send me an Email 
                        <Link href="nilima.unlv@gmail.com" target="_blank" color="inherit">
                            <Email />
                        </Link>.
                </Text>
            </Wrapper>
        </Box>
    )
}
export default About;