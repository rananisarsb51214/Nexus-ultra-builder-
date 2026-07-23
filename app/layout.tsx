 "next";
 "@vercel/analytics/next";
"./globals.css";

 = {
  title: "Nexus Ultra Builder",
  description: "Enterprise AI platform for responsive website creation, workflow automation, content generation, deployment, and team collaboration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
