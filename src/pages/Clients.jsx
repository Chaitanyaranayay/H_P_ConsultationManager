import { useState } from "react";
import Sidebar from "../components/Sidebar";

function Clients() {
  const [clients, setClients] = useState(() => {
    return JSON.parse(localStorage.getItem("clients")) || [];
  });

  const [search, setSearch] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");

  const addClient = () => {
    if (!name.trim()) return;

    const newClient = {
      id: Date.now(),
      name,
      email,
      phone,
      company,
    };

    const updatedClients = [...clients, newClient];

    setClients(updatedClients);

    localStorage.setItem(
      "clients",
      JSON.stringify(updatedClients)
    );

    setName("");
    setEmail("");
    setPhone("");
    setCompany("");
  };

  const deleteClient = (id) => {
    const updatedClients = clients.filter(
      (client) => client.id !== id
    );

    setClients(updatedClients);

    localStorage.setItem(
      "clients",
      JSON.stringify(updatedClients)
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
        <h1>Client Management</h1>

        {/* Add Client Card */}

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
          <h3>Add New Client</h3>

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
              type="text"
              placeholder="Client Name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

            <input
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value)
              }
            />

            <input
              type="text"
              placeholder="Company"
              value={company}
              onChange={(e) =>
                setCompany(e.target.value)
              }
            />
          </div>

          <button
            style={{
              marginTop: "15px",
            }}
            onClick={addClient}
          >
            Add Client
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
            placeholder="Search clients..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />
        </div>

        {/* Client Table */}

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
            Client Directory
          </h3>

          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Company</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {clients
                .filter((client) =>
                  client.name
                    .toLowerCase()
                    .includes(
                      search.toLowerCase()
                    )
                )
                .map((client) => (
                  <tr key={client.id}>
                    <td>{client.name}</td>
                    <td>{client.email}</td>
                    <td>{client.phone}</td>
                    <td>{client.company}</td>

                    <td>
                      <button
                        onClick={() =>
                          deleteClient(client.id)
                        }
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>

          {clients.length === 0 && (
            <p
              style={{
                marginTop: "20px",
                color: "#64748B",
              }}
            >
              No clients available. Add your
              first client to get started.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Clients;