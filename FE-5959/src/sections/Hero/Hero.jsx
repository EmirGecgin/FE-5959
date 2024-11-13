import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
function Hero() {
    return (
        <>
            <div className='py-3'>
                <Container className='py-5 px-lg-5'>
                    <div className='text-center bg-dark text-white rounded-3 p-5 mx-2'>
                        <div className='m-5 py-2'>
                            <h1 className="display-5 fw-bold">A warm welcome!</h1>
                            <p className="fs-4 lead">Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
                            <Button variant="primary" size="lg">
                                Call to action
                            </Button>
                        </div>
                    </div>

                </Container>
            </div>
        </>
    )
}

export default Hero