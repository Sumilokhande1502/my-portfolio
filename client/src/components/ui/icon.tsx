import { cn } from '@/lib/utils';

type IconProps = {
  name: string;
  brand?: boolean;
  className?: string;
};

export function Icon({ name, brand = false, className }: IconProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(brand ? 'fa-brands' : 'fa-solid', `fa-${name}`, className)}
    />
  );
}
