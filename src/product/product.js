import {productData} from './productData'
export default function Product(){
    return(
        <div>
            <h2>Product table</h2>

           <form>
           Name: <input type="text" name="name"/><br/>
           Description: <input type="textarea" name="desc"/><br/>
           Price: <input type="text" name="price"/><br/>
           Quantity: <input type="text" name="quantity"/><br/>
           <button type="submit"> Add Product</button>
           </form>

           <br/><br/>
            <table>
                <thead>
                    <tr>
                    <td>
                        ID
                    </td>
                        <td>
                            Name
                        </td>
                        <td>
                            Description
                        </td>
                        <td>
                            Price
                        </td>
                        <td>Quantity</td>
                    </tr>
                </thead>
                <tbody>
                    {productData.map((item)=>{
                        return(
                            <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.desc}</td>
                            <td>{item.price}</td>
                            <td>{item.quantity}</td>
                        </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}