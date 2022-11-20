import React from 'react';
import { Button, Container, Image } from 'react-bootstrap';
import { FaArrowAltCircleRight, FaQuestion } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import sideImage from '../../assets/home_img.png';

const Home = () => {
    return (
        <div>
            <Container>
                <div className='row'>
                    <div className='col-md-6 col-sm-12 '>
                        <Image src={sideImage} className='my-2' fluid>
                        </Image>

                    </div>
                    <div className='col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center '>
                        <h1 className='text-center'>Hey!!WelCome To The best IT Career Course Via Online.</h1>
                        <h3 className='text-center text-warning'>We are Here To Provide You Best IT Course Training.</h3>

                        <h2 className='text-center'>Why Us <span> <FaQuestion className='text-danger' /></span></h2>



                        <Link to={'/courses'}>
                            <Button variant='danger' className='my-3 py-3'>Check Out Now <FaArrowAltCircleRight /> </Button>
                        </Link>

                    </div>

                </div>

            </Container>

        </div >
    );
};

export default Home;