

import Logo from './logo'
import { MenuIcon } from 'lucide-react'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Button } from './ui/button'
import { headerNavigation } from '@/lib/constants'
import Link from 'next/link'
export default function Header() {
    return (
        <header className='sticky top-0 bg-background border-b border-white/20 z-50'>
            <div className='flex items-center justify-between h-28 container mx-auto px-4'>
                <Logo className='size-20 rounded-full'/>
                <nav className='hidden lg:block'>
                    <ul className='flex items-center'>
                        {headerNavigation.map((nav, idx) => (
                                <Button key={idx} variant={"link"} className='text-white/70' asChild>
                                    <Link href={nav.href}>{nav.label}</Link>
                                </Button>
                        ))}
                    </ul>
                </nav>
                <div className='hidden lg:block'>
                    <Button variant={"ghost"}>Sign in</Button><Button>Sign up</Button>
                </div>
                <MobileNav />
            </div>
        </header>
    )
}

function MobileNav() {
    return (
        <Dialog>
            <DialogTrigger className='lg:hidden'>
                <Button size={"icon"} variant={"ghost"} asChild>
                    <MenuIcon className='size-6' />
                </Button>
            </DialogTrigger>
            <DialogContent className='right-0 top-0 h-screen bg-background text-white rounded-none'>
                <DialogHeader>
                    <DialogTitle><Logo className='size-20 rounded-full'/></DialogTitle>
                </DialogHeader>
                <nav>
                    <ul className='flex flex-col gap-y-4'>
                        {headerNavigation.map((nav, idx) => (
                                <Button key={idx} variant={"link"} className='text-xl' asChild>
                                    <Link href={nav.href}>{nav.label}</Link>
                                </Button>
                        ))}
                    </ul>
                </nav>
                <DialogFooter>
                    External Links
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}