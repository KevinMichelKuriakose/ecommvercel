
import React from 'react';
import Link from 'next/link';


const products = [
  {
    id: 1,
    name: 'Gaming Headset',
    category: 'Accessories',
    price: '$79.99',
    image: 'https://images.unsplash.com/photo-1599669454699-248893623440?w=600'
  },
  {
    id: 2,
    name: 'Gaming Controller',
    category: 'Controllers',
    price: '$59.99',
    image: 'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=600'
  },
  {
    id: 3,
    name: 'Gaming Keyboard',
    category: 'Accessories',
    price: '$89.99',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600'
  },
  {
    id: 4,
    name: 'Gaming Mouse',
    category: 'Accessories',
    price: '$49.99',
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=600'
  }
];

export default function Home() {
  return (
    <div className="bg-dark text-white min-vh-100">

      

      {/* Hero Section */}
      <section className="container py-5">
        <div className="row align-items-center py-5">

          <div className="col-lg-6">
            <span className="badge bg-info text-dark mb-3 p-2">
              LEVEL UP YOUR GAMING
            </span>

            <h1 className="display-3 fw-bold">
              PLAY HARD.
              <span className="text-info d-block">WIN BIG.</span>
            </h1>

            <p className="text-secondary fs-5 mt-4">
              Discover the latest gaming accessories, powerful gaming
              equipment and premium products. Upgrade your gaming setup today.
            </p>

            <div className="d-flex gap-3 mt-4">
              <Link href="/products" className="btn btn-info btn-lg fw-bold">
                Shop Now →
              </Link>

              <Link href="/about" className="btn btn-outline-light btn-lg">
                Explore More
              </Link>
            </div>
          </div>

          <div className="col-lg-6 mt-5 mt-lg-0">
            <img
              src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=1000"
              alt="Gaming setup"
              className="img-fluid rounded-4 shadow-lg"
            />
          </div>

        </div>
      </section>

      {/* Categories */}
      <section className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Explore Categories</h2>
          <p className="text-secondary">Everything a gamer needs</p>
        </div>

        <div className="row g-4">

          {[
            { name: 'Gaming PCs', icon: '🖥️' },
            { name: 'Headphones', icon: '🎧' },
            { name: 'Controllers', icon: '🎮' },
            { name: 'Accessories', icon: '⌨️' }
          ].map((category, index) => (
            <div className="col-6 col-lg-3" key={index}>
              <div className="bg-black border border-secondary rounded-4 p-4 text-center h-100">
                <div className="display-4 mb-3">{category.icon}</div>
                <h5 className="fw-bold">{category.name}</h5>
                <Link href="/products" className="text-info text-decoration-none">
                  Explore →
                </Link>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* Featured Products */}
      <section className="container py-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="fw-bold">Featured Products</h2>
            <p className="text-secondary">Our popular gaming gear</p>
          </div>

          <Link href="/products" className="btn btn-outline-info">
            View All
          </Link>
        </div>

        <div className="row g-4">

          {products.map((product) => (
            <div className="col-12 col-sm-6 col-lg-3" key={product.id}>
              <div className="card bg-black text-white border border-secondary rounded-4 h-100 overflow-hidden">

                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                  style={{ height: '210px', objectFit: 'cover' }}
                />

                <div className="card-body">
                  <small className="text-info">{product.category}</small>

                  <h5 className="card-title fw-bold mt-2">
                    {product.name}
                  </h5>

                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <h5 className="text-info mb-0">{product.price}</h5>

                    <Link
                      href={`/products/${product.id}`}
                      className="btn btn-outline-info btn-sm"
                    >
                      View
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>
      </section>

      {/* Special Offer */}
      <section className="container py-5">
        <div className="bg-black border border-info rounded-4 p-5 text-center">
          <span className="badge bg-danger mb-3">LIMITED OFFER</span>

          <h2 className="display-5 fw-bold">
            Upgrade Your Gaming Setup!
          </h2>

          <p className="text-secondary fs-5">
            Get amazing deals on selected gaming accessories.
          </p>

          <Link href="/offers" className="btn btn-info btn-lg mt-3 fw-bold">
            Explore Deals
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-top border-secondary py-4 mt-5">
        <div className="container text-center">
          <h4 className="fw-bold">
            GAME<span className="text-info">ZONE</span>
          </h4>

          <p className="text-secondary mb-2">
            Your ultimate destination for gaming products.
          </p>

          <small className="text-secondary">
            © 2026 GAMEZONE. All Rights Reserved.
          </small>
        </div>
      </footer>

    </div>
  );
}
