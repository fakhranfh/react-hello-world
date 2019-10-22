import React, {Component, Fragment} from 'react';
import './Product.css';
import CardProduct from "./CardProduct/CardProduct";
import {connect} from 'react-redux';
import {GlobalConsumer} from "../../../context/context";

class Product extends Component{
    componentDidMount() {
        document.title = 'Product';
    }

    render(){
        return(
            <Fragment>
                <p>Halaman Product</p>
                <div className="header">
                    <div className="logo">
                        <img src="https://etanee.id/img/content/img_logo_etanee_white.svg" alt="logo" />
                    </div>
                    <div className="trolley">
                        <img src="https://etanee.id/img/icon/ic_cart_white.svg" alt="" />
                        <div className="count">{this.props.state.totalOrder}</div>
                    </div>
                </div>
               <CardProduct/>
            </Fragment>
        );
    }
}

export default GlobalConsumer(Product);