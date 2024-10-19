/* eslint-disable no-unused-vars */
import { Button } from "../ui/Button";
import { Link } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { UserButton } from "@clerk/clerk-react";

const Header = () => {
    const { user,  isSignedIn } = useUser();
	return (
		<div className="p-2 px-5 flex justify-between shadow-md">
			<Link to={"/"}>
            <img src="/public/logo-no-background.png" alt="resulix.ai_logo" width={160} height={120} style={{margin:"8px"}} />
            </Link> 

            {isSignedIn ? (
                <div className="mx-4 flex gap-10 items-center">
                    <Link to={'/dashboard'}>
                    <Button variant="outline">Dashboard</Button>
                    </Link>
                    <UserButton />
                </div>
            ):(
            <Link to={'/auth/sign-in'}>
			<Button>Get Started</Button>
            </Link>)
}

		</div>
	);
};

export default Header;
