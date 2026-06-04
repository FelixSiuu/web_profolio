import { educationService } from '@/services/myInfo.service'

export default async function Education() {
  const response = await educationService.getEducation()

  const { data, isSuccess } = response

  if (!isSuccess) return <div>加載出錯了！</div>

  return (
    <>
      {data.map((item) => (
        <EducationItem key={item.id} {...item} />
      ))}
    </>
  )
}

const EducationItem = (item: Education) => {
  return (
    <article className="flex not-last:mb-4">
      <hgroup className="w-40">
        <h3>
          {item.startDate} - {!item.endDate ? 'Now' : item.endDate}
        </h3>
        <small className="text-[#555555]">{item.location}</small>
      </hgroup>

      <p className="flex-1">
        {item.degree} in {item.major} at {item.institution}
      </p>
    </article>
  )
}
