import NavbarComponent from "@/components/organisms/navbar";
import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Provider } from "@/Redux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tangent-Ecommerce",
  description: "Simple Next ecommerce project",
  icons: ["/images/tangent.png"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <div id="MainContent">
            <NavbarComponent />
            <main className={`container`}>{children}</main>
          </div>
        </Provider>
      </body>
    </html>
  );
}
