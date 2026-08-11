import { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function AdminLogin({ onSuccess }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password: pass });
    setLoading(false);
    if (error) {
      setError("Email yoki parol noto'g'ri");
      return;
    }
    onSuccess();
  }

  return (
    <div className="max-w-sm mx-auto px-4 py-24">
      <h1 className="text-xl font-bold text-[#13285A] mb-6 text-center">Admin kirish</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#13285A]"
        />
        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="Parol"
          className="border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#13285A]"
        />
        {error && <p className="text-xs text-red-500">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="bg-[#13285A] text-white rounded-full px-6 py-3 text-sm font-semibold hover:opacity-90 disabled:opacity-50"
        >
          {loading ? "Tekshirilmoqda..." : "Kirish"}
        </button>
      </form>
    </div>
  );
}
