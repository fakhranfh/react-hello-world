import React, {Component} from 'react';
import Counter from "./Counter";

class CardProduct extends Component{
    render(){
        return(
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="https://picsum.photos/id/300/200" alt="foto" />
                </div>
                <p className="product-title">Ginjal KW 90</p>
                <p className="product-price">Rp99.999.999</p>
                <Counter/>
            </div>
        );
    }
}

export default CardProduct;