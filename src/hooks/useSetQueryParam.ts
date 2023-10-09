import { usePathname, useSearchParams } from "next/navigation"
import { useCallback } from "react"

const UseSetQUeryParams = () => {

    const pathname = usePathname()
    const searchParams = useSearchParams()!

    const createQueryString = useCallback(
        (name: string, value: string): string => {
            const params = new URLSearchParams(searchParams)
            params.set(name, value)
            return params.toString()
        },
        [searchParams]
    )

    return [pathname, createQueryString]
}

export default UseSetQUeryParams;