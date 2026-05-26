'use client'

import Image from 'next/image';
import React from 'react';
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaFacebookF, 
  FaTwitter, 
  FaYoutube, 
  FaBehance, 
  FaPinterestP, 
  FaLinkedinIn,
  FaPaperPlane,
  FaChevronUp
} from 'react-icons/fa';

export default function Footer() {
 const scrollToTop=()=>{
    window.scrollTo({top:0 , behavior: 'smooth'})
 }

  return (
    <footer className="bg-[#2d2d2d] text-[#a5a5a5] text-sm font-sans relative">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-[#3d3d3d]">
        
        {/* Brand / Logo Info */}
        <div>
          <div className="flex items-center gap-2 text-white text-3xl font-bold mb-4">
<Image src="/images/footer-logo.png" width={150} height={150} alt='logo image'></Image>
          </div>
          <p className="leading-relaxed text-[#9b9b9b]">
            Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci, enean dignissim
          </p>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-white font-bold uppercase tracking-wider mb-5">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-white mt-1 shrink-0" />
              <span>Ranelagh Place, Liverpool, L3 5UL, England</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-white shrink-0" />
              <span>(+84) 123456789</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-white shrink-0" />
              <a href="mailto:sales@yoursite.com" className="hover:text-white transition">sales@yoursite.com</a>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-white font-bold uppercase tracking-wider mb-5">Follow Us</h3>
          <div className="grid grid-cols-3 gap-2 w-40">
            {[
              { icon: <FaFacebookF />, url: "#" },
              { icon: <FaTwitter />, url: "#" },
              { icon: <FaYoutube />, url: "#" },
              { icon: <FaBehance />, url: "#" },
              { icon: <FaPinterestP />, url: "#" },
              { icon: <FaLinkedinIn />, url: "#" },
            ].map((social, index) => (
              <a 
                key={index} 
                href={social.url} 
                className="bg-[#3a3a3a] text-[#a5a5a5] hover:bg-[#6b8cce] hover:text-white p-3 flex items-center justify-center transition square"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-bold uppercase tracking-wider mb-5">Newsletter</h3>
          <p className="mb-4 leading-relaxed text-[#9b9b9b]">
            At vero eos et accusamus et iusto odio dign issimos ducimus qui blanditiis
          </p>
          <div className="flex h-11">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full bg-white text-gray-800 px-4 focus:outline-none text-sm"
            />
            <button className="bg-[#8faed6] hover:bg-[#7b9bc4] text-white px-4 flex items-center justify-center transition">
              <FaPaperPlane size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Middle Links Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 text-xs border-b border-[#3d3d3d]">
        {/* Quick Link */}
        <div>
          <h4 className="text-white font-bold uppercase tracking-wider mb-4">Quick Link</h4>
          <ul className="space-y-2.5">
            <li><a href="#" className="hover:text-white transition flex items-center gap-1.5"><span>•</span> Home</a></li>
            <li><a href="#" className="hover:text-white transition flex items-center gap-1.5"><span>•</span> Featured products</a></li>
            <li><a href="#" className="hover:text-white transition flex items-center gap-1.5"><span>•</span> Specials</a></li>
            <li><a href="#" className="hover:text-white transition flex items-center gap-1.5"><span>•</span> New Products</a></li>
            <li><a href="#" className="hover:text-white transition flex items-center gap-1.5"><span>•</span> All Products...</a></li>
          </ul>
        </div>

        {/* Join Our Community 1 */}
        <div>
          <h4 className="text-white font-bold uppercase tracking-wider mb-4">Join Our Community</h4>
          <ul className="space-y-2.5">
            <li><a href="#" className="hover:text-white transition flex items-center gap-1.5"><span>•</span> Forums</a></li>
            <li><a href="#" className="hover:text-white transition flex items-center gap-1.5"><span>•</span> Become an Author</a></li>
            <li><a href="#" className="hover:text-white transition flex items-center gap-1.5"><span>•</span> Community Meetups</a></li>
            <li><a href="#" className="hover:text-white transition flex items-center gap-1.5"><span>•</span> Become an Affiliate</a></li>
            <li><a href="#" className="hover:text-white transition flex items-center gap-1.5"><span>•</span> Market Licenses</a></li>
          </ul>
        </div>

        {/* Join Our Community 2 */}
        <div>
          <h4 className="text-white font-bold uppercase tracking-wider mb-4">Join Our Community</h4>
          <ul className="space-y-2.5">
            <li><a href="#" className="hover:text-white transition flex items-center gap-1.5"><span>•</span> View Cart</a></li>
            <li><a href="#" className="hover:text-white transition flex items-center gap-1.5"><span>•</span> Site Map</a></li>
            <li><a href="#" className="hover:text-white transition flex items-center gap-1.5"><span>•</span> Gift Certificate FAQ</a></li>
            <li><a href="#" className="hover:text-white transition flex items-center gap-1.5"><span>•</span> Discount Coupons</a></li>
            <li><a href="#" className="hover:text-white transition flex items-center gap-1.5"><span>•</span> Newsletter Unsubscribe</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h4 className="text-white font-bold uppercase tracking-wider mb-4">Customer Service</h4>
          <ul className="space-y-2.5">
            <li><a href="#" className="hover:text-white transition flex items-center gap-1.5"><span>•</span> Contact Us</a></li>
            <li><a href="#" className="hover:text-white transition flex items-center gap-1.5"><span>•</span> Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-white transition flex items-center gap-1.5"><span>•</span> Privacy Notice</a></li>
            <li><a href="#" className="hover:text-white transition flex items-center gap-1.5"><span>•</span> Conditions of Use</a></li>
            <li><a href="#" className="hover:text-white transition flex items-center gap-1.5"><span>•</span> My Account</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright & Payments */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <p>Copyright © 2026 <span className="text-white font-semibold">Rango</span>. All rights reserved.</p>
        
        {/* Simple Payment Badges Placeholder */}
        <div className="flex items-center gap-4 text-[#8a8a8a] text-lg tracking-wider font-serif italic">
          <span className="hover:text-white cursor-pointer transition">PayPal</span>
          <span className="hover:text-white cursor-pointer transition text-base tracking-normal font-sans font-bold">VISA</span>
          <span className="hover:text-white cursor-pointer transition text-xs tracking-normal font-sans uppercase">American Express</span>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button 
       onClick={scrollToTop}
        className="absolute bottom-6 right-6 bg-[#8faed6] hover:bg-[#7b9bc4] text-white p-2.5 rounded shadow-lg transition flex items-center justify-center"
        aria-label="Scroll to top"
      >
        <FaChevronUp size={14} />
      </button>
    </footer>
  );
}