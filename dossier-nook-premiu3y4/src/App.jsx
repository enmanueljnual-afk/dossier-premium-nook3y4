import { useState } from "react";

const G = "#B8963E";
const D = "#0C0C0C";
const D2 = "#141414";
const D3 = "#1C1C1C";
const L = "#F0EBE0";
const M = "rgba(240,235,224,0.45)";
const SLIDES_LABELS = ["INICIO", "UNIDADES", "3 AMB.", "4 AMB.", "COMPARATIVA", "CONTACTO"];

function Dot({ active }) {
  return (
    <div style={{
      width: active ? 28 : 7, height: 7,
      borderRadius: 4,
      background: active ? G : "rgba(240,235,224,0.18)",
      transition: "all 0.3s ease",
    }} />
  );
}

function Corner({ pos }) {
  const t = pos.includes("top") ? 32 : "auto";
  const b = pos.includes("bottom") ? 32 : "auto";
  const l = pos.includes("left") ? 32 : "auto";
  const r = pos.includes("right") ? 32 : "auto";
  return (
    <>
      <div style={{ position:"absolute", top:t, bottom:b, left:l, right:r, width:48, height:1, background:G, opacity:0.7 }} />
      <div style={{ position:"absolute", top:t, bottom:b, left:l, right:r, width:1, height:48, background:G, opacity:0.7 }} />
    </>
  );
}

function StatCard({ label, value, gold }) {
  return (
    <div style={{
      background: gold ? "rgba(184,150,62,0.1)" : D3,
      border: gold ? `1px solid rgba(184,150,62,0.35)` : "1px solid rgba(240,235,224,0.07)",
      padding: "14px 16px",
    }}>
      <div style={{ fontSize:10, letterSpacing:"0.12em", color: gold ? G : M, marginBottom:6 }}>{label.toUpperCase()}</div>
      <div style={{ fontSize:20, fontFamily:"var(--font-serif)", color:L }}>{value}</div>
    </div>
  );
}

function Cover() {
  return (
    <div style={{ minHeight:520, display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", textAlign:"center", padding:"64px 48px", position:"relative" }}>
      <Corner pos="top-left" />
      <Corner pos="bottom-right" />
      <div style={{ fontSize:10, letterSpacing:"0.32em", color:G, marginBottom:28 }}>CENTENARIO 2430 · SAN ISIDRO</div>
      <div style={{ fontSize:80, fontFamily:"var(--font-serif)", fontWeight:400, color:L, lineHeight:1, letterSpacing:"0.08em" }}>NOOK</div>
      <div style={{ width:72, height:1, background:G, margin:"28px auto" }} />
      <div style={{ fontSize:13, color:M, letterSpacing:"0.18em", marginBottom:10 }}>UNIDADES EXCLUSIVAS</div>
      <div style={{ fontSize:26, fontFamily:"var(--font-serif)", color:L, letterSpacing:"0.04em" }}>3 y 4 Ambientes</div>
      <div style={{ marginTop:52, fontSize:10, color:"rgba(240,235,224,0.22)", letterSpacing:"0.22em" }}>NAVEGÁ POR LA PRESENTACIÓN →</div>
    </div>
  );
}

function Overview({ go }) {
  return (
    <div style={{ minHeight:520, padding:"52px 40px" }}>
      <div style={{ fontSize:10, letterSpacing:"0.28em", color:G, marginBottom:14 }}>LAS UNIDADES</div>
      <div style={{ fontSize:38, fontFamily:"var(--font-serif)", color:L, marginBottom:44 }}>Dos formas de vivir NOOK</div>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14 }}>
        <div onClick={() => go(2)} style={{ background:D3, padding:"32px 28px", cursor:"pointer", border:"1px solid rgba(240,235,224,0.09)" }}>
          <div style={{ fontSize:10, letterSpacing:"0.2em", color:M, marginBottom:10 }}>UNIDAD</div>
          <div style={{ fontSize:34, fontFamily:"var(--font-serif)", color:L, marginBottom:6 }}>3 Amb.</div>
          <div style={{ fontSize:12, color:G, marginBottom:20, letterSpacing:"0.05em" }}>133.01 m² totales</div>
          <div style={{ fontSize:12, color:M, lineHeight:2.1 }}>
            2 Dormitorios suite<br />
            Estar · Comedor · Cocina<br />
            Toilette · Vestidor<br />
            2 Balcones
          </div>
          <div style={{ marginTop:24, fontSize:10, color:G, letterSpacing:"0.15em" }}>VER UNIDAD →</div>
        </div>
        <div onClick={() => go(3)} style={{ background:D3, padding:"32px 28px", cursor:"pointer", border:`2px solid ${G}`, position:"relative" }}>
          <div style={{ position:"absolute", top:0, right:0, background:G, color:D, fontSize:9, padding:"5px 14px", letterSpacing:"0.18em", fontWeight:500 }}>EXCLUSIVO</div>
          <div style={{ fontSize:10, letterSpacing:"0.2em", color:G, marginBottom:10 }}>UNIDAD PERSONALIZADA</div>
          <div style={{ fontSize:34, fontFamily:"var(--font-serif)", color:L, marginBottom:6 }}>4 Amb.</div>
          <div style={{ fontSize:12, color:G, marginBottom:20, letterSpacing:"0.05em" }}>129.93 m² totales</div>
          <div style={{ fontSize:12, color:M, lineHeight:2.1 }}>
            2 Dormitorios suite<br />
            Estar independiente<br />
            Comedor · Cocina<br />
            2 Vestidores · 2 Balcones
          </div>
          <div style={{ marginTop:24, fontSize:10, color:G, letterSpacing:"0.15em" }}>VER UNIDAD →</div>
        </div>
      </div>
      <div style={{ marginTop:20, padding:"18px 22px", background:"rgba(184,150,62,0.06)", border:"1px solid rgba(184,150,62,0.18)", fontSize:12, color:M, lineHeight:1.8 }}>
        Ambas unidades · Proyecto en pozo · Anticipo + hasta 72 cuotas en pesos · Desde USD 2.400/m²
      </div>
    </div>
  );
}

function Tres() {
  return (
    <div style={{ minHeight:520, padding:"52px 40px" }}>
      <div style={{ fontSize:10, letterSpacing:"0.28em", color:G, marginBottom:14 }}>UNIDAD · 3 AMBIENTES</div>
      <div style={{ fontSize:36, fontFamily:"var(--font-serif)", color:L, marginBottom:6 }}>Amplitud y confort en cada rincón</div>
      <div style={{ fontSize:12, color:M, marginBottom:40, letterSpacing:"0.05em" }}>UF 05 + UF 06 · Centenario 2430, San Isidro</div>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:36, alignItems:"start" }}>
        <div>
          <svg viewBox="0 0 260 190" style={{ width:"100%", maxWidth:260 }}>
            <rect x="8" y="8" width="244" height="174" fill="none" stroke={G} strokeWidth="1.5"/>
            <rect x="8" y="8" width="88" height="90" fill="rgba(184,150,62,0.07)" stroke="rgba(240,235,224,0.2)" strokeWidth="0.8"/>
            <text x="52" y="55" textAnchor="middle" fill={L} fontSize="9" fontFamily="sans-serif">DORM 1</text>
            <text x="52" y="68" textAnchor="middle" fill={M} fontSize="7.5" fontFamily="sans-serif">BAÑO SUITE</text>
            <rect x="8" y="98" width="42" height="84" fill="rgba(184,150,62,0.04)" stroke={G} strokeWidth="0.8" strokeDasharray="5,3"/>
            <text x="29" y="143" textAnchor="middle" fill={G} fontSize="8" fontFamily="sans-serif">BALCÓN</text>
            <rect x="50" y="98" width="46" height="84" fill="rgba(184,150,62,0.07)" stroke="rgba(240,235,224,0.2)" strokeWidth="0.8"/>
            <text x="73" y="140" textAnchor="middle" fill={L} fontSize="9" fontFamily="sans-serif">DORM 2</text>
            <text x="73" y="153" textAnchor="middle" fill={M} fontSize="7.5" fontFamily="sans-serif">BAÑO SUITE</text>
            <rect x="96" y="8" width="52" height="90" fill={D2} stroke="rgba(240,235,224,0.15)" strokeWidth="0.8"/>
            <text x="122" y="52" textAnchor="middle" fill={M} fontSize="8" fontFamily="sans-serif">BAÑOS</text>
            <rect x="96" y="98" width="52" height="84" fill={D2} stroke="rgba(240,235,224,0.15)" strokeWidth="0.8"/>
            <text x="122" y="138" textAnchor="middle" fill={M} fontSize="8" fontFamily="sans-serif">VEST</text>
            <text x="122" y="152" textAnchor="middle" fill={M} fontSize="8" fontFamily="sans-serif">TOIL</text>
            <rect x="148" y="8" width="104" height="158" fill="rgba(184,150,62,0.04)" stroke="rgba(240,235,224,0.2)" strokeWidth="0.8"/>
            <text x="200" y="78" textAnchor="middle" fill={L} fontSize="9" fontFamily="sans-serif">ESTAR</text>
            <text x="200" y="93" textAnchor="middle" fill={M} fontSize="8" fontFamily="sans-serif">COMEDOR · COCINA</text>
            <rect x="210" y="166" width="42" height="16" fill="rgba(184,150,62,0.04)" stroke={G} strokeWidth="0.8" strokeDasharray="5,3"/>
            <text x="231" y="177" textAnchor="middle" fill={G} fontSize="7" fontFamily="sans-serif">BALCÓN</text>
            <text x="20" y="25" fill={G} fontSize="9" fontFamily="sans-serif">N↑</text>
          </svg>
          <div style={{ fontSize:10, color:"rgba(240,235,224,0.25)", textAlign:"center", marginTop:8, letterSpacing:"0.1em" }}>PLANTA ESQUEMÁTICA · UF 05+06</div>
        </div>
        <div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginBottom:28 }}>
            {[
              { label:"Sup. cubierta", value:"122.17 m²" },
              { label:"Balcón", value:"10.84 m²" },
              { label:"Sup. total", value:"133.01 m²" },
              { label:"Ambientes", value:"3" },
            ].map(s => <StatCard key={s.label} {...s} />)}
          </div>
          <div style={{ borderLeft:`2px solid ${G}`, paddingLeft:18 }}>
            {[
              "2 Dormitorios con baño en suite",
              "Estar · Comedor · Cocina integrados",
              "Toilette independiente",
              "Vestidor en dormitorio principal",
              "2 Balcones — uno en cada extremo",
              "Planta horizontal de gran amplitud",
            ].map(item => (
              <div key={item} style={{ fontSize:12, color:M, marginBottom:11, lineHeight:1.5 }}>
                <span style={{ color:G, marginRight:8 }}>—</span>{item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Cuatro() {
  return (
    <div style={{ minHeight:520, padding:"52px 40px" }}>
      <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:14 }}>
        <div style={{ fontSize:10, letterSpacing:"0.28em", color:G }}>UNIDAD PERSONALIZADA · 4 AMBIENTES</div>
        <div style={{ background:G, color:D, fontSize:9, padding:"4px 12px", letterSpacing:"0.18em", fontWeight:500 }}>EXCLUSIVO</div>
      </div>
      <div style={{ fontSize:36, fontFamily:"var(--font-serif)", color:L, marginBottom:6 }}>Una unidad diseñada a medida</div>
      <div style={{ fontSize:12, color:M, marginBottom:6 }}>Resultado de la unificación de UF 04 + UF 05</div>
      <div style={{ width:56, height:1, background:G, marginBottom:40 }} />
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:36, alignItems:"start" }}>
        <div>
          <svg viewBox="0 0 180 270" style={{ width:"100%", maxWidth:180 }}>
            <rect x="8" y="8" width="164" height="254" fill="none" stroke={G} strokeWidth="1.5"/>
            <rect x="8" y="8" width="50" height="36" fill="rgba(184,150,62,0.04)" stroke={G} strokeWidth="0.8" strokeDasharray="5,3"/>
            <text x="33" y="29" textAnchor="middle" fill={G} fontSize="7.5" fontFamily="sans-serif">BALCÓN</text>
            <rect x="58" y="8" width="114" height="90" fill="rgba(184,150,62,0.04)" stroke="rgba(240,235,224,0.2)" strokeWidth="0.8"/>
            <text x="115" y="50" textAnchor="middle" fill={L} fontSize="9" fontFamily="sans-serif">COMEDOR</text>
            <text x="115" y="63" textAnchor="middle" fill={M} fontSize="8" fontFamily="sans-serif">COCINA</text>
            <rect x="8" y="44" width="50" height="60" fill="rgba(184,150,62,0.08)" stroke="rgba(240,235,224,0.2)" strokeWidth="0.8"/>
            <text x="33" y="77" textAnchor="middle" fill={L} fontSize="9" fontFamily="sans-serif">ESTAR</text>
            <rect x="8" y="104" width="50" height="30" fill={D2} stroke="rgba(240,235,224,0.15)" strokeWidth="0.8"/>
            <text x="33" y="122" textAnchor="middle" fill={M} fontSize="7.5" fontFamily="sans-serif">PASO</text>
            <rect x="58" y="98" width="80" height="72" fill={D2} stroke="rgba(240,235,224,0.15)" strokeWidth="0.8"/>
            <text x="98" y="132" textAnchor="middle" fill={M} fontSize="8" fontFamily="sans-serif">BAÑO SUITE</text>
            <text x="98" y="155" textAnchor="middle" fill={M} fontSize="7.5" fontFamily="sans-serif">TOILETTE</text>
            <rect x="138" y="98" width="34" height="72" fill="rgba(184,150,62,0.08)" stroke="rgba(240,235,224,0.2)" strokeWidth="0.8"/>
            <text x="155" y="132" textAnchor="middle" fill={L} fontSize="7.5" fontFamily="sans-serif">DORM 2</text>
            <text x="155" y="148" textAnchor="middle" fill={M} fontSize="7" fontFamily="sans-serif">SUITE</text>
            <rect x="8" y="134" width="50" height="76" fill="rgba(184,150,62,0.08)" stroke="rgba(240,235,224,0.2)" strokeWidth="0.8"/>
            <text x="33" y="170" textAnchor="middle" fill={L} fontSize="9" fontFamily="sans-serif">DORM 1</text>
            <text x="33" y="184" textAnchor="middle" fill={M} fontSize="7.5" fontFamily="sans-serif">SUITE</text>
            <rect x="58" y="170" width="114" height="40" fill={D2} stroke="rgba(240,235,224,0.15)" strokeWidth="0.8"/>
            <text x="115" y="194" textAnchor="middle" fill={M} fontSize="8" fontFamily="sans-serif">VESTIDOR · VEST</text>
            <rect x="8" y="210" width="50" height="52" fill="rgba(184,150,62,0.08)" stroke="rgba(240,235,224,0.2)" strokeWidth="0.8"/>
            <text x="33" y="238" textAnchor="middle" fill={L} fontSize="7.5" fontFamily="sans-serif">DORM 3</text>
            <rect x="58" y="210" width="114" height="52" fill="rgba(184,150,62,0.04)" stroke={G} strokeWidth="0.8" strokeDasharray="5,3"/>
            <text x="115" y="239" textAnchor="middle" fill={G} fontSize="8" fontFamily="sans-serif">BALCÓN PRINCIPAL</text>
            <line x1="8" y1="134" x2="172" y2="134" stroke={G} strokeWidth="0.5" strokeDasharray="10,5" opacity="0.45"/>
            <text x="20" y="22" fill={G} fontSize="9" fontFamily="sans-serif">N↑</text>
          </svg>
          <div style={{ fontSize:10, color:"rgba(240,235,224,0.25)", textAlign:"center", marginTop:8, letterSpacing:"0.1em" }}>PLANTA ESQUEMÁTICA · UF 04+05</div>
        </div>
        <div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginBottom:28 }}>
            {[
              { label:"Sup. cubierta", value:"117.59 m²", gold:true },
              { label:"Balcón", value:"12.34 m²", gold:true },
              { label:"Sup. total", value:"129.93 m²", gold:true },
              { label:"Ambientes", value:"4", gold:true },
            ].map(s => <StatCard key={s.label} {...s} />)}
          </div>
          <div style={{ fontSize:10, letterSpacing:"0.2em", color:G, marginBottom:14 }}>LO QUE LA HACE ÚNICA</div>
          {[
            { t:"Surge de la unificación", d:"UF 04 + UF 05 unificados crean una configuración que no existe como unidad estándar en el mercado." },
            { t:"Estar independiente del comedor", d:"A diferencia del 3 amb, el estar es un espacio separado. Más privacidad, más funcionalidad familiar." },
            { t:"Doble baño suite + vestidores", d:"Cada dormitorio principal tiene su propio baño y vestidor. Un nivel de confort que define otra categoría." },
            { t:"Posibilidad de personalizar", d:"Al comprar en pozo, el comprador puede influir en la distribución durante la etapa de obra." },
          ].map(item => (
            <div key={item.t} style={{ marginBottom:15, paddingBottom:15, borderBottom:"1px solid rgba(240,235,224,0.06)" }}>
              <div style={{ fontSize:12, color:L, marginBottom:4, fontWeight:500 }}>{item.t}</div>
              <div style={{ fontSize:11, color:M, lineHeight:1.65 }}>{item.d}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Comparativa() {
  const rows = [
    { l:"Sup. cubierta", a:"122.17 m²", b:"117.59 m²", diff:false },
    { l:"Balcón total", a:"10.84 m²", b:"12.34 m²", diff:true },
    { l:"Sup. total", a:"133.01 m²", b:"129.93 m²", diff:false },
    { l:"Dormitorios", a:"2 suite", b:"2 suite", diff:false },
    { l:"Baños suite", a:"2", b:"2", diff:false },
    { l:"Vestidor", a:"1", b:"2", diff:true },
    { l:"Estar independiente", a:"No", b:"Sí", diff:true },
    { l:"Balcones", a:"2", b:"2", diff:false },
    { l:"Toilette", a:"Sí", b:"Sí", diff:false },
    { l:"Personalización", a:"Estándar", b:"Alta", diff:true },
  ];
  return (
    <div style={{ minHeight:520, padding:"52px 40px" }}>
      <div style={{ fontSize:10, letterSpacing:"0.28em", color:G, marginBottom:14 }}>COMPARATIVA</div>
      <div style={{ fontSize:36, fontFamily:"var(--font-serif)", color:L, marginBottom:44 }}>Las dos unidades, lado a lado</div>
      <div style={{ border:"1px solid rgba(240,235,224,0.09)", overflow:"hidden" }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", background:D3 }}>
          <div style={{ padding:"14px 18px", fontSize:10, letterSpacing:"0.15em", color:M }}>ESPECIFICACIÓN</div>
          <div style={{ padding:"14px 18px", fontSize:10, letterSpacing:"0.15em", color:M, borderLeft:"1px solid rgba(240,235,224,0.08)" }}>3 AMBIENTES</div>
          <div style={{ padding:"14px 18px", fontSize:10, letterSpacing:"0.15em", color:G, borderLeft:`1px solid rgba(184,150,62,0.3)`, background:"rgba(184,150,62,0.07)" }}>4 AMBIENTES ★</div>
        </div>
        {rows.map((row, i) => (
          <div key={row.l} style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", borderTop:"1px solid rgba(240,235,224,0.05)", background: i%2===0?"transparent":"rgba(255,255,255,0.015)" }}>
            <div style={{ padding:"11px 18px", fontSize:12, color:M }}>{row.l}</div>
            <div style={{ padding:"11px 18px", fontSize:12, color:L, borderLeft:"1px solid rgba(240,235,224,0.05)" }}>{row.a}</div>
            <div style={{ padding:"11px 18px", fontSize:12, color: row.diff ? G : L, borderLeft:"1px solid rgba(184,150,62,0.12)", background:"rgba(184,150,62,0.025)", fontWeight: row.diff ? 500 : 400 }}>{row.b}</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop:18, padding:"15px 20px", background:"rgba(184,150,62,0.06)", border:"1px solid rgba(184,150,62,0.18)", fontSize:12, color:M }}>
        Ambas unidades · Proyecto en pozo · Centenario 2430, San Isidro · Hasta 72 cuotas en pesos · Desde USD 2.400/m²
      </div>
    </div>
  );
}

function Contacto() {
  return (
    <div style={{ minHeight:520, display:"flex", flexDirection:"column", justifyContent:"center", padding:"64px 48px", position:"relative" }}>
      <Corner pos="top-left" />
      <Corner pos="bottom-right" />
      <div style={{ fontSize:10, letterSpacing:"0.28em", color:G, marginBottom:22 }}>SIGUIENTE PASO</div>
      <div style={{ fontSize:44, fontFamily:"var(--font-serif)", color:L, marginBottom:16, lineHeight:1.1, maxWidth:440 }}>
        Reunión con Enmanuel — 20 minutos
      </div>
      <div style={{ width:56, height:1, background:G, margin:"24px 0" }} />
      <div style={{ fontSize:13, color:M, maxWidth:420, lineHeight:1.85, marginBottom:44 }}>
        En la reunión mostramos los números reales: precio por unidad, estructura del anticipo y las cuotas en pesos. Sin compromiso, con toda la información.
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14, maxWidth:380 }}>
        <div style={{ background:G, padding:"18px 24px", textAlign:"center", cursor:"pointer" }}>
          <div style={{ fontSize:11, color:D, letterSpacing:"0.18em", fontWeight:500 }}>QUIERO EL 3 AMB.</div>
        </div>
        <div style={{ background:"transparent", padding:"16px 24px", textAlign:"center", cursor:"pointer", border:`1px solid ${G}` }}>
          <div style={{ fontSize:11, color:G, letterSpacing:"0.18em" }}>QUIERO EL 4 AMB.</div>
        </div>
      </div>
      <div style={{ marginTop:52, fontSize:11, color:"rgba(240,235,224,0.22)", letterSpacing:"0.08em" }}>
        NOOK · Centenario 2430, San Isidro · Aureo Desarrollos
      </div>
    </div>
  );
}

const COMPS = [Cover, Overview, Tres, Cuatro, Comparativa, Contacto];

export default function App() {
  const [cur, setCur] = useState(0);
  const Slide = COMPS[cur];

  return (
    <div style={{ background:D, color:L, fontFamily:"var(--font-sans)", minHeight:640 }}>
      <h2 className="sr-only">NOOK San Isidro — Presentación de unidades 3 y 4 ambientes</h2>

      {/* Tab bar */}
      <div style={{ display:"flex", borderBottom:`1px solid rgba(240,235,224,0.07)` }}>
        {SLIDES_LABELS.map((name, i) => (
          <button key={i} onClick={() => setCur(i)} style={{
            flex:1, padding:"13px 6px",
            background:"transparent", border:"none",
            borderBottom: i===cur ? `2px solid ${G}` : "2px solid transparent",
            color: i===cur ? G : "rgba(240,235,224,0.28)",
            fontSize:9, letterSpacing:"0.15em",
            cursor:"pointer", transition:"all 0.2s",
          }}>{name}</button>
        ))}
      </div>

      {/* Slide */}
      <Slide go={setCur} />

      {/* Dots + nav */}
      <div style={{ display:"flex", justifyContent:"center", gap:8, padding:"20px 0 10px" }}>
        {COMPS.map((_, i) => <Dot key={i} active={i===cur} />)}
      </div>
      <div style={{ display:"flex", justifyContent:"space-between", padding:"0 40px 28px", alignItems:"center" }}>
        <button onClick={() => setCur(Math.max(0, cur-1))} disabled={cur===0} style={{
          background:"transparent", border:`1px solid ${cur===0 ? "rgba(240,235,224,0.12)" : G}`,
          color: cur===0 ? "rgba(240,235,224,0.22)" : G,
          padding:"10px 24px", cursor: cur===0 ? "default":"pointer",
          fontSize:11, letterSpacing:"0.12em",
        }}>ANTERIOR</button>
        <span style={{ fontSize:11, color:M, letterSpacing:"0.18em" }}>
          {String(cur+1).padStart(2,"0")} / {String(COMPS.length).padStart(2,"0")}
        </span>
        <button onClick={() => setCur(Math.min(COMPS.length-1, cur+1))} disabled={cur===COMPS.length-1} style={{
          background: cur===COMPS.length-1 ? "transparent" : G,
          border:`1px solid ${cur===COMPS.length-1 ? "rgba(240,235,224,0.12)" : G}`,
          color: cur===COMPS.length-1 ? "rgba(240,235,224,0.22)" : D,
          padding:"10px 24px", cursor: cur===COMPS.length-1 ? "default":"pointer",
          fontSize:11, letterSpacing:"0.12em", fontWeight:500,
        }}>SIGUIENTE</button>
      </div>
    </div>
  );
}