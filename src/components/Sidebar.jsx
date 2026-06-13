import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const navStyle = (path) => ({
    display: "block",
    padding: "14px 16px",
    borderRadius: "12px",
    textDecoration: "none",

    color:
      location.pathname === path
        ? "#FFFFFF"
        : "#C7D2FE",

    background:
      location.pathname === path
        ? "#312E81"
        : "transparent",

    fontWeight:
      location.pathname === path
        ? "600"
        : "500",

    transition: "all 0.2s ease",
  });

  return (
    <div
      style={{
        width: "250px",
        minHeight: "100vh",
        background: "#1E1B4B",
        color: "white",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Logo */}

      <div
        style={{
          marginBottom: "40px",
        }}
      >
        <h2
          style={{
            color: "#FFFFFF",
            marginBottom: "6px",
          }}
        >
          ConsultTrack
        </h2>

        <p
          style={{
            color: "#A5B4FC",
            fontSize: "14px",
          }}
        >
          Recording Manager
        </p>
      </div>

      {/* Navigation */}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <Link style={navStyle("/")} to="/">
          📊 Dashboard
        </Link>

        <Link
          style={navStyle("/clients")}
          to="/clients"
        >
          👥 Clients
        </Link>

        <Link
          style={navStyle("/recordings")}
          to="/recordings"
        >
          🎙️ Recordings
        </Link>

        <Link
          style={navStyle("/notes")}
          to="/notes"
        >
          📝 Notes
        </Link>
      </div>

      {/* Bottom Card */}

      <div
        style={{
          marginTop: "auto",
          background: "#312E81",
          padding: "16px",
          borderRadius: "12px",
        }}
      >
        <h4
          style={{
            marginBottom: "8px",
          }}
        >
          Quick Overview
        </h4>

        <p
          style={{
            color: "#C7D2FE",
            fontSize: "13px",
            lineHeight: "1.5",
          }}
        >
          Manage consultation recordings,
          client information and notes
          from a single workspace.
        </p>
      </div>
    </div>
  );
}

export default Sidebar;