import type { ProviderStatus } from "@/lib/status-summary";

function fmtPct(n: number | null): string {
  if (n === null) return "—";
  return (n >= 99.95 ? 100 : n).toFixed(n >= 99.95 || n === 100 ? 0 : 1) + "%";
}

const STATE_LABEL: Record<ProviderStatus["state"], string> = {
  up: "operational",
  degraded: "degraded",
  unknown: "no data yet",
};

export default function StatusStrip({
  providers,
  allUp,
  anyData,
}: {
  providers: ProviderStatus[];
  allUp: boolean;
  anyData: boolean;
}) {
  if (!anyData || providers.length === 0) return null;

  return (
    <div className="statusbar">
      <div className="statusbar__head">
        <span className={"statusbar__pulse" + (allUp ? " is-up" : " is-down")} aria-hidden />
        <span className="statusbar__state">
          {allUp ? "All providers operational" : "Some providers degraded"}
        </span>
        <a href="/status" className="statusbar__all">
          Full status →
        </a>
      </div>

      <div className="statusbar__grid">
        {providers.map((p) => {
          const dot =
            p.state === "up" ? "is-up" : p.state === "degraded" ? "is-down" : "is-unknown";
          const inner = (
            <>
              <div className="pcard__top">
                <span className={"pcard__dot " + dot} aria-hidden />
                <span className="pcard__name">{p.label}</span>
                {p.integrity && p.integrity.total > 0 && (
                  <span
                    className={
                      "pcard__integ" +
                      (p.integrity.pass === p.integrity.total ? " is-pass" : " is-warn")
                    }
                    title="Daily protocol-integrity suite"
                  >
                    integrity {p.integrity.pass}/{p.integrity.total}
                  </span>
                )}
              </div>
              <div className="pcard__meta">
                <span className="pcard__uptime">{fmtPct(p.uptimePct)} · 24h uptime</span>
                <span className="pcard__mode">{STATE_LABEL[p.state]}</span>
              </div>
            </>
          );
          return (
            <a key={p.id} href="/status" className="pcard">
              {inner}
            </a>
          );
        })}
      </div>
    </div>
  );
}
