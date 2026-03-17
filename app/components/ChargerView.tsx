"use client";

import { MapPin, Navigation, Sun, Zap } from "lucide-react";
import { chargers } from "@/app/data/mock-data";

const euroFormatter = new Intl.NumberFormat("nl-NL", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
});

export function ChargerView() {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-xl font-semibold text-slate-900">Laadpalen in de buurt</h2>
        <p className="text-sm text-slate-600">
          Kies een beschikbare laadpaal en profiteer van lage tarieven bij zonne-overschot.
        </p>
      </div>

      <div className="space-y-3">
        {chargers.map((charger) => {
          const isSolarDeal = charger.solarSurplus;

          return (
            <article
              key={charger.id}
              className={`rounded-2xl border bg-white p-4 shadow-sm transition ${
                isSolarDeal ? "border-emerald-200 ring-1 ring-emerald-100" : "border-slate-200"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-base font-semibold text-slate-900">{charger.street}</h3>
                  <div className="mt-1 flex items-center gap-1 text-sm text-slate-600">
                    <MapPin className="h-4 w-4" />
                    <span>{charger.distance}</span>
                  </div>
                </div>

                <span
                  className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ${
                    isSolarDeal
                      ? "border border-emerald-200 bg-emerald-50 text-emerald-700"
                      : "border border-slate-200 bg-slate-100 text-slate-600"
                  }`}
                >
                  {isSolarDeal ? <Sun className="h-3.5 w-3.5" /> : <Zap className="h-3.5 w-3.5" />}
                  {isSolarDeal ? "Zonne-overschot" : "Standaard"}
                </span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl bg-slate-50 p-3">
                  <p className="text-slate-500">Tarief</p>
                  <p
                    className={`font-semibold ${
                      isSolarDeal ? "text-emerald-700" : "text-slate-800"
                    }`}
                  >
                    {euroFormatter.format(charger.tariff)}/kWh
                  </p>
                </div>
                <div className="rounded-xl bg-slate-50 p-3">
                  <p className="text-slate-500">Vermogen</p>
                  <p className="font-semibold text-slate-800">{charger.power}</p>
                </div>
              </div>

              <button
                type="button"
                disabled={!isSolarDeal}
                className={`mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                  isSolarDeal
                    ? "bg-emerald-600 text-white hover:bg-emerald-700"
                    : "cursor-not-allowed bg-slate-100 text-slate-400"
                }`}
              >
                <Navigation className="h-4 w-4" />
                {isSolarDeal ? "Start Laden" : "Niet beschikbaar"}
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}
