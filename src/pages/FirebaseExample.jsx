import React from 'react';
import { collection } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { firestore } from '../utils/firebase';

export const FirebaseExample = () => {
	const [value, loading, error] = useCollection(
		collection(firestore, 'hooks'),
		{
			snapshotListenOptions: { includeMetadataChanges: true },
		}
	);
	return (
		<div>
			<p>
				{error && <strong>Error: {JSON.stringify(error)}</strong>}
				{loading && <span>Collection: Loading...</span>}
				{value && (
					<span>
						Collection:{' '}
						{value.docs.map((doc) => (
							<React.Fragment key={doc.id}>
								{JSON.stringify(doc.data())},{' '}
							</React.Fragment>
						))}
					</span>
				)}
			</p>
		</div>
	);
};
