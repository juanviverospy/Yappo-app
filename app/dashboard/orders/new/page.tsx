"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type DeliveryType = "Retiro" | "Envío";

function formatGs(value: number) {
  if (!Number.isFinite(value)) return "0 Gs";
  return value.toLocaleString("es-PY") + " Gs";
}

function parseGs(input: string) {
  // Permite que el usuario escriba 150000 o 150.000
  const cleaned = input.replace(/[^\d]/g, "");
  if (!cleaned) return 0;
  return Number(cleaned);
}

export default function NewOrderPage() {
  const [customerName, setCustomerName] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [deliveryType, setDeliveryType] = useState<DeliveryType>("Retiro");
  const [notes, setNotes] = useState("");
  const [depositInput, setDepositInput] = useState("");

  const depositGs = useMemo(() => parseGs(depositInput), [depositInput]);

  const canSubmit = customerName.trim().length >= 2 && deliveryDate.length > 0;

  const [result, setResult] = useState<string | null>(null);

  function onSubmit() {
    if (!canSubmit) return;

    const summary = [
      `Cliente: ${customerName}`,
      `Fecha compromiso: ${deliveryDate}`,
      `Tipo de entrega: ${deliveryType}`,
      `Seña: ${formatGs(depositGs)}`,
      notes.trim() ? `Obs: ${notes.trim()}` : `Obs: (sin observaciones)`,
    ].join("\n");

    setResult(summary);
  }

  return (
    <div style={{ maxWidth: 720 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <h1 style={{ margin: 0 }}>Nuevo pedido</h1>
        <div style={{ marginLeft: "auto" }}>
          <Link href="/dashboard/orders">← Volver</Link>
        </div>
      </div>

      <p style={{ color: "#666", marginTop: 8 }}>
        MVP (sin backend): validamos UX y campos mínimos antes de guardar datos reales.
      </p>

      <div style={{ display: "grid", gap: 12, marginTop: 16 }}>
        <label style={{ display: "grid", gap: 6 }}>
          <span>Cliente (por ahora texto)</span>
          <input
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            placeholder="Ej: María González"
            style={{
              padding: 10,
              borderRadius: 10,
              border: "1px solid #ddd",
            }}
          />
          <small style={{ color: "#888" }}>
            Luego esto será selección/búsqueda de cliente.
          </small>
        </label>

        <label style={{ display: "grid", gap: 6 }}>
          <span>Fecha compromiso</span>
          <input
            type="date"
            value={deliveryDate}
            onChange={(e) => setDeliveryDate(e.target.value)}
            style={{
              padding: 10,
              borderRadius: 10,
              border: "1px solid #ddd",
              maxWidth: 220,
            }}
          />
        </label>

        <label style={{ display: "grid", gap: 6 }}>
          <span>Tipo de entrega</span>
          <select
            value={deliveryType}
            onChange={(e) => setDeliveryType(e.target.value as DeliveryType)}
            style={{
              padding: 10,
              borderRadius: 10,
              border: "1px solid #ddd",
              maxWidth: 220,
            }}
          >
            <option value="Retiro">Retiro</option>
            <option value="Envío">Envío</option>
          </select>
          <small style={{ color: "#888" }}>
            Después vamos a pedir campos mínimos distintos según el tipo (reglas RN).
          </small>
        </label>

        <label style={{ display: "grid", gap: 6 }}>
          <span>Seña (Gs)</span>
          <input
            value={depositInput}
            onChange={(e) => setDepositInput(e.target.value)}
            inputMode="numeric"
            placeholder="Ej: 100000"
            style={{
              padding: 10,
              borderRadius: 10,
              border: "1px solid #ddd",
              maxWidth: 220,
            }}
          />
          <small style={{ color: "#888" }}>
            Interpretación: {formatGs(depositGs)}
          </small>
        </label>

        <label style={{ display: "grid", gap: 6 }}>
          <span>Observaciones</span>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Notas para taller o aclaraciones"
            rows={4}
            style={{
              padding: 10,
              borderRadius: 10,
              border: "1px solid #ddd",
            }}
          />
        </label>

        <button
          onClick={onSubmit}
          disabled={!canSubmit}
          style={{
            padding: "10px 14px",
            borderRadius: 10,
            border: "1px solid #eee",
            cursor: canSubmit ? "pointer" : "not-allowed",
            width: "fit-content",
          }}
        >
          Crear pedido (simulado)
        </button>

        {!canSubmit && (
          <small style={{ color: "#b00" }}>
            Para continuar: completá Cliente y Fecha compromiso.
          </small>
        )}

        {result && (
          <div
            style={{
              marginTop: 10,
              padding: 12,
              borderRadius: 12,
              border: "1px solid #eee",
              background: "#fafafa",
              whiteSpace: "pre-wrap",
            }}
          >
            <strong>Resumen (simulado)</strong>
            {"\n\n"}
            {result}
          </div>
        )}
      </div>
    </div>
  );
}
