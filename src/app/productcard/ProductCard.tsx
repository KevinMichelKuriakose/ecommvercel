
import Link from 'next/link';
import React from 'react';

export default function ProductCard(props: any) {
  const prod = props.products;

  return (
    <div className="col">
      <div className="card bg-black text-white border border-secondary h-100 product-card">

        {/* Product Image */}
        <div className="bg-white p-3 d-flex align-items-center justify-content-center"
          style={{ height: '230px' }}>
          <img
            src={prod.image}
            alt={prod.title}
            style={{
              maxWidth: '100%',
              maxHeight: '200px',
              objectFit: 'contain'
            }}
          />
        </div>

        {/* Product Details */}
        <div className="card-body d-flex flex-column">

          <small className="text-info mb-2">
            {prod.category}
          </small>

          <h6 className="fw-bold">
            {prod.title}
          </h6>

          <p className="text-secondary small">
            {prod.description?.substring(0, 85)}...
          </p>

          <div className="mt-auto">

            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="text-info fw-bold mb-0">
                ${prod.price}
              </h5>

              <span className="text-warning">
                ★ {prod.rating?.rate}
              </span>
            </div>

            <Link
              href={`/products/${prod.id}`}
              className="btn btn-outline-info w-100 fw-bold"
            >
              View Details →
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}
