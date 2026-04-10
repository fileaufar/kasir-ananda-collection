"use client";
import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({
    invoice: "",
    costumer: "",
    nama_barang: "",
    harga: "",
    jumlah_uang: "",
    diskon: "",
    pembayaran: "",
    nama_kasir: "",
    link_invoice: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const kembalian =
      form.pembayaran - (form.jumlah_uang - form.diskon);

    await fetch("https://script.google.com/macros/s/AKfycbwQRiL8usvSPReERB26h8HQ-R9lj0rYpxNNRSZV-GH4_sPRQlI54Ww4908IqAfpdP6H/exec", {
      method: "POST",
      body: JSON.stringify({
        ...form,
        kembalian
      }),
    });

    alert("Transaksi berhasil disimpan 🚀");
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>POS ANANDA</h1>

      <input name="invoice" placeholder="Invoice" onChange={handleChange} /><br/>
      <input name="costumer" placeholder="Customer" onChange={handleChange} /><br/>
      <input name="nama_barang" placeholder="Nama Barang" onChange={handleChange} /><br/>
      <input name="harga" type="number" placeholder="Harga" onChange={handleChange} /><br/>
      <input name="jumlah_uang" type="number" placeholder="Jumlah Uang" onChange={handleChange} /><br/>
      <input name="diskon" type="number" placeholder="Diskon" onChange={handleChange} /><br/>
      <input name="pembayaran" type="number" placeholder="Pembayaran" onChange={handleChange} /><br/>
      <input name="nama_kasir" placeholder="Nama Kasir" onChange={handleChange} /><br/>
      <input name="link_invoice" placeholder="Link Invoice (optional)" onChange={handleChange} /><br/>

      <button onClick={handleSubmit}>Simpan</button>
    </div>
  );
}
