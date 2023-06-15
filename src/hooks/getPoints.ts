import axios from 'axios';
import { useEffect, useState } from 'react';

export const useGetPoints = (address: `0x${string}`) => {
	const [data, setData] = useState<any>('#');
	const [error, setError] = useState('');
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		(async () => {
			try {
				// get openspace points
				const profile = await axios.get(
					'https://goodplace.gg/api/trpc/profile.countAllActionResultsByAddress',
					{
						params: {
							input: `{"json":${JSON.stringify({
								address: address,
							})}}`,
						},
					},
				);
				console.log(profile.data.result.data.json.points);
				setData(profile.data.result.data.json.points);
			} catch (error: any) {
				setError(error.message);
			} finally {
				setLoaded(true);
			}
		})();
	}, [address, data]);

	return { data, error, loaded };
};
