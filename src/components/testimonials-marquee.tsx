import { Star, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const testimonials = [
  {
    name: "Eng. Marcos T.",
    initial: "M",
    review: "Serviço técnico de altíssimo nível. Entregaram a limpeza final de um escritório de 400m² em tempo recorde para a inauguração. Nota fiscal e documentação tudo ok.",
    stars: 5,
  },
  {
    name: "Dra. Patrícia K.",
    initial: "P",
    review: "Como arquiteta, sou muito exigente com os acabamentos. A equipe da LPO é a única que confio para entregar as chaves aos meus clientes. Perfeccionismo puro.",
    stars: 5,
  },
  {
    name: "André L. (Facilities)",
    initial: "A",
    review: "Excelente atendimento corporativo. Cumprem rigorosamente as normas de segurança e o cronograma. Essencial para grandes obras comerciais.",
    stars: 5,
  },
  {
    name: "Juliana R.",
    initial: "J",
    review: "Estava desesperada com o pó fino nos armários novos. Eles limparam cada cantinho com um cuidado impressionante. Meu apartamento ficou impecável.",
    stars: 5,
  },
  {
    name: "Renato G.",
    initial: "R",
    review: "Precisávamos abrir a loja em 24h após a reforma. A mobilização da equipe foi fantástica. Resolveram tudo sem que eu tivesse que me preocupar com nada.",
    stars: 5,
  },
];

const avatarColors = [
    "bg-emerald-500",
    "bg-blue-500",
    "bg-orange-500",
    "bg-purple-500",
    "bg-pink-500"
]

const TestimonialCard = ({ name, initial, review, stars, color } : { name: string, initial: string, review: string, stars: number, color: string }) => {
    return (
        <div className="bg-white rounded-xl shadow-md p-6 w-80 md:w-96 mx-4 flex-shrink-0">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div className={cn("size-12 rounded-full flex items-center justify-center text-white font-bold text-xl", color)}>
                        {initial}
                    </div>
                    <div>
                        <div className="flex items-center gap-1.5">
                            <p className="font-bold text-slate-800">{name}</p>
                            <CheckCircle className="size-4 text-emerald-500 fill-emerald-100" />
                        </div>
                         <div className="flex">
                            {Array.from({ length: stars }).map((_, i) => (
                                <Star key={i} className="size-4 text-yellow-400 fill-yellow-400" />
                            ))}
                        </div>
                    </div>
                </div>
                <Image src="https://files.catbox.moe/hhs2e9.png" alt="Google Review" width={24} height={24} className="size-6" />
            </div>
            <p className="text-slate-600 text-sm">
                "{review}"
            </p>
        </div>
    )
}

export default function TestimonialsMarquee() {
    const extendedTestimonials = [...testimonials, ...testimonials];

    return (
        <section id="testimonials-marquee" className="py-20 md:py-28 bg-primary relative overflow-hidden">
             <div className="relative z-10 container mx-auto px-6 text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-white mb-4">
                    O que dizem nossos clientes
                </h2>
            </div>
             <div
                className="group relative w-full overflow-hidden"
            >
                <div className="flex w-max animate-marquee-scroll hover:[animation-play-state:paused]">
                    {extendedTestimonials.map((testimonial, index) => (
                        <TestimonialCard 
                            key={`testimonial-${index}`}
                            name={testimonial.name}
                            initial={testimonial.initial}
                            review={testimonial.review}
                            stars={testimonial.stars}
                            color={avatarColors[index % avatarColors.length]}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
