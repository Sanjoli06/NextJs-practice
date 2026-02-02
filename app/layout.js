// static method to define metadata for the all the child pages using this function
// export const metadata = {
//   title: "My App",
//   description: "Main layout description",
// };

export const metadata = {
  title: {
    default: "My App",
    template: "%s | My App",
  },
  description: "Main layout description",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
