import { PlaceholderPage } from "@/components/PlaceholderPage";
import { PageMeta } from "@/components/PageMeta";

export default function ReportsPage() {
  return (
    <>
      <PageMeta title="Reports — Jobverse" description="Aggregate stats on jobs found, applications sent, and qualification rate will live here." />
      <PlaceholderPage active="Reports" title="Reports" note="Aggregate stats on jobs found, applications sent, and qualification rate will live here." />
    </>
  );
}
