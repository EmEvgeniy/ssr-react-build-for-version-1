import { useState, useEffect } from "react";

const useDeviceDetect = () => {
	const isClient = typeof window === "object";

	const [isMobile, setIsMobile] = useState(isClient && window.innerWidth < 768);

	useEffect(() => {
		if (!isClient) {
			return false;
		}

		const handleResize = () => setIsMobile(window.innerWidth < 768);
		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, [isClient]);

	return { isMobile };
};

export default useDeviceDetect;
