import { useContext } from "react";
import { CartContext } from "../cartContext";
import CartCard from "./cartCard";

// cart summary component which includes cart list as table
const CartSummary = ()=>{
    const {cartItems, getCartTotal} = useContext(CartContext);

    return (
        <>
            <div className="container">
                <div className="row d-flex mt-3">
                    <div className="col">
                        {cartItems.length === 0? <h2 className="text-center">Cart is Empty</h2>:
                        <div className="table-responsive">
                            <table className="table table-secondary">
                                <thead>
                                    <tr>
                                        <th scope="col" className="text-center">Cart Item</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col" className="text-nowrap">Unit Price</th>
                                        <th scope="col">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.map((product) => (
                                        <CartCard product = {product} key={product.id} />
                                    ))}
                                </tbody>
                            </table>
                        </div>}
                        {/* card showing subtotal,shipping and total cost of items in cart */}
                        <div className="card mb-2">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                        <div className="d-flex justify-content-between">
                                            <p>Sub Total:</p>
                                            <p className="fs-5">&#x20B9;{getCartTotal()}</p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p>Shipping:</p>
                                            <p>Free</p>
                                        </div>
                                        <hr />
                                        <div className="d-flex justify-content-between">
                                            <p>Total:</p>
                                            <p className="fs-5">&#x20B9;{getCartTotal()}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartSummary;