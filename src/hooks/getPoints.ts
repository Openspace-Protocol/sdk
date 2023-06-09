import { useEffect, useState } from 'react';

export const useGetPoints = () => {
	const [data, setData] = useState<any>('#');
	const [error, setError] = useState('');
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		(async () => {
			try {
				// get openspace points
				setData('#');
			} catch (error: any) {
				setError(error.message);
			} finally {
				setLoaded(true);
			}
		})();
	}, []);

	return { data, error, loaded };
};
