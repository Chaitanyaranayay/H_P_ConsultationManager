import { useState } from "react";
import Sidebar from "../components/Sidebar";

function Notes() {
  const [notes, setNotes] = useState(() => {
    return JSON.parse(localStorage.getItem("notes")) || [];
  });

  const [search, setSearch] = useState("");

  const [recordingTitle, setRecordingTitle] = useState("");
  const [consultationNotes, setConsultationNotes] = useState("");
  const [transcript, setTranscript] = useState("");
  const [followUp, setFollowUp] = useState("");

  const addNote = () => {
    if (!recordingTitle.trim()) return;

    const newNote = {
      id: Date.now(),
      recordingTitle,
      consultationNotes,
      transcript,
      followUp,
    };

    const updated = [...notes, newNote];

    setNotes(updated);

    localStorage.setItem(
      "notes",
      JSON.stringify(updated)
    );

    setRecordingTitle("");
    setConsultationNotes("");
    setTranscript("");
    setFollowUp("");
  };

  const deleteNote = (id) => {
    const updated = notes.filter(
      (note) => note.id !== id
    );

    setNotes(updated);

    localStorage.setItem(
      "notes",
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
        <h1>Consultation Notes</h1>

        {/* Add Note Card */}

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
          <h3>Add Consultation Note</h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              marginTop: "15px",
            }}
          >
            <input
              placeholder="Recording Title"
              value={recordingTitle}
              onChange={(e) =>
                setRecordingTitle(e.target.value)
              }
            />

            <textarea
              placeholder="Consultation Notes"
              rows="4"
              value={consultationNotes}
              onChange={(e) =>
                setConsultationNotes(e.target.value)
              }
            />

            <textarea
              placeholder="Transcript"
              rows="4"
              value={transcript}
              onChange={(e) =>
                setTranscript(e.target.value)
              }
            />

            <input
              placeholder="Follow Up Action"
              value={followUp}
              onChange={(e) =>
                setFollowUp(e.target.value)
              }
            />

            <button onClick={addNote}>
              Save Note
            </button>
          </div>
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
            placeholder="Search notes..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />
        </div>

        {/* Notes Table */}

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
            Consultation History
          </h3>

          <table>
            <thead>
              <tr>
                <th>Recording</th>
                <th>Notes</th>
                <th>Transcript</th>
                <th>Follow Up</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {notes
                .filter((note) =>
                  note.recordingTitle
                    .toLowerCase()
                    .includes(
                      search.toLowerCase()
                    )
                )
                .map((note) => (
                  <tr key={note.id}>
                    <td>{note.recordingTitle}</td>
                    <td>{note.consultationNotes}</td>
                    <td>{note.transcript}</td>
                    <td>{note.followUp}</td>

                    <td>
                      <button
                        onClick={() =>
                          deleteNote(note.id)
                        }
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>

          {notes.length === 0 && (
            <p
              style={{
                marginTop: "20px",
                color: "#64748B",
              }}
            >
              No consultation notes available.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Notes;