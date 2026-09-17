import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useParams, useSearchParams } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { getAppBaseUrl } from './config/site';

function TenantRedirect() {
  const { slug } = useParams();
  useEffect(() => {
    if (slug) {
      window.location.replace(`${getAppBaseUrl()}/l/${slug}`);
    }
  }, [slug]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-600">
      <div className="text-center p-8">
        <div className="w-12 h-12 border-4 border-brand-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="font-semibold text-slate-800">Opening Library Showcase...</p>
      </div>
    </div>
  );
}

function MainLayout() {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // If a user navigates to marketing website with onboarding or role query params, forward them to the SaaS app
    if (searchParams.get('onboarding') === 'true' || searchParams.get('role') || searchParams.get('tenant') || searchParams.get('portal')) {
      const targetUrl = `${getAppBaseUrl()}/?${searchParams.toString()}`;
      window.location.replace(targetUrl);
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/l/:slug" element={<TenantRedirect />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
}

export default App;
