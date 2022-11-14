import { FC } from "react";
import Link from "next/link";
import UserIcon from "./icons/user";
import ShoppingCartIcon from "./icons/shoppingCart";
import FavoriteIcon from "./icons/favorite";

interface Props {
	children: any;
}

const Layout: FC<Props> = ({ children }) => {
	return (
		<div className="">
			<header>
				<div className="container mx-auto px-6 py-3">
					<div className="flex items-center justify-between">
						<Link href="/">
							<div className="w-full text-red-700 md:text-left text-2xl font-semibold">
								U&G Inc.
							</div>
						</Link>
						<div className="flex items-center justify-end w-full lg:w-2/5 lg:justify-around">
							<button className="text-gray-600">
								<UserIcon />
							</button>
							<button
								className="text-gray-600 ml-4 lg:ml-0"
							>
								<FavoriteIcon />
							</button>
							<button
								className="text-gray-600 focus:outline-none mx-4 sm:mx-0"
							>
								<ShoppingCartIcon />
							</button>
							<div className="flex sm:hidden">
								<button
									type="button"
									className="text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500"
									aria-label="toggle menu"
								>
									<svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
										<path
											fillRule="evenodd"
											d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
										/>
									</svg>
								</button>
							</div>
						</div>
					</div>
					<nav
						className={`sm:flex sm:justify-center sm:items-center mt-4 `}
					>
						<div className="flex flex-col sm:flex-row">
							<Link href="/" className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0">
								Home
							</Link>
							<Link className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="/products">
								Shop
							</Link>
						</div>
					</nav>
				</div>
			</header>
			<main className="my-8">{children}</main>
		</div>
	);
}

export default Layout;
