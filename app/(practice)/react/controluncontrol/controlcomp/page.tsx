"use client";
import { useState } from "react";

export default function ControlComp() {
  const [query, setQuery] = useState("");

  return (
    <>
      <h1>Control Comp</h1>
      <p>
        A component is controlled when React state controls the input value.
      </p>
      <p>
        Input value comes from useState Changes happen via onChange Single
        source of truth = React state
      </p>

      <p>User types → onChange → setState → re-render → value updated</p>

      <input value={query} onChange={(e) => setQuery(e.target.value)} />
    </>
  );
}

// ✅ Pros

// Easy validation

// Easy conditional UI

// Easy form submission

// Predictable behavior (great for complex forms)

// ❌ Cons

// More boilerplate

// Re-renders on every keystroke
