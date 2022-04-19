import React from 'react';
import { Tab, Row, Col, Nav, Sonnet } from 'react-bootstrap';
import './style.css';

export default function Window(props) {
    return(
        <div className='box'>
            <div className='window'>
                <div className='window-head'>
                    <div className='window-head-balls'>
                    <div className='red-ball'></div>
                    <div className='yellow-ball'></div>
                    <div className='green-ball'></div>
                    </div>
                </div>
                <div className='window-content'>
                    <h2>{props.title}</h2>
                    <h6>Telefone</h6>
                </div>
            </div>
        </div>
    )
}