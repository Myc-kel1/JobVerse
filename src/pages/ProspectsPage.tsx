import { useState } from "react";
import { AppSidebar } from "@/components/AppSidebar";
import { PageMeta } from "@/components/PageMeta";

const CANDIDATES = [{ id: "1", label: "Michael Scofield (CAND-260828-WSIJ5B)" }];

const selectClass =
  "w-full appearance-none rounded-md border border-input bg-card px-4 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring";

export default function ProspectsPage() {
  const [candidate, setCandidate] = useState(CANDIDATES[0]?.id ?? "");
  const [filterCandidate, setFilterCandidate] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");

  return (
        <div className="flex min-h-screen flex-col bg-background md:flex-row">
      <PageMeta
        title="Prospects — Jobverse"
        description="Find matching jobs for a candidate and queue prospect roles for application in Jobverse."
      />
      <AppSidebar active="Prospects" />

            <main className="min-w-0 flex-1 px-4 py-6 md:px-8 md:py-8">
        <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Prospects</h1>

        <div className="mt-6 rounded-xl border border-border bg-card p-6 shadow-sm">
          <label
            htmlFor="find-jobs-candidate"
            className="text-sm font-semibold text-muted-foreground"
          >
            Find jobs for candidate
          </label>
          <select
            id="find-jobs-candidate"
            value={candidate}
            onChange={(e) => setCandidate(e.target.value)}
            className={`${selectClass} mt-2`}
          >
            {CANDIDATES.map((c) => (
              <option key={c.id} value={c.id}>
                {c.label}
              </option>
            ))}
          </select>

          <div className="mt-4 flex flex-wrap gap-3">
            <button className="rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
              Find jobs
            </button>
            <button className="rounded-md bg-sidebar-primary px-5 py-2.5 text-sm font-semibold text-sidebar-primary-foreground transition-colors hover:bg-sidebar-primary/90">
              Queue all found
            </button>
          </div>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="filter-candidate"
              className="text-sm font-semibold text-muted-foreground"
            >
              Candidate
            </label>
            <select
              id="filter-candidate"
              value={filterCandidate}
              onChange={(e) => setFilterCandidate(e.target.value)}
              className={`${selectClass} mt-2`}
            >
              <option>All</option>
              {CANDIDATES.map((c) => (
                <option key={c.id}>{c.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="filter-status" className="text-sm font-semibold text-muted-foreground">
              Status
            </label>
            <select
              id="filter-status"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className={`${selectClass} mt-2`}
            >
              <option>All</option>
              <option>New</option>
              <option>Queued</option>
              <option>Applied</option>
              <option>Skipped</option>
            </select>
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-xl border border-border bg-card shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[840px] text-left text-sm">
              <thead>
                <tr className="border-b border-border text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  <th className="px-6 py-5">Candidate</th>
                  <th className="px-6 py-5">Company</th>
                  <th className="px-6 py-5">Role</th>
                  <th className="px-6 py-5">Source</th>
                  <th className="px-6 py-5">Status</th>
                  <th className="px-6 py-5">Link</th>
                  <th className="px-6 py-5">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={7} className="px-6 py-10 text-center text-muted-foreground">
                    No prospects yet. Run “Find jobs” to discover roles.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
