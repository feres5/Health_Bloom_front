import OrderItem from "./OrderItem";

const OrderList = props => {


    return (
        props.items.map(order => (
            <OrderItem
                key={order.id}
                id={order.id}
                date={order.created}
                total={order.amount}
            />
        ))
    );
};

export default OrderList