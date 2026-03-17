"use client";

import { useState } from "react";
import { Euro, Home, PiggyBank, Sun, TrendingUp } from "lucide-react";
import { hostStats } from "@/app/data/mock-data";

const euroFormatter = new Intl.NumberFormat("nl-NL", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
});

export function HostDashboard() {
  const [autoEnableOnSurplus, setAutoEnableOnSurplus] = useState(true);

  return (
    <section className="space-y-5">
      <header>
        <h2 className="text-xl font-semibold text-slate-900">Welkom, Gastheer</h2>
        <p className="text-sm text-slate-600">
          Beheer je laadpaal slim op basis van je actuele zonne-opbrengst.
        </p>
      </header>

      <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <h3 className="text-sm font-semibold tracking-wide text-slate-700 uppercase">
          Huidige Status
        </h3>
        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-xl bg-emerald-50 p-3">
            <div className="flex items-center gap-2 text-emerald-700">
              <Sun className="h-4 w-4" />
              <span className="text-sm font-medium">Huidige opwek</span>
            </div>
            <p className="mt-1 text-lg font-semibold text-emerald-800">
              {hostStats.currentProductionKw.toFixed(1)} kW
            </p>
          </div>
          <div className="rounded-xl bg-sky-50 p-3">
            <div className="flex items-center gap-2 text-sky-700">
              <Home className="h-4 w-4" />
              <span className="text-sm font-medium">Huisverbruik</span>
            </div>
            <p className="mt-1 text-lg font-semibold text-sky-800">
              {hostStats.homeUsageKw.toFixed(1)} kW
            </p>
          </div>
          <div className="rounded-xl bg-teal-50 p-3">
            <div className="flex items-center gap-2 text-teal-700">
              <TrendingUp className="h-4 w-4" />
              <span className="text-sm font-medium">Overschot</span>
            </div>
            <p className="mt-1 text-lg font-semibold text-teal-800">
              {hostStats.surplusKw.toFixed(1)} kW
            </p>
          </div>
        </div>
      </article>

      <article className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
        <div className="flex items-center justify-between gap-3">
          <p className="max-w-[75%] text-sm font-medium text-emerald-900">
            Stel laadpaal automatisch beschikbaar bij overschot &gt; 2kW
          </p>
          <button
            type="button"
            role="switch"
            aria-checked={autoEnableOnSurplus}
            aria-label="Automatisch beschikbaar maken bij overschot"
            onClick={() => setAutoEnableOnSurplus((current) => !current)}
            className={`relative inline-flex h-8 w-14 items-center rounded-full transition ${
              autoEnableOnSurplus ? "bg-emerald-600" : "bg-slate-300"
            }`}
          >
            <span
              className={`inline-block h-6 w-6 transform rounded-full bg-white shadow transition ${
                autoEnableOnSurplus ? "translate-x-7" : "translate-x-1"
              }`}
            />
          </button>
        </div>
      </article>

      <article className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex items-center gap-2 text-emerald-700">
            <Euro className="h-4 w-4" />
            <h3 className="text-sm font-medium text-slate-700">Verdiend deze maand</h3>
          </div>
          <p className="mt-2 text-2xl font-semibold text-slate-900">
            {euroFormatter.format(hostStats.monthlyEarnings)}
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex items-center gap-2 text-teal-700">
            <PiggyBank className="h-4 w-4" />
            <h3 className="text-sm font-medium text-slate-700">Bespaard op terugleverkosten</h3>
          </div>
          <p className="mt-2 text-2xl font-semibold text-slate-900">
            {euroFormatter.format(hostStats.feedInSavings)}
          </p>
        </div>
      </article>
    </section>
  );
}
