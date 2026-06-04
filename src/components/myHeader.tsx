import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from './ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from './ui/separator'

export default function MyHeader() {
  return (
    <header>
      <Card>
        <CardHeader>
          <Avatar size="2xl">
            <AvatarImage src="/images/felixsiu.png" />
            <AvatarFallback>Felix</AvatarFallback>
          </Avatar>
          <CardTitle>Felix Siu</CardTitle>
          <CardDescription>Front-end developer</CardDescription>
          <CardAction>
            <Button>Contact</Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <p>Hi, I am Felix</p>
        </CardContent>
        <CardFooter>
          <div className="flex gap-3 md:flex-row flex-col">
            tel: <a href="tel:+852 68455092">+852 68455092</a> <Separator orientation="vertical" /> email: <a href="mailto:b1044327634@gmail.com">b1044327634@gmail.com</a>
          </div>
        </CardFooter>
      </Card>
    </header>
  )
}
