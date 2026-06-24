import React from "react";

const Legal = () => {
  const sections = [
    {
      icon: "🔒",
      title: "Privacy Protection",
      content:
        "We collect only the information necessary to provide secure auction services. Your personal data is protected and never shared without consent.",
    },
    {
      icon: "📜",
      title: "Terms & Conditions",
      content:
        "By using our platform, users agree to follow all auction rules, provide accurate information, and participate in fair bidding practices.",
    },
    {
      icon: "©",
      title: "Copyright & DMCA",
      content:
        "Users must own or have permission to use any content they upload. Copyright infringement reports are handled promptly.",
    },
    {
      icon: "🤝",
      title: "Code of Conduct",
      content:
        "Respectful communication and ethical behavior are expected from all buyers and sellers using our platform.",
    },
    {
      icon: "⚠️",
      title: "Acceptable Use Policy",
      content:
        "Fraudulent bidding, spam, misleading listings, and illegal activities are strictly prohibited and may result in account suspension.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-slate-800 mb-4">
            Legal & Trust Center
          </h1>

          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            We are committed to maintaining a secure, transparent, and fair
            online auction experience for all users.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-slate-100"
            >
              <div className="text-4xl mb-4">{item.icon}</div>

              <h2 className="text-xl font-semibold text-slate-800 mb-3">
                {item.title}
              </h2>

              <p className="text-slate-600 leading-relaxed">
                {item.content}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl text-white p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-3">
            Your Trust Matters
          </h2>

          <p className="text-blue-100">
            Our auction platform prioritizes user privacy, secure transactions,
            transparent policies, and responsible community standards.
          </p>
        </div>

        <div className="mt-10 text-center">
          <p className="text-slate-500 mb-4">
            Last Updated: June 2026
          </p>

          <a
  href="/contact"
  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300"
>
  Contact Support
</a>
        </div>

      </div>
    </div>
  );
};

export default Legal;