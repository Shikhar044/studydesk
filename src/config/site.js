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
      students: "Up to 50 students",
      price: "₹0",
      period: "forever free",
      features: [
        "QR code student registration",
        "Basic seat management",
        "Live attendance tracking",
        "1 admin account",
        "Student & Parent portal",
        "Standard email support"
      ],
      recommended: false
    },
    {
      name: "Premium Plan",
      students: "Unlimited students",
      price: "₹499",
      period: "/year",
      features: [
        "Everything in Free, plus:",
        "Unlimited branches & admins",
        "Automated WhatsApp reminders",
        "Invoice generation & fee tracking",
        "Advanced Analytics & AI Insights",
        "Priority 24/7 Phone Support"
      ],
      recommended: true
    }
  ]
};
