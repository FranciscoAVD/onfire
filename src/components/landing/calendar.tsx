import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils";
import { startOfWeek, addDays, format, lightFormat, getDay } from "date-fns"
const bundles = [
    { lessons: 1, price: 30, discount: 0 },
    { lessons: 5, price: 135, discount: 10 },
    { lessons: 10, price: 270, discount: 10 },
    { lessons: 15, price: 380, discount: 15 },
    { lessons: 20, price: 500, discount: 17 },
]
export default function Calendar() {
    const today = new Date();
    const startOfWeekDate = startOfWeek(today, { weekStartsOn: 1 }); // Set Monday as the start of the week

    const days = Array.from({ length: 6 }, (_, index) => {
        const day = addDays(startOfWeekDate, index);
        return day
    });

    const events = [
        [
            { name: "Salsa Intermedia", time: "6:00 PM" },
            { name: "Salsa Int/Adv", time: "7:30 PM" }
        ],
        [
            { name: "Salsa Basica I", time: "6:00 PM" },
            { name: "Salsa Basica II", time: "7:30 PM" }
        ],
        [
            { name: "Salsa Intermedia", time: "6:00 PM" },
            { name: "Salsa Int/Adv", time: "7:30 PM" }
        ],
        [
            
            { name: "Bachata", time: "7:00 PM" },
            { name: "Shines", time: "8:00 PM" },
        ],
        [
            { name: "Shines", time: "8:00 PM" },
            { name: "Bachata", time: "7:00 PM" },
            
        ],
        [
            { name: "Salsa Basica I", time: "2:00 PM" },
            { name: "Salsa Basica II", time: "3:30 PM" }
        ]
    ];

    return (
        <section className="py-12 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <h2 className="text-5xl text-center font-black text-amber-500">Calendario</h2>
                    <p className="max-w-xl text-center text-lg text-white/70">
                        Ofrecemos clases grupales todos los dias de operación. Para participar en clases nivel <em className="text-orange-500">intermedio o superior</em>, debes tomar una evaluación para mantener la integridad de las mismas.
                    </p>
                </div>
                <ol className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-8">
                    {days.map((day, index) =>
                        <li key={index} className={index === 4 ? "hidden" : ""}>
                            <Card className={cn(`text-white/90 transition-all`, {
                                "bg-gradient-to-b from-orange-500 to-amber-500 border-orange-900 lg:scale-105": today.toLocaleDateString("en-us", {}) === day.toLocaleDateString("en-us", {}),
                                "bg-white/10 border-white/20": today !== day
                            })}>
                                <CardHeader>
                                    <CardTitle className="flex justify-between">
                                        <span>{format(day, "EEEE")}</span>
                                        <span className="text-white/30">{format(day, "d")}</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="">
                                        {events[index].map((e, idx) => (
                                            <li key={idx} className="flex items-center justify-between">
                                                <span className="">{e.name}</span>
                                                <span>{e.time}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </li>
                    )}
                </ol>
                <div className="mt-20 text-white/70">
                    <h3 className="text-3xl font-semibold">Clases Especializadas</h3>
                    <ul className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
                    <Card className=" bg-white/10 border-white/20">
                            <CardHeader>
                                <CardTitle className="flex flex-col">
                                    <span className="text-amber-500 uppercase">Estilo Femenino</span>
                                    <span className="text-lg text-white/90 font-normal">Wednesday, October 23</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul>
                                    <li className="flex justify-between"><span>Nivel Abierto</span><span>6:00 PM</span></li>
                                </ul>
                            </CardContent>
                        </Card>
                        <Card className=" bg-white/10 border-white/20">
                            <CardHeader>
                                <CardTitle className="flex flex-col">
                                    <span className="text-amber-500 uppercase">Juego de manos</span>
                                    <span className="text-lg text-white/90 font-normal">Thursday, October 24</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul>
                                    <li className="flex justify-between"><span>Nivel I</span><span>7:00 PM</span></li>
                                    <li className="flex justify-between"><span>Nivel II</span><span>8:00 PM</span></li>
                                </ul>
                            </CardContent>
                        </Card>
                        
                    </ul>
                </div>
            </div>
        </section>
    )
}