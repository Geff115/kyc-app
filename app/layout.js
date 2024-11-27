"use client";

import { FormProvider } from "@components/FormContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <FormProvider>{children}</FormProvider>
      </body>
    </html>
  );
}
