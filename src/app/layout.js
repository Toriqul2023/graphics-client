
import { Lato } from 'next/font/google'
const myFont = Lato({subsets:['latin'],weight:'700'}
)
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import "./globals.css";
import Navbar from "./Components/Navbar/Navbar";
import Querys from './Components/Querys/Querys'





export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
 
  return (
    <html lang="en">
    
      <body
        className={myFont.className}
      >
        <Querys>
            <Navbar/>
            {children}
        </Querys>
         
      
       
      </body>
    </html>
  );
}
