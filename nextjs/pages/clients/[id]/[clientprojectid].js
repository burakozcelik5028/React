import {useRouter} from 'next/router';

function SelectedClientProjectPage(){
    const router = useRouter();

    return <div>
        <h1>The selected project with the Id = 
            {router.query.clientprojectid} 
            of selected client with the id = 
            {router.query.id}
        </h1>
    </div>
}

export default SelectedClientProjectPage;