import Header from "./header" 

export default function RootLayout({ children }) {
 return (
    <html lang="en">
    <head />
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
