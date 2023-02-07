import React from "react";
import Avatar from "./avatar";

function Navigation() {
	const menuStyle = "font-semibold text-white hover:cursor-pointer hover:underline underline-offset-8";
	const brandStyle = "text-3xl font-semibold text-white hover:cursor-pointer";

	return (
		<div className="h-16 bg-indigo-600 w-screen flex items-center justify-center shadow-lg shadow-indigo-400/50">
			<div className="w-10/12 flex justify-between">
				<div className="w-2/12">
					<a href="/" className={brandStyle}>
						Sejawat
					</a>
				</div>
				<div className="w-10/12 flex justify-end space-x-5 items-center">
					<a href="/blog" className={menuStyle}>
						Blog
					</a>
					<a href="/subscription" className={menuStyle}>
						Subscription
					</a>

					<div className="flex items-center">
						<button type="button" name="btn-search" class="w-full" aria-label="btn search">
							<svg width="24" height="24" fill="none" aria-hidden="true" class="text-white ">
								<path d="m19 19-3.5-3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
								<circle cx="11" cy="11" r="6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></circle>
							</svg>
						</button>
					</div>

					<div class="rounded-full bg-white h-10 w-10 overflow-hidden">
						<Avatar />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navigation;
