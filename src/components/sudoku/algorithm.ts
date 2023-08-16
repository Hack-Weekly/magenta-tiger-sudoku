/**
 * Machine learning, algorithms, etc. for Sudoku generation.
 */

/**
 * Don't think about this, lol.
 */
type TArrayOfLengthN<
  T,
  N extends number,
  Array extends T[] = [],
> = Array["length"] extends N ? Array : TArrayOfLengthN<T, N, [...Array, T]>;

/**
 * A sudoku tile is a string or number.
 */
export type SudokuTile = string | number;

/**
 * A row in a sudoku board is 9 tiles.
 *
 * But an arbitrary 1D array is also allowed, because tuples are hard.
 */
export type SudokuRow = TArrayOfLengthN<SudokuTile, 9> | SudokuTile[];

/**
 * A sudoku board is a tuple of 9 rows.
 *
 * But an arbitrary 2D array is also allowed, because tuples are hard.
 */
export type SudokuBoard = TArrayOfLengthN<SudokuRow, 9> | SudokuTile[][];

/**
 * Supported difficulties, represented as an enum.
 */
export const DIFFICULTIES = ["easy", "medium", "hard", "expert"] as const;

/**
 * Difficulty.
 */
export type Difficulty = (typeof DIFFICULTIES)[number];

/**
 * Pass in parameters to control the board generation.
 */
export interface CreateOptions {
  /**
   * How difficult to make the puzzle.
   */
  difficulty?: Difficulty;
}

/**
 * Generate a sudoku board based on given parameters.
 */
export function createSudokuBoard(options?: CreateOptions): SudokuBoard {
  console.log(options);

  const sudokuBoard: SudokuBoard = [];

  let currentRow: SudokuRow;

  for (let i = 0; i < 9; i++) {
    currentRow = [];

    for (let j = 0; j < 9; j++) {
      currentRow.push(i.toString() + j.toString());
    }

    sudokuBoard.push(currentRow);
  }

  return sudokuBoard;
}
