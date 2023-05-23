"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Column from "../../components/dnd/MainComponent";
// const Column = dynamic(import("../../components/dnd/MainComponent"));
function ScrumBoard() {
  const [winReady, setwinReady] = useState(false);
  useEffect(() => {
    setwinReady(true);
  }, []);
  return (
    <div className="pl-4 pr-4 pt-3">
      <div>hello forehead</div>
      <Column />
    </div>
  );
}
export default ScrumBoard;
