import { Search } from "lucide-react";
import { ComponentProps } from "react";

interface InputRootProps extends ComponentProps<'div'>{}

interface InputPrefixProps extends ComponentProps<'div'>{}

export function InputPrefix(props : InputPrefixProps){
    return <div {...props}/>
}
interface InputControlProps extends ComponentProps<'input'>{}

export function InputControl(props : InputControlProps){
    return <input className="flex-1 border-none bg-transparent p-0 text-zinc-900 placeholder-zinc-600" {...props} />
}

export default function InputRoot(props: InputRootProps){
    return(
        <div className="mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm " {...props} />
    )
}