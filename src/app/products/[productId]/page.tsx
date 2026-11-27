
import { ProductService } from '@/app/services/product-service';
import React from 'react';

import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function page(props: any) {

  const params = await props.params;
  const productId = params.productId;

  const product = await ProductService.getProductsById(productId);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-dark text-white min-vh-100">

    
      <div className="container py-5">

        {/* Breadcrumb */}
        <div className="mb-4">
          <Link href="/" className="text-info text-decoration-none">
            Home
          </Link>
          <span className="text-secondary mx-2">/</span>

          <Link href="/products" className="text-info text-decoration-none">
            Products
          </Link>
          <span className="text-secondary mx-2">/</span>

          <span className="text-secondary">
            Product Details
          </span>
        </div>

        {/* Product Details Card */}
        <div className="card bg-black text-white border border-secondary rounded-4 overflow-hidden shadow-lg">

          <div className="row g-0">

            {/* Product Image */}
            <div className="col-lg-5 bg-white d-flex align-items-center justify-content-center p-5">

              <img
                src={product.image}
                alt={product.title}
                className="img-fluid"
                style={{
                  maxHeight: '420px',
                  objectFit: 'contain'
                }}
              />

            </div>

            {/* Product Information */}
            <div className="col-lg-7">

              <div className="card-body p-4 p-lg-5">

                <span className="badge bg-info text-dark mb-3">
                  {product.category}
                </span>

                <h2 className="fw-bold mb-3">
                  {product.title}
                </h2>

                {/* Rating */}
                <div className="mb-3">
                  <span className="text-warning fs-5">
                    ★★★★★
                  </span>

                  <span className="text-info ms-2">
                    {product.rating?.rate ?? 'New'}
                  </span>

                  <span className="text-secondary ms-2">
                    ({product.rating?.count ?? 0} reviews)
                  </span>
                </div>

                <hr className="border-secondary" />

                {/* Price */}
                <div className="mb-3">
                  <small className="text-secondary">
                    Price:
                  </small>

                  <h1 className="text-info fw-bold">
                    ${product.price}
                  </h1>
                </div>

                {/* Description */}
                <h5 className="fw-bold">
                  Product Description
                </h5>

                <p className="text-secondary lh-lg">
                  {product.description}
                </p>

                <hr className="border-secondary" />

                {/* Delivery Information */}
                <div className="mb-4">
                  <p className="mb-2">
                    <span className="text-info">🚚</span>
                    <span className="ms-2">
                      Free Delivery on eligible orders
                    </span>
                  </p>

                  <p className="mb-2">
                    <span className="text-info">↩️</span>
                    <span className="ms-2">
                      Easy Returns
                    </span>
                  </p>

                  <p className="mb-0">
                    <span className="text-info">🔒</span>
                    <span className="ms-2">
                      Secure Payment
                    </span>
                  </p>
                </div>

                {/* Buttons */}
                <div className="d-flex flex-wrap gap-3">

                  <button className="btn btn-info btn-lg fw-bold px-4">
                    🛒 Add to Cart
                  </button>

                  <button className="btn btn-outline-light btn-lg px-4">
                    Buy Now →
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Back Button */}
        <div className="mt-4">
          <Link href="/products" className="btn btn-outline-info">
            ← Back to Products
          </Link>
        </div>

      </div>

    </div>
  );
}
