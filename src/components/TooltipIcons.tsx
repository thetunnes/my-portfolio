'use client'
import * as Tooltip from '@radix-ui/react-tooltip'
import { ReactElement, ReactNode } from 'react'

interface TooltipProps {
  children: ReactNode
  contentTooltip: ReactElement
}

export default function TooltipIcons({
  children,
  contentTooltip,
}: TooltipProps) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger className="w-max">{children}</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className="z-[999] w-max rounded-md border border-gray-100 bg-zinc-400 px-2 py-1 text-gray-100 dark:bg-zinc-900">
            <Tooltip.Arrow className="fill-gray-100" />
            {contentTooltip}
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
