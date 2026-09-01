"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiCheck, FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import { siteConfig } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";

function Field({ label, name, value, onChange, type = "text", required, placeholder }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs uppercase tracking-widest text-white/50">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-gold/60"
      />
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  // No backend needed: opens the visitor's email client pre-filled.
  // To use a hosted form instead, see the note in README.md.
  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      form.subject || `New project enquiry from ${form.name}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const details = [
    { icon: FiPhone, label: "Phone", value: siteConfig.phoneDisplay, href: `tel:${siteConfig.phoneTel}` },
    { icon: FiMail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { icon: FiMapPin, label: "Location", value: siteConfig.location, href: null },
  ];

  const quick = [
    { icon: FaWhatsapp, label: "WhatsApp", href: `https://wa.me/${siteConfig.whatsapp}`, ext: true },
    { icon: FiMail, label: "Email", href: `mailto:${siteConfig.email}`, ext: false },
    { icon: FiPhone, label: "Call", href: `tel:${siteConfig.phoneTel}`, ext: false },
  ];

  return (
    <section id="contact" className="section-py relative overflow-hidden">
      <div className="absolute right-0 top-1/4 -z-10 h-80 w-80 rounded-full bg-gold/10 blur-[120px]" />

      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Create Something Great"
          subtitle="Have a project in mind? Tell me about it — I usually reply within 24 hours."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          {/* Details + quick actions */}
          <div className="space-y-6">
            {details.map((c) => {
              const Icon = c.icon;
              const inner = (
                <div className="glass flex items-center gap-4 rounded-2xl border border-white/10 p-5 transition-colors hover:border-gold/40">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-xl text-gold">
                    <Icon />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-white/40">
                      {c.label}
                    </div>
                    <div className="text-white">{c.value}</div>
                  </div>
                </div>
              );
              return c.href ? (
                <a key={c.label} href={c.href} data-cursor="hover" className="block">
                  {inner}
                </a>
              ) : (
                <div key={c.label}>{inner}</div>
              );
            })}

            <div className="grid grid-cols-3 gap-3 pt-2">
              {quick.map((q) => {
                const Icon = q.icon;
                return (
                  <a
                    key={q.label}
                    href={q.href}
                    data-cursor="hover"
                    {...(q.ext
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="glass flex flex-col items-center gap-2 rounded-2xl border border-white/10 py-5 transition-colors hover:border-gold/40"
                  >
                    <Icon className="text-2xl text-gold" />
                    <span className="text-xs text-white/70">{q.label}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-strong space-y-4 rounded-3xl border border-gold/20 p-6 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" value={form.name} onChange={onChange} required placeholder="John Doe" />
              <Field label="Email" name="email" type="email" value={form.email} onChange={onChange} required placeholder="john@email.com" />
            </div>
            <Field label="Subject" name="subject" value={form.subject} onChange={onChange} placeholder="Project enquiry" />
            <div>
              <label className="mb-1.5 block text-xs uppercase tracking-widest text-white/50">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                required
                rows={4}
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-gold/60"
              />
            </div>
            <button
              type="submit"
              data-cursor="hover"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gold py-3.5 font-medium text-ink transition-colors hover:bg-gold-light"
            >
              {sent ? (
                <>
                  Opening your email <FiCheck />
                </>
              ) : (
                <>
                  Send Message <FiSend />
                </>
              )}
            </button>
            {sent && (
              <p className="text-center text-xs text-gold">
                Your email app should open with the message ready to send.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
