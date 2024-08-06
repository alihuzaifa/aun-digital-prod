import { HashLoader } from 'react-spinners';

export default function Loading() {
    return (
        <div className="flex justify-center items-center h-screen">
            <HashLoader
                size={50}
                color="#35acc9"
            />
        </div>
    );
}
