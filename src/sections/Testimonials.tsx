import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import grainImage from '@/assets/images/grain.jpg'
import { Card } from "@/components/Card";

const testimonials = [
  {
    name: "Alex Turner",
    position: "Marketing Manager @ TechStartups",
    text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: "Olivia Green",
    position: "Head of Design @ GreenLeaf",
    text: "Working with Alex was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: memojiAvatar2,
  },
  {
    name: "Daniel White",
    position: "CEO @ InnovateCo",
    text: "Alex&apos;s ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn&apos;t be happier.",
    avatar: memojiAvatar3,
  },
  {
    name: "Emily Carter",
    position: "Product Manager @ GlobalTech",
    text: "Alex is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We&apos;re already seeing positive feedback from our customers.",
    avatar: memojiAvatar4,
  },
  {
    name: "Michael Brown",
    position: "Director of IT @ MegaCorp",
    text: "Alex&apos;s work on our website has been nothing short of exceptional. He&apos;s a talented developer who is also a great communicator. We highly recommend him.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return <div className="py-1">
    <div className="container">
    <SectionHeader eyebrow="Happy Clients" title="What Clients say about me" description="Description"/>
    <p>Happy Clients</p>
    <h2>What Clients say about me</h2>
    <p>Don&apos;t just take my word for it. See what my clients have to say about my work.</p>
    <div>
      {testimonials.map(testimonial => (
        <Card key={testimonial.name}><div className="absolute inset-0 opacity-5 -z-10" style={{
            backgroundImage: `url(${grainImage.src})`
          }}></div>
            <Image src={testimonial.avatar} alt={testimonial.name} />
            <div>{testimonial.name} </div>
            <div>{testimonial.position} </div>
            <p>{testimonial.text}</p>
            </Card>
      ))}
    </div>
    </div>
    </div>;
};
