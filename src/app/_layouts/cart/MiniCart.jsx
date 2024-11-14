"use client";

import CartData from "@data/cart.json";
import Link from "next/link";

const MiniCart = () => {
    return (
        <>
            <div className="sb-minicart-content">
                {/* title */}
                <div className="sb-ib-title-frame sb-mb-30">
                    <h4>Your order.</h4>
                    <i className="fas fa-arrow-down" />
                </div>

                {/* Cart Items */}
                {CartData.items.map((item, key) => {
                    return (
                        <Link href={`/product/${item.id}`} className="sb-menu-item sb-menu-item-sm sb-mb-15" key={`mini-cart-item-${key}`}>
                            <div className="sb-cover-frame">
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div className="sb-card-tp">
                                <h4 className="sb-card-title">{item.title}</h4>
                                <div className="sb-price">₦{item.price.toLocaleString()}</div>
                            </div>
                        </Link>
                    );
                })}
                {/* End of Cart Items */}
            </div>
            <div className="sb-minicart-footer">
                {/* button */}
                <Link href="/cart" className="sb-btn sb-btn-gray sb-btn-text">
                    <span>View order</span>
                </Link>
                {/* button end */}
                {/* button */}
                <Link href="/checkout" className="sb-btn sb-btn-text">
                    <span>Checkout</span>
                </Link>
                {/* button end */}
            </div>
        </>
    );
};
export default MiniCart;