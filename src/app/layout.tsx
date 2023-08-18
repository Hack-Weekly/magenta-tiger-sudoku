import "@/styles/globals.css";
//Removing Tektur for now as it causing deployment issues.
// import { Tektur } from "next/font/google";

export const metadata = {
  title: "Magenta Tigers Sudoku",
  description: "A sudoku game written by Magenta Tigers",
};

interface RootLayoutProps {
  children?: React.ReactNode;
}

// const tektur = Tektur({
//   subsets: [],
// });

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
