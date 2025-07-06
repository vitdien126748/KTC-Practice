import React from "react";

interface CartContextType {
    cartItems: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (itemId: number) => void;
    removeAllQuantityFromCart: (itemId: number) => void;
    isItemInCart: (itemId: number) => boolean;
}

export const CartContext = React.createContext<CartContextType>({
    cartItems: [] as CartItem[],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    addToCart: (_item: CartItem) => { },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    removeFromCart: (_itemId: number) => { },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    removeAllQuantityFromCart: (_itemId: number) => { },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isItemInCart: (_itemId: number) => false
});
export const DropdownContext = React.createContext(false);

export type CartItem = { id: number; name: string; price: number; quantity?: number };
export const products: CartItem[] = [
    { id: 1, name: "Knorr Demiglace Sauce Powder 1kg", price: 315000 },
    { id: 2, name: "Kikkoman Soy Sauce 1L", price: 180000 },
    { id: 3, name: "Do Luong Rice Paper (5 pcs)", price: 25000 },
    { id: 4, name: "Lea & Perrins Worcestershire Sauce 290ml", price: 150000 },
    { id: 5, name: "Thuan Phat Dipping Sauce", price: 22000 },
    // ...add more if needed
    { id: 6, name: "Chinsu Fish Sauce 500ml", price: 35000 },
    { id: 7, name: "Vissan Pork Luncheon Meat 340g", price: 60000 },
    { id: 8, name: "Haitai Honey Butter Chips 60g", price: 30000 },
    { id: 9, name: "Oishi Prawn Crackers 100g", price: 25000 },
    { id: 10, name: "Lotte Choco Pie Original", price: 15000 }
];