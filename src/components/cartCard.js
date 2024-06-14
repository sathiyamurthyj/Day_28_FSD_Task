import { useContext } from "react";
import { CartContext } from "../cartContext";

// item card in cart page summary
const CartCard = ({product}) => {
   const {removeFromCart, updateItemQuantity} = useContext(CartContext);

   const options = [1,2,3,4,5];
   // select option handler to update item quantity
   const optionHandler = (e) => {
    const updatedProduct = {...product,quantity:e.target.value};
    updateItemQuantity(updatedProduct)
   }

   // delete handler to remove item from cart  
   const deletehandler = () =>{
        removeFromCart(product);
   }

    return (
        <>
            <tr>
                <th scope="row">
                    <div className="d-flex align-items-center">
                        <img src={product.thumbnail} className="img-fluid" style={{width:"120px"}} alt={product.name} />
                        <div className="flex-column ms-4">
                            <p className="mb-2">{product.title}</p>
                            <p className="mb-0">{product.description}</p>
                        </div>
                    </div>
                </th>
                <td className="align-middle">
                    <div className="d-flex flex-row">
                        <select className="form-select" onChange={optionHandler} value={product.quantity} style={{width:"auto"}}>
                            {options.map((option,index)=>(
                                <option key={index} value={option}>{option}</option>
                            ))}
                        </select>
                    </div>
                </td>
                <td className="align-middle">
                    <div className="d-flex flex-row">
                        <p className="mb-0 p-2">&#x20B9;{product.price}</p>
                    </div>
                </td>
                <td className="align-middle">
                    <div className="d-flex flex-column">
                            <p className="mt-4 p-2">&#x20B9;{product.price*product.quantity}</p>
                            <button type="button" className="btn border-0 text-danger" onClick={deletehandler} >Remove</button>                        
                    </div>
                </td>
            </tr>
        </>
    )
}

export default CartCard;