import { REVALIDATE_TIME } from '@/config'
import { aboutService } from '@/services/myInfo.service'

export const revalidate = REVALIDATE_TIME

export default async function AboutMe() {
  const response = await aboutService.getAboutMe()

  const { data, isSuccess } = response

  if (!isSuccess) return <div>加載出錯了！</div>

  return (
    <>
      {data.map((item) => {
        return (
          <p key={item.id} className="leading-relaxed mb-2">
            {item.paragraph}
          </p>
        )
      })}
    </>
  )
}
