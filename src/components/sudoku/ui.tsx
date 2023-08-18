/**
 * UI components for the sudoku game.
 */

import type { SudokuBoard } from "./algorithm";

/**
 * Pass props to the {@link Sudoku} component to render a sudoku board.
 */
export interface SudokuProps {
  /**
   * Pass in a sudoku board for this component to render into an HTML grid.
   */
  board: SudokuBoard;
}

export function Sudoku(props: SudokuProps) {
  return (
    <div className="border">
      <div className="grid grid-cols-9 divide-x">
        {props.board.map((row, rowIndex) => (
          <div key={rowIndex} className="col-span-1 grid grid-rows-9 divide-y">
            {row.map((tile, tileIndex) => (
              <div key={tileIndex} className="p-2">
                {tile}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
