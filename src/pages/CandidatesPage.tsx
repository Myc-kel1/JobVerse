import { useState } from "react";
import { AppSidebar } from "@/components/AppSidebar";
import { PageMeta } from "@/components/PageMeta";

type Candidate = {
  id: string;
  name: string;
  code: string;
  status: string;
  roles: string;
  done: number;
  target: number;
  inactive: boolean;
};

export default function CandidatesPage() {
  const [rows, setRows] = useState<Candidate[]>([
    {
      id: "1",
      name: "Michael Scofield",
      code: "CAND-260828-WSIJ5B",
      status: "Profiled",
      roles: "senior Java Developer",
      done: 0,
      target: 50,
      inactive: false,
    },
  ]);

  const update = (id: string, patch: Partial<Candidate>) =>
    setRows((r) => r.map((c) => (c.id === id ? { ...c, ...patch } : c)));

  return (
    <div className="flex min-h-screen flex-col bg-background md:flex-row">
      <PageMeta
        title="Candidates — Jobverse"
        description="Manage candidate profiles, application targets and progress in the Jobverse recruiting workspace."
      />
      <AppSidebar active="Candidates" />

      <main className="min-w-0 flex-1 px-4 py-6 md:px-8 md:py-8">
        <div className="mx-auto w-full max-w-screen-2xl">
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Candidates
          </h1>

          <div className="mt-6 overflow-hidden rounded-xl border border-border bg-card shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[840px] text-left text-sm">
                <thead>
                  <tr className="border-b border-border text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    <th className="px-6 py-5">Name</th>
                    <th className="px-6 py-5">Target roles</th>
                    <th className="px-6 py-5">Progress</th>
                    <th className="px-6 py-5">Target</th>
                    <th className="px-6 py-5">Active</th>
                    <th className="px-6 py-5" />
                  </tr>
                </thead>
                <tbody>
                  {rows.map((c) => (
                    <tr key={c.id} className="align-middle">
                      <td className="px-6 py-5">
                        <div className="font-semibold text-foreground">{c.name}</div>
                        <div className="mt-1 text-xs text-muted-foreground">{c.status}</div>
                      </td>
                      <td className="px-6 py-5 text-foreground">{c.roles}</td>
                      <td className="px-6 py-5 text-foreground">
                        {c.done} / {c.target}
                      </td>
                      <td className="px-6 py-5">
                        <input
                          type="number"
                          aria-label={`Application target for ${c.name}`}
                          value={c.target}
                          onChange={(e) =>
                            update(c.id, { target: Number(e.target.value) || 0 })
                          }
                          className="w-20 rounded-md border border-input bg-background px-3 py-1.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
                        />
                      </td>
                      <td className="px-6 py-5">
                        <label className="flex items-center gap-2 text-foreground">
                          <input
                            type="checkbox"
                            checked={c.inactive}
                            onChange={(e) => update(c.id, { inactive: e.target.checked })}
                            className="h-4 w-4 accent-primary"
                          />
                          Inactive
                        </label>
                      </td>
                      <td className="px-6 py-5 text-right">
                        <button
                          onClick={() => setRows((r) => r.filter((x) => x.id !== c.id))}
                          className="rounded-md border border-destructive px-3 py-1.5 text-sm font-medium text-destructive transition-colors hover:bg-destructive hover:text-destructive-foreground"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                  {rows.length === 0 && (
                    <tr>
                      <td colSpan={6} className="px-6 py-10 text-center text-muted-foreground">
                        No candidates yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}