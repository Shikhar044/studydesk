import React from 'react';
import { siteConfig } from '../../config/site';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white font-bold text-xl leading-none">
                S
              </div>
              <span className="font-bold text-xl text-white tracking-tight">{siteConfig.name}</span>
            </div>
            <p className="text-sm text-slate-400 mb-6 max-w-xs">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#features" className="hover:text-brand-400 transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-brand-400 transition-colors">How it Works</a></li>
              <li><a href="#pricing" className="hover:text-brand-400 transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#faq" className="hover:text-brand-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Contact Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`} className="hover:text-brand-400 transition-colors">{siteConfig.contact.phone}</a>
              </li>
              <li className="flex items-center gap-2">
                <span>📱</span>
                <a href={`https://wa.me/${siteConfig.contact.whatsapp}`} className="hover:text-brand-400 transition-colors" target="_blank" rel="noreferrer">WhatsApp Us</a>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-brand-400 transition-colors">{siteConfig.contact.email}</a>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
