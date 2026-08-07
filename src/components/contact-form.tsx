"use client";

import { FormEvent, useState } from "react";

type Copy = { name:string; email:string; company:string; message:string; submit:string; sending:string; success:string; error:string; privacy:string };

export function ContactForm({ copy, locale }: { copy: Copy; locale: "pt" | "en" }) {
  const [state, setState] = useState<"idle"|"sending"|"success"|"error">("idle");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setState("sending");
    const form = event.currentTarget;
    const response = await fetch("/api/contact", { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(Object.fromEntries(new FormData(form))) });
    if (response.ok) { setState("success"); form.reset(); } else setState("error");
  }
  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-row"><label>{copy.name}<input name="name" required minLength={2} maxLength={100} autoComplete="name" /></label><label>{copy.email}<input name="email" required type="email" maxLength={160} autoComplete="email" /></label></div>
      <label>{copy.company}<input name="company" maxLength={120} autoComplete="organization" /></label>
      <label>{copy.message}<textarea name="message" required minLength={20} maxLength={3000} rows={5} /></label>
      <label className="form-trap" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      <input type="hidden" name="locale" value={locale} />
      <div className="form-submit"><button disabled={state==="sending"} type="submit">{state==="sending" ? copy.sending : copy.submit} <span>↗</span></button><small>{copy.privacy}</small></div>
      <p className={`form-status ${state}`} role="status">{state==="success" ? copy.success : state==="error" ? copy.error : ""}</p>
    </form>
  );
}
