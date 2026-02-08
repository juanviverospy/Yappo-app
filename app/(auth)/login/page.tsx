import Link from "next/link";

export default function LoginPage() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Login</h1>
      <p>Acá va el login (todavía sin Firebase).</p>

      <p style={{ marginTop: 16 }}>
        <Link href="/dashboard">Volver al Dashboard</Link>
      </p>
    </main>
  );
}
