import Head from 'next/head'
import logo from '../public/roberto-cinetto-logo.svg'
import profileImg from '../public/roberto-cinetto-picture.jpeg'
import playingGuitar from '../public/roberto-cinetto-frontend-web-dev.webp'
import Image from 'next/image'
import { ImLinkedin2 } from 'react-icons/im'
import { DevicePhoneMobileIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Roberto Cinetto - Frontend Developer</title>
        <meta
          name="description"
          content="Software developer in Vancouver (CA). I like stuff like React, Vue, Redux and PWA. This is my portfolio website."
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <header className="min-h-screen ">
        <div className="px-10 border-t-4 border-yellow-400 px-6 grid grid-cols-1 xl:grid-cols-4 mx-auto place-content-center min-h-screen">
          <div className="mx-auto col-span-4 xl:col-span-2 rounded-full border-4 border-yellow-400 w-[250px] overflow-hidden mb-10 xl:mb-0 xl:mr-20">
            <Image
              src={profileImg}
              width={200}
              height={200}
              layout="responsive"
              alt="Roberto Cinetto portrait"
            />
          </div>
          <div className="text-center xl:text-left col-span-4 xl:col-span-2 mb-10 xl:mb-0">
            <Image
              src={logo}
              width={400}
              alt="Roberto Cinetto logo"
            />
          </div>
          <div className="text-center col-span-4  mt-5 xl:mt-24">
            <p>Get in touch with me:</p>
            <div className="text-center mt-3 flex justify-center gap-8">
              <a
                href="https://www.linkedin.com/in/robertocinetto/"
                target="_blank"
                rel="noreferrer"
              >
                <ImLinkedin2 className="w-[25px] h-[25px]" />
              </a>
              <a href="tel:+12368869279">
                <DevicePhoneMobileIcon className="w-[25px] h-[25px]" />
              </a>
              <a
                href="mailto:roberto.cinetto@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <EnvelopeIcon className="w-[25px] h-[25px]" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="p-20 bg-stone-800 text-white">
        <div className="md:flex gap-x-5 max-w-7xl mx-auto">
          <div className="md:basis-1/4 ">
            <div className="mx-auto md:mr-0 rounded-full border-4 border-yellow-400 overflow-hidden mb-10 xl:mb-0  w-[150px] xl:w-[200px]">
              <Image
                src={playingGuitar}
                width={200}
                height={200}
                layout="responsive"
                alt="Roberto Cinetto playing guitar"
              />
            </div>
          </div>
          <div className="md:basis-3/4">
            <div>
              <h2 className="inline-block underline-custom ">Something about me</h2>
            </div>
            <div>
              <p>
                Let&apos;s get straight to the point: frontend with <strong>ReactJS</strong>, backend with <strong>NextJS</strong> and <strong>Strapi</strong>.
                This is what I&apos;m using right now as a developer for my clients and my projects. Also, I&apos;m a <strong>WordPress</strong> developer
                (websites/e-commerce/custom templates/plugins).
              </p>
              <p>
                Music: I love it. While I&apos;m working, I always listen to music, and as a guitarist, I love to play it. Before I moved here to Vancouver, I
                used to play in clubs with my brother Nicola (
                <a
                  href="https://www.facebook.com/thecinas"
                  target="_blank"
                  rel="noreferrer"
                >
                  The Cinas
                </a>
                ).
              </p>
              <p>
                I love video games too, but I grow old and there is always less time to play! And obviously, I love the web world: this keeps me learning new
                stuff and be amazed by all the new stuff that is coming out in these last years.
              </p>
              <p>
                I&apos;m a runner and above all I&apos;m a swimmer (I miss it in these crazy times!). But the sports I love to practice are the ones in team.
              </p>
              <p>I&apos;m married to Sharaf and we moved to Vancouver in March 2020.</p>
            </div>
          </div>
        </div>

        <div className="md:flex gap-x-5 max-w-7xl mx-auto mt-20">
          <div className="md:basis-1/4 ">
            <div className="mb-10 xl:mb-0 xl:w-auto text-right ">
              <h2 className="underline-custom">Professional Summary</h2>
            </div>
          </div>
          <div className="md:basis-3/4">
            <div></div>
            <div>
              <p>
                Let&apos;s get straight to the point: frontend with <strong>ReactJS</strong>, backend with <strong>NextJS</strong> and <strong>Strapi</strong>.
                This is what I&apos;m using right now as a developer for my clients and my projects. Also, I&apos;m a <strong>WordPress</strong> developer
                (websites/e-commerce/custom templates/plugins).
              </p>
              <p>
                Music: I love it. While I&apos;m working, I always listen to music, and as a guitarist, I love to play it. Before I moved here to Vancouver, I
                used to play in clubs with my brother Nicola (
                <a
                  href="https://www.facebook.com/thecinas"
                  target="_blank"
                  rel="noreferrer"
                >
                  The Cinas
                </a>
                ).
              </p>
              <p>
                I love video games too, but I grow old and there is always less time to play! And obviously, I love the web world: this keeps me learning new
                stuff and be amazed by all the new stuff that is coming out in these last years.
              </p>
              <p>
                I&apos;m a runner and above all I&apos;m a swimmer (I miss it in these crazy times!). But the sports I love to practice are the ones in team.
              </p>
              <p>I&apos;m married to Sharaf and we moved to Vancouver in March 2020.</p>
            </div>
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  )
}
