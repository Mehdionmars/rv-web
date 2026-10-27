import type { Locale } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";

/** Site-wide footer: the oversized red wordmark. */
export default function SiteFooter({ locale }: { locale: Locale }) {
  const t = getMessages(locale);

  return (
    <footer className="v3-foot">
      <span className="v3-foot__word" aria-hidden="true">ROUGEVIF</span>
      <span>© {new Date().getFullYear()} — {t.common.address}</span>
    </footer>
  );
}
