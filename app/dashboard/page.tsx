import Link from "next/link";

export default function DashboardPage() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Dashboard Yappo</h1>
      <p>Todo está funcionando 🚀</p>

      <p style={{ marginTop: 16 }}>
        <Link href="/login">Ir a Login</Link>
      </p>
    </main>
  );
}
