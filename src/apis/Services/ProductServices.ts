import { Network } from "@/apis/Network";
import { ProductEndPoints } from "@/apis/EndPoints/ProductEndPoints";
import { useHandleQueryParams } from "@/utils/handleRequestQuery";
import { RequestObject } from "@/common/types/requestObject";

export class ProductServices {

    static getProducts(requestObject: RequestObject): Promise<any> {
        let queryParam = useHandleQueryParams(requestObject)
        return Network.fetch(
            // @ts-ignore
            ProductEndPoints.getProducts.url(queryParam),
            {
                method: ProductEndPoints.getProducts.method
            }
        )
    }

}


