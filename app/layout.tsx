import Header from "@/components/UI/Header";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        <div className="mt-16">{children}</div>
      </body>
    </html>
  );
}
