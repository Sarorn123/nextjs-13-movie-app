"use client";

import React, { useState, KeyboardEvent } from "react";
import { useRouter } from "next/navigation";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();

  function onSearch() {
    router.push("/?s=" + keyword);
    setKeyword("");
  }

  function onEnter(e: KeyboardEvent<HTMLInputElement>) {
    if (!keyword) return;
    if (e.keyCode === 13) {
      onSearch();
    }
  }

  return (
    <input
      placeholder="Search ..."
      value={keyword}
      onChange={(e) => setKeyword(e.target.value)}
      onKeyDown={onEnter}
    />
  );
};

export default Search;
