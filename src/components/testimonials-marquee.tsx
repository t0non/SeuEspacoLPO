import { Star, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const testimonials = [
  {
    name: "Ricardo M.",
    initial: "R",
    review: "Salvaram minha mudança. A equipe chegou pontual e tirou toda a tinta do piso sem riscar nada. Recomendo demais!",
    stars: 5,
  },
  {
    name: "Ana Paula S.",
    initial: "A",
    review: "Estava desesperada com o pó de gesso. Em 6 horas meu apartamento estava brilhando. Serviço de luxo.",
    stars: 5,
  },
  {
    name: "Carlos E.",
    initial: "C",
    review: "Melhor investimento do pós-obra. Tentei limpar sozinho e desisti. Eles têm equipamentos que eu nem sabia que existiam.",
    stars: 5,
  },
  {
    name: "Fernanda O.",
    initial: "F",
    review: "Profissionais e discretos. Deixei a chave na portaria e quando voltei parecia outro lugar. Nota 10.",
    stars: 5,
  },
  {
    name: "Roberto A.",
    initial: "R",
    review: "Preço justo pela qualidade. O banheiro ficou impecável, tiraram manchas que achei que eram eternas.",
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
                            <p className="font-bold text-black">{name}</p>
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
            <p className="text-black text-sm">
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
                <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
                    Avaliações reais de quem confiou na Seu Espaço LPO.
                </p>
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
