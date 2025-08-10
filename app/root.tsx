import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    useLocation,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import { ThemeProvider } from "~/components/theme-provider";
import NavBar from "~/components/NavBar";
import { AnimatePresence } from "framer-motion";

import "./tailwind.css";
import { ScrollArea } from "./components/ui/scroll-area";
import Footer from "./components/Footer";

export const links: LinksFunction = () => [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
    },
    {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:wght@400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&family=Fira+Code:wght@400;500;600;700&display=swap",
    },
];

export function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <Meta />
                <Links />
            </head>
            <body className="min-h-screen font-sans antialiased">
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    <ScrollArea className="h-screen">
                        <NavBar />
                        {children}
                        <Footer />
                        <ScrollRestoration />
                        <Scripts />
                    </ScrollArea>
                </ThemeProvider>
            </body>
        </html>
    );
}

export default function App() {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <Outlet key={location.pathname} />
        </AnimatePresence>
    );
}
