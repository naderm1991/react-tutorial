import React from 'react';

function Product(props) {
    const handleClick = function handleClick() {
        alert(props.product.name);
    };

    return (
        <div>
            <h2 onClick={handleClick}>{props.product.name}</h2>
            <p>{props.product.price
                .toLocaleString("en-US",{
                    style:"currency",
                    currency:"USD"
                })} -
                {props.product.description}
            </p>
        </div>
    );
};

export default Product;