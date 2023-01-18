import { Grid } from '@mui/material';

//components
import Banner from './Banner';
import Categories from './Categories';
import Blogs from './Blogs';
import Header from './Header';

const Home = () => {

    return (
        <>
            <Header />
            <Banner />
            <Grid container>
                <Grid item lg={2} xs={12} sm={2}>
                    <Categories />
                </Grid>
                <Grid container item xs={12} sm={10} lg={10}>
                    <Blogs />
                </Grid>
            </Grid>
        </>
    )
}


export default Home;

