"use client";

import { useState } from "react";
import { Car, Home, Zap } from "lucide-react";
import { ChargerView } from "@/app/components/ChargerView";
import { HostDashboard } from "@/app/components/HostDashboard";

type AppTab = "lader" | "host";

export default function Page() {
  const [activeTab, setActiveTab] = useState<AppTab>("lader");

  return (
    <div className="min-h-screen bg-slate-50">
      <main className="mx-auto flex min-h-screen w-full max-w-md flex-col px-4 pt-6 pb-24">
        <header className="mb-6 rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-emerald-100 p-2 text-emerald-700">
              <Zap className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-900">SurCharge</h1>
              <p className="text-sm text-slate-600">
                Airbnb voor laadpalen met slim zonne-energiegebruik
              </p>
            </div>
          </div>
        </header>

        <div className="flex-1">{activeTab === "lader" ? <ChargerView /> : <HostDashboard />}</div>
      </main>

      <nav className="fixed inset-x-0 bottom-0 border-t border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto grid max-w-md grid-cols-2">
          <button
            type="button"
            onClick={() => setActiveTab("lader")}
            className={`flex flex-col items-center gap-1 py-3 text-xs font-medium transition ${
              activeTab === "lader" ? "text-emerald-700" : "text-slate-500"
            }`}
          >
            <Car className="h-5 w-5" />
            <span>Lader</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("host")}
            className={`flex flex-col items-center gap-1 py-3 text-xs font-medium transition ${
              activeTab === "host" ? "text-emerald-700" : "text-slate-500"
            }`}
          >
            <Home className="h-5 w-5" />
            <span>Gastheer</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
