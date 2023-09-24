import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Editor } from "novel";
import Logo from "../components/Logo";

function EditorPage() {
  const [content, setContent] = useState(() => {
    return localStorage.getItem("content") || "";
  });
  const saveContent = () => {
    localStorage.setItem("content", content);
  };
  return (
    <>
      <div className="">
        <div className="flex items-center justify-between px-4 py-2 border-b">
          <Logo />
          <div>
            <Link
              to="/"
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
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>

              <span>Back</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-5xl py-4 m-auto">
        <Editor
          onUpdate={(editor) => setContent(editor.getHTML())}
          className="rounded"
        />
        <div className="flex items-center justify-end">
          <button
            onClick={saveContent}
            className="flex items-center gap-2 px-3 py-1 rounded-lg hover:bg-neutral-100"
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
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
            <span> Save</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default EditorPage;
