import React from "react";
import { Link } from "react-router-dom";
import Avatar from "./avatar";

function Navigation() {
	const menuStyle = "font-semibold text-white hover:cursor-pointer hover:underline underline-offset-8";
	const brandStyle = "text-3xl font-semibold text-white hover:cursor-pointer";

	return (
		<>
			<div className="h-16 bg-indigo-600 w-screen flex items-center justify-center shadow-lg shadow-indigo-400/50">
				<div className="w-10/12 flex justify-between">
					<div className="w-2/12">
						<Link to="/" className={brandStyle}>
							Sejawat
						</Link>
					</div>
					<div className="w-10/12 flex justify-end space-x-5 items-center">
						<Link to={"/article"} className={menuStyle}>
							Article
						</Link>
						<Link to="/subscription" className={menuStyle}>
							Subscription
						</Link>
						<div className="rounded-full bg-white h-10 w-10 overflow-hidden">
							<Avatar />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Navigation;
