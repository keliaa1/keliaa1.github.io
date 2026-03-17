import { cn } from "@/lib/utils";

const ReviewCard = ({
  img,
  name,
  username,
  body,
}) => {
  return (
    <figure
      className={cn(
        "relative cursor-pointer overflow-hidden",
        "bg-[#12121a] hover:bg-[#16161f] transition-all duration-300",
        "flex flex-col"
      )}
      style={{
        width: '340px',
        borderRadius: '20px',
        padding: '24px 28px',
        border: "1px solid rgba(255, 255, 255, 0.08)",
        boxShadow: "0 6px 20px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.04)",
        gap: '20px',
        flexShrink: 0,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <img className="rounded-full border border-white/5" width="40" height="40" alt="" src={img} style={{ flexShrink: 0 }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <figcaption style={{ fontSize: '15px', fontWeight: 700, color: '#fff', lineHeight: 1.2 }}>
            {name}
          </figcaption>
          <p style={{ fontSize: '12px', fontWeight: 500, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.02em' }}>{username}</p>
        </div>
      </div>
      <blockquote style={{ fontSize: '14px', color: 'rgba(255,255,255,0.65)', fontWeight: 400, lineHeight: 1.6, letterSpacing: '-0.01em' }}>
        {body}
      </blockquote>
    </figure>
  );
};

export default ReviewCard;
