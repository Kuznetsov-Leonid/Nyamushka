/**
 * create by Kuznetsov Leonid
 */

import React from "react";
import './style.css';

/**
 * Customizable component with a constructor of displayed data
 * 
 * @param {FIRST_TITLE, NAME_TITLE, PORTIONS, MOUSE, MESSAGE, WEIGHT, PRESENT} props 
 * @returns 
 * <CardItem
 * FIRST_TITLE = param(txt)
 * NAME_TITLE  = param(txt)
 * PORTIONS    = param(num)
 * MOUSE       = param(num)
 * PRESENT     = param(txt)
 * MESSAGE     = param(txt)
 * WEIGHT      = param(num)
 * />
 */
const CardItem = (props) => {
    const FIRST_TITLE = props.FIRST_TITLE
    const NAME_TITLE  = props.NAME_TITLE
    const PORTIONS    = props.PORTIONS
    const MOUSE       = props.MOUSE
    const PRESENT     = props.PRESENT
    const MESSAGE     = props.MESSAGE
    const WEIGHT      = props.WEIGHT
    return(
        <>
            <div class="card-border blu">
                <div class="card">
                    <div className = "card-container">
                        <h6>{FIRST_TITLE}</h6>
                        <h1>Нямушка</h1>
                        <h3>{NAME_TITLE}</h3>
                    </div>
                    <div className = "card-sub-container">
                        <h6>
                            <span>{PORTIONS}</span>&nbsp;порций <br /> 
                            <span>{MOUSE}</span>&nbsp;{PRESENT} {MESSAGE}
                        </h6>
                    </div>
                    <div className = "card-img"></div>
                    <div className = "Oval blu">
                        <div className = "weight">
                            <h1>{WEIGHT}</h1>
                            <h6>кг</h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export {
    CardItem
} 

