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
        // dark styles matching screenshot with stronger border
        "bg-[#12121a] hover:bg-[#16161f] transition-all duration-300",
        "flex flex-col justify-center"
      )}
      style={{
        width: '600px',
        borderRadius: '32px',
        padding: '32px',
        border: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05)",
        gap: '36px'
      }}
    >
      <div className="flex flex-row items-center gap-5">
        <img className="rounded-full border border-white/5" width="48" height="48" alt="" src={img} />
        <div className="flex flex-col text-left">
          <figcaption className="text-[17px] font-bold text-white tracking-tight">
            {name}
          </figcaption>
          <p className="text-[14px] font-medium text-white/40 tracking-wide">{username}</p>
        </div>
      </div>
      <blockquote className="text-[16px] text-white/80 font-medium leading-[1.6] text-left tracking-tight">
        {body}
      </blockquote>
    </figure>
  );
};

export default ReviewCard;
