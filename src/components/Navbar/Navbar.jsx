import {
    Navbar as NextUINavbar,
    NavbarContent,
    NavbarBrand,
    NavbarItem,
} from "@nextui-org/navbar"; import { Link } from '@nextui-org/link';
import { siteConfig } from '../../config/site';
import { LinkedInIcon, GithubIcon, PortfolioIcon, TwitterIcon } from '../icons/Icons';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';


const NavbarComponent = () => {
    return (
        <NextUINavbar maxWidth="xl" className="fixed border-b-2 " position="sticky">
            <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
                <NavbarBrand as="li" className="gap-3 max-w-fit">
                    <div className="flex justify-start items-center gap-1 cursor-pointer" >
                        {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24px"
                            height="24px"
                            viewBox="0 0 256 256"
                        >
                            <path
                                fill="currentColor"
                                d="M152 224a8 8 0 0 1-8 8h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8m-24-112a12 12 0 1 0-12-12a12 12 0 0 0 12 12m95.62 43.83l-12.36 55.63a16 16 0 0 1-25.51 9.11L158.51 200h-61l-27.26 20.57a16 16 0 0 1-25.51-9.11l-12.36-55.63a16.09 16.09 0 0 1 3.32-13.71l28.56-34.26a123.07 123.07 0 0 1 8.57-36.67c12.9-32.34 36-52.63 45.37-59.85a16 16 0 0 1 19.6 0c9.34 7.22 32.47 27.51 45.37 59.85a123.07 123.07 0 0 1 8.57 36.67l28.56 34.26a16.09 16.09 0 0 1 3.32 13.71M99.43 184h57.14c21.12-37.54 25.07-73.48 11.74-106.88C156.55 47.64 134.49 29 128 24c-6.51 5-28.57 23.64-40.33 53.12c-13.31 33.4-9.36 69.34 11.76 106.88m-15 5.85q-16.15-29.35-19.6-57.69L48 152.36L60.36 208l.18-.13ZM208 152.36l-16.83-20.2q-3.42 28.28-19.56 57.69l23.85 18l.18.13Z"
                            />
                        </svg> */}
                        <img src="/16.webp" alt="logo" className="w-8 h-8" />
                        <p className="font-bold text-lg SourceCodePro">Startup Samachar</p>
                    </div>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent
                className="hidden sm:flex basis-1/5 sm:basis-full"
                justify="end">
                <NavbarItem className="hidden sm:flex gap-4">
                    <Link isExternal href={siteConfig.links.twitter} aria-label="Twitter">
                        <TwitterIcon className=" text-default-500" />
                    </Link>
                    <Link isExternal href={siteConfig.links.github} aria-label="Github">
                        <GithubIcon className="text-default-500" />
                    </Link>
                    <Link
                        isExternal
                        href={siteConfig.links.linkedin}
                        aria-label="LinkedIn"
                    >
                        <LinkedInIcon className="text-default-500" />
                    </Link>
                    <Link
                        isExternal
                        href={siteConfig.links.website}
                        aria-label="Portfolio"
                    >
                        <PortfolioIcon className="text-default-500" />
                    </Link>
                    <ThemeSwitcher />
                </NavbarItem>
            </NavbarContent>

            <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
                <Link isExternal href={siteConfig.links.github} aria-label="Github">
                    <GithubIcon className="text-default-500" />
                </Link>

                <ThemeSwitcher />
            </NavbarContent>
        </NextUINavbar>
    )
}

export default NavbarComponent