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
          <div className="mx-auto col-span-4 xl:col-span-2 rounded-full border-4 border-yellow-400 w-[200px] overflow-hidden mb-10 xl:mb-0 xl:mr-20">
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

      <main className="p-10 bg-stone-800 text-white">
        <div className="md:flex gap-x-5 max-w-5xl mx-auto">
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
              <h3 className="inline-block underline-custom ">Something about me</h3>
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

        <div className="md:flex gap-x-5 max-w-5xl mx-auto mt-20">
          <div className="md:basis-1/4 relative">
            <div className="mb-10 xl:mb-0 xl:w-auto text-right ">
              <h3 className="underline-custom text-left md:text-right md:after-border">Professional Summary</h3>
            </div>
          </div>
          <div className="md:basis-3/4">
            <div>
              <p>
                Javascript has been my main programming language for two years and I&apos;m deeply increasing my knowledge of modern frameworks like
                <strong>React</strong> and <strong>Vue</strong> and the world around these technologies.
              </p>
              <p>
                Other than that, I&apos;m also a <strong>WordPress</strong> developer (plugin development, standard and e-commerce websites with prepackaged or
                custom templates). Experienced also on
                <strong>WordPress REST API</strong> with React as front end framework.
              </p>
              <p>
                I&apos;ve been able to set up extremely performing sites by hacking with cache and custom settings at the server level. From here I can develop
                a fully custom web marketing campaign aim to accomplish the business objective.
              </p>
              <p>
                As a web developer, I love to work and learn new technologies,Agile software development mostly in team (big fan of
                <strong>Agile software development</strong>).
              </p>
            </div>
          </div>
        </div>

        <div className="md:flex gap-x-5 max-w-5xl mx-auto mt-20">
          <div className="md:basis-1/4 relative">
            <div className="mb-10 xl:mb-0 xl:w-auto text-right ">
              <h3 className="underline-custom text-left md:text-right md:after-border">Main Skills</h3>
            </div>
          </div>
          <div className="md:basis-3/4 flex gap-5">
            <div className="flex-1">
              <ul>
                <li>
                  Javascript dev with <strong>VueJs</strong> and
                  <strong>React</strong> framework
                </li>
                <li>CSS libraries (Bootstrap 3/4, Material-UI, Foundation) and CSS organization style (SMACSS, BEM)</li>
                <li>WordPress dev for websites and e-commerce</li>
              </ul>
            </div>
            <div className="flex-1">
              <ul>
                <li>Complete web marketing campaigns planning</li>
                <li>
                  Google Ads and Merchant Center, Google Analytics, Enhanced Ecommerce, Google Tag Manager, Google Search Console, Pixel Facebook and Facebook
                  Ads, G Suite, Google Ad Manager
                </li>
                <li>Team management</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="md:flex gap-x-5 max-w-5xl mx-auto mt-20">
          <div className="md:basis-1/4 relative">
            <div className="mb-10 xl:mb-0 xl:w-auto text-right ">
              <h3 className="underline-custom text-left md:text-right md:after-border">Sub Skills</h3>
              <p className="pr-5 text-stone-400 text-left md:text-right">
                An unordered list of skills, frameworks, software/applications I&apos;ve used or experienced
              </p>
            </div>
          </div>
          <div className="md:basis-3/4">
            <p>
              AJAX, HAML/SLIM, SASS, XML, Capistrano, GIT, jQuery, Responsive Design, Adobe: Photoshop/Illustrator/InDesign/Premiere/After Effects, Cinema 4D,
              Mac OS X, Linux, Windows, SQL, Redis, MongoDB, ZSH, Visual Studio Code, UNIX shell, Chrome Dev Tools, Xcode, cross browser compatibility, Figma,
              Adobe XD.
            </p>
          </div>
        </div>

        <div className="md:flex gap-x-5 max-w-5xl mx-auto mt-20">
          <div className="md:basis-1/4 relative">
            <div className="mb-10 xl:mb-0 xl:w-auto text-right ">
              <h3 className="underline-custom text-left md:text-right md:after-border">Past Jobs</h3>
            </div>
          </div>
          <div className="md:basis-3/4">
            <h4>Freelance</h4>
            <span>2013/03 - Present</span>
            <ul>
              <li>Javascript development with Vue and React</li>
              <li>WordPress development with GIT/Capistrano deploy system</li>
              <li>Used programming capabilities in PHP, SQL and JavaScript and other libraries as needed</li>
              <li>Converted mockups into HTML, CSS and JavaScript</li>
              <li>Hands-on experience using UNIX and Apache web servers</li>
              <li>
                Designed, implemented and monitored web pages and sites for continuous improvement Improved methods for measurement, documentation and work flow
                management
              </li>
              <li>Created eye catching and functional digital design concepts across various platforms to strengthen company brand and identity</li>
              <li>Tested websites and performed troubleshooting prior to deployment</li>
              <li>
                SEO on site (structured data/schema.org) and consultant for copywriters on optimization of text Social Media: from the simple act of creating a
                page to the full management of a brand/corporate in social
              </li>
              <li>
                Google Tag Manager certified: I use this powerful gear to monitor any type of websites/apps. In conjunction with Google Analytics, Google Ads
                and Facebook Pixel i&apos;m able to report every type of events inside the website
              </li>
              <li>Google Search Console of monitoring site position on Google results pages</li>
              <li>G Suite setup for professional email platform</li>
            </ul>

            <h4 className="mt-10">Founder Co Owner at Megiston Srl</h4>
            <span>01/2018 - 12/2019</span>
            <h5>Albignasego (PD), Italy</h5>
            <ul>
              <li>Frontend dev on Ruby on Rails projects</li>
              <li>WordPress development with GIT/Capistrano deployment system</li>
              <li>Server setup and management for websites hosting</li>
              <li>Account manager and team manager</li>
              <li>Web marketing campaigns planning</li>
            </ul>

            <h4 className="mt-10">Web Marketing Manager at Megiston Associati</h4>
            <span>12/2013 - 12/2017</span>
            <h5>Albignasego (PD), Italy</h5>
            <ul>
              <li>WordPress development with GIT/Capistrano deployment system</li>
              <li>Server setup and management for websites hosting</li>
              <li>Account manager and team manager</li>
              <li>Web marketing campaigns planning</li>
            </ul>

            <h4 className="mt-10">Web Manager at Reproduction (Guglie Srl)</h4>
            <span>12/2013 - 12/2017</span>
            <h5>Padua, Italy</h5>
            <ul>
              <li>WordPress development with GIT/Capistrano deployment system</li>
              <li>Server setup and management for websites hosting</li>
              <li>Account manager and team manager</li>
              <li>Web marketing campaigns planning</li>
            </ul>
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  )
}
