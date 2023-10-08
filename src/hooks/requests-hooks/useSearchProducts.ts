'use client'
import { useEffect, useMemo, useState } from 'react'
import { Product } from '@/common/types/product'
import { ProductServices } from '@/apis/Services/ProductServices'
import { ProductsResponse } from '@/common/types/productsResponse'
import { debounce } from '@/utils/depounce'


const useSearchProduct = (): [(e: string) => void, Product[]] => {
    const [apiSearchValue, setapiSearchValue] = useState<string>("")
    const [products, setproducts] = useState<Product[]>([])


    const changeSearchValue = useMemo(() =>
        debounce((e: string) => {
            setapiSearchValue(e)
        }, 900),
        []
    );
    // const debouncedSearchFunction = debounce((e: string) => { setapiSearchValue(e) }, 2000);

    useEffect(() => {
        apiSearchValue && ProductServices.searchProducts({ q: apiSearchValue, limit: 6 }).then((res: ProductsResponse) => {
            setproducts(res?.products)
        }).catch((_err: any) => {
            console.log(_err)
        })
        return () => setproducts([])
    }, [apiSearchValue])
    return [changeSearchValue, products]
}


export default useSearchProduct