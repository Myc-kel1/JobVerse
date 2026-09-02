import { PlaceholderPage } from "@/components/PlaceholderPage";
import { PageMeta } from "@/components/PageMeta";

export default function ReviewQueuePage() {
  return (
    <>
      <PageMeta title="Review queue — Jobverse" description="Applications drafted for approval will show up here once Workflow 2 is connected." />
      <PlaceholderPage active="Review queue" title="Review queue" note="Applications drafted for approval will show up here once Workflow 2 is connected." />
    </>
  );
}
