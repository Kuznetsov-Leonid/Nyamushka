/**
 * create by Kuznetsov Leonid
 */

import React from "react";
import { CardItem } from "../Card/CardItem";
import { Row, Col } from 'react-bootstrap';
import { DATA } from '../../data/data';



const Main = () => {

    /**
     * 
     * @param {*} props 
     * @returns 
     */
    const Item = (props) => {
        const nameTitle    = props.nameTitle
        const portions     = props.portions
        const mous         = props.mous
        const present      = props.present
        const message      = props.message
        const weight       = props.weight
        const availability = props.availability
        return(
            <>
                <Col>
                    <CardItem
                        FIRST_TITLE  = 'Сказочное заморское яство'
                        NAME_TITLE   = {nameTitle.nameTitle}
                        PORTIONS     = {portions.portions}
                        MOUSE        = {mous.mous}
                        PRESENT      = {present.present}
                        MESSAGE      = {message.message}
                        WEIGHT       = {weight.weight}
                        AVAILABILITY = {availability.availability}
                    />
                </Col>
            </>
        );
    }

    const ListItem = (props) => {
        const data  = props.data
        const items = data.map((item) =>{
            return <Item 
                        key          = {item.id}
                        nameTitle    = {item}
                        portions     = {item}
                        mous         = {item}
                        present      = {item}
                        message      = {item}
                        weight       = {item}
                        availability = {item}
                    />
        })
        return(
            <>
                <Row>
                    {items}  
                </Row>
            </>
        );
    }

    return(
        <>
            <ListItem data = {DATA}/>
        </>
    );
}
export default Main