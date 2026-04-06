import "./globals.css";

export const metadata = {
  title: "Jasper Turner — Resume",
  description:
    "Portfolio and resume of Jasper Turner, Business Analytics & Information Systems student at USF.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}