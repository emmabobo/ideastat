

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="font-sans">
        {children}
    </main>
  );
}

