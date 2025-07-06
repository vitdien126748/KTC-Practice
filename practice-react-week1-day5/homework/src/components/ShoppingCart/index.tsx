import CartDropdown from "./CartDropdown"
import CartIcon from "./CartIcon"
import ProductGrid from "./ProductGrid"
import styles from "./ShoppingCart.module.css"
import { CartContext, DropdownContext, type CartItem } from "./Context"
import React from "react"

const ShoppingCart = () => {
    const [cartItems, setCartItems] = React.useState<CartItem[]>([]);
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

    const addToCart = (item: CartItem) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((i) => i.id === item.id);
            if (existingItem) {
                return prevItems.map((i) =>
                    i.id === item.id ? { ...i, quantity: (i.quantity ?? 1) + 1 } : i
                );
            }
            return [...prevItems, { ...item, quantity: 1 }];
        });
    };

    const removeAllQuantityFromCart = (itemId: number) => {
        setCartItems((prevItems) => prevItems.filter((i) => i.id !== itemId));
    };

    const removeFromCart = (itemId: number) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((i) => i.id === itemId);
            if (existingItem) {
                if ((existingItem.quantity ?? 1) > 1) {
                    return prevItems.map((i) =>
                        i.id === itemId ? { ...i, quantity: (i.quantity ?? 1) - 1 } : i
                    );
                }
                return prevItems.filter((i) => i.id !== itemId);
            }
            return prevItems;
        });
    };

    const isItemInCart = (itemId: number): boolean => {
        return cartItems.some((item) => item.id === itemId);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const totalItems = cartItems.reduce((total, item) => total + (item.quantity || 1), 0);

    return (
        <div className={styles.shoppingCartContainer}>
            <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, removeAllQuantityFromCart, isItemInCart }}>
                <div className={styles.header}>
                    <span className={styles.headerTitle}>Thực phẩm khô</span>
                    <DropdownContext.Provider value={isDropdownOpen}>
                        <CartIcon onClick={toggleDropdown} totalItem={totalItems} />
                        {isDropdownOpen && <CartDropdown cartItems={cartItems} />}
                    </DropdownContext.Provider>
                </div>
                <ProductGrid />
            </CartContext.Provider>
        </div>
    )
}

export default ShoppingCart