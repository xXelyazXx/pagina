import { ChakraProvider } from '@chakra-ui/react'
import "./globals.css";
import Header from "./components/header";
import Footer from './components/footer';

export const metadata = {
  title: "FVN iglesia",
  description: "Iglesia FVN",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='fondo'>
      <ChakraProvider>
        <Header />
        {children}
        <Footer />
      </ChakraProvider>
      </body>
    </html>
  );
}
