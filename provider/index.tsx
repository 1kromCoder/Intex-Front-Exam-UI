import { Footer, Hero, Navbar } from '@/modules'
import { getRequest } from '@/service/getRequest'
import { ReactNode } from 'react'

const Layout = async ({ children }: { children: ReactNode }) => {
    const sites = await getRequest('/site')
    const category = await getRequest('/category')
    return (
        <>
            <Navbar site={sites} category={category.data}/>
            <Hero/>
            <Footer site={sites} />
        </>
    )
}

export default Layout