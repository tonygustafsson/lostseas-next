import { useIsFetching } from "@tanstack/react-query"

import { almendra, andika } from "@/fonts"

import DesktopMenu from "../menu/DesktopMenu"
import MobileMenu from "../menu/MobileMenu"

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const isFetching = useIsFetching()

  return (
    <>
      <div className="flex flex-col lg:flex-row min-h-screen">
        <MobileMenu className="lg:hidden" />
        <DesktopMenu className="hidden lg:block" />

        <main
          className={`${almendra.variable} ${andika.variable} min-h-screen pb-32 flex flex-col w-full lg:py-8 px-2 lg:px-12 bg-base-200`}
        >
          {children}
        </main>
      </div>

      {!!isFetching && (
        <div className="global-loading-indicator">
          <div className="spinner"></div>
        </div>
      )}
    </>
  )
}
