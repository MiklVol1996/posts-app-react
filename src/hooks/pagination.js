import { useMemo } from "react";


export let GetArrOfPages = (pages) => {
    let pagesCount = useMemo(() => {
        let arr = [];
        for (let i = 0; i < pages; i++) {
            arr.push(i + 1);
        }
        return arr;
    }, [pages]);

    return pagesCount;
}


export let GetPages = (totalCount) => {
    return Math.ceil(totalCount / 10);
}



