import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const NAV = [
  { label: "Review queue", to: "/review-queue", badge: 0 },
  { label: "Candidates", to: "/" },
  { label: "Applications", to: "/applications" },
  { label: "Generate", to: "/generate" },
  { label: "Prospects", to: "/prospects" },
  { label: "Follow-ups", to: "/follow-ups" },
  { label: "Reports", to: "/reports" },
  { label: "Activity", to: "/activity" },
  { label: "Help & guide", to: "/help" },
];

function Logo() {
  return (
    <div className="px-6 py-7 text-xl font-extrabold tracking-tight">
      JOB<span className="text-sidebar-accent">VERSE</span>
    </div>
  );
}

function NavLinks({
  active,
  onNavigate,
}: {
  active: string;
  onNavigate?: () => void;
}) {
  const location = useLocation();

  return (
    <nav className="pb-8">
      {NAV.map((item) => {
        const isActive = active ? item.label === active : location.pathname === item.to;
        const className = `flex w-full items-center gap-2 border-l-4 px-6 py-3 text-left text-[0.95rem] transition-colors ${
          isActive
            ? "border-sidebar-accent bg-sidebar-primary font-semibold"
            : "border-transparent text-sidebar-foreground/85 hover:bg-sidebar-primary/60"
        }`;

        return (
          <Link key={item.label} to={item.to} className={className} onClick={onNavigate}>
            <span className="truncate">{item.label}</span>
            {item.badge !== undefined && (
              <span className="ml-1 rounded-full bg-sidebar-accent px-2 py-0.5 text-xs font-semibold text-sidebar-accent-foreground">
                {item.badge}
              </span>
            )}
          </Link>
        );
      })}
    </nav>
  );
}

export function AppSidebar({ active }: { active: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile / tablet-portrait top bar (< md) */}
      <header className="sticky top-0 z-40 flex items-center justify-between bg-sidebar px-4 py-3 text-sidebar-foreground md:hidden">
        <span className="text-lg font-extrabold tracking-tight">
          JOB<span className="text-sidebar-accent">VERSE</span>
        </span>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              aria-label="Open navigation menu"
              className="flex h-10 w-10 items-center justify-center rounded-md hover:bg-sidebar-primary/60"
            >
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-72 border-none bg-sidebar p-0 text-sidebar-foreground"
          >
            <Logo />
            <NavLinks active={active} onNavigate={() => setOpen(false)} />
          </SheetContent>
        </Sheet>
      </header>

      {/* Desktop / tablet-landscape static sidebar (>= md) */}
      <aside className="hidden w-60 shrink-0 bg-sidebar text-sidebar-foreground md:flex md:flex-col">
        <Logo />
        <NavLinks active={active} />
      </aside>
    </>
  );
}