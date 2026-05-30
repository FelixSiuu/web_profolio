import { cn } from '@/lib/utils'
import React from 'react'

function SectionTitle({ ...props }: React.ComponentProps<'h2'>) {
  return <h2 className={cn('text-2xl font-semibold text-black mb-4', props.className)} {...props}></h2>
}

export default SectionTitle
