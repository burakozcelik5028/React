import {useRouter} from 'next/router';

function ClientProjectsPage(){
    const router = useRouter();
    
    const loadProjectsHandler = () =>{
        router.push({
            pathname: "/clients/[id]/[clientprojectid]",
            query: {id: "burak", clientprojectid: "28"}
        })
    }

    return <div>
        <h1>The Projects Of Selected Client with id = {router.query.id}</h1>
        <button onClick={loadProjectsHandler}>Load Project A</button>
    </div>
}

export default ClientProjectsPage;