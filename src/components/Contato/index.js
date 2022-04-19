import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import Seletor from './components/selector'
import { Background, Title } from './style'

export default function() {
    return(
        <Background>
            <Container className='mt-4'>
            <Row>
                <Col>
                <Title>
                <h1>Contato</h1>
                <h2>Faça parte da nossa órbita</h2>
                </Title>
                </Col>
            </Row>
            <Row className='mt-4'>
                <Col md={12}>
                    <Seletor></Seletor>
                </Col>
            </Row>
        </Container>
        </Background>
    )
}