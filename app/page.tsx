'use client';
import Image from 'next/image';
import { Search, ShoppingCart, User, Globe2, ShieldCheck, Mail, Truck, Menu, Star } from 'lucide-react';
import { brands, categories, contact, featured } from '../lib/data';

export default function Home() {
  const wa = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent('Hello DIS Shop, I would like to ask about your products.')}`;
  return (
    <main>
      <div className="topbar">
        <span>🚚 Delivery available in Juba</span>
        <span>📧 {contact.email}</span>
        <span>📞 {contact.phone}</span>
      </div>

      <header className="header">
        <div className="brandBlock">
          <Image src="/destiny-logo.jpeg" alt="Destiny Investment & Supplies" width={56} height={56} className="logo" />
          <div>
            <div className="brandTitle">DIS SHOP</div>
            <div className="brandSub">Destiny Investment & Supplies</div>
          </div>
        </div>
        <div className="searchBox">
          <Search size={20} />
          <input placeholder="Search DIS Shop products... | ابحث عن المنتجات" />
          <button>Search</button>
        </div>
        <nav className="navActions">
          <button><Globe2 size={18}/> EN / عربي</button>
          <button><User size={18}/> Login</button>
          <button className="cart"><ShoppingCart size={18}/> Cart</button>
        </nav>
      </header>

      <section className="navStrip">
        <span><Menu size={18}/> All Categories</span>
        <span>Today's Deals</span>
        <span>Brands</span>
        <span>Solar</span>
        <span>AC & Fans</span>
        <span>Building Materials</span>
        <span>Customer Service</span>
      </section>

      <section className="hero">
        <div className="heroText">
          <p className="eyebrow">South Sudan Online Shopping</p>
          <h1>Everything for Home, Building, Solar & Business</h1>
          <p>Shop GREE AC, EMTOP tools, CLASS electrical, LESSO plumbing, Spartan cleaning, mattresses, decoration, garden, kitchen and gym products from DIS Shop Juba.</p>
          <div className="heroButtons">
            <a href="#categories" className="primary">Shop Categories</a>
            <a href={wa} target="_blank" className="secondary">WhatsApp Order</a>
          </div>
          <div className="trustRow">
            <span><ShieldCheck size={18}/> Secure Login before Checkout</span>
            <span><Mail size={18}/> Orders to {contact.email}</span>
            <span><Truck size={18}/> Delivery in Juba</span>
          </div>
        </div>
        <div className="heroPanel">
          <div className="dealCard big">❄️<b>GREE AC</b><span>Normal & Inverter 9K–24K BTU</span></div>
          <div className="dealCard">🛠️<b>EMTOP Tools</b><span>Professional tools</span></div>
          <div className="dealCard">☀️<b>Solar Systems</b><span>Panels, batteries, inverters</span></div>
          <div className="dealCard">🏗️<b>Decoration</b><span>PVC, gypsum, marble sheets</span></div>
        </div>
      </section>

      <section className="section" id="brands">
        <div className="sectionHead"><h2>Shop by Brand</h2><a>View all</a></div>
        <div className="brandGrid">
          {brands.map((b) => <div className="brandCard" key={b.name}>{b.image ? <Image src={b.image} alt={b.name} width={120} height={55} /> : <div className="brandFallback">{b.name}</div>}<span>{b.caption}</span></div>)}
        </div>
      </section>

      <section className="section" id="categories">
        <div className="sectionHead"><h2>Top Categories</h2><a>Browse all</a></div>
        <div className="catGrid">
          {categories.map(([icon, name, desc]) => <div className="catCard" key={name}><div className="catIcon">{icon}</div><h3>{name}</h3><p>{desc}</p></div>)}
        </div>
      </section>

      <section className="section products">
        <div className="sectionHead"><h2>Featured Products</h2><a>See more</a></div>
        <div className="productGrid">
          {featured.map((p) => <article className="productCard" key={p.name}><div className="badge">{p.badge}</div><div className="productImg">{p.emoji}</div><h3>{p.name}</h3><p>{p.category}</p><div className="rating"><Star size={15} fill="currentColor"/> <Star size={15} fill="currentColor"/> <Star size={15} fill="currentColor"/> <Star size={15} fill="currentColor"/> <Star size={15}/> </div><strong>{p.price}</strong><button>Add to Cart</button></article>)}
        </div>
      </section>

      <section className="loginNote">
        <div><h2>Customer account required before checkout</h2><p>Customers can browse freely. To place an order, they must login or create an account. Admin dashboard is hidden and protected.</p></div>
        <button>Create Account</button>
      </section>

      <footer className="footer">
        <div><h3>DIS SHOP JUBA</h3><p>{contact.address}</p><p>{contact.email} • {contact.phone}</p></div>
        <div><h4>Customer</h4><p>Login • Cart • Orders • Delivery</p></div>
        <div><h4>Security</h4><p>HTTPS • Customer Login • Protected Admin • Email Notifications</p></div>
      </footer>
    </main>
  );
}
