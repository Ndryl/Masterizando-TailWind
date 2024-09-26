'use client'

import * as Tabs from '@radix-ui/react-tabs'
import {motion} from 'framer-motion'

export interface TableItemsProps{
    value: string
    title: string
    isSelected?: boolean
}

export function TabItem({value, title, isSelected = false}: TableItemsProps){
    return(
        <Tabs.Trigger value={value} className=":px-1 group relative pb-4 text-sm font-medium text-zinc-500 outline-none hover:text-violet-700 data-[state=active]:text-violet-700">
            <span className="whitespace-nowrap rounded group-focus-visible:ring-2 group-focus-visible:ring-violet-400 group-focus-visible:ring-offset-4">
                {title}
            </span>
            {isSelected && (
                <motion.div layoutId='activeTable' className='mt-4 absolute -botton-px left-0 right-0 h-0.5 bg-violet-700' />
            )}
        </Tabs.Trigger>
    )
}