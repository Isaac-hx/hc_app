"use client";

import { useState } from "react";
import { useCartStore } from "@/lib/store";
import { get_from,ADMIN_WHATSAPP, products } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const items = useCartStore((state) => state.items);
  const getTotalPrice = useCartStore((state) => state.getTotalPrice);
  const clearCart = useCartStore((state) => state.clearCart);

  const [formData, setFormData] = useState({
    name: "",
    no_telp: "",
    shipping_address: "",
    get_from: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const total = getTotalPrice();

  // 🔹 handle input text
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 🔹 handle select
  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, get_from: value }));
  };

  // 🔥 submit ke backend
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (
    !formData.name ||
    !formData.no_telp ||
    !formData.shipping_address ||
    !formData.get_from
  ) {
    alert("Please fill in all fields");
    return;
  }

  setIsSubmitting(true);

  try {
    const payload = {
      name: formData.name,
      no_telp: formData.no_telp,
      shipping_address: formData.shipping_address,
      get_from: formData.get_from,
      products: items.map((item) => ({
        title: item.title,
        price: item.price,
        quantity: item.quantity,
      })),
    };

    const res = await fetch("https://unseen-fountained-song.ngrok-free.dev/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true",

      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.error);

    // 🔥 FORMAT MESSAGE WA
    const itemsText = payload.products
      .map(
        (p) =>
          `- ${p.title} x${p.quantity} (Rp ${(p.price * p.quantity).toLocaleString("id-ID")})`
      )
      .join("\n");

    const message = `*Pesanan Baru*

Data Pelanggan:
Nama: ${payload.name}
No. Telepon: ${payload.no_telp}
Alamat: ${payload.shipping_address}
Referensi: ${payload.get_from}

*Daftar Produk:* 
${itemsText}

Total: *${total.toLocaleString("id-ID")}*

---
Pesanan ini dikirim dari website ordering system`;

    const encoded = encodeURIComponent(message);

    const whatsappUrl = `https://wa.me/${ADMIN_WHATSAPP}?text=${encoded}`;

    // 🔥 RESET UI
    clearCart();
    onClose();

    setFormData({
      name: "",
      no_telp: "",
      shipping_address: "",
      get_from: "",
    });

    // 🔥 REDIRECT (WAJIB pakai ini untuk mobile)
    window.location.href = whatsappUrl;

  } catch (err) {
    console.error(err);
    alert(err);
  } finally {
    setIsSubmitting(false);
  }
};
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Complete Your Order</DialogTitle>
          <DialogDescription>
            Fill in your details to place the order
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="flex-1 pr-4">
          <form onSubmit={handleSubmit} className="space-y-6 pb-6">
            
            {/* Customer Info */}
            <div className="space-y-4">
              <h3 className="font-semibold text-base">Customer Information</h3>

              <div>
                <Label>Nama</Label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Masukan nama"
                />
              </div>

              <div>
                <Label>Nomer telephone</Label>
                <Input
                  name="no_telp"
                  value={formData.no_telp}
                  onChange={handleInputChange}
                  placeholder="Masukan No.telp"
                />
              </div>

              <div>
                <Label>Alamat pengiriman</Label>
                <Textarea
                  name="shipping_address"
                  value={formData.shipping_address}
                  onChange={handleInputChange}
                  placeholder="Alamat lengkap"
                />
              </div>

              <div>
                <Label>Tau healticiken darimana?</Label>
                <Select
                  value={formData.get_from}
                  onValueChange={handleSelectChange}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih" />
                  </SelectTrigger>
                  <SelectContent>
                    {get_from.map((item) => (
                      <SelectItem key={item.id} value={item.id}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Order Summary */}
            <div className="space-y-3 rounded-lg border bg-slate-50 p-4">
              <h3 className="font-semibold text-base">Order Summary</h3>

              <div className="space-y-2 max-h-48 overflow-y-auto">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span>
                      {item.title} × {item.quantity}
                    </span>
                    <span>
                      Rp{" "}
                      {(item.price * item.quantity).toLocaleString("id-ID")}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t pt-3 flex justify-between font-bold">
                <span>Total:</span>
                <span className="text-primary text-lg">
                  Rp {total.toLocaleString("id-ID")}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1"
              >
                Cancel
              </Button>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1"
              >
                {isSubmitting ? "Processing..." : "Submit Order"}
              </Button>
            </div>
          </form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}