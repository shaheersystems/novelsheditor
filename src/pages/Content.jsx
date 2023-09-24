import React, { useState } from "react";
import HTMLRenderer from "../components/HTMLRenderer";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import "../App.css";
function ContentPage() {
  const [content] = useState(() => {
    return localStorage.getItem("content") || "";
  });

  return (
    <>
      <div>
        <div className="flex items-center justify-between px-4 py-2 border-b">
          <div>
            <Logo />
          </div>
          <div>
            <Link
              to="/editor"
              className="flex items-center gap-2 px-3 py-1 text-sm font-semibold rounded-lg hover:bg-neutral-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                />
              </svg>
              <span>Edit content</span>
            </Link>
          </div>
        </div>
        <div className="flex flex-col max-w-5xl gap-4 py-4 m-auto space-y-4">
          <HTMLRenderer htmlString={content} />
        </div>
      </div>
    </>
  );
}

export default ContentPage;
