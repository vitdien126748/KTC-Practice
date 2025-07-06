import React from 'react'
import styles from './ProductCard.module.css'
import numeral from 'numeral'
import { CartContext, type CartItem } from '../Context';

type ProductCardProps = {
    product: CartItem;
}

const ProductCard = ({ product }: ProductCardProps) => {
    const cartContext = React.useContext(CartContext);
    return (
        <div className={styles.card}>
            <div className={styles.infoContainer}>
                <span className={styles.name}>{product.name}</span>
                <span className={styles.price}>{numeral(product.price).format('0,0')}₫</span>
            </div>
            {cartContext.isItemInCart(product.id) ? (
                <div className={styles.buttonContainer}>
                    <button className={styles.decrementButton} onClick={() => cartContext.removeFromCart(product.id)}>-</button>
                    <span className={styles.quantity}>{cartContext.cartItems.find(item => item.id === product.id)?.quantity ?? 0}</span>
                    <button className={styles.incrementButton} onClick={() => cartContext.addToCart(product)}>+</button>
                </div>
            ) : (
                <div className={styles.buttonContainer}>
                    <button className={styles.addToCartButton} onClick={() => { cartContext.addToCart(product) }}>Thêm vào giỏ hàng</button>
                </div>
            )}
        </div>
    )
}

export default ProductCard