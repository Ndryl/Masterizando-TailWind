'use client'

import { Trash2, UploadCloud } from "lucide-react"
import { useFileInput } from "./Root"
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { formatBytes } from "@/Components/utils/format-bytes"
import { Button } from "@/Components/Button"
import { FileItem } from "./FileItem" 



export function FileList(){
    const {files} = useFileInput();
    const [parent] = useAutoAnimate();
    return( 
        <div ref={parent} className="mt-4 space-y-3">
            {files.map((file)=>{
                return (
                    <FileItem
                      key={file.name}
                      name={file.name}
                      size={file.size}
                      state="error"
                    />
                  )
            })}
        </div>
    )
}