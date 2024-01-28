import Navbar from "./navbar"

export default function PageLayout({ children, }: { children: React.ReactNode }) {
    return (
      <>
        <div className="container px-10 pt-8 mb-10">
          {children}
        </div>
        {/* <Navbar /> */}
      </>
    )
  }