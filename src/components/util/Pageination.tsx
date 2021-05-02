import {RouteComponentProps} from "@reach/router";
import React from "react";

export interface PaginationProps extends RouteComponentProps<{
    maxPages: number,
    currentPage: number,
    callback: (newPage: number) => void
}> {}

export default function Pagination(props: PaginationProps) {

    return (
        <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center">

                {[...Array(props.maxPages)].map((x, i) =>
                    <li key={i} className={`page-item ${i + 1 === props.currentPage && "active"}`}>
                        <button className="page-link" onClick={() => {
                            props.callback?.(i + 1)
                        }} >{i + 1}</button>
                    </li>
                )}
            </ul>
        </nav>
    )
}