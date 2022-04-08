import { React, useEffect, useState } from "react";
import { Card, Button, FormControl } from "react-bootstrap";
import Checkout from "./Checkout";

const Shop = () => {
    const [cart, setCart] = useState([]);
    const [cartClicked, setCartClicked] = useState(false);
    const [cartLength, setCartLength] = useState(cart.length);

    function addToCart(e, food) {
        for (let i = 0; i < e.target.nextElementSibling.value; i++) {
            setCart((prevCart) => [...prevCart, food]);
        }
    }

    function emptyCart() {
        setCart([]);
        setCartClicked(0);
    }

    useEffect(() => {
        setCartLength(cart.length);
    }, [cart]);

    return (
        <div>
            {cartClicked ? (
                <Checkout
                    cartLength={cartLength}
                    cart={cart}
                    setCartClicked={setCartClicked}
                    emptyCart={emptyCart}
                />
            ) : null}
            <div
                className="shop-page"
            >
                <div
                    onClick={() => {
                        setCartClicked(!cartClicked);
                    }}
                    className="cart-icon"
                >
                    <span>{cart.length}</span>
                    <h3>CART</h3>
                </div>
                {food.map((food) => {
                    return (
                        <Card className="food-container" key={food.id} id={food.id}>
                            <Card.Img variant="top" src={food.image} />
                            <Card.Body style={{ position: "relative", bottom: "80px" }}>
                                <h1>{food.name}</h1>
                                <Card.Text>{food.description}</Card.Text>
                                <div style={{ display: "flex", gap: "10px" }}>
                                    <Button
                                        className="add-to-cart"
                                        onClick={(e) => addToCart(e, food)}
                                    >
                                        Add to Cart
                                    </Button>
                                    <FormControl
                                        min="0"
                                        className="amount-input"
                                        style={{ width: "55px" }}
                                        type="number"
                                        defaultValue="1"
                                    ></FormControl>
                                </div>
                            </Card.Body>
                            <div>
                                <div
                                    style={{
                                        height: "1px",
                                        width: "100%",
                                        background: "white",
                                    }}
                                ></div>
                            </div>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
};

export default Shop;