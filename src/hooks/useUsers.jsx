import { useEffect, useState } from "react"
import { getUsers } from "../services/users.service"

export const useUsers = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const result = await getUsers()
                setData(result)
                setLoading(false)
            } catch (error) {
                setError(error.message)
                setLoading(false)
            }
        }
        fetchUsers()
    }, [])
    return { data, loading, error }
}
