import Link from 'next/link';

export default function Navbar() {

    return (
        <nav className="sticky mix-blend-difference z-10">
            <div className="container fixed top-0 right-0 left-0 mx-auto flex justify-center items-center p-2 pt-8  ">
                <div className="text-base sm:text-xl divide-x divide-primary-light">
                    <Link href="#" className="transition-colors duration-200 ease-in-out hover:text-gray-400 px-2 sm:px-5 lg:px-15">Home</Link>
                    <Link href="/about" className="hover:text-gray-400 transition-colors duration-150 ease-in-out px-2 sm:px-5 lg:px-15">About</Link>
                    <Link href="/tech" className="hover:text-gray-400 transition-colors duration-150 ease-in-out px-2 sm:px-5 lg:px-15">Technologies</Link>
                    <Link href="/contact" className="hover:text-gray-400 transition-colors duration-150 ease-in-out px-2 sm:px-5 lg:px-15">Experiences</Link>
                    <Link href="/contact" className="hover:text-gray-400 transition-colors duration-150 ease-in-out px-2 sm:px-5 lg:px-15">Contact Me</Link>
                </div>
            </div>
        </nav>
    );
  }