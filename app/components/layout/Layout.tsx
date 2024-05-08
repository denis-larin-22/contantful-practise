import Link from 'next/link'
import React from 'react'

const Layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <>
            <header className='w-full border-b-2 border-gray-600 p-8 max-w-[1200px] mx-auto'>
                <nav className='container'>
                    <ul className='flex gap-4'>
                        <li>
                            <Link
                                href='/'
                                className='pb-2 text-sm font-medium uppercase text-stone-400 hover:text-stone-700 border-b-2 border-transparent hover:border-stone-700 duration-150'
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href='/posts'
                                className='pb-2 text-sm font-medium uppercase text-stone-400 hover:text-stone-700 border-b-2 border-transparent hover:border-stone-700 duration-150'
                            >
                                Posts
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <main className='container p-8 grow'>{children}</main>

            <footer className='bg-stone-100 text-sm font-medium uppercase text-stone-400 px-8 py-4'>
                <div className='container'>
                    <p>My Blog</p>
                </div>
            </footer>
        </>
    )
}

export default Layout