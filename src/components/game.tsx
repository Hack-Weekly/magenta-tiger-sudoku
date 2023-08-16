"use client";

import { useState } from "react";
import { Sudoku } from "./sudoku/ui";
import { createSudokuBoard } from "./sudoku/algorithm";

/**
 * Renders the Sudoku board and game controls.
 */
export function Game() {
  const [board] = useState(createSudokuBoard());

  return <Sudoku board={board} />;
}
