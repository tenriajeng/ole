import React from "react";

function Navigation() {
	const menuStyle = "font-normal text-indigo-500 hover:text-blue-500 hover:cursor-pointer";
	const brandStyle = "text-3xl font-semibold text-indigo-500 hover:text-blue-500 hover:cursor-pointer";

	return (
		<div className="h-16 bg-indigo-50 w-screen flex items-center justify-center">
			<div className="w-11/12 flex justify-between">
				<div className="w-2/12">
					<a className={brandStyle}>Sejawat</a>
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
