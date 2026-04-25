import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={`flex items-center flex-wrap gap-1 text-sm text-slate-400 ${className}`}>
      <Link href="/" className="flex items-center hover:text-slate-200 transition-colors" aria-label="Home">
        <Home className="w-3.5 h-3.5" />
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={index} className="flex items-center gap-1">
            <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
            {isLast || !item.href ? (
              <span className={isLast ? 'text-white font-medium' : 'text-slate-400'} aria-current={isLast ? 'page' : undefined}>
                {item.label}
              </span>
            ) : (
              <Link href={item.href} className="hover:text-slate-200 transition-colors">
                {item.label}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
