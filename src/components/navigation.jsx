import React from "react";

function Navigation() {
	const menuStyle = "font-semibold text-white hover:cursor-pointer";
	const brandStyle = "text-3xl font-semibold text-white hover:cursor-pointer";

	return (
		<div className="h-16 bg-indigo-600 w-screen flex items-center justify-center">
			<div className="w-11/12 flex justify-between">
				<div className="w-2/12">
					<a href="/" className={brandStyle}>
						Sejawat
					</a>
				</div>
				<div className="w-10/12 flex justify-end space-x-10 items-center">
					<a href="/home" className={menuStyle}>
						Home
					</a>
					<a href="/blog" className={menuStyle}>
						Blog
					</a>
					<a href="/subscription" className={menuStyle}>
						Subscription
					</a>
				</div>
			</div>
		</div>
	);
}

export default Navigation;
