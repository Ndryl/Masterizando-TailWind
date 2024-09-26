import SettingsTabs from '@/Components/SettingsTabs';
import InputRoot, * as Input from'@/Components/Input';
import * as FileInput from '@/Components/Form/FileInput'
import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'
import { Select } from '@/Components/Form/Select';
import { SelectItem } from '@/Components/Form/Select/SelectItem';
import { Textarea } from '@/Components/Form/TextArea';
import { Button } from '@/Components/Button';



export default function Home() {
  return (
      <>
        <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>
        <SettingsTabs/>

        <div className='mt-6 flex flex-col '>
        <div className="flex flex-col justify-between gap-4 border-b border-zinc-200 pb-5 lg:flex-row lg:items-center">
            <div className='space-y-1'>
              <h2 className='text-lg font-medium text-zinc-900'>Personal info</h2>
              <span className='text-sm text-zinc-500'>Update your photo and personal details here.</span>
            </div>
            <div className='flex items-center gap-2'>
              <Button variant='outline' type="button" >Cancel</Button>
              <Button variant='primary' type='submit' form='setting'>Save</Button>
            </div>

          </div>
          <form id="settings" className='mt-6 flex flex-col w-full gap-5 divide-y divide-zinc-200'>
          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form">
              <label htmlFor="firstName" className='text-sm font-medium text-zinc-700'>Name</label>
              <div className='grid gap-6 grid-cols-2'>
                <InputRoot>
                  <Input.InputControl id="firstName" defaultValue="Hendryl"/>
                </InputRoot>
                <div className="flex flex-col gap-3 lg:block">
                <label
                  htmlFor="lastName"
                  className="text-sm font-medium text-zinc-700 lg:sr-only"
                >
                  Last name
                </label>

                <InputRoot>
                  <Input.InputControl id="lastName" defaultValue="Marques" />
                </InputRoot>
              </div>


              </div>
            </div>
            <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">


              <label htmlFor="photo" className='text-sm font-medium text-zinc-700'>Email address</label>

                <InputRoot>
                  <Input.InputPrefix>
                      <Mail className='h-5 w-5 text-zinc-500'/>
                  </Input.InputPrefix>
                  <Input.InputControl id="email" type='email' defaultValue="hedrylmr@outlook.com"/>
                </InputRoot>
              </div>

              <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">


              <label htmlFor="firstName" className='text-sm font-medium text-zinc-700'>Your photo
              <span className='text-sm font-normal text-zinc-500 block mt-0.5'>This is will be display on your profile.</span>
              </label>
              <FileInput.Root className="flex flex-col gap-5 lg:flex-row lg:items-start">
                    <FileInput.ImagePreview />
                    <FileInput.Trigger />
                    <FileInput.Control />
                  </FileInput.Root>
    
              </div>
              <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">


              <label htmlFor="role" className='text-sm font-medium text-zinc-700'>Role</label>

                <InputRoot>
                  <Input.InputControl id="role" type='email' defaultValue="CTO"/>
                </InputRoot>
              </div>
              <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">


              <label htmlFor="country" className='text-sm font-medium text-zinc-700'>Country</label>
              <Select placeholder="Select a country...">
                  <SelectItem value="br" text="Brazil" />
                  <SelectItem value="us" text="United States" />
              </Select>

                
              </div>
              <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">


              <label htmlFor="timezone" className='text-sm font-medium text-zinc-700'>Timezone</label>
              <Select placeholder="Select a timezone...">
                <SelectItem
                value="utc8"
                text="Pacific Standard Time (UTC-08:00)"
                 />
                <SelectItem value="utc3" text="America São Paulo (UTC-03:00)" />
              </Select>

                
              </div>
              

              <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
              

              <label htmlFor="bio" className='text-sm font-medium text-zinc-700'>Bio
              <span className='text-sm font-normal text-zinc-500 block mt-0.5'>Writea short introduction.</span>
              </label>
              </div>
              <div className="space-y-3">
              <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
                <Select placeholder="" defaultValue="normal">
                  <SelectItem
                    value="normal"
                    defaultChecked
                    text="Normal Text"
                  />
                  <SelectItem value="md" text="Markdown" />
                </Select>

                <div className="flex items-center gap-1">
                <Button type="button" variant="ghost">
                    <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                </Button>
                <Button type="button" variant="ghost">
                    <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                </Button>
                <Button type="button" variant="ghost">
                    <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                </Button>
                <Button type="button" variant="ghost">
                    <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                </Button>
                <Button type="button" variant="ghost">
                    <ListOrdered
                      className="h-4 w-4 text-zinc-500"
                      strokeWidth={3}
                    />
                </Button>
                </div>
              </div>
              <Textarea
                id="bio"
                defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
              />

            </div>
            <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">


              <label htmlFor="projects" className='text-sm font-medium text-zinc-700'>Portfolio projects
              <span className='text-sm font-normal text-zinc-500 block mt-0.5'>Share a few snippets of your work.</span>
              </label>
              <FileInput.Root>
                <FileInput.Trigger />
                <FileInput.FileList />    
                <FileInput.Control multiple />
              </FileInput.Root>
              

               
              </div>

              <div className='flex items-center justify-end gap-2 pt-5'><button type='button' className='rounded-lg px-4 py-2 text-sm font-semibold shadown-sm border border-zinc-300 text-zinc-700 hover:bg-zinc-50'>Cancel</button>
              <button type='submit' form='settings' className='rounded-lg px-4 py-2 text-sm font-semibold shadown-sm bg-violet-600 text-white hover:bg-violet-700'>Save</button></div>
           
          </form>
        </div>
        
      </>
  );
}
