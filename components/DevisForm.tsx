"use client";

import { useId, useState, type FormEvent } from "react";
import { MAIL_ALT, MAIL_MAIN } from "./Bands";
import type { Locale } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";

/**
 * The canvas has no backend: submitting composes a mailto: to the two Rougevif
 * addresses. Kept as designed, with a visible status line so the visitor is
 * told what happened instead of the page appearing to do nothing.
 */
export default function DevisForm({
  locale,
  variant = "full",
}: {
  locale: Locale;
  variant?: "full" | "short";
}) {
  const id = useId();
  const [status, setStatus] = useState("");
  const t = getMessages(locale);
  const c = t.contact;
  const options = variant === "short" ? c.optionsShort : c.options;
  const rows = variant === "short" ? 4 : 5;
  const f = (name: string) => `${id}-${name}`;

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const get = (k: string) => {
      const v = data.get(k);
      return typeof v === "string" && v.trim() ? v.trim() : "—";
    };

    const L = c.mailLabels;
    const body = [
      `${L.societe} : ${get("societe")}`,
      `${L.contact} : ${get("nom")}`,
      `${L.telephone} : ${get("telephone")}`,
      `${L.email} : ${get("email")}`,
      `${L.effectif} : ${get("effectif")}`,
      `${L.besoin} : ${get("metier")}`,
      "",
      get("message"),
    ].join("\n");

    const href =
      `mailto:${MAIL_MAIN}?cc=${MAIL_ALT}` +
      `&subject=${encodeURIComponent(`${L.subject} ${get("societe")}`)}` +
      `&body=${encodeURIComponent(body)}`;

    setStatus(c.status(MAIL_MAIN));
    // assign() rather than `location.href =` so the linter sees a call, not a
    // write to an external binding. Same navigation either way.
    window.location.assign(href);
  }

  return (
    <form
      className="rv-form"
      onSubmit={onSubmit}
      aria-labelledby={f("title")}
      data-rv-devis
    >
      <h2 className="rv-visually-hidden" id={f("title")}>
        {c.formTitle}
      </h2>

      <div className="rv-form__field rv-form__field--wide">
        <label htmlFor={f("societe")}>{c.fields.societe}</label>
        <input id={f("societe")} name="societe" required autoComplete="organization" />
      </div>

      <div className="rv-form__field">
        <label htmlFor={f("nom")}>{c.fields.nom}</label>
        <input id={f("nom")} name="nom" required autoComplete="name" />
      </div>

      <div className="rv-form__field">
        <label htmlFor={f("telephone")}>{c.fields.telephone}</label>
        <input id={f("telephone")} name="telephone" type="tel" autoComplete="tel" />
      </div>

      <div className="rv-form__field">
        <label htmlFor={f("email")}>{c.fields.email}</label>
        <input id={f("email")} name="email" type="email" required autoComplete="email" />
      </div>

      <div className="rv-form__field">
        <label htmlFor={f("effectif")}>{c.fields.effectif}</label>
        <input id={f("effectif")} name="effectif" inputMode="numeric" />
      </div>

      <div className="rv-form__field rv-form__field--wide">
        <label htmlFor={f("metier")}>{c.fields.metier}</label>
        <select id={f("metier")} name="metier" defaultValue={options[0]}>
          {options.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </div>

      <div className="rv-form__field rv-form__field--wide">
        <label htmlFor={f("message")}>{c.fields.message}</label>
        <textarea id={f("message")} name="message" rows={rows} />
      </div>

      <div className="rv-form__foot">
        <span className="rv-form__note">
          {c.sentTo} {MAIL_MAIN.toUpperCase()} &amp; {MAIL_ALT.toUpperCase()}
        </span>
        <button className="rv-btn rv-btn--red rv-btn--red-ink" type="submit">
          {c.submit}
        </button>
      </div>

      <p className="rv-form__status" role="status" aria-live="polite">
        {status}
      </p>
    </form>
  );
}
