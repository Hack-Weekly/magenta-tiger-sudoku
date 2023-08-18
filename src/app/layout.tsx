import "@/styles/globals.css";

// import { Tektur } from "next/font/google";

export const metadata = {
  title: "Magenta Tigers Sudoku",
  description: "A sudoku game written by Magenta Tigers",
};

interface RootLayoutProps {
  children?: React.ReactNode;
}

const tektur = Tektur({
  subsets: [],
});

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={tektur.className}>
        <div>{children}</div>
      </body>
    </html>
  );
}
