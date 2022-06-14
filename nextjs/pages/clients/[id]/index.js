import {useRouter} from 'next/router';

function ClientProjectsPage(){
    const router = useRouter();
    
    return <div>
        <h1>The Projects Of Selected Client with id = {router.query.id}</h1>
    </div>
}

export default ClientProjectsPage;