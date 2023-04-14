import Head from "next/head";
import Link from "next/link";
import Navbar from "./navbar";
import Footer from "./footer";

export const siteTitle = "Fintech";

export default function Layout({ children }) {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Navbar name = {siteTitle} />
                    <main className="flex-grow">{children}</main>
                <Footer name = {siteTitle}/>
            </div>
        </>
    );
}