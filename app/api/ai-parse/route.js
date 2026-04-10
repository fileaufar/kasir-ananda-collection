export async function POST(request) {
  try {
    const body = await request.json();

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

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: "Error parsing" }), {
      status: 500,
    });
  }
}
