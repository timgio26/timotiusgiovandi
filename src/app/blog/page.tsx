// import { getPosts } from '@/lib/posts'
// import { Post } from '@/ui/post'
import { NewsTile } from "@/components/NewsTile";
import { z } from "zod";

const NewsSchema = z.object({
  section:z.string(),
  title:z.string(),
  url:z.string(),
  abstract:z.string(),
  created_date:z.string()
})

export type News = z.infer<typeof NewsSchema>;

const NewsRespSchema  = z.object({
  status:z.string(),
  results:z.array(NewsSchema)
})
 
export default async function Page() {
//   const posts = await getPosts()
  const data = await fetch('https://api.nytimes.com/svc/topstories/v2/science.json?api-key=YeNJGQbdaHocyO1YAKjaROOJ5tZK9igc')
  const posts = await data.json()
  // console.log(posts)

  const parseResult =NewsRespSchema.safeParse(posts)

  // console.log(parseResult)

  if(!parseResult.success)return(
    <div>
      something wrong
    </div>
  )
  return (
    <div>
      {parseResult.data.results.map((each)=>(
       
        each.section!=='admin'&&<NewsTile key={each.title} news={each}/>
        
      ))}
    </div>
  )
}