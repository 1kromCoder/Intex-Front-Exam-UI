import { Footer, Hero, Navbar } from '@/modules'
import { ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Navbar />
            <Hero/>
            {/* <main className="site-main mt-[99px]">
                {children}
            </main> */}
            <Footer />
        </>
    )
}

export default Layout