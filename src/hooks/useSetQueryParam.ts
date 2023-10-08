import { usePathname, useSearchParams } from "next/navigation"
import React, { useCallback } from "react"

const UseSetQUeryParams = () => {

    const pathname = usePathname()
    const searchParams = useSearchParams()!

    // Get a new searchParams string by merging the current
    // searchParams with a provided key/value pair
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