import Link from 'next/link';

function ClientPage(){

    const clients = [{id: '28', name: 'Burak'},{id: '70', name: 'Nuri'},{id: '67', name: 'Latif'}]

    return <div>
        <h1>The Client Page</h1>
        <ul>
            {clients.map((client) =>(
                <li key={client.id}>
                    <Link href={`/clients/${client.id}`}>{client.name}</Link>
                </li>
            ))}
        </ul>
    </div>
}

export default ClientPage;