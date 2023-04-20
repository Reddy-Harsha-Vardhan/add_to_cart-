/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-undef */
import React, { useContext } from "react";
import "./card.css";
import { Link, NavLink } from "react-router-dom";

// import { Link } from "react-router-dom";



export const Cards: React.FC<{
    name: string;
    price: number;
    model: string;
    discount: number;
}> = (props) => {

    // const selected = useContext(Globaldata);
    // const selecteditem = selected[0].selected;
    // const setselected = selected[0].setSelected;

    // const addtocart = () => {
    //     setselected([...selecteditem, props]);
    // }

    return (
        <div className="card d-flex m-auto">
            <div className="card-header "></div>
            <div className="card-body ">
                <div>name = {props.name}</div>
                <div>price= {props.price}</div>
                <div>model = {props.model}</div>
                <div>discount = {props.discount}</div>

                <Link to='/cart' type="button">Add to Cart</Link>
            </div>
        </div>
    );
};