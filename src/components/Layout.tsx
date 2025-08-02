import type { PropsWithChildren } from "react"
import Header from "./Header"

const Layout = ({ children }: PropsWithChildren) => {
    return (
        <div className="bg-gradient-to-br from-background to-muted">
            <Header />
            <main className="mx-auto px-4 py-8 min-h-screen container">
                {children}
            </main>
            <footer className="supports-[backdrop-filter]:bg-background/60 backdrop-blur-sm py-12 border-t">
                <div className="mx-auto px-4 text-center text-gray-400 container">
                    <p>SkyCast &copy; all rights reserved</p>
                </div>
            </footer>
        </div>
    )
}

export default Layout