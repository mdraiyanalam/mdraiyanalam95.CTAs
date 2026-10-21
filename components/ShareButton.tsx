"use client";

import { useState } from "react";
import { FaShareNodes, FaCheck } from "react-icons/fa6";

export default function ShareButton() {
  const [copied, setCopied] = useState(false);

  async function share() {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title: "Md Raiyan Alam", url });
        return;
      }
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* user cancelled the share sheet */
    }
  }

  return (
    <button type="button" className="share" onClick={share} aria-label="Share this page">
      {copied ? <FaCheck aria-hidden /> : <FaShareNodes aria-hidden />}
      <span className="share-tip" role="status">
        {copied ? "Link copied" : ""}
      </span>
    </button>
  );
}
