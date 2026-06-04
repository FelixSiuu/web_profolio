import { coreSkillsService } from '@/services/myInfo.service'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table'

export default async function CoreSkills() {
  const response = await coreSkillsService.getCoreSkills()

  const { data, isSuccess } = response

  if (!isSuccess) return <div>加載出錯了！</div>

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="bg-white sticky left-0">Summary</TableHead>
          <TableHead>Details</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="bg-white sticky left-0">
              <strong>{item.summary}</strong>
            </TableCell>
            <TableCell>{item.details}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
