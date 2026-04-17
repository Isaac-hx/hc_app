"use client";

import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { products } from "@/lib/data";
import { useCartStore } from "@/lib/store";
import { ProductCard } from "@/components/ProductCard";
import { CartSidebar } from "@/components/CartSidebar";
import { CheckoutModal } from "@/components/CheckoutModal";
import { Button } from "@/components/ui/button";
import "@/public/hc.png"
export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const cartItems = useCartStore((state) => state.items);

  const cartItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-2">
            <div className="h-12 w-12  flex items-center justify-center">
              {/* <span className="text-white font-bold text-lg"><img src="" alt="" /><img src="" alt="" /></span> */}
              <img src={"hc.png"} alt="" />
            </div>
            <h1 className="text-xl font-bold">Healticiken</h1>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsCartOpen(!isCartOpen)}
            className="relative"
          >
            <ShoppingCart className="h-5 w-5" />
            {cartItemsCount > 0 && (
              <span className="absolute -right-2 -top-2 h-5 w-5 rounded-full bg-primary text-white text-xs flex items-center justify-center font-semibold">
                {cartItemsCount}
              </span>
            )}
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 py-8">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-3">
            Produk katalog Healticiken
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
Healti ciken muncul dari benih inspirasi yang sederhana, dipupuk oleh tangan-tangan yang penuh kasih menjadi misi yang berkembang. Dengan penuh perhatian dan kasih sayang, kami merawat, menabur kebaikan untuk menuai kualitas.          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Empty State for No Products */}
        {products.length === 0 && (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <ShoppingCart className="h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-lg text-muted-foreground">No products available</p>
          </div>
        )}
      </main>

      {/* Cart Sidebar */}
      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onCheckout={handleCheckout}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={handleCloseCheckout}
      />
    </div>
  );
}
