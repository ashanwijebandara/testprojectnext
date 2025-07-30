// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Navbar from "@/components/navbar/Navbar";
// import Footer from "@/components/footer/Footer";
// import { ThemeProvider } from "../context/ThemeContext";
// import AuthProvider from "@/components/AuthProvider/AuthProvider";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "Ashan's Portfolio",
//   description: "This is the description of Ashan's Portfolio",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={`${geistSans.variable} ${geistMono.variable}`}>
//         <ThemeProvider>
//           <AuthProvider>
//             <div className="container">
//               <Navbar />
//               {children}
//               <Footer />
//             </div>
//           </AuthProvider>
//         </ThemeProvider>
//       </body>

//     </html>
//   );
// }

import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter, Roboto, Poppins } from "next/font/google";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import AuthProvider from "@/components/AuthProvider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ashan Dev",
  description: "This is the description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className="container">
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}