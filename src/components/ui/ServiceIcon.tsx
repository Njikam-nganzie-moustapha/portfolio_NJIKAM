import React from 'react';

interface ServiceIconProps {
  name: string;
  className?: string;
}

const icons: Record<string, React.ReactNode> = {
  code: (
    // Code/Dev icon (e.g. brackets)
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  design: (
    // Design icon (e.g. paint brush)
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 18c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  support: (
    // Support icon (e.g. life buoy)
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
      <line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
      <line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
      <line x1="4.93" y1="19.07" x2="9.17" y2="14.83" />
    </svg>
  ),
  marketing: (
    // Marketing icon (e.g. megaphone)
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11v2a1 1 0 001 1h2l3 5V6L6 11H4a1 1 0 00-1 1z" />
      <path d="M16 8v8a2 2 0 002 2h2" />
    </svg>
  ),
};

const ServiceIcon: React.FC<ServiceIconProps> = ({ name, className = "w-6 h-6" }) => {
  return icons[name] || <div className={className + " bg-primary rounded opacity-70"} />;
};

export default ServiceIcon;
