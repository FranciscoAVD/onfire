const people = [
    {
        name: 'Francisco Victoriano',
        role: 'Director',
        imageUrl:
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    },
    {
        name: 'Francisco Victoriano1',
        role: 'Director',
        imageUrl:
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    },
    {
        name: 'Francisco Victoriano2',
        role: 'Director',
        imageUrl:
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    },
    {
        name: 'Francisco Victoriano3',
        role: 'Director',
        imageUrl:
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    },
    // More people...
]

export default function Staff() {
    return (
        <div className="py-24 sm:py-32">
            <div className="mx-auto container px-6 lg:px-8">
                <div className="text-center mx-auto max-w-2xl">
                    <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
                        Nuestro equipo
                    </h2>
                    <p className="mt-4 text-lg text-white/70 font-medium">
                        Tenemos un equipo dinamico y con amplio conocimiento y experiencia para brindarte la mejor calidad de servicio
                    </p>
                </div>
                <ul
                    role="list"
                    className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 mt-20"
                >
                    {people.map((person) => (
                        <li key={person.name} className="flex flex-col lg:flex-row items-center gap-4  rounded-2xl bg-white/10 p-4">
                            <img alt="" src={person.imageUrl} className="size-28 rounded-full" />
                            <div className="text-center lg:text-left">
                                <h3 className="text-xl font-semibold text-white/90">{person.name}</h3>
                                <p className="leading-6 font-semibold text-amber-500">{person.role}</p>
                                <p className="text-white/70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dolores ut eius quam libero tenetur.</p>
                            </div>

                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
