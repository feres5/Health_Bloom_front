import CouponItem from "./CouponItem";

const CouponsList = props => {

    return (
        <>
            {
                props.items.map(coupon => (
                    <CouponItem
                        Key ={coupon.id}
                        id={coupon.id}
                        name = {coupon.name}
                        percentage = {coupon.percentage}
                        onDelete={props.onDeleteCoupon}

                    />
                ))
            }
        </>
    );
}

export default CouponsList;