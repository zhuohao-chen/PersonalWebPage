import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zhuohao Chen | XR & HCI Researcher",
  description:
    "Academic personal website for Zhuohao Chen, incoming Ph.D. student and XR/HCI researcher."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-50 font-sans text-slate-900 antialiased">{children}</body>
    </html>
  );
}
