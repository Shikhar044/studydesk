// Centralized asset mapping
// Currently using placeholder components as requested, but structured to easily accept real URLs.

// =========================================================
// 📸 HOW TO ADD ACTUAL SCREENSHOTS
// =========================================================
// 1. Create an `assets` folder inside `marketing-website/public/`
//    Example: `marketing-website/public/assets/`
// 2. Drop your image files there (e.g., `dashboard.png`, `student-portal.png`)
// 3. Change `type: 'placeholder'` to `type: 'image'`
// 4. Add `src: '/assets/dashboard.png'`
// Example:
// dashboard: {
//   type: 'image',
//   label: 'Owner Dashboard Mockup',
//   src: '/assets/dashboard.png'
// },
// =========================================================

export const productAssets = {
  dashboard: {
    type: 'image',
    label: 'Owner Dashboard Mockup',
    color: 'bg-slate-100',
    src: '/assets/dashboard.png'
  },
  studentProfile: {
    type: 'image',
    label: 'Smart Student Profile View',
    color: 'bg-blue-100',
    src: '/assets/student-directory.png'
  },
  attendance: {
    type: 'image',
    label: 'Live Attendance tracking',
    color: 'bg-emerald-50',
    src: '/assets/attendace-logs.png'
  },
  seatMap: {
    type: 'image',
    label: 'Interactive Seat Map',
    color: 'bg-amber-50',
    src: '/assets/seat-allocation.png'
  },
  feeManagement: {
    type: 'image',
    label: 'Fee & Revenue Tracking',
    color: 'bg-indigo-50',
    src: '/assets/fee-register.png'
  },
  studentPortal: {
    type: 'image',
    label: 'Student & Parent Digital Portal (Mobile View)',
    color: 'bg-slate-50',
    src: '/assets/mobile-student.png'
  },
  publicPageHero: {
    type: 'image',
    label: 'Public Page (Desktop Hero)',
    color: 'bg-violet-50',
    src: '/assets/hero-public-page.png'
  },
  publicPageDetails: {
    type: 'image',
    label: 'Public Page (Desktop Pricing)',
    color: 'bg-fuchsia-50',
    src: '/assets/pricing-public-page.png'
  },
  publicPageMobile: {
    type: 'image',
    label: 'Public Page (Mobile View)',
    color: 'bg-purple-50',
    src: '/assets/phone-portal.png'
  }
};
