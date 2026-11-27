import React from 'react';
import { ProductService } from '../services/product-service';
import ProductCard from '../productcard/ProductCard';

export const dynamic = 'force-dynamic';

const getProducts = async () => {
  const response = await ProductService.getProducts();
  return Array.isArray(response) ? response : [];
};

export default async function Page() {
  const product = await getProducts();

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-4">
        {product.map((p: any) => (
          <ProductCard key={p.id} products={p} />
        ))}
      </div>
    </div>
  );
}