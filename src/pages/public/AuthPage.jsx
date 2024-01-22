import React, { useContext, useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import ButtonComponent from "../../components/ButtonComponent";

function AuthPage() {
  const { isLogged, signIn } = useContext(UserContext);
  const navigate = useNavigate();

  if (isLogged) {
    return <Navigate to={"/"} />;
  }

  const inputs = useRef([]);

  const addInputs = (el) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const cred = await signIn(
        inputs.current[0].value,
        inputs.current[1].value
      );
      navigate("/");
    } catch {
      alert("Email ou Mdp incorrect");
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center p-10">
      <form
        onSubmit={handleForm}
        className="w-full max-w-lg flex flex-col items-center shadow-custom rounded-2xl px-10 py-6"
      >
        <h2 className="text-center text-3xl font-semibold mb-8">Administration</h2>
        <div className="w-full">
          <label htmlFor="email">Email</label>
          <input
            ref={addInputs}
            name="email"
            type="email"
            id="email"
            required
            className="w-full border rounded-lg py-2 px-5 mt-1 mb-5"
          />
        </div>
        <div className="w-full">
          <label htmlFor="password">Mot de passe</label>
          <input
            ref={addInputs}
            name="password"
            type="password"
            id="password"
            required
            className="w-full border rounded-lg py-2 px-5 mt-1 mb-5"
          />
        </div>
        <button type="submit" className="mt-3">
          <ButtonComponent text="Connexion" color="blue" />
        </button>
      </form>
    </div>
  );
}

export default AuthPage;
