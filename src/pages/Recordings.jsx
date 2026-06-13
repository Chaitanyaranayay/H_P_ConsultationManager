import { useState } from "react";
import Sidebar from "../components/Sidebar";

function Recordings() {
  const [recordings, setRecordings] = useState(() => {
    return JSON.parse(localStorage.getItem("recordings")) || [];
  });

  const [search, setSearch] = useState("");

  const [title, setTitle] = useState("");
  const [client, setClient] = useState("");
  const [description, setDescription] = useState("");

  const addRecording = () => {
    if (!title.trim()) return;

    const newRecording = {
      id: Date.now(),
      title,
      client,
      description,
      status: "Completed",
      date: new Date().toLocaleDateString(),
    };

    const updated = [...recordings, newRecording];

    setRecordings(updated);

    localStorage.setItem(
      "recordings",
      JSON.stringify(updated)
    );

    setTitle("");
    setClient("");
    setDescription("");
  };

  const deleteRecording = (id) => {
    const updated = recordings.filter(
      (recording) => recording.id !== id
    );

    setRecordings(updated);

    localStorage.setItem(
      "recordings",
      JSON.stringify(updated)
    );
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div
        style={{
          padding: "30px",
          width: "100%",
        }}
      >
        <h1>Recording Management</h1>

        {/* Add Recording Card */}

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "16px",
            marginTop: "20px",
            marginBottom: "20px",
            boxShadow:
              "0 4px 12px rgba(0,0,0,0.08)",
          }}
        >
          <h3>Add New Recording</h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(220px,1fr))",
              gap: "12px",
              marginTop: "15px",
            }}
          >
            <input
              placeholder="Recording Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <input
              placeholder="Client Name"
              value={client}
              onChange={(e) => setClient(e.target.value)}
            />

            <input
              placeholder="Description"
              value={description}
              onChange={(e) =>
                setDescription(e.target.value)
              }
            />
          </div>

          <button
            style={{
              marginTop: "15px",
            }}
            onClick={addRecording}
          >
            Add Recording
          </button>
        </div>

        {/* Search */}

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "16px",
            marginBottom: "20px",
            boxShadow:
              "0 4px 12px rgba(0,0,0,0.08)",
          }}
        >
          <input
            placeholder="Search recordings..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />
        </div>

        {/* Recording Table */}

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "16px",
            boxShadow:
              "0 4px 12px rgba(0,0,0,0.08)",
          }}
        >
          <h3 style={{ marginBottom: "15px" }}>
            Recording Library
          </h3>

          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Client</th>
                <th>Description</th>
                <th>Status</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {recordings
                .filter((recording) =>
                  recording.title
                    .toLowerCase()
                    .includes(
                      search.toLowerCase()
                    )
                )
                .map((recording) => (
                  <tr key={recording.id}>
                    <td>{recording.title}</td>

                    <td>{recording.client}</td>

                    <td>{recording.description}</td>

                    <td>
                      <span
                        style={{
                          background: "#DCFCE7",
                          color: "#166534",
                          padding:
                            "4px 10px",
                          borderRadius:
                            "999px",
                          fontSize: "12px",
                        }}
                      >
                        {recording.status}
                      </span>
                    </td>

                    <td>{recording.date}</td>

                    <td>
                      <button
                        onClick={() =>
                          deleteRecording(
                            recording.id
                          )
                        }
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>

          {recordings.length === 0 && (
            <p
              style={{
                marginTop: "20px",
                color: "#64748B",
              }}
            >
              No recordings available.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Recordings;