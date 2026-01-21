// Yangi komponent: LogPanel.jsx
export const LogPanel = () => {
  const logs = [
    { id: 1, time: "12:45:10", msg: "Toshkent-Ostona kanali barqaror.", type: "success" },
    { id: 2, time: "12:50:22", msg: "Bishkek tugunida yuklama yuqori.", type: "warning" },
    { id: 3, time: "13:02:05", msg: "Ashxobod bilan yangi ulanish o'rnatildi.", type: "info" },
  ];

  return (
    <div className="log-container">
      <h3>Tizim voqealari</h3>
      <div className="log-list">
        {logs.map(log => (
          <div key={log.id} className={`log-item ${log.type}`}>
            <span className="log-time">[{log.time}]</span> {log.msg}
          </div>
        ))}
      </div>
    </div>
  );
};