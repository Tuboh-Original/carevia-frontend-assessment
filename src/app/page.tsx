import Image from "next/image";
import careviaLogo from "@/assets/icons/logo/carevia.png";

const constraints = [
  {
    title: "Strict Type Safety",
    description:
      "No implicit data designations. Every component prop, API wrapper, and hook surface must be explicitly typed.",
  },
  {
    title: "Directory-by-Feature Design",
    description:
      "House UI components, hooks, and types under a modular features/operations/ cluster — not a generic components dump.",
  },
  {
    title: "Robust State Isolation",
    description:
      "Keep UI mutations bound to localized custom hooks or context providers designed for this module.",
  },
] as const;

const definitionOfDone = [
  "Zero console leakage — no raw operational data or debug lines in standard logs",
  "Compile cleanliness — zero linter bypasses or unresolved TypeScript complaints",
  "Proactive engagement — document the intentionally flawed mock data model",
] as const;

export default function Home() {
  return (
    <div className="relative min-h-full overflow-hidden bg-background text-foreground">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgb(26_122_126/0.22),transparent_60%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgb(26_122_126/0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgb(26_122_126/0.04)_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_at_center,black_20%,transparent_75%)]"
      />

      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-8 sm:px-10">
        <Image
          src={careviaLogo}
          alt="Carevia"
          width={140}
          height={36}
          priority
          className="h-8 w-auto sm:h-9"
        />
        <div className="flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1.5 text-xs font-medium tracking-wide text-carevia-light backdrop-blur-sm">
          <span className="animate-pulse-glow size-2 rounded-full bg-carevia-light" />
          Assessment Active
        </div>
      </header>

      <main className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20 sm:px-10">
        <section className="pb-16 pt-6 sm:pb-20 sm:pt-10">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-carevia-light">
            Frontend Engineering Assessment
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Central Operations
            <span className="block bg-linear-to-r from-carevia-light to-carevia bg-clip-text text-transparent">
              Console
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
            Welcome to the Carevia practical challenge. Implement a real-time
            tracking interface on our existing Next.js App Router codebase —
            production-grade TypeScript from day one.
          </p>
        </section>

        <section className="grid gap-5 sm:grid-cols-3">
          {constraints.map((item) => (
            <article
              key={item.title}
              className="group rounded-2xl border border-border bg-surface/60 p-6 backdrop-blur-sm transition-colors hover:border-carevia/40 hover:bg-surface-elevated/80"
            >
              <div className="mb-4 flex size-9 items-center justify-center rounded-lg bg-carevia/15 text-carevia-light transition-colors group-hover:bg-carevia/25">
                <span className="font-mono text-sm">→</span>
              </div>
              <h2 className="text-base font-semibold text-zinc-100">
                {item.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                {item.description}
              </p>
            </article>
          ))}
        </section>

        <section className="mt-8 rounded-2xl border border-carevia/30 bg-linear-to-br from-carevia/10 via-surface to-surface p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-2xl">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-carevia-light">
                Critical — read before coding
              </p>
              <h2 className="mt-2 text-xl font-semibold text-zinc-100 sm:text-2xl">
                Audit the mock data schema first
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
                Open{" "}
                <code className="rounded-md bg-black/30 px-1.5 py-0.5 font-mono text-xs text-carevia-light">
                  src/app/api/operations/mock-data.json
                </code>
                . The backend team left structural inconsistencies in payload
                identifiers for authentication tracking and coordinate mapping.
                Do not build around a broken model.
              </p>
            </div>
          </div>
          <p className="mt-5 rounded-xl border border-border bg-black/20 px-4 py-3 text-sm leading-relaxed text-zinc-300">
            <span className="font-medium text-zinc-100">Your action: </span>
            Open an Issue or write{" "}
            <code className="font-mono text-carevia-light">
              ARCHITECTURE_REVIEW.md
            </code>{" "}
            at the repo root — flag the gap, diagnose production impact, and
            propose your correction before building components.
          </p>
        </section>

        <section className="mt-8 rounded-2xl border border-border bg-surface/60 p-6 backdrop-blur-sm sm:p-8">
          <h2 className="text-lg font-semibold text-zinc-100">
            Definition of Done
          </h2>
          <p className="mt-1 text-sm text-zinc-500">
            Your pull request is evaluated against these parameters.
          </p>
          <ul className="mt-6 space-y-3">
            {definitionOfDone.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-zinc-400">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-carevia/20 text-xs text-carevia-light">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="relative z-10 border-t border-border px-6 py-8 sm:px-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 text-sm text-zinc-600 sm:flex-row sm:items-center">
          <p>Carevia Frontend Engineering Assessment</p>
          <p className="font-mono text-xs tracking-wide text-zinc-700">
            Next.js App Router · TypeScript · features/operations/
          </p>
        </div>
      </footer>
    </div>
  );
}
