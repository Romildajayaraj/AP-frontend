import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import emailjs from "@emailjs/browser";

export default function Contact() {
  useDocumentTitle("Contact");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

    const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    emailjs
      .send(
        "service_14dyfmk",      
        "template_lrwm47m",     
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "Hd9NLGfRrnq-TvR0C"        
      )
     .then(() => {
  setError("");
  setSubmitted(true);

  setFormData({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
})
      .catch((err) => {
        console.log(err);
        setError("Failed to send message. Try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center">
          <p className="text-indigo-600 font-semibold uppercase">
            Let’s Connect
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mt-3">
            Let’s Build Something{" "}
            <span className="text-indigo-600">Amazing Together</span>
          </h1>

          <p className="text-gray-600 mt-5 max-w-md">
            Drop a message and I’ll respond as soon as possible.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100">

          {submitted ? (
            <div className="text-center py-10">
              <div className="w-14 h-14 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 text-2xl">✓</span>
              </div>

              <h2 className="text-xl font-semibold mt-4">
                Message Sent Successfully
              </h2>

              <p className="text-gray-500 mt-2">
                I’ll get back to you soon.
              </p>

              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-indigo-600 font-medium"
              >
                Send another message →
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="input"
                  required
                />

                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="input"
                  required
                />
              </div>

              <input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="input"
                required
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows="5"
                className="input resize-none"
                required
              />

              {error && (
                <p className="text-red-500 text-sm">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
                <FiSend />
              </button>
            </form>
          )}
        </div>
      </div>

      {/* INPUT STYLE */}
      <style>
        {`
          .input {
            width: 100%;
            padding: 12px 14px;
            border-radius: 12px;
            border: 1px solid #e5e7eb;
            background: #f9fafb;
            outline: none;
            transition: 0.2s;
          }
          .input:focus {
            border-color: #6366f1;
            box-shadow: 0 0 0 3px rgba(99,102,241,0.15);
          }
        `}
      </style>
    </div>
  );
}