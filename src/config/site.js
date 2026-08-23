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
      name: "Free Plan",
      subtitle: "Perfect for small libraries just starting out",
      students: "For small libraries (up to 50 students)",
      price: "₹0",
      period: "forever free",
      ctaText: "Get Started Free",
      features: [
        "Up to 50 active students",
        "Full seat & shift management",
        "Terminal 4-digit PIN check-in",
        "Live attendance & seat map",
        "Student & Parent mobile portal",
        "Automated email & manual WhatsApp fee reminders",
        "1 admin account",
        "Standard support"
      ],
      disabledFeatures: [
        "Unlimited active students (Capped at 50)",
        "Multi-branch management",
        "Multiple admin & staff accounts",
        "Priority 24/7 Phone & WhatsApp support"
      ],
      recommended: false
    },
    {
      name: "Premium Plan",
      subtitle: "All features for growing libraries & scaling branches",
      students: "For growing & multi-branch libraries",
      price: "₹499",
      period: "/year",
      savings: "Save ₹1,200 vs manual operational costs",
      ctaText: "Start 1-Month Free Trial",
      features: [
        "UNLIMITED active students",
        "Unlimited branch management",
        "Full seat & shift management",
        "Terminal 4-digit PIN check-in",
        "Live attendance & seat map",
        "Student & Parent mobile portal",
        "Automated email & manual WhatsApp fee reminders",
        "Multiple admin & staff accounts",
        "Priority 24/7 Phone & WhatsApp support"
      ],
      disabledFeatures: [],
      recommended: true
    }
  ]
};
