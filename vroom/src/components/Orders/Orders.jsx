import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import axios from 'axios';


const Orders = (props)=> {
 const [order,setOrder] = useState([]);
    
    // const navigate = useNavigate();
    // navigate('/booking', { state: { username: 'user', password: '696' } });
    // const {state} = useLocation();
    // const { price } = state;
    // props.location.state
    // props.location.user
    // props.history.push('/booking', { price: price})
    const location = useLocation();
    console.log(location.state)
    useEffect(()=>{
        const handleOrders = async ()=> {
            const orderurl = `http://localhost:8080/api/order/getorders/${props.location.user.username}`;
            // const getorder = await axios.get(orderurl).then(response=>{
            //     return (
            //         setOrder(response.data)
            //     )
            // })

            handleOrders();

        }
    },[])
    console.log(props.location.price.username)
        return(
            <div>
        {
                order.map(o => {
                    return(
                        <div className="outermost">
                            <div className="orderouter">
                                <div className="orderflex">
                                    <div className="orderimage"></div>
                                    <div className="orderdetails">
                                        <div className="price"> 
                                        <h6>`vehicle ${o.price}`</h6>
                                        </div>
                                        <div className="orderdata">
                                            <h3>`customername ${o.customername}`</h3>
                                             <h6>`vehicle ${o.carname}`</h6>
                                             <h6>`vehicle ${o.bikrname}`</h6>
                                             <h6>`price ${o.price}`</h6>
                                        </div>
                                    </div>

                                 </div>    
                             </div>    
                         </div>
                    )
                })
        }
        </div>
    )
}
export default Orders;