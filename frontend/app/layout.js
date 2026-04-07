export const metadata = {
  title: "Hello World App",
  description: "FastAPI + Next.js Hello World",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
