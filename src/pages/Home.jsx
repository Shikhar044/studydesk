import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, Library, Users, CreditCard, MonitorSmartphone, TrendingUp, BarChart3, Clock, Sparkles, ChevronDown } from 'lucide-react';
import { siteConfig } from '../config/site';
import { productAssets } from '../config/productAssets';
import PlaceholderScreenshot from '../components/ui/PlaceholderScreenshot';

// Reusable components for sections
const SectionHeading = ({ title, subtitle }) => (
  <motion.div 
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ type: "spring", stiffness: 80, damping: 20 }}
    className="text-center max-w-3xl mx-auto mb-16"
  >
    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">{title}</h2>
    {subtitle && <p className="text-lg md:text-xl text-slate-600">{subtitle}</p>}
  </motion.div>
);

const FAQItem = ({ faq, isOpen, onClick }) => (
  <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-4 transition-all hover:border-brand-300">
    <button 
      onClick={onClick}
      className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
    >
      <h4 className="text-lg font-bold text-slate-900 pr-8">{faq.q}</h4>
      <motion.div 
        animate={{ rotate: isOpen ? 180 : 0 }} 
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center shrink-0 text-slate-500"
      >
        <ChevronDown size={20} />
      </motion.div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <div className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50 mt-2">
            {faq.a}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }
    
    setIsVisible(true);

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseOver = (e) => {
      if (e.target.closest('a') || e.target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return null;
};

const DemoCTAButton = ({ primary = true, className = '' }) => (
  <a
    href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`}
    target="_blank"
    rel="noreferrer"
    className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-200 ${
      primary 
        ? 'bg-brand-600 text-white hover:bg-brand-700 hover:shadow-lg hover:shadow-brand-600/30 hover:-translate-y-0.5' 
        : 'bg-white text-slate-700 border border-slate-200 hover:border-brand-600 hover:text-brand-600 hover:shadow-sm'
    } ${className}`}
  >
    {primary ? 'Book a Free Demo' : 'Talk on WhatsApp'}
    {primary && <ArrowRight size={18} />}
  </a>
);

export default function Home() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeFaq, setActiveFaq] = useState(0);
  
  const trustItems = ['Student Management', 'Live Attendance', 'Seat Management', 'Fee Tracking', 'Student Portal', 'Library Growth', 'Revenue Analytics'];
  const features = [
    {
      id: 'student',
      title: "Smart Student Management",
      desc: "Know every student without opening a register.",
      bullets: ["Complete admission details", "Shift and seat allocation", "Fee plan history", "Live status tracking"],
      icon: <Users className="text-brand-600" />,
      asset: productAssets.studentProfile
    },
    {
      id: 'attendance',
      title: "Live Attendance",
      desc: "Know who's inside your library — in real time.",
      bullets: ["Check-in / Check-out tracking", "Entry and exit times", "Total study time calculation", "Current occupancy metrics"],
      icon: <Clock className="text-brand-600" />,
      asset: productAssets.attendance
    },
    {
      id: 'seat',
      title: "Interactive Seat Management",
      desc: "Every seat visible. No confusion. No double allocation.",
      bullets: ["Visual seat map", "Available vs Occupied", "Reserved seat handling", "Maintenance blocking"],
      icon: <Library className="text-brand-600" />,
      asset: productAssets.seatMap
    },
    {
      id: 'fee',
      title: "Fee Management",
      desc: "Stop calculating fees manually.",
      bullets: ["Track paid, pending & overdue", "Automated due dates", "Payment history logs", "Monthly revenue reporting"],
      icon: <CreditCard className="text-brand-600" />,
      asset: productAssets.feeManagement
    }
  ];

  const faqs = [
    { q: "What is this software?", a: "It's a complete SaaS platform designed specifically for study libraries and reading rooms to manage students, attendance, seats, and fees." },
    { q: "Is it suitable for small libraries?", a: "Yes, it is designed to be affordable and simple for small to medium libraries starting from 30 students up to 300+ students." },
    { q: "Do I need special hardware?", a: "No special hardware is required. You can run the dashboard on any laptop, tablet, or smartphone. Students can scan QR codes or use the terminal." },
    { q: "Can students access their attendance and fee information?", a: "Yes, every student gets access to a dedicated digital portal to view their own attendance, fees, receipts, and study hours." },
    { q: "Can parents access student information?", a: "Yes, parents can log in securely to check their child's attendance and fee status without having to call you." },
    { q: "How does the free trial work?", a: "You get 1 month of full access to try the software with your real library operations. We help you set it up completely free." },
  ];

  return (
    <div className="pt-24 overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-100/50 via-white to-white"></div>
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6"
          >
            Your library,<br/>
            <span className="text-gradient">finally managed in one place.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.1 }}
            className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Manage students, seats, attendance, fees and daily operations — while giving your students a better digital experience.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <DemoCTAButton />
            <a href="#how-it-works" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 transition-colors w-full sm:w-auto">
              See How It Works
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center gap-6 text-sm font-medium text-slate-500"
          >
            <span className="flex items-center gap-1.5"><Check size={16} className="text-emerald-500"/> 1 Month Free Trial</span>
            <span className="flex items-center gap-1.5"><Check size={16} className="text-emerald-500"/> Setup Assistance Included</span>
          </motion.div>
        </div>

        {/* Dashboard Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 70, damping: 20, delay: 0.3 }}
          className="mt-16 md:mt-24 relative mx-auto max-w-5xl"
        >
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-brand-500 to-indigo-500 opacity-20 blur-xl"></div>
          <PlaceholderScreenshot asset={productAssets.dashboard} />
        </motion.div>
      </section>

      {/* 2. TRUST STRIP */}
      <section className="border-y border-slate-200 bg-white py-10 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-wider mb-8">
            Built for the everyday problems of study libraries
          </p>
          <div className="relative w-full">
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
            <motion.div 
              className="flex gap-16 whitespace-nowrap w-max opacity-80"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
            >
              {[...trustItems, ...trustItems, ...trustItems, ...trustItems].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-700 font-semibold shrink-0">
                  <Sparkles size={20} className="text-brand-500" />
                  <span className="text-xl tracking-tight">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. PROBLEM SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Still managing your library like this?</h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {[
              "Register full of messy student entries",
              "Manually checking fee due dates",
              "Asking students about attendance",
              "Forgetting empty or occupied seats",
              "Searching through old payment records",
              "Manually calculating monthly revenue"
            ].map((problem, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 border border-slate-100 rounded-xl p-6 flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center flex-shrink-0 mt-0.5">✕</div>
                <p className="text-slate-700 font-medium">{problem}</p>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="text-center bg-brand-50 border border-brand-100 rounded-2xl p-10 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-brand-900 mb-4">Your library doesn't need more paperwork.</h3>
            <p className="text-xl text-brand-700">It needs a better system.</p>
          </div>
        </div>
      </section>

      {/* 4. PRODUCT OVERVIEW (3 Pillars) */}
      <section id="features" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="One platform. Every part of your library." 
            subtitle="Manage your operations, give students a premium experience, and grow your business."
          />
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
              hidden: {}
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* MANAGE CARD */}
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } } }}
              whileHover={{ y: -6 }} 
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 border-t-4 border-t-blue-500 relative overflow-hidden transition-all duration-300 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-blue-50 via-blue-50/30 to-transparent rounded-bl-full -z-0 pointer-events-none"></div>
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-blue-200/50">
                <Library size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">MANAGE</h3>
              <ul className="space-y-3 relative z-10">
                {['Students', 'Seats', 'Shifts', 'Attendance', 'Fees'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-600 font-medium">
                    <Check size={18} className="text-blue-500 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* SERVE CARD */}
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } } }}
              whileHover={{ y: -6 }} 
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 border-t-4 border-t-emerald-500 relative overflow-hidden transition-all duration-300 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-500/10"
            >
              <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-emerald-50 via-emerald-50/30 to-transparent rounded-bl-full -z-0 pointer-events-none"></div>
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-emerald-200/50">
                <MonitorSmartphone size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">SERVE</h3>
              <ul className="space-y-3 relative z-10">
                {['Student Portal', 'Parent Access', 'Digital Receipts', 'Attendance History', 'Fee History'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-600 font-medium">
                    <Check size={18} className="text-emerald-500 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* GROW CARD */}
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } } }}
              whileHover={{ y: -6 }} 
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 border-t-4 border-t-purple-500 relative overflow-hidden transition-all duration-300 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/10"
            >
              <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-purple-50 via-purple-50/30 to-transparent rounded-bl-full -z-0 pointer-events-none"></div>
              <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-purple-200/50">
                <TrendingUp size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">GROW</h3>
              <ul className="space-y-3 relative z-10">
                {['Public Library Page', 'Online Enquiries', 'Student Referrals', 'Library Branding', 'Business Insights'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-600 font-medium">
                    <Check size={18} className="text-purple-500 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 5. FEATURE SHOWCASE */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/3">
              <div className="flex flex-col gap-4">
                {features.map((feature, idx) => (
                  <button 
                    key={feature.id}
                    onClick={() => setActiveFeature(idx)}
                    className={`text-left p-6 rounded-2xl transition-all duration-300 ${
                      activeFeature === idx 
                        ? 'bg-slate-50 border-2 border-brand-500 shadow-sm' 
                        : 'bg-white border-2 border-transparent hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-2">
                      <div className={`p-2 rounded-lg ${activeFeature === idx ? 'bg-brand-100' : 'bg-slate-100'}`}>
                        {feature.icon}
                      </div>
                      <h4 className="text-lg font-bold text-slate-900">{feature.title}</h4>
                    </div>
                    <p className={`text-sm ${activeFeature === idx ? 'text-slate-700' : 'text-slate-500'}`}>
                      {feature.desc}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-2/3">
              <div className="relative">
                {features.map((feature, idx) => (
                  <div 
                    key={feature.id}
                    className={`transition-opacity duration-500 ${activeFeature === idx ? 'opacity-100 relative z-10' : 'opacity-0 absolute inset-0 z-0 pointer-events-none'}`}
                  >
                    <div className="mb-8">
                      <ul className="grid grid-cols-2 gap-4">
                        {feature.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                            <Check size={20} className="text-brand-500 flex-shrink-0" /> {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <PlaceholderScreenshot asset={feature.asset} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* 6. OWNER DASHBOARD SHOWCASE */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-100 rounded-full blur-3xl opacity-50 translate-x-1/3 -translate-y-1/3"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Your entire library at a glance.</h2>
            <p className="text-xl text-slate-600">Understand your daily situation without checking multiple registers.</p>
          </motion.div>
          
          <PlaceholderScreenshot asset={productAssets.dashboard} className="border-slate-200 shadow-2xl shadow-brand-500/10" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { label: 'Students Inside', val: 'Live Count', icon: <Users size={24} />, color: 'text-blue-600', bg: 'bg-blue-100', topBorder: 'border-t-blue-500 hover:border-blue-300' },
              { label: 'Available Seats', val: 'Real-time', icon: <Library size={24} />, color: 'text-emerald-600', bg: 'bg-emerald-100', topBorder: 'border-t-emerald-500 hover:border-emerald-300' },
              { label: 'Fees Due', val: 'Automated', icon: <CreditCard size={24} />, color: 'text-rose-600', bg: 'bg-rose-100', topBorder: 'border-t-rose-500 hover:border-rose-300' },
              { label: 'Revenue', val: 'Tracked', icon: <TrendingUp size={24} />, color: 'text-brand-600', bg: 'bg-brand-100', topBorder: 'border-t-brand-500 hover:border-brand-300' },
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -5, scale: 1.02 }}
                className={`bg-white border border-slate-200 border-t-4 ${stat.topBorder} hover:shadow-xl hover:shadow-brand-500/10 rounded-2xl p-6 text-center transition-all duration-300 cursor-default`}
              >
                <div className={`w-12 h-12 mx-auto rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center mb-4 shadow-sm`}>
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-slate-900 mb-1">{stat.val}</div>
                <div className="text-slate-500 font-medium text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. STUDENT / PARENT EXPERIENCE */}
      <section id="students" className="py-24 bg-brand-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-brand-800 rounded-full blur-3xl opacity-50 -translate-x-1/3 -translate-y-1/3 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 order-2 md:order-1 flex justify-center">
              <PlaceholderScreenshot asset={productAssets.studentPortal} isMobile={true} className="border-brand-700 shadow-2xl shadow-black/50" />
            </div>
            
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight"
              >
                Your students get more than a seat.
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl text-brand-200 mb-10"
              >
                Students can stay informed without repeatedly asking the owner for basic information. Parents can access permitted information through their credentials.
              </motion.p>
              
              <ul className="space-y-6">
                {[
                  { title: "Daily attendance & study hours", icon: <Clock /> },
                  { title: "Fee status & payment receipts", icon: <CreditCard /> },
                  { title: "Library notice board & reminders", icon: <Library /> },
                ].map((item, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-brand-800 shadow-sm border border-brand-700 flex items-center justify-center text-brand-300 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">{item.title}</h4>
                      <p className="text-brand-300">Accessible 24/7 from any device.</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 8. PUBLIC LIBRARY PAGE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="bg-brand-100 text-brand-700 px-3 py-1 rounded-full text-sm font-bold tracking-wide uppercase mb-4 inline-block">Unique Feature</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Your library deserves a digital front door.</h2>
            <p className="text-xl text-slate-600">
              This isn't just a management tool. It also helps your library present itself professionally to new students.
            </p>
          </div>
          
          {/* Multi-Image Collage Layout */}
          <div className="relative w-full max-w-6xl mx-auto h-[600px] md:h-[700px] flex justify-center items-center mt-12 mb-24 perspective-1000">
            {/* Back Left: Pricing/Details */}
            <motion.div 
              initial={{ opacity: 0, x: -50, y: 50, rotate: -2 }}
              whileInView={{ opacity: 1, x: '-25%', y: '10%', rotate: -6 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 60, damping: 20 }}
              className="absolute w-[85%] md:w-[60%] z-10 transform-gpu"
            >
              <PlaceholderScreenshot asset={productAssets.publicPageDetails} className="opacity-90 hover:opacity-100 transition-opacity border-slate-200/50 shadow-xl" />
            </motion.div>
            
            {/* Back Right: Hero Section */}
            <motion.div 
              initial={{ opacity: 0, x: 50, y: -50, rotate: 2 }}
              whileInView={{ opacity: 1, x: '25%', y: '-15%', rotate: 4 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.1 }}
              className="absolute w-[85%] md:w-[60%] z-20 transform-gpu"
            >
              <PlaceholderScreenshot asset={productAssets.publicPageHero} className="border-slate-200 shadow-2xl shadow-brand-900/10" />
            </motion.div>

            {/* Front Center: Mobile View */}
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: '5%' }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 70, damping: 20, delay: 0.3 }}
              className="absolute z-30 transform-gpu"
            >
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <PlaceholderScreenshot asset={productAssets.publicPageMobile} isMobile={true} className="scale-75 md:scale-90 border-slate-800 shadow-2xl shadow-black/20" />
              </motion.div>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center">
            {['Your own branded page', 'Live seat availability', 'Shift timings & pricing', 'Direct WhatsApp Enquiries'].map((feature, i) => (
              <div key={i} className="font-medium text-slate-700 border border-slate-200 rounded-xl p-4 bg-slate-50">
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. HOW IT WORKS */}
      <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-gradient-to-r from-brand-100/50 via-purple-100/50 to-brand-100/50 rounded-full blur-3xl -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="How it works" 
            subtitle="That's it. No complicated setup."
          />
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
              hidden: {}
            }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative mt-12"
          >
            <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-1 bg-gradient-to-r from-brand-100 via-brand-400 to-brand-100 z-0 rounded-full"></div>
            {[
              { step: '01', title: 'Create your library', desc: 'Setup branding and details in minutes.', icon: <Library size={28}/> },
              { step: '02', title: 'Add students', desc: 'Import them easily or add manually.', icon: <Users size={28}/> },
              { step: '03', title: 'Run operations', desc: 'Manage attendance and fees seamlessly.', icon: <Check size={28}/> },
              { step: '04', title: 'Digital portals', desc: 'Students instantly get access to portals.', icon: <MonitorSmartphone size={28}/> }
            ].map((s, i) => (
              <motion.div 
                key={i} 
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                whileHover={{ y: -5 }}
                className="relative z-10 flex flex-col items-center text-center bg-white/80 backdrop-blur-xl border border-slate-200 hover:border-brand-400 p-8 rounded-3xl shadow-xl shadow-brand-900/5 transition-all cursor-default"
              >
                <div className="absolute -top-4 -right-2 md:-right-4 w-12 h-12 bg-gradient-to-br from-brand-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg border-4 border-white">
                  {s.step}
                </div>
                <div className="w-20 h-20 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mb-6">
                  {s.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h4>
                <p className="text-slate-600">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 10. WHY CHOOSE US */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Why choose our platform?" />
          
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="grid grid-cols-3 bg-slate-100 font-bold text-slate-900 p-4 border-b border-slate-200 text-sm md:text-base">
              <div>Feature</div>
              <div className="text-center text-slate-500">Traditional/Generic</div>
              <div className="text-center text-brand-600 flex items-center justify-center gap-2">
                <div className="w-6 h-6 rounded bg-brand-600 text-white flex items-center justify-center text-xs">S</div>
                {siteConfig.name}
              </div>
            </div>
            
            {[
              { f: 'Library Specific Design', old: 'No', new: 'Yes' },
              { f: 'Live Seat Management', old: 'No', new: 'Yes' },
              { f: 'Student & Parent Portal', old: 'No', new: 'Yes' },
              { f: 'Public Library Webpage', old: 'No', new: 'Yes' },
              { f: 'Automated Fee Tracking', old: 'Manual', new: 'Yes' },
              { f: 'Business Insights', old: 'None', new: 'Real-time' },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-3 p-4 border-b border-slate-100 hover:bg-slate-50 transition-colors">
                <div className="font-medium text-slate-700">{row.f}</div>
                <div className="text-center text-slate-500">{row.old}</div>
                <div className="text-center text-brand-600 font-bold flex justify-center">
                  {row.new === 'Yes' ? <Check size={20} /> : row.new}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. PRICING */}
      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Simple, affordable pricing" 
            subtitle="Start with a 1 month free trial. Grow as your library grows."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto justify-center">
            {siteConfig.pricing.map((plan, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -6 }}
                className={`rounded-2xl p-8 border relative overflow-hidden transition-all duration-300 ${
                  plan.recommended 
                    ? 'border-brand-500 border-t-4 border-t-brand-600 shadow-xl shadow-brand-500/15 bg-gradient-to-b from-brand-50/40 via-white to-white' 
                    : 'border-slate-200 border-t-4 border-t-slate-400 shadow-sm bg-white hover:border-slate-300 hover:shadow-lg'
                }`}
              >
                {plan.recommended && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-brand-600 to-indigo-600 text-white px-4 py-1 rounded-full text-xs font-extrabold tracking-wider uppercase shadow-md">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-slate-500 font-medium mb-6 pb-6 border-b border-slate-100">{plan.students}</p>
                <div className="mb-8">
                  <span className="text-5xl font-extrabold text-slate-900">{plan.price}</span>
                  <span className="text-slate-500 font-medium ml-1">{plan.period}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check size={20} className={plan.recommended ? "text-brand-600 flex-shrink-0" : "text-slate-500 flex-shrink-0"} />
                      <span className="text-slate-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <DemoCTAButton primary={plan.recommended} className="w-full py-3 shadow-md" />
              </motion.div>
            ))}
          </div>
          
          {/* Custom Enterprise Banner */}
          <div className="mt-12 text-center max-w-2xl mx-auto bg-slate-50 border border-slate-200/80 rounded-2xl p-6 shadow-sm">
            <p className="text-slate-700 font-medium text-base mb-2">
              Have multiple branches or custom infrastructure requirements?
            </p>
            <a 
              href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent("Hi, I have custom multi-branch or enterprise requirements for my library.")}`} 
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-brand-600 font-bold hover:text-brand-700 underline transition-colors"
            >
              Talk to us on WhatsApp <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* 12. FAQ */}
      <section id="faq" className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Frequently Asked Questions" />
          
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <FAQItem 
                key={i} 
                faq={faq} 
                isOpen={activeFaq === i} 
                onClick={() => setActiveFaq(activeFaq === i ? null : i)} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* 13. FINAL CTA */}
      <section className="py-24 bg-brand-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Ready to replace the register?</h2>
          <p className="text-xl md:text-2xl text-brand-200 mb-10 leading-relaxed">
            See how your library can be managed digitally — without changing the way you already work.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <DemoCTAButton primary={false} className="w-full sm:w-auto bg-white !text-brand-900 hover:bg-slate-100 hover:!text-brand-900 shadow-xl" />
            <a 
              href={`https://wa.me/${siteConfig.contact.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold bg-brand-800 text-white border border-brand-700 hover:bg-brand-700 transition-all w-full sm:w-auto"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
