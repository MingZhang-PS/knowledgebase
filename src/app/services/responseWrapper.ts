export class ResponseWrapper<T> {
    // keep the response format aligned with the coresystem api guideline
    constructor(public data: Array<T>, public currentPage?: number, public totalObjectCount?: number,
                public pageSize?: number, public lastPage?: number) {
    }
}
