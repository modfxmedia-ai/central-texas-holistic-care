import { permanentRedirect } from "next/navigation";

export default function ShopRedirect(): never {
  permanentRedirect("/products/");
}
