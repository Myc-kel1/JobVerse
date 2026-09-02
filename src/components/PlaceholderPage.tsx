import { AppSidebar } from "@/components/AppSidebar";

type PlaceholderPageProps = {
  active: string;
  title: string;
  note: string;
};

export function PlaceholderPage({ active, title, note }: PlaceholderPageProps) {
  return (
        <div className="flex min-h-screen flex-col bg-background md:flex-row">
      <AppSidebar active={active} />

      <main className="min-w-0 flex-1 px-4 py-6 md:px-8 md:py-8">
        <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">{title}</h1>

        <div className="mt-6 rounded-xl border border-border bg-card p-5 shadow-sm sm:p-8">
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">{note}</p>
        </div>
      </main>
    </div>
  );
}
