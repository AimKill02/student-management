"use client";

console.log("LOGIN PAGE LOADED");
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    const handleLogin = async () => {
    console.log("1. Button clicked");

    try {
        console.log("2. Before Firebase");

        const result = await signInWithEmailAndPassword(
        auth,
        email,
        password
        );

        console.log("3. Login successful");
        console.log(result.user);

    } catch (error) {
        console.error("4. Login failed:", error);
    }

    console.log("5. End of function");
    };

  return (
    <div>
      <h1>Login</h1>

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />

       
    <button onClick={handleLogin}>
    Login
    </button>
    </div>
  );
}