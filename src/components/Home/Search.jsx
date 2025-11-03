// dibuat oleh cey
import React from "react";

export default function Search({ placeholder, onSearchChange }) {
  return (
    <div className="flex flex-col items-center mb-8">
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => onSearchChange(e.target.value)}
        className="border border-gray-300 rounded-lg p-3 w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
      />
      <p className="text-sm text-gray-600 mt-2">
        Gunakan kolom di atas untuk mencari hero berdasarkan nama.
      </p>
    </div>
  );
}
