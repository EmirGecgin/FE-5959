import React from 'react'
import Card from 'react-bootstrap/Card';
import styles from '../components/FeatureCard.module.css'


function FeauturesCard({ id, icon, title, text }) {
    return (
        <Card className=" text-center bg-dark text-white rounded-3 border-0 h-100 px-3" >
            <Card.Body >
                <div className={`${styles.icon}`}>{icon}</div>
                <div className='my-3'>
                    <Card.Title><h4 className='fw-bold'>{title}</h4></Card.Title>
                    <Card.Text><p className=' fw-light'>{text}</p></Card.Text>
                </div>
            </Card.Body>
        </Card >
    )
}

export default FeauturesCard