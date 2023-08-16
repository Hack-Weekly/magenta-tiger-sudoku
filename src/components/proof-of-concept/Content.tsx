/*
Content.tsx contains the code for the Content and Tile components
Tile components will be created iteratively by mapping over an array and will be
placed in the Content component.

The Content component represents the sudoky board which is composed of Tile components

Currently, I envision the user manually typing the numbers onto the board and clicking a button to solve the resulting sodoku puzzle.


*/
import React from "react";

interface tiley {
  coords: string;
  key: string;
  className?: string;
}
const Tile = (props: tiley) => {
  return <div id={props.coords} className={props.className}></div>;
};
//pos will store the coordinates of the sudoku tiles
//It will be mapped over to create the Tile components
const pos = [];
for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    pos.push(i.toString() + j.toString());
  }
}

//tiles contains all 81 sudoku tiles with the coords props
//the coords props contains the tile's coordinates which matches the style of a 2d array Ex. 01, 02, etc.

//If statements are responsible for drawing the thick borders in the board.
//They draw the borders based on the coordinate of the tile
const tiles = pos.map((tile) => {
  if (tile[0] === "2" || tile[0] === "5") {
    if (tile[1] === "2" || tile[1] === "5") {
      return (
        <Tile
          coords={tile}
          key={tile}
          className=" h-10 w-10 border border-black border-b-[5px] border-r-[5px]"
        />
      );
    }
    return (
      <Tile
        coords={tile}
        key={tile}
        className=" h-10 w-10 border border-black border-b-[5px]"
      />
    );
  }
  if (tile[1] === "2" || tile[1] === "5") {
    return (
      <Tile
        coords={tile}
        key={tile}
        className=" h-10 w-10 border border-black border-r-[5px]"
      />
    );
  } else {
    return (
      <Tile
        coords={tile}
        key={tile}
        className="h-10 w-10 border-solid border-black border"
      />
    );
  }
});

export const Content = () => {
  return (
    <div className="grid place-content-center h-screen w-screen">
      <div className="grid grid-cols-nine grid-rows-nine w-min h-min">
        {tiles}
      </div>
    </div>
  );
};
