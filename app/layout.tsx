import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { ClerkLoaded, ClerkLoading, ClerkProvider } from '@clerk/nextjs';
import {shadesOfPurple } from '@clerk/themes';
import './globals.css';

export const metadata = {
  title: 'Clerk Auth App',
  description:
    'Using Clerk as our Authentication method to give access to users to the application pages.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: [shadesOfPurple],
      }}
    >
      <html lang="en" className="scroll-smooth antialiased ">
        <body>
          <div className="w-full mx-auto">
            <ClerkLoading>
              <div className="flex items-center justify-center h-screen">
                <div className="relative">
                  <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
                  <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin"></div>
                </div>
              </div>
            </ClerkLoading>
            <ClerkLoaded>
              <div className="flex flex-col h-screen">
                <Header />
                {children}
                <Footer />
              </div>
            </ClerkLoaded>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
