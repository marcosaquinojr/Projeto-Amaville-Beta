export function Blobs({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div
        className="blob animate-[blob_18s_ease-in-out_infinite]"
        style={{ background: "var(--turquoise)", width: 380, height: 380, top: -120, left: -80 }}
      />
      <div
        className="blob animate-[blob_22s_ease-in-out_infinite]"
        style={{ background: "var(--orange)", width: 320, height: 320, top: 200, right: -120, animationDelay: "2s" }}
      />
      <div
        className="blob animate-[blob_26s_ease-in-out_infinite]"
        style={{ background: "var(--purple)", width: 260, height: 260, bottom: -100, left: "30%", opacity: 0.25, animationDelay: "4s" }}
      />
    </div>
  );
}
