export async function POST(req) {
  const body = await req.json();

  // sementara kita simulasi dulu AI (biar cepat jalan)
  // nanti bisa diganti OpenAI Vision beneran

  const result = {
    invoice: "AUTO-001",
    costumer: "Supplier",
    nama_barang: "Kopi Arabica",
    harga: 25000,
    jumlah_uang: 50000,
    diskon: 0,
    pembayaran: 50000,
    nama_kasir: "AI",
    link_invoice: body.image || ""
  };

  return Response.json(result);
}
