"use client";
import { useState } from "react";

export default function CopyEmail() {
  const [status, setStatus] = useState("");
  async function copy() {
    try {
      await navigator.clipboard.writeText("waiphyo5901969@gmail.com");
      setStatus("Email copied!");
    } catch {
      setStatus("Please copy: waiphyo5901969@gmail.com");
    }
  }
  return (
    <div className="copy-control">
      <button type="button" onClick={copy}>
        Copy email <span aria-hidden="true">⧉</span>
      </button>
      <span className="copy-status" role="status" aria-live="polite">
        {status}
      </span>
    </div>
  );
}
