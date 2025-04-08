"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { PiListBold, PiHouseBold } from "react-icons/pi"
import { ThemeToggle } from "./theme-toggle"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const getLinkTextColor = (href: string) => {
    if (pathname === href) {
      return "text-cyan-600 dark:text-cyan-400 font-semibold";
    }
    if (isScrolled) {
      return "text-gray-700 dark:text-gray-200 hover:text-cyan-600 dark:hover:text-cyan-400";
    }
    return pathname === '/' ? "text-white hover:text-cyan-300" : "text-gray-700 dark:text-gray-200 hover:text-cyan-600 dark:hover:text-cyan-400";
  }

  const getMobileIconColor = () => {
    if (isScrolled) {
        return "text-gray-700 dark:text-gray-200"
    }
    return pathname === '/' ? "text-white" : "text-gray-700 dark:text-gray-200"
  }

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white/90 py-2 shadow-md backdrop-blur-md dark:bg-gray-900/90" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <span className={`text-xs font-medium sm:text-sm transition-colors ${isScrolled || pathname !== '/' ? 'text-cyan-600 dark:text-cyan-400' : 'text-cyan-400'}`}>Powered by</span>
          <span className={`ml-1 text-lg font-bold sm:text-xl transition-colors ${isScrolled || pathname !== '/' ? 'text-gray-900 dark:text-white' : 'text-white'}`}>
            MH<span className={isScrolled || pathname !== '/' ? 'text-cyan-600 dark:text-cyan-400' : 'text-cyan-500'}>Ai</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-6 md:flex">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors ${getLinkTextColor('/')}`}
          >
            <span className="flex items-center">
              <PiHouseBold className="mr-1 h-4 w-4" /> Home
            </span>
          </Link>
          <Link
            href="/products"
            className={`text-sm font-medium transition-colors ${getLinkTextColor('/products')}`}
          >
            Products
          </Link>
          <Link
            href="/about"
            className={`text-sm font-medium transition-colors ${getLinkTextColor('/about')}`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`text-sm font-medium transition-colors ${getLinkTextColor('/contact')}`}
          >
            Contact
          </Link>
          <ThemeToggle />
          <Button size="sm" className={isScrolled || pathname !== '/' ? "" : "bg-white text-cyan-600 hover:bg-white/90"}>Get Started</Button>
        </nav>

        {/* Mobile Navigation Trigger */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open Menu">
              <PiListBold className={`h-6 w-6 transition-colors ${getMobileIconColor()}`} />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle>
                <span className="text-lg font-bold">
                  MyHuman <span className="text-cyan-600">Ai</span>
                </span>
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-8 flex flex-col space-y-4">
              <Link href="/" className={`text-lg font-medium ${pathname === '/' ? 'text-cyan-600' : ''}`} onClick={() => setIsOpen(false)}>
                 <span className="flex items-center">
                  <PiHouseBold className="mr-2 h-5 w-5" /> Home
                </span>
              </Link>
              <Link href="/products" className={`text-lg font-medium ${pathname === '/products' ? 'text-cyan-600' : ''}`} onClick={() => setIsOpen(false)}>
                Products
              </Link>
              <Link href="/about" className={`text-lg font-medium ${pathname === '/about' ? 'text-cyan-600' : ''}`} onClick={() => setIsOpen(false)}>
                About
              </Link>
              <Link href="/contact" className={`text-lg font-medium ${pathname === '/contact' ? 'text-cyan-600' : ''}`} onClick={() => setIsOpen(false)}>
                Contact
              </Link>
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <ThemeToggle />
              </div>
              <Button className="mt-6" onClick={() => setIsOpen(false)}>
                Get Started
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

