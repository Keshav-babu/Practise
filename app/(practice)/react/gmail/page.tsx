"use client";

import { useEffect, useRef, useState } from "react";
import { SUGGESTED_EMAIL } from "@/app/(practice)/react/gmail/const";
export default function Gmail() {
  const inpRef = useRef(null);
  const containerRef = useRef(null);

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [focusedChipIndex, setFocusedChipIndex] = useState(null);
  const [chips, setChips] = useState<string[]>([]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  useEffect(() => {
    if (query.length > 0) {
      // const domains = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com"];
      // const newSuggestions = domains.map((domain) => `${query}@${domain}`);  // todo fix this to show only relevant suggestions

      const suggestionsList = SUGGESTED_EMAIL.filter((email) =>
        email.toLowerCase().includes(query.toLowerCase()),
      );
      setSuggestions(suggestionsList);
      setHighlightedIndex(-1);
    } else {
      setSuggestions([]);
    }
  }, [query, chips]);

  const handleAddChip = (email: string) => {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (email && !chips.includes(email) && isValidEmail) {
      setChips([...chips, email]);
      setQuery("");
      setSuggestions([]);
      setHighlightedIndex(-1);
      setFocusedChipIndex(null);
    }
  };

  const handleContainerClick = () => {
    inpRef.current?.focus();
  };

  const handleRemoveClip = (email) => {
    setChips(chips.filter((chip) => chip !== email));
    inpRef.current?.focus();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Backspace") {
      if (!query) {
        e.preventDefault();
        if (focusedChipIndex !== null) {
          setChips(chips.filter((_, index) => index !== focusedChipIndex));
          setFocusedChipIndex(null);
        } else if (chips.length > 0) {
          setFocusedChipIndex(chips.length - 1);
        }
      }
    } else if (e.key === "Escape") {
      setFocusedChipIndex(null);
    } else if (e.key === "," || e.key === "Enter") {
      if (suggestions.length > 0 && highlightedIndex >= 0) {
        e.preventDefault();
        handleAddChip(suggestions[highlightedIndex]);
      } else if (query) {
        e.preventDefault();
        handleAddChip(query.trim());
      }
    } else if (suggestions.length > 0) {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev < suggestions.length - 1 ? prev + 1 : prev,
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : -1));
      }
    }

    if (query && focusedChipIndex !== null) {
      setFocusedChipIndex(null);
    }
  };

  return (
    <div className="h-dvh w-dvw  flex justify-center items-center">
      <div
        className="items-center"
        ref={containerRef}
        onClick={handleContainerClick}
      >
        <h1>Email Input</h1>
        <div className="w-75 border rounded-md border-[#ddd] p-2 min-h-12 flex flex-wrap items-center gap-1.5 relative shadow-[0_2px_8px_rgba(0,0,0,0.1)] in-focus-within:border-[#4285f4] in-focus-within:shadow-[0_2px_8px_rgba(66,133,244,0.2)]">
          <div className="flex flex-wrap gap-1.5 items-center">
            {chips.map((chip, index) => (
              <div
                key={index}
                className={`rounded-md flex gap-1.5 text-sm items-center py-1 px-2 border border-[#d2e3fc] bg-[#e8f0fe] text-[#1967d2]${focusedChipIndex === index ? "border-[#1967d2]! bg-[#d2e3fc]!" : ""} `}
              >
                <span>{chip}</span>
                <button
                  className="bg-none border-none cursor-pointer text-[16px] text-[#1967d2] p-0 size-5 flex justify-center items-center rounded-full transition-colors duration-200 hover:bg-[#e8f0fe] ml-1"
                  onClick={(e) => {
                    e.preventDefault();
                    handleRemoveClip(chip);
                  }}
                >
                  X
                </button>
              </div>
            ))}
          </div>
          <input
            ref={inpRef}
            onChange={handleChange}
            value={query}
            name="email"
            placeholder={chips.length === 0 ? "Enter email..." : ""}
            className="p-2 rounded-md flex-1 border-0 outline-0 bg-transparent placeholder:text-[#999]"
            type="email"
            onKeyDown={handleKeyDown}
          />
          {suggestions.length > 0 && (
            <div className="grid gap-1.5 p-4 absolute top-full left-0 right-0 bg-white border border-[#ddd] shadow-[0_2px_8px_rgba(0,0,0,0.1)] z-10">
              {suggestions.map((sug, index) => (
                <div
                  key={index}
                  className={`text-sm cursor-pointer transition-colors duration-200 hover:bg-[#e8f0fe] hover:text-[#1967d2] p-1 rounded-md ${
                    highlightedIndex === index
                      ? "bg-[#e8f0fe] text-[#1967d2]"
                      : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleAddChip(sug);
                  }}
                  onMouseEnter={() => {
                    setHighlightedIndex(index);
                  }}
                >
                  {sug}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
