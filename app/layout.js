"use client";

import { FormProvider } from "@components/FormContext";
import './styles/global.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <FormProvider>{children}</FormProvider>
      </body>
    </html>
  );
}
