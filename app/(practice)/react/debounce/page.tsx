"use client";

import { useDebounce } from "../../../../hooks/useDebounce";

import { useEffect, useState } from "react";

export default function Debounce() {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 1000);

    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    if (debouncedQuery) {
      console.log("API call with:", debouncedQuery);
    }
  }, [debouncedQuery]);

  // with customhooks

  const debounceQuery = useDebounce(query, 1000);

  useEffect(() => {
    if (debounceQuery) {
      console.log("call function", debounceQuery);
    }
  }, [debounceQuery]);

  return (
    <div className="h-dvh w-dvw grid place-items-center border">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="placeholder..."
      />
      <p>{debouncedQuery}</p>
    </div>
  );
}
