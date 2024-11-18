import { useEffect, useState, ComponentType } from "react";
import { usePathname, useRouter } from "next/navigation";

// Higher-Order Component (HOC) to enforce authentication and authorization
function withAuth<P extends object>(WrappedComponent: ComponentType<P>) {
  // Component that handles the authentication and authorization logic
  const WithAuthComponent = (props: P) => {
    const router = useRouter(); // Hook to manage routing
    const pathname = usePathname(); // Hook to get the current path
    const [authorized, setAuthorized] = useState(false); // State to manage authorization status
    const [user, setUser] = useState<any>(null); // State to manage user data

    useEffect(() => {
      // Get authentication token and user data from local storage
      const token = localStorage.getItem("accessToken");
      const userData = localStorage.getItem("user");
      console.log(userData);
      

      // If no token is found, redirect the user to the login page
      if (!token) {
        router.replace("/sign-in");
        return;
      } 

      try {

        const parsedUser = userData ? JSON.parse(userData) : null;
        setUser(parsedUser);
        //Restricted pages that certain roles shouldn't access
        const restrictedPages = ["/create-admin", "/user-management"];
        const currentPath = pathname; // Current path the user is on

        //If the user's role is "DA" and they are trying to access a restricted page
        if (parsedUser?.role === "user" && restrictedPages.includes(currentPath)) {
          // Redirect to the "not-authorized" page
          router.push("/not-authorized");
        } else {
          // User is authorized to access the page
          setAuthorized(true);
        }
        // setAuthorized(true);
      } catch (error) {
        console.error(error);
        router.replace("/sign-in");
      }
    }, [router, pathname]); // Re-run this effect whenever the router or pathname changes

    // If the user is not yet authorized, render nothing until authorization is confirmed
    if (!authorized) {
      return null;
    }

    // Render the wrapped component if the user is authorized
    return <WrappedComponent {...props} user={user}/>;
  };

  // Set a display name for the HOC for better debugging and readability in DevTools
  WithAuthComponent.displayName = `WithAuth(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`;

  return WithAuthComponent;
}

export default withAuth;
