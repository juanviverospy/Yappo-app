export default async function OrderDetailPage({
  params,
}: {
  params: Promise<{ orderId: string }>;
}) {
  const { orderId } = await params;

  return (
    <div>
      <h1>Pedido {decodeURIComponent(orderId)}</h1>
      <p>Acá va el detalle: ítems, personalización, seña/saldo, trazabilidad.</p>
      <p>(Luego lo conectamos a datos reales.)</p>
    </div>
  );
}
