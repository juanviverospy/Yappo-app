import Link from "next/link";

type OrderStatus = "Registrado" | "En producción" | "Listo" | "Entregado";

type Order = {
  id: string;
  customerName: string;
  deliveryDate: string; // YYYY-MM-DD
  status: OrderStatus;
  totalGs: number;
};

const mockOrders: Order[] = [
  {
    id: "Y-0001",
    customerName: "María González",
    deliveryDate: "2026-02-10",
    status: "Registrado",
    totalGs: 150000,
  },
  {
    id: "Y-0002",
    customerName: "Carlos Gómez",
    deliveryDate: "2026-02-12",
    status: "En producción",
    totalGs: 280000,
  },
  {
    id: "Y-0003",
    customerName: "Ana López",
    deliveryDate: "2026-02-09",
    status: "Listo",
    totalGs: 120000,
  },
];

function formatGs(value: number) {
  return value.toLocaleString("es-PY") + " Gs";
}

export default function OrdersPage() {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <h1 style={{ margin: 0 }}>Pedidos</h1>

        <div style={{ marginLeft: "auto" }}>
          <Link
            href="/dashboard/orders/new"
            style={{
              display: "inline-block",
              padding: "10px 14px",
              border: "1px solid #eee",
              borderRadius: 10,
              textDecoration: "none",
            }}
          >
            + Nuevo pedido
          </Link>
        </div>
      </div>

      <p style={{ marginTop: 8, color: "#666" }}>
        Lista operativa (mock). Próximo paso: conectar a datos reales.
      </p>

      <div style={{ marginTop: 16, border: "1px solid #eee", borderRadius: 12 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "140px 1fr 140px 160px 140px",
            gap: 12,
            padding: 12,
            borderBottom: "1px solid #eee",
            fontWeight: 600,
          }}
        >
          <div>ID</div>
          <div>Cliente</div>
          <div>Entrega</div>
          <div>Estado</div>
          <div style={{ textAlign: "right" }}>Total</div>
        </div>

        {mockOrders.map((o) => (
          <Link
            key={o.id}
            href={`/dashboard/orders/${encodeURIComponent(o.id)}`}
            style={{
              display: "grid",
              gridTemplateColumns: "140px 1fr 140px 160px 140px",
              gap: 12,
              padding: 12,
              textDecoration: "none",
              borderBottom: "1px solid #f3f3f3",
              color: "inherit",
            }}
          >
            <div style={{ fontFamily: "monospace" }}>{o.id}</div>
            <div>{o.customerName}</div>
            <div>{o.deliveryDate}</div>
            <div>{o.status}</div>
            <div style={{ textAlign: "right" }}>{formatGs(o.totalGs)}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
