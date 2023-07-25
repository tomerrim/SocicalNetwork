import Link from "next/link";
import AppHeaderUser from "./AppHeaderUser";

const MENU_ITEMS = [
    { title: "Home", path: "/" },
    { title: "Posts", path: "/posts" },
    { title: "About", path: "/about" },
]

export default function AppHeader() {
    return (
        <header>
            <nav className="bg-gray-800 px-5 py-5">
                <div className="flex mx-auto mx-w5xl items-center">
                    <ul className="flex gap-4">
                        {MENU_ITEMS.map((item) =>( 
                            <li key={item.path} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                                <Link href={item.path}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                    <AppHeaderUser/>
                </div>
            </nav>
        </header>
    )
}