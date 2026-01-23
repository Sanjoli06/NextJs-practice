export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <h1><navbar style={{backgroundColor: 'teal'}}>navbar</navbar></h1>
        {children}
        <h1><footer style={{backgroundColor: 'brown'}}>footer</footer></h1>
      </body>
    </html>
  );
}
