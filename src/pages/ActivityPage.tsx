import { PlaceholderPage } from "@/components/PlaceholderPage";
import { PageMeta } from "@/components/PageMeta";

export default function ActivityPage() {
  return (
    <>
      <PageMeta title="Activity — Jobverse" description="A raw feed of automation runs and errors will show up here." />
      <PlaceholderPage active="Activity" title="Activity" note="A raw feed of automation runs and errors will show up here." />
    </>
  );
}
