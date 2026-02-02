export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{backgroundColor: 'teal'}}>Header (Application)</header>
        {children}
        <footer style={{backgroundColor: 'brown'}}>footer (Application)</footer>
      </body>
    </html>
  );
}
