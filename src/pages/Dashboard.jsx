import Sidebar from "../components/Sidebar";

function Dashboard() {
  const clients =
    JSON.parse(localStorage.getItem("clients")) || [];

  const recordings =
    JSON.parse(localStorage.getItem("recordings")) || [];

  const notes =
    JSON.parse(localStorage.getItem("notes")) || [];

  const latestRecording =
    recordings.length > 0
      ? recordings[recordings.length - 1]
      : null;

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
      }}
    >
      <Sidebar />

      <div
        style={{
          flex: 1,
          padding: "32px",
        }}
      >
        {/* Header */}

        <div
          style={{
            marginBottom: "30px",
          }}
        >
          <h1
            style={{
              marginBottom: "8px",
            }}
          >
            Dashboard
          </h1>

          <p
            style={{
              color: "#64748B",
            }}
          >
            Overview of your consultation recordings,
            clients and notes.
          </p>
        </div>

        {/* Stats Cards */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(240px,1fr))",
            gap: "20px",
          }}
        >
          <div
            style={{
              background: "#fff",
              border: "1px solid #E2E8F0",
              borderRadius: "20px",
              padding: "24px",
              boxShadow:
                "0 10px 25px rgba(15,23,42,0.05)",
            }}
          >
            <h3>👥 Total Clients</h3>

            <h1
              style={{
                marginTop: "10px",
                color: "#4F46E5",
              }}
            >
              {clients.length}
            </h1>

            <p
              style={{
                color: "#64748B",
                marginTop: "10px",
              }}
            >
              Registered clients
            </p>
          </div>

          <div
            style={{
              background: "#fff",
              border: "1px solid #E2E8F0",
              borderRadius: "20px",
              padding: "24px",
              boxShadow:
                "0 10px 25px rgba(15,23,42,0.05)",
            }}
          >
            <h3>🎙️ Recordings</h3>

            <h1
              style={{
                marginTop: "10px",
                color: "#4F46E5",
              }}
            >
              {recordings.length}
            </h1>

            <p
              style={{
                color: "#64748B",
                marginTop: "10px",
              }}
            >
              Consultation recordings
            </p>
          </div>

          <div
            style={{
              background: "#fff",
              border: "1px solid #E2E8F0",
              borderRadius: "20px",
              padding: "24px",
              boxShadow:
                "0 10px 25px rgba(15,23,42,0.05)",
            }}
          >
            <h3>📝 Notes</h3>

            <h1
              style={{
                marginTop: "10px",
                color: "#4F46E5",
              }}
            >
              {notes.length}
            </h1>

            <p
              style={{
                color: "#64748B",
                marginTop: "10px",
              }}
            >
              Consultation notes stored
            </p>
          </div>
        </div>

        {/* Lower Section */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          {/* Recent Activity */}

          <div
            style={{
              background: "#fff",
              border: "1px solid #E2E8F0",
              borderRadius: "20px",
              padding: "24px",
              boxShadow:
                "0 10px 25px rgba(15,23,42,0.05)",
            }}
          >
            <h2>Recent Activity</h2>

            {recordings.length === 0 ? (
              <p
                style={{
                  marginTop: "15px",
                  color: "#64748B",
                }}
              >
                No activity available.
              </p>
            ) : (
              <div
                style={{
                  marginTop: "20px",
                }}
              >
                {recordings
                  .slice(-5)
                  .reverse()
                  .map((recording) => (
                    <div
                      key={recording.id}
                      style={{
                        padding: "12px 0",
                        borderBottom:
                          "1px solid #E2E8F0",
                      }}
                    >
                      <strong>
                        {recording.title}
                      </strong>

                      <p
                        style={{
                          color: "#64748B",
                          marginTop: "4px",
                        }}
                      >
                        Recording added for{" "}
                        {recording.client}
                      </p>
                    </div>
                  ))}
              </div>
            )}
          </div>

          {/* Latest Recording */}

          <div
            style={{
              background: "#fff",
              border: "1px solid #E2E8F0",
              borderRadius: "20px",
              padding: "24px",
              boxShadow:
                "0 10px 25px rgba(15,23,42,0.05)",
            }}
          >
            <h2>Latest Recording</h2>

            {latestRecording ? (
              <div
                style={{
                  marginTop: "20px",
                }}
              >
                <h3>
                  {latestRecording.title}
                </h3>

                <p
                  style={{
                    color: "#64748B",
                    marginTop: "8px",
                  }}
                >
                  Client:{" "}
                  {latestRecording.client}
                </p>

                <p
                  style={{
                    color: "#64748B",
                    marginTop: "8px",
                  }}
                >
                  Date:{" "}
                  {latestRecording.date}
                </p>

                <div
                  style={{
                    marginTop: "20px",
                    background: "#EEF2FF",
                    color: "#4F46E5",
                    padding: "10px",
                    borderRadius: "12px",
                    textAlign: "center",
                    fontWeight: "600",
                  }}
                >
                  Completed
                </div>
              </div>
            ) : (
              <p
                style={{
                  marginTop: "15px",
                  color: "#64748B",
                }}
              >
                No recordings available.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;