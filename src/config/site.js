export const siteConfig = {
  name: "StudyDesk",
  description: "Everything your study library needs, in one place.",
  contact: {
    email: "supportlibrarysaas@gmail.com",
    phone: "+91 95595 83981",
    whatsapp: "919559583981",
    whatsappMessage: "Hi, I'm interested in the Library Management System. I'd like to see a demo for my library."
  },
  links: {
    demo: "#demo",
    login: "#login"
  },
  pricing: [
    {
      id: "free",
      name: "Free Forever",
      subtitle: "Essential tools for small libraries",
      students: "Up to 50 active students",
      price: "₹0",
      period: "forever free",
      ctaText: "Get Started Free",
      features: [
        "Up to 50 active students",
        "Terminal 4-digit PIN check-in",
        "Seat & shift management",
        "Fee register & receipts",
        "Student & Parent mobile portal"
      ],
      disabledFeatures: [
        "QR Pass Attendance Mode",
        "WhatsApp Automation",
        "Advanced Revenue Analytics",
        "Custom Branding"
      ],
      recommended: false
    },
    {
      id: "starter",
      name: "Starter Plan",
      subtitle: "For growing libraries unlocking QR attendance",
      students: "Up to 60 active students",
      price: "₹139",
      period: "/month (or ₹599/yr)",
      ctaText: "Choose Starter",
      features: [
        "Up to 60 active students",
        "📷 Digital Student QR ID Pass",
        "📷 Kiosk Camera QR Scanner",
        "Public Branded Library Page",
        "WhatsApp Notice Notifications",
        "All Free Plan features"
      ],
      disabledFeatures: [
        "Advanced Revenue Analytics",
        "Custom Domain & Branding"
      ],
      recommended: true
    },
    {
      id: "growth",
      name: "Growth Plan",
      subtitle: "For established libraries needing detailed analytics",
      students: "Up to 100 active students",
      price: "₹299",
      period: "/month (or ₹1,299/yr)",
      ctaText: "Choose Growth",
      features: [
        "Up to 100 active students",
        "📊 Advanced Revenue & Profit Reports",
        "📊 Student Attendance Analytics",
        "All Starter Plan features",
        "Unlimited Student To-Do Tracking"
      ],
      disabledFeatures: [
        "Priority 24/7 Phone Support",
        "Custom Subdomain & White-Label"
      ],
      recommended: false
    },
    {
      id: "pro",
      name: "Pro Plan",
      subtitle: "Maximum capacity with priority support & custom branding",
      students: "Up to 150 active students",
      price: "₹499",
      period: "/month (or ₹1,999/yr)",
      ctaText: "Choose Pro",
      features: [
        "Up to 150 active students",
        "🎨 Custom Subdomain & Full Branding",
        "📞 Priority 24/7 VIP Phone Support",
        "All Growth Plan features",
        "Multi-Branch Expansion Ready"
      ],
      disabledFeatures: [],
      recommended: false
    }
  ]
};
