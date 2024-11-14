import { ReactNode, createContext, useContext, useState } from "react";
import axios from 'axios'
import { toast } from "sonner";
import { useAuthContext } from "./AuthContext";
import { useRouter } from "next/navigation";


const ProductContext = createContext()
export const useProductContext = () => {
    return useContext(ProductContext)
}

export default function ProductProvider({ children }) {
    const { adminId } = useAuthContext()
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false)
    const [loadingCategory, setLoadingCategory] = useState(false)
    const [deleting, setDeleting] = useState('')

    // getAllProducts
    const getAllProducts = async () => {
        setLoading(true)
        try {
            const response = await axios(`${baseUrl}/all/product`)
            const data = await response.data
            if (response.status == 200) {
                setProducts(data)
            }

        } catch (error) {
            console.log(error);

        } finally {
            setLoading(false)
        }
    }


    // Get single product
    const getSingleProduct = async (productId) => {


    }

    const getAllCategories = async () => {
        setLoading(true);
        try {
            const response = await axios(`${baseUrl}/category`)
            const { allCategory } = await response.data
            setCategories(allCategory.map((item) => item.name));

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const addCategory = async (name) => {
        setLoadingCategory(true)
        try {
            const response = await axios.post(`${baseUrl}/category/${adminId}`, { name })
            if (response.status === 200) {
                toast.success(response.data.message)
                // getAllCategories()
            }

        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message)
        } finally {
            setLoadingCategory(false)
        }
    }

    // get products by category
    const getProductsByCategory = async (categoryName) => {
        setLoading(true)
        try {
            const response = await axios(`${baseUrl}/product/category/${categoryName}`)
            const data = await response.data
            console.log(data);
            if (response.status == 200) {
                setProducts(data.products)
            }

        } catch (error) {
            console.log(error);

        } finally {
            setLoading(false)
        }
    }


    // Add new product
    const addProduct = async (data) => {
        setLoading(true)
        try {
            const response = await axios.post(`${baseUrl}/product/${adminId}`, data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            })
            if (response.status === 200) {
                toast.success(response.data.message)
                getAllProducts()
            }

        } catch (error) {
            console.log(error);

        } finally {
            setLoading(false)
        }

    }

    // Edit new product
    const editProduct = async (data, productId) => {
        setLoading(true)
        try {
            const response = await axios.put(`${baseUrl}/product/${adminId}/${productId}`, data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            })


            if (response.status === 200) {
                toast.success('Product updated successfully!')
                getAllProducts()
            }

        } catch (error) {
            console.log(error);

        } finally {
            setLoading(false)
        }


    }


    // Edit new product
    const deleteProduct = async (productId) => {
        setDeleting(productId)
        try {
            const response = await axios.delete(`${baseUrl}/product/${adminId}/${productId}`)
            console.log(response);


            if (response.status === 200) {
                toast.success(response.data.message)
                getAllProducts()
            }

        } catch (error) {
            console.log(error);

        } finally {
            setDeleting('')
        }
    }


    const value = {
        getAllProducts,
        getSingleProduct,
        getProductsByCategory,
        addCategory,
        getAllCategories,
        categories,
        addProduct,
        editProduct,
        deleteProduct,
        products,
        loading,
        loadingCategory,
        deleting
    }

    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>

}

