"use client";
import { useParams } from "next/navigation";
import QueryProvider from "./QueryProvider";
import StoreProvider from "./StoreProvider";
import ThemeRegistry from "./ThemeRegistry";
import ToasterProvider from "./ToasterProvider";
import { notoKufiArabic, poppins } from "@/styles/fonts";
import NextTopLoader from "nextjs-toploader";

const Providers = ({ children }) => {
  const { lng } = useParams();

  return (
    <html lang={lng} dir={lng === "ar" ? "rtl" : "ltr"}>
      <body className={`${notoKufiArabic.variable}  ${poppins.variable}`}>
        <QueryProvider>
          <StoreProvider>
            <ThemeRegistry>
              <NextTopLoader
                color="#2299DD"
                initialPosition={0.08}
                crawlSpeed={200}
                height={3}
                crawl={true}
                showSpinner={false}
                easing="ease"
                speed={200}
              />
              {children}
            </ThemeRegistry>
            <ToasterProvider />
          </StoreProvider>
        </QueryProvider>
      </body>
    </html>
  );
};

export default Providers;
