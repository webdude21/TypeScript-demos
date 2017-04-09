export interface AddToCart {
    itemId?: string;
    type: "ADD_TO_CART";
}

export interface RemoveFromCart {
    itemId?: string;
    type: "REMOVE_FROM_CART";
}

export interface ClearCart {
    type: "CLEAR_CART";
}

export type CartActionTypes = AddToCart | RemoveFromCart | ClearCart;

export class CartActions {
    addToCart(itemId: string): CartActionTypes {
        return { type: "ADD_TO_CART", itemId };
    };

    removeFromCart(itemId: string): CartActionTypes {
        return { type: "REMOVE_FROM_CART", itemId };
    };

    clearCart(): CartActionTypes {
        return { type: "CLEAR_CART" };
    }
}