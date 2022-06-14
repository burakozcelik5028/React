import {useRouter} from 'next/router';

function PortfolioProjectPage(){
    const router = useRouter();

    console.log('-------------------------')
    console.log(router.pathname)
    console.log(router.query)
    console.log(router.query.projectid)
    console.log('-------------------------')

    return <div>
        <h1>The Portfolio Project Page</h1>
    </div>
}

export default PortfolioProjectPage;