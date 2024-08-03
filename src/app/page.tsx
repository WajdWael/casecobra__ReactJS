import MaxWidthWrapper from "@/components/MaxWithWrapper";
import { Check, Star } from "lucide-react";
import Phone from "@/components/Phone";
import { Icons } from "@/components/Icons";
import { Reviews } from "@/components/Reviews";

export default function Home() {
  return (
    <main className="bg-slate-50">
      <section>
        <MaxWidthWrapper classname="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          {/* childerns */}
          <article className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <section className="w-28 absolute left-0 lg:-top-20 ">
                <div className="inset-x-0 absolute bottom-0 bg-gradient-to-t via-slate-50/50 from-slate-50 h-28" />
                {/* "/" to import images form the public folder */}
                <img src="/snake-1.png" className="w-full" alt="casecobra logo, snake" />
              </section>
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                Your Image on a{' '}
                <span className="bg-green-600 px-2 text-white">Custom</span>{' '}
                Phone Case
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                Capture your favorite memories with your own,{' '}
                <span className="font-semibold">one-of-one</span> phone case.
                CaseCobra allows you to protect your memories, not just your phone case.
              </p>

              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <section className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600"/>
                    High-quality, durable material
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600"/>
                    Print guarantee
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600"/>
                    Modern iPhone models supported
                  </li>
                </section>
              </ul>

              <section className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <article className="flex -space-x-4">
                  <img 
                    src="/users/user-1.png"  
                    alt="user image" 
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" 
                  />
                  <img 
                    src="/users/user-2.png"  
                    alt="user image" 
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" 
                  />
                  <img 
                    src="/users/user-3.png"  
                    alt="user image" 
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" 
                  />
                  <img 
                    src="/users/user-4.jpg"  
                    alt="user image" 
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" 
                  />
                  <img 
                    src="/users/user-5.jpg"  
                    alt="user image" 
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100 object-cover" 
                  />
                </article>

                <article className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                  </div>

                  <p>
                    <span className="font-semibold">1.250</span> happy customers
                  </p>
                </article>
              </section>
            </div>
          </article>

          <section className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <article className="relative md:max-w-xl">
              <img 
                src="/your-image.png" 
                alt="Transparent background with 'your image' phrase, and an arrow pointing to an image." 
                className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block" 
              />
              <img 
                src="/line.png" 
                alt="line" 
                className="absolute w-20 -left-6 -bottom-6 select-none" 
              />
              {/* component */}
              <Phone className="w-64" imgSrc='/testimonials/1.jpg' />
            </article>
          </section>
        </MaxWidthWrapper>
      </section>


      {/* Not completed Yet */}
      <section className="bg-slate-100 py-24">
        <MaxWidthWrapper classname="flex flex-col items-center gap-16 sm:gap-32">
          <header className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
            <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
              What our{' '}
              <span className="relative px-2">
                customers{' '} <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-green-500" />
              </span>{' '}
              say
            </h2>
            <img src="/snake-2.png" className="w-24 order-0 lg:order-2" alt="snake logo" />
          </header>

          <section className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:mx-w-none lg:grid-cols-2 gap-y-16">
            <article className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <section className="flex gap-0 5 mb2">
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
              </section>
              <section className="text-lg leading-8">
                <p>
                  "The case feels durable and I even got a compliment on the design. 
                   Had the case for two and a half months now and {' '}
                  <span className="p-0.5 bg-slate-800 text-white">the image is super clear</span>, 
                   on the case I had before, the image started fading 
                   into yellow-ish color after a couple weeks. Love it."
                </p>
              </section>
              <section className="flex gap-4 mt-2">
                <img 
                  src="/users/user-1.png" 
                  alt="user" 
                  className="rounded-full h-12 w-12 object-cover" 
                />
                <header className="flex flex-col">
                  <h5 className="font-semibold">Jonathan</h5>
                  <div className="flex gap-1 5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                    <h5 className="text-sm">Verified Purches</h5>
                  </div>
                </header>
              </section>
            </article>
            <article className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <section className="flex gap-0 5 mb2">
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
              </section>
              <section className="text-lg leading-8">
                <p>
                  "I usually keep my phone together with my keys in my pocket and that 
                  led to some pretty heavy scratchmarks on all of my last phone cases. This one, 
                  besides a barely noticeable scratch on the corner, {' '}
                  <span className="p-0.5 bg-slate-800 text-white">looks brand new after about half a year</span>, 
                   I dig it."
                </p>
              </section>
              <section className="flex gap-4 mt-2">
                <img 
                  src="/users/user-4.jpg" 
                  alt="user" 
                  className="rounded-full h-12 w-12 object-cover" 
                />
                <header className="flex flex-col">
                  <h5 className="font-semibold">Kareem</h5>
                  <div className="flex gap-1 5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                    <h5 className="text-sm">Verified Purches</h5>
                  </div>
                </header>
              </section>
            </article>
          </section>
        </MaxWidthWrapper>

        <section className="pt-16">
          <Reviews />
        </section>



      </section>
    </main>
  )
}