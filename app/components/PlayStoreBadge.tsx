import { Link } from "@remix-run/react";
import { SiGoogleplay } from "react-icons/si";

interface PlayStoreBadgeProps {
  url: string;
  size?: "sm" | "md" | "lg";
}

export default function PlayStoreBadge({ url, size = "md" }: Readonly<PlayStoreBadgeProps>) {
  const sizeClasses = {
    sm: "text-xs px-3 py-1.5 gap-1.5",
    md: "text-sm px-4 py-2 gap-2",
    lg: "text-base px-5 py-2.5 gap-2.5"
  };

  const iconSizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg"
  };

  return (
    <Link
      to={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center ${sizeClasses[size]} font-medium rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-md hover:shadow-lg hover:shadow-emerald-500/30 hover:scale-105 transition-all duration-200`}
    >
      <SiGoogleplay className={iconSizes[size]} />
      <span>Get it on Google Play</span>
    </Link>
  );
}
