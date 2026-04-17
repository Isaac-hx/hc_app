"use client";

import { useState } from "react";
import { Product } from "@/lib/data";
import { useCartStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(1);
  };

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
      <div className="relative h-48 w-full overflow-hidden rounded-t-lg bg-slate-100">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain"
        />
      </div>
      <CardHeader className="flex-1">
        <CardTitle className="line-clamp-2 text-lg">{product.title}</CardTitle>
        <CardDescription className="line-clamp-2">{product.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-2xl font-bold text-primary">
          Rp {product.price.toLocaleString("id-ID")}
        </div>
        <div className="flex gap-2">
          <div className="flex items-center gap-2 flex-1">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="h-8 w-8 rounded border border-input hover:bg-slate-100"
            >
              −
            </button>
            <span className="flex-1 text-center text-sm font-medium">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="h-8 w-8 rounded border border-input hover:bg-slate-100"
            >
              +
            </button>
          </div>
        </div>
        <Button onClick={handleAddToCart} className="w-full">
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
}
