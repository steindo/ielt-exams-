import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
    title?: string;
    subtitle?: string;
    children: ReactNode;
    className?: string;
    icon?: React.ElementType;
}

export default function Card({ title, subtitle, children, className, icon: Icon }: CardProps) {
    return (
        <div className={cn("rounded-xl border border-border bg-card p-6 shadow-sm", className)}>
            {(title || Icon) && (
                <div className="mb-4 flex items-center justify-between">
                    <div>
                        {title && <h3 className="text-lg font-semibold text-card-foreground">{title}</h3>}
                        {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
                    </div>
                    {Icon && (
                        <div className="rounded-lg bg-primary/10 p-2 text-primary">
                            <Icon className="h-5 w-5" />
                        </div>
                    )}
                </div>
            )}
            {children}
        </div>
    );
}
