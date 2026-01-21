import MapComponent from "./MapComponent";
import StatsChart from "./StatsChart"; // Yangi qo'shildi
import { Share2, Activity, Globe, Database } from "lucide-react";
import "./App.css";
import { LogPanel } from "./LogPanel";

function App() {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="stat-card">
          <Globe size={24} />
          <h2> Integratsiya</h2>
        </div>
        <hr />
        <div className="stat-card active">
          <Activity color="green" />
          <p>
            Tizim holati: <b>Barqaror</b>
          </p>
        </div>
        <div className="stat-card">
          <Database color="blue" />
          <p>
            Umumiy sig'im: <b>4.2 Tbps</b>
          </p>
        </div>

        {/* Grafikni sidebar pastiga qo'shamiz */}
        <div style={{ marginTop: "20px" }}>
          <StatsChart />
        </div>
      </aside>

      <main>
        <header className="main-header">
          <h1>Xalqaro Tarmoq Integratsiyasi Monitoringi</h1>
          <div className="live-tag">● LIVE</div>
        </header>

        <MapComponent />

        {/* Pastki qismda qo'shimcha ma'lumotlar paneli */}
        <div className="info-grid">
          <div className="info-item">
            <h4>Qozog'iston</h4>
            <p>
              Holat: <span className="status-online">Online</span>
            </p>
            <p>Kechikish: 12ms</p>
          </div>
          <div className="info-item">
            <h4>Qirg'iziston</h4>
            <p>
              Holat: <span className="status-online">Online</span>
            </p>
            <p>Kechikish: 18ms</p>
          </div>
          <div className="info-item">
            <h4>Tojikiston</h4>
            <p>
              Holat: <span className="status-warning">Maintenance</span>
            </p>
            <p>Kechikish: 45ms</p>
          </div>
          <div className="info-item">
            <h4>Turkmaniston</h4>
            <p>
              Holat: <span className="status-online">Online</span>
            </p>
            <p>Kechikish: 25ms</p>
          </div>
          <div className="info-item">
            <h4>Afg'oniston</h4>
            <p>
              Holat: <span className="status-online">Online</span>
            </p>
            <p>Kechikish: 35ms</p>
          </div>
        </div>
        <LogPanel />
      </main>
    </div>
  );
}

export default App;
