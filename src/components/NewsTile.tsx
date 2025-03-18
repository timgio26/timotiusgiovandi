import { News } from "@/app/blog/page"

type NewsTileProp = {
    news:News
} 
export function NewsTile({news}:NewsTileProp){
    return(
        <div className="flex flex-col bg-amber-200 border rounded mx-3 my-1 p-3">
            <div className="flex flex-row justify-between">
            <span>{news.created_date.slice(0,10)}</span>
            <span className="text-sm text-gray-800">{news.section}</span>

            </div>
            <span className="font-bold">{news.title}</span>
            <div className="border-t-2">
            <span>{news.abstract}</span>

            </div>
        </div>
    )
}