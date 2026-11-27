import React from 'react';
import { ProductService } from '../services/product-service';
import ProductCard from '../productcard/ProductCard';

export const dynamic = 'force-dynamic';

const getProducts = async () => {
  try {
    const response = await ProductService.getProducts();
    return Array.isArray(response) ? response : [];
  } catch (error) {
    console.error('Failed to load products:', error);
    return [];
  }
};

export default async function Page() {
  const products = await getProducts();


  return (
    <div className="container my-4">
      {products.length === 0 ? (
        <div className="text-center py-5">
          <h3>No products available</h3>
          <p className="text-muted">Unable to reach the product catalog right now.</p>
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-4">
          {products.map((p: any) => (
            <ProductCard key={p.id} products={p} />
          ))}
        </div>
      )}
    </div>
  );
}