'use client'
// app/layout.tsx
import { Providers } from "./providers";
import WithSubnavigation from './components/Navigation/nav';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <WithSubnavigation/>
          {children}
        </Providers>
      </body>
    </html>
  );
}