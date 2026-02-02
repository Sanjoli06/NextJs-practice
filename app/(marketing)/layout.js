export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{backgroundColor: 'orange'}}>Header (Marketing)</header>
        {children}
        <h1><footer style={{backgroundColor: 'green'}}>footer (Marketing)</footer></h1>
      </body>
    </html>
  );
}
