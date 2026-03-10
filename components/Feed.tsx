"use client";
import { useState } from "react";

const COLORS = {
  cream: "#FAF7F2",
  sand: "#E8DDD0",
  terracotta: "#C4673A",
  darkBrown: "#2C1A0E",
  mediumBrown: "#6B4226",
  lightText: "#9C7B65",
  white: "#FFFFFF",
  green: "#4A7C59",
};

const categories = [
  { key: "alle", label: "Alle" },
  { key: "kjole", label: "👗 Kjoler" },
  { key: "baby", label: "🍼 Baby" },
  { key: "verktøy", label: "🔧 Verktøy" },
];

const mockItems = [
  { id: 1, name: "Maxi kjole – midnattsblå", owner: "Marte", size: "S/36", category: "kjole", available: true },
  { id: 2, name: "BabyBjörn Vippestol", owner: "Sofie", size: "0–2 år", category: "baby", available: true },
  { id: 3, name: "Bosch drill", owner: "Erik", size: "18V", category: "verktøy", available: true },
  { id: 4, name: "Stokke Tripp Trapp", owner: "Marte", size: "6 mnd+", category: "baby", available: false },
];

export default function Feed() {
  const [filter, setFilter] = useState("alle");
  const filtered = filter === "alle" ? mockItems : mockItems.filter(i => i.category === filter);

  return (
    <div style={{ background: COLORS.cream, minHeight: "100vh", fontFamily: "sans-serif" }}>
      {/* Header */}
      <div style={{ padding: "24px 20px 16px", borderBottom: `1px solid ${COLORS.sand}`, position: "sticky", top: 0, background: COLORS.cream, zIndex: 10 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
          <div>
            <div style={{ fontSize: 22, fontWeight: 700, color: COLORS.darkBrown }}>Låneringen</div>
            <div style={{ fontSize: 12, color: COLORS.lightText }}>Hva låner vennene dine ut?</div>
          </div>
          <div style={{ width: 36, height: 36, borderRadius: "50%", background: COLORS.terracotta, display: "flex", alignItems: "center", justifyContent: "center", color: COLORS.white, fontWeight: 700 }}>K</div>
        </div>
        <div style={{ display: "flex", gap: 8, overflowX: "auto" }}>
          {categories.map(c => (
            <button
              key={c.key}
              onClick={() => setFilter(c.key)}
              style={{
                padding: "8px 16px", borderRadius: 999, whiteSpace: "nowrap", cursor: "pointer",
                border: filter === c.key ? "none" : `1.5px solid ${COLORS.sand}`,
                background: filter === c.key ? COLORS.terracotta : COLORS.white,
                color: filter === c.key ? COLORS.white : COLORS.mediumBrown,
                fontWeight: filter === c.key ? 600 : 400,
                fontSize: 13,
              }}
            >{c.label}</button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, padding: 16 }}>
        {filtered.map(item => (
          <div key={item.id} style={{ background: COLORS.white, borderRadius: 16, overflow: "hidden", boxShadow: "0 2px 12px rgba(44,26,14,0.07)" }}>
            <div style={{ height: 160, background: COLORS.sand, position: "relative", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 40 }}>
              {item.category === "kjole" ? "👗" : item.category === "baby" ? "🍼" : "🔧"}
              {!item.available && (
                <div style={{ position: "absolute", inset: 0, background: "rgba(44,26,14,0.45)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ color: COLORS.white, fontSize: 13, fontWeight: 600, letterSpacing: "0.06em" }}>UTLÅNT</span>
                </div>
              )}
            </div>
            <div style={{ padding: "10px 12px 12px" }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: COLORS.darkBrown, marginBottom: 6 }}>{item.name}</div>
              <div style={{ display: "flex", gap: 6 }}>
                <span style={{ background: COLORS.sand, borderRadius: 999, padding: "3px 9px", fontSize: 11, color: COLORS.mediumBrown }}>{item.size}</span>
                <span style={{ background: "#EEF4F0", borderRadius: 999, padding: "3px 9px", fontSize: 11, color: COLORS.mediumBrown }}>{item.owner}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
