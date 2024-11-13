import React from 'react'
import FeauturesCard from '../../components/FeauturesCard'
import { BsCollection, BsCloudDownload, BsCardHeading, BsPatchCheck, BsBootstrap } from "react-icons/bs";
import { IoMdCode } from "react-icons/io";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const features = [
    {
        id: 1,
        icon: <BsCollection />,
        title: "Fresh new layout",
        text: "With Bootstrap 5, we've created a fresh new layout for this template!"
    },
    {
        id: 2,
        icon: <BsCloudDownload />,
        title: "Free to download",
        text: "As always, Start Bootstrap has a powerful collectin of free templates."
    },
    {
        id: 3,
        icon: <BsCardHeading />,
        title: "Jumbotron hero header",
        text: "The heroic part of this template is the jumbotron hero header!"
    },
    {
        id: 4,
        icon: <BsBootstrap />,
        title: "Feature boxes",
        text: "We've created some custom feature boxes using Bootstrap icons!"

    },
    {
        id: 5,
        icon: <IoMdCode />,
        title: "Simple clean code",
        text: "We keep our dependencies up to date and squash bugs as they come!"
    },
    {
        id: 6,
        icon: <BsPatchCheck />,
        title: "A name you trust",
        text: "Start Bootstrap has been the leader in free Bootstrap templates since 2013!"
    },
]

function Features() {
    return (
        <>
            <Container className="my-2">
                <Row className=' mx-lg-4 my-4'>
                    {features.map(item => (
                        <Col className='my-4 px-4' key={item.id} xs={12} md={6} lg={4}>
                            <FeauturesCard
                                icon={item.icon}
                                title={item.title}
                                text={item.text}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}

export default Features