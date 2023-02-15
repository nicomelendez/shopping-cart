import { Cart } from "../components/cart/Cart";
import { Header } from "../components/head/Header";
import { CartProvider } from "../context/cart";

export function Layout ({ children }) {
    
    return(
        <CartProvider>    
            <section>
                <Header/>
                <Cart />
                <div>
                    {children}
                </div>
            </section>
        </CartProvider>
    )

}