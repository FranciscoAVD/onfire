import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image';
import bg from "../../../public/assets/dancing-background.jpg"
import { cn } from '@/lib/utils';
import { CheckIcon } from 'lucide-react';
export default function Why() {
    return (
        <section className='relative min-h-[calc(100vh-7rem)] py-10'>
            <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,white)] overflow-hidden"><Image src={bg} alt="" className='h-screen lg:h-auto lg:w-full object-cover lg:object-contain opacity-20' /></div>
            <div className='relative container mx-auto px-4'>
                <h2 className='text-3xl lg:text-5xl font-black text-white/90 text-center'>Por que<br /> <span className='text-5xl bg-clip-text bg-gradient-to-b from-orange-600 to-amber-500 text-transparent'>On Fire Dance Studio</span></h2>
                <div className='grid lg:grid-cols-2 gap-4 mt-20'>
                    <MyCard title="Clases Grupales" content={["Salsa Basica", "Salsa Intermedia", "Salsa Int/Adv", "Bachata Tradicional"]} className='lg:ml-auto' />
                    <MyCard title="Clases Especializadas" content={["Salsa: Estilo Femenino", "Salsa: Estilo Masculino", "Juego de Manos", "Giros"]} className='lg:mr-auto' />
                    <MyCard title="Eventos" content={["Viajes a Congresos", "Salidas en grupo", "Sociales"]} className='col-span-full lg:mx-auto' />
                </div>
            </div>


        </section>
    )
}

function MyCard({ title, content, className }: {
    title: string;
    content: string[];
    className?: string;
}) {
    return (
        <Card className={cn(`lg:w-[30rem] xl:w-[32rem] bg-white/10 border-2 border-white/20 backdrop-blur-md ${className}`)}>
            <CardHeader>
                <CardTitle className='text-amber-500'>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className='grid md:grid-cols-2 gap-2 text-white/70 text-lg'>
                    {content.map(s => (<li key={s} className='flex items-center gap-x-1'><CheckIcon className='text-orange-500 size-6' /> <span>{s}</span></li>))}
                </ul>
            </CardContent>
        </Card>
    )
}