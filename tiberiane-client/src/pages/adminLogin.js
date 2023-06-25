import Header from "../components/header";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { BiLogIn } from "react-icons/bi";
import { Navigate } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";

const AdminLogin = () => {
  const head = Header("Accesso amministratore");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirectTo, setRedirectTo] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const notificaSuccesso = (successo) =>
    toast.success(successo, {
      position: "bottom-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      onClose: handleSuccesso,
    });
  const notificaAvvertimento = (avvertimento) =>
    toast.warn(avvertimento, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  const notificaErrore = (errore) =>
    toast.error(errore, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  if (redirectTo) {
    return <Navigate to={redirectTo} />; // Redirect the user to the specified URL
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = { username, password };

    try {
      const response = await fetch(`http://localhost:6868/adminLogin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (result.successo) {
        const token = result.token;
        secureLocalStorage.setItem("jwt", token);
        notificaSuccesso(result.successo);
      } else if (result.avviso) {
        notificaAvvertimento(result.avviso);
      } else if (result.errore) {
        if (Array.isArray(result.errore)) {
          for (let i = 0; i < result.errore.length; i++) {
            notificaErrore(result.errore[i]);
          }
        } else {
          notificaErrore(result.errore);
        }
      } else {
        notificaErrore("Errore sconosciuto. Controllare i log.");
      }
    } catch (error) {
      if (error.message === "Failed to fetch") {
        notificaErrore(
          `Time-out della connessione. localhost:6868/adminLogin non ha fornito risposta.`
        );
      } else {
        notificaErrore(
          "Errore! Controllare la connettività o consultare i log."
        );
      }
    }
  };

  function handleSuccesso() {
    setTimeout(() => {
      setRedirectTo("../admin/dashboard");
    }, 500); // Wait for 0.5 seconds before redirecting
  }

  return (
    <div>
      {head}
      <div className="min-h-screen">
        <div className="flex flex-col justify-center items-center content-center text-center">
          <form
            className="bg-fuchsia-50/80 shadow-md rounded-3xl px-6 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit}
          >
            <label
              className="block text-black-900 text-sm font-bold mb-6"
              htmlFor="username"
            >
              Username
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
                placeholder="Username"
                type="text"
                id="username"
                value={username}
                required
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label
              className="block text-black-900 text-sm font-bold mb-6"
              htmlFor="password"
            >
              Password
              <div className="relative">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2 pr-10"
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="mt-2 absolute inset-y-0 right-0 px-3 py-2 focus:outline-none"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                </button>
              </div>
            </label>

            <div>
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className="mt-2 bg-fuchsia-500 hover:bg-fuchsia-700 border-white text-rose-50 border-solid border-2 font-bold  w-full rounded-md py-3"
                type="submit"
              >
                <BiLogIn style={{ fontSize: "24px" }} />{" "}
                <span style={{ marginLeft: "8px" }}>Accedi</span>
              </button>
            </div>
            <div>
              <div></div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default AdminLogin;
