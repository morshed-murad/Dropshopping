import Container from "@/components/Container";
import HomeBanner from "@/components/HomeBanner";
import { products } from "@/utils/products";

import { ProductItem } from "@/types/ProductsTypes";
import ProductCard from "@/components/products/ProductCard";

export default function Home() {
  return (
    <main className="p-8">
      <Container>
        <div>
          <HomeBanner />
        </div>
        <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {products.map((product: ProductItem) => {
            return <ProductCard data={product} />;
          })}
        </div>
      </Container>
    </main>
  );
}
