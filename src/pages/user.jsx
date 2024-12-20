import { CardProducts } from "../components/card-products"
import { useUsers } from "../hooks/useUsers"
// import ''./user.css'

export const Users = () => {

    const { data, loading, error } = useUsers()
    
        if (loading) return <div>Cargando Informacion</div>
    
        if (error) return <div>Error : {error}</div>
    
        return (
            <div className='container'>
                <h1 style={{ display : "flex", alignItems : "center", justifyContent : "center", paddingBottom : "20px"}}>Usuarios</h1>
                <div className='user-container'>
                    {JSON.stringify(data)}
                    {/* {data.map((item) => ( }
                        <CardProducts
                            key={item.id}
                            title={item.title}
                            price={item.price}
                            image={item.images[0]}
                            category={item.category}
                            description={item.description}
                        />
                    ))*/}
                </div>
            </div>
        )
}