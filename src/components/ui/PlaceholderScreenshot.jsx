import React from 'react';
import { motion } from 'framer-motion';

// CSS-based simulated video elements
const AnimatedCursor = () => (
  <motion.div
    initial={{ x: '100%', y: '100%', opacity: 0 }}
    animate={{ 
      x: ['100%', '30%', '70%', '40%', '100%'], 
      y: ['100%', '40%', '20%', '60%', '100%'],
      opacity: [0, 1, 1, 1, 0]
    }}
    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
    className="absolute z-20 pointer-events-none drop-shadow-2xl"
  >
    <svg width="32" height="32" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.65376 2.00013L22.3168 18.6631C23.2384 19.5848 22.5855 21.1611 21.2809 21.1611H13.8052C13.2505 21.1611 12.7238 21.4023 12.3603 21.8211L6.75709 28.2778C5.81179 29.3671 4 28.6946 4 27.248V3.41328C4 1.95427 5.77665 1.23354 6.79724 2.27435L5.65376 2.00013Z" fill="black"/>
      <path d="M5.65376 2.00013L22.3168 18.6631C23.2384 19.5848 22.5855 21.1611 21.2809 21.1611H13.8052C13.2505 21.1611 12.7238 21.4023 12.3603 21.8211L6.75709 28.2778C5.81179 29.3671 4 28.6946 4 27.248V3.41328C4 1.95427 5.77665 1.23354 6.79724 2.27435L5.65376 2.00013Z" fill="white" stroke="white" strokeWidth="2"/>
      <path d="M6.36087 2.70724L23.0239 19.3702C23.3312 19.6775 23.1135 20.203 22.6787 20.203H15.2029C14.464 20.203 13.7616 20.5245 13.277 21.0829L7.67375 27.5397C7.35865 27.9026 6.75471 27.6784 6.75471 27.1952V3.36043C6.75471 2.8741 7.34693 2.63386 7.68713 2.98086L6.36087 2.70724Z" fill="black"/>
    </svg>
  </motion.div>
);

const AnimatedToast = ({ isMobile }) => (
  <motion.div
    initial={{ y: 20, opacity: 0, scale: 0.9 }}
    animate={{ 
      y: [20, 0, 0, -20],
      opacity: [0, 1, 1, 0],
      scale: [0.9, 1, 1, 0.9]
    }}
    transition={{ duration: 6, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
    className={`absolute ${isMobile ? 'bottom-8 left-4 right-4' : 'bottom-6 right-6'} z-20 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl shadow-brand-900/10 border border-emerald-100 p-4 flex items-center gap-4`}
  >
    <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
    </div>
    <div className="flex flex-col text-left">
      <span className="text-sm font-bold text-slate-900 leading-tight">System Update</span>
      <span className="text-xs text-slate-500 font-medium mt-0.5">Live sync successful</span>
    </div>
  </motion.div>
);

export default function PlaceholderScreenshot({ asset, className = '', isMobile = false }) {
  if (!asset) return null;

  if (isMobile) {
    return (
      <div className={`relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl overflow-hidden ${className}`}>
        <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute z-10"></div>
        <div className={`h-[32px] w-[3px] bg-gray-800 absolute -left-[11px] top-[72px] rounded-l-lg`}></div>
        <div className={`h-[46px] w-[3px] bg-gray-800 absolute -left-[11px] top-[124px] rounded-l-lg`}></div>
        <div className={`h-[46px] w-[3px] bg-gray-800 absolute -left-[11px] top-[178px] rounded-l-lg`}></div>
        <div className={`h-[64px] w-[3px] bg-gray-800 absolute -right-[11px] top-[142px] rounded-r-lg`}></div>
        
        {asset.type === 'image' && asset.src ? (
          <div className="relative w-full h-full overflow-hidden rounded-[2rem] bg-slate-900">
              <motion.img 
                src={asset.src} 
                alt={asset.label} 
                className="w-full h-full object-contain object-top origin-center bg-slate-900"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              />
            <AnimatedToast isMobile={true} />
          </div>
        ) : (
          <div className={`w-full h-full rounded-[2rem] overflow-hidden bg-white flex flex-col items-center justify-center p-6 text-center ${asset.color || 'bg-slate-50'}`}>
            <div className="text-slate-400 mb-4 border-2 border-dashed border-slate-300 rounded-xl p-8 w-full flex items-center justify-center flex-col gap-4">
               <span className="text-4xl">📱</span>
               <p className="font-semibold text-slate-600 text-sm">{asset.label}</p>
               <p className="text-xs text-slate-400">Replace in productAssets.js</p>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`rounded-xl overflow-hidden shadow-2xl border border-slate-200/60 bg-white relative ${className}`}>
      {/* Browser Chrome */}
      <div className="bg-slate-100 border-b border-slate-200 px-4 py-3 flex items-center gap-2 relative z-10">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-rose-400"></div>
          <div className="w-3 h-3 rounded-full bg-amber-400"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
        </div>
        <div className="mx-auto bg-white rounded-md px-3 py-1 text-xs text-slate-400 font-medium flex items-center gap-2 w-1/2 max-w-sm justify-center border border-slate-200 shadow-sm">
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
          studydesk.in
        </div>
      </div>
      
      {/* Content Area */}
      {asset.type === 'image' && asset.src ? (
        <div className="relative w-full overflow-hidden bg-white">
          <motion.img 
            src={asset.src} 
            alt={asset.label} 
            className="w-full h-auto block origin-center"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <AnimatedCursor />
          <AnimatedToast isMobile={false} />
        </div>
      ) : (
        <div className={`w-full aspect-video flex flex-col items-center justify-center p-8 text-center ${asset.color || 'bg-slate-50'}`}>
          <div className="border-2 border-dashed border-slate-300 rounded-xl p-12 max-w-md w-full bg-white/50 backdrop-blur-sm shadow-sm flex flex-col items-center justify-center gap-4">
            <span className="text-5xl">💻</span>
            <h3 className="font-semibold text-slate-700 text-lg mt-2">{asset.label}</h3>
            <p className="text-sm text-slate-500">
              This is a placeholder component. Replace it by changing type to 'image' and adding 'src' in <code className="bg-slate-100 px-1 py-0.5 rounded text-rose-500">productAssets.js</code>.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

