type ResearchDisclaimerProps = {
  variant?: 'banner' | 'inline' | 'compact';
  className?: string;
};

export function ResearchDisclaimer({ variant = 'banner', className }: ResearchDisclaimerProps) {
  const text = 'FOR LABORATORY RESEARCH PURPOSES ONLY. NOT FOR HUMAN OR VETERINARY USE.';

  if (variant === 'compact') {
    return (
      <p className={`text-[10px] uppercase tracking-wider text-red-700 font-semibold ${className ?? ''}`}>
        {text}
      </p>
    );
  }

  if (variant === 'inline') {
    return (
      <span className={`text-xs text-red-700 font-semibold ${className ?? ''}`}>
        {text}
      </span>
    );
  }

  return (
    <div className={`p-4 bg-red-50 border border-red-100 rounded-lg ${className ?? ''}`} role="note" aria-label="Research use disclaimer">
      <p className="text-xs text-red-800 font-semibold m-0">
        {text}
      </p>
    </div>
  );
}
