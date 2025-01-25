"use client"; // Mark this as a Client Component

import { useState } from "react";

export default function Home() {
  const [quote, setQuote] = useState("Click the button to generate a quote!");
  const [loading, setLoading] = useState(false);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/quote");
      const data = await response.json();
      setQuote(data.quote);
    } catch (error) {
      console.error("Error fetching quote:", error);
      setQuote("Failed to fetch a quote. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md">
        <h1 className="text-2xl font-bold mb-4">Random Quote Generator</h1>
        <p className="text-gray-700 mb-6">{quote}</p>
        <button
          onClick={fetchQuote}
          disabled={loading}
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 disabled:bg-blue-300"
        >
          {loading ? "Loading..." : "New Quote"}
        </button>
      </div>
    </div>
  );
}
