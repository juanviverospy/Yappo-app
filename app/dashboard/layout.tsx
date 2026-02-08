import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <aside
        style={{
          width: 240,
          padding: 16,
          borderRight: "1px solid #eee",
        }}
      >
        <h2 style={{ marginTop: 0 }}>Yappo</h2>

        <nav style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <Link href="/dashboard">Inicio</Link>
          <Link href="/dashboard/orders">Pedidos</Link>
          <Link href="/dashboard/customers">Clientes</Link>
          <Link href="/dashboard/products">Productos</Link>
          <Link href="/dashboard/reports">Reportes</Link>
          <Link href="/login">Salir</Link>
        </nav>
      </aside>

      <main style={{ flex: 1, padding: 24 }}>{children}</main>
    </div>
  );
}
