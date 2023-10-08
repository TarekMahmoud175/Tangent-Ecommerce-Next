'use client'
import { useEffect, useState } from 'react'
import { Product } from '@/common/types/product'
import { ProductServices } from '@/apis/Services/ProductServices'
import { ProductsResponse } from '@/common/types/productsResponse'
import { debounce } from '@/utils/depounce'

const useSearchProduct = (): [(e: string) => void, Product[]] => {
    const [apiSearchValue, setapiSearchValue] = useState<string>("")
    const [products, setproducts] = useState<Product[]>([])

  const debouncedSearchFunction = debounce((e: string) => {setapiSearchValue(e)}, 2000);

    useEffect(() => {
        ProductServices.searchProducts({ q: apiSearchValue, limit: 6 }).then((res: ProductsResponse) => {
            setproducts(res?.products)
        }).catch((_err: any) => {
            console.log(_err)
        })
        return () => setproducts([])
    }, [apiSearchValue])
    return [debouncedSearchFunction, products]
}


export default useSearchProduct