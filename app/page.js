"use client";
import { useState } from "react";

export default function Home() {

  const [form, setForm] = useState({});
  const [image, setImage] = useState(null);

  const handleAI = async () => {
    // logic AI
  };

  return (
    <div>
      <button onClick={handleAI}>Scan Invoice (AI)</button>
    </div>
  );
}
