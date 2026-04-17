export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
}

export const products: Product[] = [
  {
    id: "1",
    title: "Ayam Utuh 0.9 - 1.0 Kg",
    description: "Ayam segar utuh dengan berat sekitar 0.9 - 1.0 kg, cocok untuk berbagai olahan.",
    price: 51500,
    image: "https://res.cloudinary.com/dxivhtzs8/image/upload/v1776396109/Ayam_Uuth_zzkppo.png",
  },
  {
    id: "2",
    title: "Ayam Potong 10",
    description: "Ayam segar yang sudah dipotong menjadi 10 bagian, praktis untuk memasak.",
    price: 52500,
    image: "https://res.cloudinary.com/dxivhtzs8/image/upload/v1776396108/Ayam_Potong_10_lbry2m.png",
  },
  {
    id: "3",
    title: "Boneless Dada",
    description: "Daging dada ayam tanpa tulang, cocok untuk diet dan masakan sehat.",
    price: 73000,
    image: "https://res.cloudinary.com/dxivhtzs8/image/upload/v1776396105/Boneless_Dada_Slcie_x22u42.png",
  },
  {
    id: "4",
    title: "Boneless Paha",
    description: "Daging paha ayam tanpa tulang, lebih juicy dan gurih.",
    price: 72000,
    image: "https://res.cloudinary.com/dxivhtzs8/image/upload/v1776396103/Boneless_Paha_Skinless_jfvzuc.png",
  },
  {
    id: "5",
    title: "Paha Bawah",
    description: "Bagian paha bawah ayam segar, cocok digoreng atau dibakar.",
    price: 61500,
    image: "https://res.cloudinary.com/dxivhtzs8/image/upload/v1776396103/Paha_Bawah_rp1tra.png",
  },
  {
    id: "6",
    title: "Paha Atas",
    description: "Bagian paha atas ayam yang empuk dan juicy.",
    price: 61500,
    image: "https://res.cloudinary.com/dxivhtzs8/image/upload/v1776396102/Paha_Atas_ppvbv7.png",
  },
  {
    id: "7",
    title: "Kulit Ayam",
    description: "Kulit ayam segar, cocok untuk digoreng crispy.",
    price: 47500,
    image: "https://res.cloudinary.com/dxivhtzs8/image/upload/v1776396103/Kulit_rq4klm.png",
  },
  {
    id: "8",
    title: "Ceker",
    description: "Ceker ayam yang sudah dibersihkan, cocok untuk sop atau dimsum.",
    price: 36500,
    image: "https://res.cloudinary.com/dxivhtzs8/image/upload/v1776396103/Ceker_ycborv.png",
  },
  {
    id: "9",
    title: "Potong 10 Marinasi",
    description: "Ayam potong 10 dengan bumbu marinasi siap masak.",
    price: 61500,
    image: "https://res.cloudinary.com/dxivhtzs8/image/upload/v1776396109/Ayam_Potong_10_Marinasi_ygtsms.png",
  },
  {
    id: "10",
    title: "Potong 10 Marinasi Non MSG",
    description: "Ayam marinasi tanpa MSG, lebih sehat dan tetap lezat.",
    price: 64500,
    image: "https://res.cloudinary.com/dxivhtzs8/image/upload/v1776396108/Ayam_Potong_10_Marinasi_Non_Msg_mjjsr5.png",
  },
  {
    id: "11",
    title: "MiniPack BLPS Bite Marinasi Non MSG",
    description: "Potongan kecil ayam marinasi tanpa MSG, praktis untuk snack atau lauk.",
    price: 44500,
    image: "https://res.cloudinary.com/dxivhtzs8/image/upload/v1776396102/Boneless_Paha_Skin_On_qrjp58.png",
  },

  {
    id: "12",
    title: "MiniPack BLD",
    description: "Mini pack bagian ayam pilihan Boneless dada, praktis dan hemat.",
    price: 29000,
    image: "https://res.cloudinary.com/dxivhtzs8/image/upload/v1776396102/Boneless_Dada_Skinless_e9lda9.png",
  },
  {
    id: "13",
    title: "MiniPack BLP",
    description: "Mini pack ayam bagian Boneless paha, cocok untuk kebutuhan harian.",
    price: 39500,
    image: "https://res.cloudinary.com/dxivhtzs8/image/upload/v1776396103/Boneless_Paha_Skinless_jfvzuc.png",
  },
];

export const get_from = [
  { id: "website", label: "Website", type: "online" },
  { id: "whatsapp", label: "WhatsApp", type: "online" },
  { id: "instagram", label: "Instagram", type: "social" },
  { id: "facebook", label: "Facebook", type: "social" },
  { id: "marketplace", label: "Marketplace", type: "external" },
  { id: "offline", label: "Offline / Toko Langsung", type: "offline" },
];
export const ADMIN_WHATSAPP = "6281319991021";
