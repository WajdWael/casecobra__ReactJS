import Link from "next/link";
import MaxWidthWrapper from "./MaxWithWrapper";

const Footer = () => {
    return (
        <footer className="bg-white h-20 relative m-6 mt-5">
            <MaxWidthWrapper>
                <div className="border-t border-gray-200" />

                <section className="h-full flex flex-col md:flex-row md:justify-between justify-center items-center pt-3">
                    <header className="text-center md:text-left pb-2 md:pb-0 ">
                        <h2 className="text-sm text-muted-foreground">
                            &copy; 2024 All rights reserved.
                        </h2>
                        <h2 className="text-sm text-muted-foreground">
                            Coded BY <Link className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline" href="https://dev-wajd-wael.netlify.app/">Wajd Wael.</Link>
                        </h2>
                    </header>
                    <article className="flex items center justify-center">
                        <div className="flex space-x-8">
                            {/* Legal page */}
                            <Link href="#" className="text-sm text-muted-foreground hover:text-gray-600">Terms</Link>
                            <Link href="#" className="text-sm text-muted-foreground hover:text-gray-600">Privacy Policy</Link>
                            <Link href="#" className="text-sm text-muted-foreground hover:text-gray-600">Cookie Policy</Link>
                        </div>
                    </article>
                </section>
            </MaxWidthWrapper>
        </footer>
    )
}
export default Footer;