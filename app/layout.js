"use client"; // Add this line to make the component a Client Component

import localFont from "next/font/local";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "../store/store";
import "antd/dist/reset.css"; // AntD CSS
import { Layout } from "antd";
const { Header, Content, Footer } = Layout;

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider store={store}>
          <Layout className="min-h-screen">
            <Header className="bg-blue-500 text-white">
              <h1 className="text-xl pt-3">Todo App</h1>
            </Header>
            <Content className="p-4">{children}</Content>
            <Footer className="text-center">Todo App ©2024</Footer>
          </Layout>
        </Provider>
      </body>
    </html>
  );
}
